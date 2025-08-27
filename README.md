# TechFlow - Professional IT Solutions Website

A modern, responsive website for TechFlow IT solutions company built with React, TypeScript, and Tailwind CSS. Features dynamic content management, dark/light theme switching, and enterprise-grade design components.

![TechFlow Website](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=TechFlow+Website)

## ✨ Features

### Core Features
- **🎨 Modern Design**: Clean, professional design with glassmorphism effects
- **🌙 Dark/Light Theme**: Seamless theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Fast loading with code splitting and lazy loading
- **🔧 Dynamic Content**: Easy content management through structured data contexts
- **🎭 Smooth Animations**: Engaging animations and transitions

### Sections
- **Hero Section**: Eye-catching landing with animated statistics
- **About Us**: Company mission, vision, values, and achievements
- **Services**: Comprehensive service offerings with detailed features
- **Portfolio**: Showcase of completed projects with case studies
- **Leadership Team**: Executive profiles with achievements and social links
- **Team Members**: Development team showcase
- **Testimonials**: Client feedback and ratings
- **News & Blog**: Latest company updates and industry insights
- **Careers**: Job listings with integrated application system
- **Contact**: Multiple contact methods with business hours

### Technical Features
- **TypeScript**: Full type safety and enhanced developer experience
- **Component Library**: Shadcn/ui components for consistent design
- **Form Handling**: Multi-step job application forms with validation
- **Image Optimization**: Responsive images with fallback handling
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Accessibility**: WCAG compliant with keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Static type checking and enhanced IDE support
- **Tailwind CSS v4**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library

### UI Components
- **Shadcn/ui**: High-quality, accessible component library
- **Radix UI**: Unstyled, accessible UI primitives
- **Motion**: Smooth animations and transitions

### Development Tools
- **ESLint**: Code linting and quality checks
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality assurance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/techflow-website.git
   cd techflow-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components (Shadcn)
│   ├── forms/              # Form-related components
│   ├── sections/           # Page sections
│   ├── layout/             # Layout components (Header, Footer, etc.)
│   └── common/             # Shared/common components
├── contexts/               # React contexts for state management
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configurations
├── types/                  # TypeScript type definitions
├── data/                   # Static data and mock data
├── assets/                 # Static assets (images, fonts, etc.)
└── styles/                 # CSS files and styling
```

### Key Directories

- **`components/sections/`**: All main page sections (Hero, About, Services, etc.)
- **`components/layout/`**: Navigation, footer, and layout-related components
- **`components/common/`**: Reusable components used across multiple sections
- **`components/ui/`**: Shadcn/ui component library
- **`contexts/`**: React context providers for data management
- **`data/`**: Mock data and static content
- **`types/`**: TypeScript interfaces and type definitions

## 🎨 Customization

### Theme Configuration

The website supports both light and dark themes. Theme configuration is handled in:
- `src/components/layout/ThemeProvider.tsx` - Theme context and logic
- `src/styles/globals.css` - CSS custom properties for themes

### Content Management

All content is managed through the Data Context system:
- `src/contexts/DataContext.tsx` - Main data context
- `src/data/mockData.ts` - Mock data (replace with API calls)

### Styling

The project uses Tailwind CSS v4 with custom design tokens:
- `src/styles/globals.css` - Global styles and CSS variables
- `src/styles/animations.css` - Animation utilities

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_NAME=TechFlow
VITE_APP_DESCRIPTION=Professional IT Solutions

# External Services
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_CONTACT_EMAIL=hello@techflow.com
```

### Tailwind Configuration

The project uses Tailwind CSS v4. Configuration is in `src/styles/globals.css` through CSS custom properties.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The built files in `dist/` can be deployed to any static hosting provider like AWS S3, GitHub Pages, or your own server.

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit with conventional commits: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Standards

- Use TypeScript for all new components
- Follow the existing component structure
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Ensure responsive design for all components

### Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Create an issue on GitHub for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) - Amazing component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful icon library
- [Unsplash](https://unsplash.com/) - High-quality images

---

**Built with ❤️ by the TechFlow team**

For more information, visit [techflow.com](https://techflow.com)