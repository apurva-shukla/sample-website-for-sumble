# Sumble Website

A modern Next.js website for Sumble - The world's best B2B data source.

## Features

- **Hero Section**: Logo on the left, compelling messaging on the right with "Sign In / See Yourself" CTA
- **Features Section**: Showcasing key benefits of the platform
- **About Section**: Information about Sumble and key statistics
- **Case Studies Section**: Success stories from customers
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
sumble-website/
├── app/
│   ├── page.tsx       # Main landing page with all sections
│   ├── layout.tsx     # Root layout
│   └── globals.css    # Global styles
├── public/            # Static assets
└── package.json       # Dependencies
```

## Sections Overview

### 1. Hero Section (Home)
- Logo displayed on the left
- Main headline: "The world's best B2B data source"
- Subtitle with key messaging
- Primary CTA: "Sign In / See Yourself" button

### 2. Features Section
- Three feature cards highlighting:
  - Comprehensive Data
  - Real-Time Updates
  - Easy Integration

### 3. About Section
- Detailed information about Sumble
- Statistics showcase (2.6M+ organizations, 898K+ contacts)
- Company mission and values

### 4. Case Studies Section
- Three customer success stories with metrics

## Customization

### Colors
The website uses Sumble's brand colors:
- Primary: Green (`green-600`, `green-700`)
- Neutral: Slate shades for text and backgrounds

### Adding More Sections
Add new sections to `app/page.tsx` following the existing pattern:

```tsx
<section id="new-section" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Your content here */}
  </div>
</section>
```

## Extending the Project

Build upon this foundation:

1. **Add Components**: Create reusable components in `app/components/`
2. **Add Pages**: Create new routes in `app/` directory
3. **Add API Routes**: Create API endpoints in `app/api/`
4. **Connect Backend**: Integrate with your existing Sumble API
5. **Add Authentication**: Implement sign-in functionality

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or use other platforms like AWS Amplify, Netlify, Railway, or DigitalOcean.

## Best Practices Implemented

✅ Server Components for better performance
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Responsive design
✅ Semantic HTML
✅ SEO-friendly structure
✅ Modern Next.js App Router

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
