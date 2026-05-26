# Setup Instructions

## Installation

If you encounter npm permission errors during installation, run:

```bash
sudo chown -R $(whoami) ~/.npm
```

Then install dependencies:

```bash
npm install
```

## First Run

After installation, start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Next Steps

1. **Add your profile image**: Place it in `public/profile.jpg` and uncomment the Image component in `components/Hero.tsx`

2. **Update project data**: Edit `data/projects.ts` with your actual projects

3. **Add project images**: Place images in `public/` and update the `image` field in `data/projects.ts`

4. **Update contact email**: Edit the email in `components/Footer.tsx`

5. **Customize colors**: Adjust the color palette in `tailwind.config.ts` if needed

## Responsive Breakpoints

The site is designed with these breakpoints:
- **Mobile**: 375px (base, mobile-first)
- **Tablet**: 768px (sm:)
- **Desktop**: 1024px (lg:) and 1440px+

On mobile, project cards stack vertically with simplified fade-in animations.
On desktop (lg:), the arc animations are fully active.
