# Seán Redington - UX Portfolio

A personal UX portfolio website built with Next.js and Framer Motion, featuring smooth scroll-triggered animations and a warm, minimal design aesthetic.

## Features

- **Hero Section**: Full viewport height with subtle entrance animations (fade + upward drift)
- **Projects Section**: Scroll-triggered project cards with organic arc animations that converge like gears meeting
- **Responsive Design**: Mobile-first approach with breakpoints at 375px, 768px, and 1440px
- **Smooth Animations**: Powered by Framer Motion with custom easing and arc path calculations

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Framer Motion** (animations)
- **Tailwind CSS** (styling)
- **React 18**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── Projects.tsx        # Projects section with arc animations
│   └── Footer.tsx          # Footer component
└── data/
    └── projects.ts         # Project data (replace with your projects)
```

## Customization

### Adding Your Projects

Edit `data/projects.ts` to add your actual project information:

```typescript
{
  id: "project-1",
  name: "Your Project Name",
  description: "Your project description",
  image: "/path/to/image.jpg", // Optional
  imagePlaceholder: "Project Image",
}
```

### Adding Your Profile Image

1. Add your image to the `public` folder
2. Uncomment the Image component in `components/Hero.tsx`
3. Update the `src` path

### Updating Contact Email

Edit the email in `components/Footer.tsx`:

```tsx
<a href="mailto:your.email@example.com">
```

### Color Customization

Edit `tailwind.config.ts` to adjust the color palette:

```typescript
colors: {
  background: "#FAF9F6", // Warm off-white
  accent: {
    earth: "#8B7355",    // Muted earthy brown
    warm: "#C9A96B",     // Warm muted gold
  },
}
```

## Animation Details

The project cards feature custom arc animations that create a "gears meeting" effect:

- **Desktop**: Image sweeps in from the left on a curved path, text sweeps in from the right on a mirrored curve
- **Mobile**: Simplified to clean fade-in animations for better performance and UX
- Animations are driven by scroll position using Framer Motion's `useScroll` and `useTransform`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and personal.
