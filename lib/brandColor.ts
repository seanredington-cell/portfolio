"use client";

import React from "react";

/**
 * brandColor.ts
 *
 * Utilities for making project brand colours accessible on both light and dark backgrounds.
 *
 * REVERT: To undo dark-mode lightening, replace every `useBrandColor(x)` call with just `x`
 * and remove imports of this file. The original raw hex values are untouched in projects.ts.
 *
 * Strategy:
 *   - Light mode: use the original hex colour as-is
 *   - Dark mode:  convert to HSL, clamp lightness to a minimum of 65%, return as hex
 *     This keeps the hue/saturation (brand feel) but ensures text is readable on dark backgrounds.
 */

/** Convert a hex colour string to [h (0-360), s (0-100), l (0-100)] */
function hexToHsl(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return [0, 0, Math.round(l * 100)];

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/** Convert HSL back to a hex string */
function hslToHex(h: number, s: number, l: number): string {
  const sl = s / 100;
  const ll = l / 100;

  const a = sl * Math.min(ll, 1 - ll);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = ll - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Given a brand hex colour, return a lightened version safe for dark backgrounds.
 * Lightness is raised to at least 65%, saturation is reduced slightly to avoid garish results.
 */
export function lightenForDark(hex: string): string {
  try {
    const [h, s, l] = hexToHsl(hex);
    const newL = Math.max(l, 65);
    // Desaturate a little when we're pushing lightness up, to keep it natural
    const newS = l < 45 ? Math.min(s, 75) : s;
    return hslToHex(h, newS, newL);
  } catch {
    return hex;
  }
}

/**
 * Hook: returns the brand colour appropriate for the current colour scheme.
 * In light mode → original hex. In dark mode → lightened hex.
 */
export function useBrandColor(hex: string): string {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    const check = () => setIsDark(root.classList.contains("dark"));
    check();

    // Watch for class changes (theme toggle)
    const observer = new MutationObserver(check);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark ? lightenForDark(hex) : hex;
}
