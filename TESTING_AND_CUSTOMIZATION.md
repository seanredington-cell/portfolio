# Testing and Customization Guide

## 🚀 Quick Start - Testing Your Portfolio

### Step 1: Install Dependencies

If you encounter permission errors, try one of these solutions:

**Option A: Fix npm permissions (recommended)**
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

**Option B: Use yarn instead**
```bash
yarn install
```

**Option C: Use npm with cache fix**
```bash
npm install --cache ~/.npm --prefer-offline --no-audit
```

### Step 2: Start Development Server

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Test Responsive Design

Open your browser's developer tools and test at these breakpoints:
- **375px** - Mobile (cards stack vertically, fade-in animations)
- **768px** - Tablet (sm: breakpoint)
- **1440px** - Desktop (lg: breakpoint, full arc animations)

## ✏️ Making Changes

### 1. Update Your Personal Information

**Hero Section** (`components/Hero.tsx`):
- Name, tagline, and bio are already set
- To add your profile image:
  1. Place image in `public/profile.jpg`
  2. Uncomment lines 105-111 in `components/Hero.tsx`
  3. Adjust the `src` path if needed

**Footer** (`components/Footer.tsx`):
- Line 19: Update the email address
```tsx
<a href="mailto:your.actual.email@example.com">
```

### 2. Add Your Projects

Edit `data/projects.ts`:

```typescript
{
  id: "project-1",
  name: "Your Actual Project Name",
  description: "Your project description here...",
  image: "/projects/project-1.jpg", // Optional - add image path
  imagePlaceholder: "Project 1 Image", // Shown if no image
}
```

**To add project images:**
1. Create `public/projects/` folder
2. Add your images (e.g., `project-1.jpg`)
3. Update the `image` field in `data/projects.ts`
4. Uncomment the Image component in `components/Projects.tsx` (lines 105-112 for mobile, 147-154 for desktop)

### 3. Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#FAF9F6", // Your background color
  accent: {
    earth: "#8B7355",    // Muted earthy brown
    warm: "#C9A96B",     // Warm muted gold
  },
}
```

### 4. Adjust Animations

**Hero Animation Speed** (`components/Hero.tsx`):
- Line 22: `duration: 0.8` - Change to speed up/slow down
- Line 24: `staggerChildren: 0.2` - Delay between elements

**Project Arc Animations** (`components/Projects.tsx`):
- Lines 73-100: Adjust arc curves by modifying the transform values
- Line 62: `offset: ["start end", "end center"]` - When animation triggers
- To make arcs more/less pronounced, adjust the `80` values in `arcCurve` calculations

### 5. Change Typography

**Font Sizes** - Already responsive, but you can adjust:
- Hero name: Line 54 in `components/Hero.tsx`
- Project titles: Lines 165 (mobile) and 211 (desktop) in `components/Projects.tsx`

**Font Family** - Edit `app/layout.tsx`:
```tsx
import { Inter } from "next/font/google";
// Change to: Playfair, Lora, etc.
```

### 6. Modify Layout Spacing

**Whitespace** - Adjust padding/margins:
- Hero section: `components/Hero.tsx` line 42
- Projects section: `components/Projects.tsx` line 23
- Footer: `components/Footer.tsx` line 11

## 🔍 Testing Checklist

- [ ] Site loads without errors
- [ ] Hero section animates on page load
- [ ] Projects section shows all 5 projects
- [ ] Scroll animations work on desktop (arc motion)
- [ ] Mobile layout stacks correctly (375px)
- [ ] Tablet layout looks good (768px)
- [ ] Desktop layout shows side-by-side cards (1440px)
- [ ] Footer displays correctly
- [ ] All text is readable
- [ ] Colors match your aesthetic

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Animations not working?**
- Check browser console for errors
- Ensure Framer Motion is installed: `npm list framer-motion`
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

**Styles not updating?**
- Restart dev server
- Clear browser cache
- Check Tailwind is processing: look for `@tailwind` in `globals.css`

## 📝 Common Customizations

### Add a new section
1. Create component in `components/NewSection.tsx`
2. Import and add to `app/page.tsx`
3. Style with Tailwind classes

### Change project card layout
- Edit `components/Projects.tsx`
- Mobile layout: lines 94-129
- Desktop layout: lines 132-176

### Add links to projects
In `data/projects.ts`, add:
```typescript
{
  // ... existing fields
  link?: string;
  linkText?: string;
}
```
Then render in `components/Projects.tsx`:
```tsx
{project.link && (
  <a href={project.link} className="text-accent-earth hover:underline">
    {project.linkText || "View Project"}
  </a>
)}
```

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-reload in browser (no refresh needed)
2. **Component Isolation**: Each component is self-contained - easy to modify
3. **Tailwind IntelliSense**: Install VS Code extension for autocomplete
4. **Framer Motion Docs**: Check [framer.com/motion](https://www.framer.com/motion) for animation ideas
5. **Responsive Testing**: Use browser dev tools device emulator

## 🚢 Next Steps After Testing

1. Replace placeholder content with your actual projects
2. Add real images
3. Update contact information
4. Test on real devices
5. Deploy to Vercel (recommended for Next.js):
   ```bash
   npm install -g vercel
   vercel
   ```

Happy customizing! 🎨
