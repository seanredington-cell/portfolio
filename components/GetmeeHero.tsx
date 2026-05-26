"use client";
import { motion } from "framer-motion";

export default function GetmeeHero({ background, foreground, cards, name }: {
  background: string;
  foreground: string;
  cards: Array<{ src: string; position: string }>;
  name: string;
}) {
  return (
    // Fill the parent, centre the inner composition
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/*
        Inner box always uses the same 4:5 portrait ratio that the desktop card uses.
        This means the % positions are always calculated against the same box,
        so the composition looks identical at every screen size — it just scales down.
      */}
      <div style={{ position: 'relative', aspectRatio: '4 / 5', height: '100%', maxWidth: '100%' }}>

        {/* Background blob/person */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={background} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />

        {/* Card 1 — Interview Score, top right */}
        <div style={{ position: 'absolute', top: '2%', left: '54%', width: '48%', zIndex: 10 }}>
          <motion.img src={cards[0].src} alt="Card 1" style={{ width: '100%', height: 'auto', display: 'block' }}
            animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} />
        </div>

        {/* Card 2 — Job Offer, middle right */}
        <div style={{ position: 'absolute', top: '53%', left: '57%', width: '48%', zIndex: 10, transform: 'rotate(-3deg)' }}>
          <motion.img src={cards[1].src} alt="Card 2" style={{ width: '100%', height: 'auto', display: 'block' }}
            animate={{ y: [0, 8, 0] }} transition={{ duration: 4.0, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
        </div>

        {/* Card 3 — Journey Complete, bottom right */}
        <div style={{ position: 'absolute', top: '74%', left: '54%', width: '48%', zIndex: 10 }}>
          <motion.img src={cards[2].src} alt="Card 3" style={{ width: '100%', height: 'auto', display: 'block' }}
            animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }} />
        </div>

        {/* Phone — left side */}
        <div style={{ position: 'absolute', left: '-9%', top: '50%', transform: 'translateY(-50%)', height: '95%', zIndex: 20 }}>
          <motion.img src={foreground} alt={name} style={{ height: '100%', width: 'auto', display: 'block' }}
            animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
        </div>

      </div>
    </div>
  );
}
