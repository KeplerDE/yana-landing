# High-Conversion Landing Page with Next.js

A highly customizable, conversion-focused landing page built with Next.js, TailwindCSS, and TypeScript. This template includes A/B testing capabilities, analytics tracking, and a build system for easy customization.

## Features

- 📊 **Built-in A/B Testing**: Test different variants of components to optimize conversion rates
- 📱 **Fully Responsive**: Looks great on all devices - mobile, tablet, and desktop
- 🔍 **SEO Optimized**: Proper metadata, OpenGraph tags, and semantic HTML
- 📈 **Analytics Ready**: Integrated tracking for user events and conversions
- 🎨 **Easily Customizable**: Modify colors, content, and styles without touching code
- 🚀 **Fast Loading**: Optimized for performance
- 🧩 **Modular Components**: Reusable components for easy maintenance
- 🔧 **Build System**: Compile custom versions with a simple command

## Components

The landing page includes these key sections:

- Navigation with smooth scrolling
- Hero section (2 variants)
- Features grid
- Testimonials (2 variants)
- Pricing section with toggle for monthly/annual billing
- FAQ accordion
- CTA (Call to Action) section (2 variants)
- Footer with customizable links

## Getting Started

### Installation

```bash
# Clone the repository (or download it)
git clone https://github.com/yourusername/high-conversion-landing.git
cd high-conversion-landing

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

### Customization

You can customize the landing page in two ways:

1. **Edit the components directly**: Modify the code in `src/components/landing/` to change the design and content.

2. **Use the build script**: Generate a customized version without touching code:

```bash
npm run build:landing -- --brand "Your Brand" --primary-color "#FF5500" --output "./dist"
```

### Build Script Options

The build script supports the following options:

| Option | Description | Default |
|--------|-------------|---------|
| `--brand` | Company or product name | "YourBrand" |
| `--title` | Main headline | "Transform Your Business" |
| `--description` | Main description | "The ultimate platform..." |
| `--primary-color` | Primary color (hex) | "#3B82F6" |
| `--accent-color` | Accent color (hex) | "#F59E0B" |
| `--output` | Output directory | "./dist" |
| `--hero-variant` | Hero section variant | "variant-a" |
| `--testimonials-variant` | Testimonials variant | "carousel" |
| `--cta-variant` | CTA section variant | "standard" |
| `--logo` | Path to custom logo | null |
| `--ga-tracking-id` | Google Analytics ID | null |

## A/B Testing

The landing page includes built-in A/B testing for key components:

- Hero section: Tests between a standard layout and an email capture form
- Testimonials: Tests between a card layout and a carousel
- Pricing: Tests between monthly and annual pricing prominence
- CTA section: Tests between a standard button and an email capture form

To track conversions, use the included analytics utility:

```javascript
import { trackEvent } from '@/lib/analytics';

// Inside your component
const handleClick = () => {
  trackEvent('cta_click', { buttonId: 'hero-cta' });
  // rest of your code
};
```

## Deployment

Deploy the landing page to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/yourusername/high-conversion-landing)

Or build a custom version and deploy the output directory:

```bash
npm run build:landing -- --brand "Your Brand" --primary-color "#FF5500"
```

## License

MIT
