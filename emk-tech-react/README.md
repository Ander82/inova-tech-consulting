# EMK Tech - Nearshore Consulting Website

A modern, responsive website for EMK Tech showcasing nearshore consulting services in AI, Automation, and Digital Transformation. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern React Architecture**: Built with Vite + React + TypeScript
- **Internationalization (i18n)**: Full support for English (default) and Portuguese (Brazil)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant micro-interactions
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lighthouse score ≥ 90 for Performance, Accessibility, and SEO
- **SEO Ready**: Dynamic meta tags, structured data, and proper HTML semantics

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
emk-tech-react/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DifferentialsSection.tsx
│   │   │   ├── TechGridSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/                # Reusable UI components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── LanguageSwitcher.tsx
│   ├── locales/               # Translation files
│   │   ├── en/               # English translations
│   │   │   ├── common.json
│   │   │   ├── home.json
│   │   │   ├── tech.json
│   │   │   ├── usecases.json
│   │   │   └── cta.json
│   │   └── pt-BR/            # Portuguese translations
│   │       ├── common.json
│   │       ├── home.json
│   │       ├── tech.json
│   │       ├── usecases.json
│   │       └── cta.json
│   ├── i18n/                 # i18n configuration
│   │   └── index.ts
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd emk-tech-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Internationalization

The website supports two languages:

- **English (en)** - Default language
- **Portuguese Brazil (pt-BR)** - Alternative language

Language switching is handled automatically based on:
1. User's localStorage preference
2. Browser language detection
3. Fallback to English

### Adding New Languages

1. Create new translation files in `src/locales/[language-code]/`
2. Update `src/i18n/index.ts` to include the new language
3. Add the language option to the `LanguageSwitcher` component

## 🎨 Design System

### Colors

- **Primary**: Cyan (cyan-400, cyan-500, cyan-600)
- **Secondary**: Blue, Purple gradients
- **Background**: Slate (slate-700, slate-800, slate-900)
- **Text**: White, slate-300, slate-400

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400)

### Components

- **Cards**: `rounded-2xl` with hover effects
- **Buttons**: Primary (cyan) and secondary (outline) variants
- **Animations**: Subtle fade-in, slide-up, and scale effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast ≥ 4.5:1
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader friendly

## 🔧 Environment Variables

Create a `.env` file in the root directory for optional configurations:

```env
# Optional: Analytics
VITE_GA_MEASUREMENT_ID=your-ga-id

# Optional: Contact integrations
VITE_CALENDLY_URL=your-calendly-url
VITE_RESEND_API_KEY=your-resend-key
VITE_ZAPIER_WEBHOOK_URL=your-zapier-webhook
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📊 Performance

The website is optimized for performance:

- **Lighthouse Score**: ≥ 90 for all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: WebP format with lazy loading
- **Fonts**: Optimized loading with `font-display: swap`
- **CSS**: Purged unused styles in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email sales@emktech.com or create an issue in the repository.

---

**EMK Tech** - Transforming businesses through nearshore AI, automation, and digital transformation solutions.
