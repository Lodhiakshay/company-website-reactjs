# TechFlow Website Development Guidelines

This document outlines the development standards, practices, and guidelines for the TechFlow website project.

## Table of Contents
- [General Guidelines](#general-guidelines)
- [Component Architecture](#component-architecture)
- [Design System](#design-system)
- [TypeScript Standards](#typescript-standards)
- [Styling Guidelines](#styling-guidelines)
- [Performance Guidelines](#performance-guidelines)
- [Accessibility Guidelines](#accessibility-guidelines)

## General Guidelines

### Code Quality
- **Always use TypeScript**: All components and utilities must be written in TypeScript
- **Follow functional programming**: Use React functional components with hooks
- **Keep components small**: Single responsibility principle - one component, one purpose
- **Use absolute imports**: Import from `src/` directories using absolute paths
- **Error boundaries**: Implement proper error handling and loading states
- **Performance first**: Optimize for Core Web Vitals and user experience

### File Organization
- **Folder structure**: Follow the established `src/` structure strictly
- **Naming conventions**: Use PascalCase for components, camelCase for functions and variables
- **Co-location**: Keep related files together (component + types + tests)
- **Barrel exports**: Use index files for clean imports

### Git Practices
- **Conventional commits**: Use conventional commit messages
- **Feature branches**: Create feature branches from main
- **Code reviews**: All PRs require review before merging
- **Small commits**: Make atomic commits with clear messages

## Component Architecture

### Component Structure
```tsx
// 1. External imports
import React from 'react';
import { someLibrary } from 'external-lib';

// 2. Internal imports (absolute paths)
import { Button } from 'src/components/ui/button';
import { useData } from 'src/contexts/DataContext';
import type { ComponentProps } from 'src/types';

// 3. Types and interfaces
interface ComponentProps {
  title: string;
  optional?: boolean;
}

// 4. Component implementation
export function Component({ title, optional = false }: ComponentProps) {
  // Hooks
  // State
  // Effects
  // Handlers
  // Render
}
```

### Component Guidelines
- **Props interface**: Always define TypeScript interfaces for props
- **Default props**: Use default parameters instead of defaultProps
- **Ref forwarding**: Use forwardRef when component needs to expose DOM ref
- **Memoization**: Use React.memo for expensive components
- **Custom hooks**: Extract complex logic into custom hooks

### Folder Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components (Shadcn)
│   ├── forms/           # Form-specific components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   └── common/          # Shared components (LoadingSpinner, etc.)
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── lib/                 # Utilities and configurations
├── types/               # TypeScript definitions
├── data/                # Static/mock data
└── styles/              # CSS files
```

## Design System

### Color Palette
- **Primary**: Blue (`#3B82F6`) - main brand color
- **Secondary**: Purple (`#8B5CF6`) - accent color
- **Success**: Green (`#10B981`) - success states
- **Warning**: Orange (`#F59E0B`) - warning states
- **Danger**: Red (`#EF4444`) - error states

### Typography
- **Base font size**: 14px (--font-size CSS variable)
- **Font weights**: Use CSS variables (--font-weight-normal: 400, --font-weight-medium: 500)
- **Line height**: 1.5 for body text, 1.2 for headings
- **No font size classes**: Avoid Tailwind font size classes unless specifically overriding

### Spacing
- **Consistent spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, 20, 24...)
- **Section padding**: `py-24` for major sections, `py-20` for sub-sections
- **Component spacing**: `gap-4` or `gap-6` for component groups
- **Card padding**: `p-6` or `p-8` for card content

### Layout
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for page containers
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Grid systems**: Use CSS Grid for complex layouts, Flexbox for simple ones
- **Aspect ratios**: Use the aspect-ratio utility for media containers

## TypeScript Standards

### Type Definitions
- **Interface over type**: Prefer interfaces for object shapes
- **Strict typing**: No `any` types allowed
- **Union types**: Use union types for known variations
- **Generic types**: Use generics for reusable component patterns

### Example Patterns
```tsx
// Good: Strict interface
interface UserProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  onUpdate: (user: User) => void;
  loading?: boolean;
}

// Good: Union types for variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

// Good: Generic components
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}
```

### Import/Export Standards
```tsx
// Good: Named exports for components
export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

// Good: Type-only imports
import type { User } from 'src/types';
```

## Styling Guidelines

### Tailwind CSS Usage
- **Utility-first**: Use Tailwind utilities for styling
- **Component classes**: Create component classes for repeated patterns
- **Responsive design**: Use responsive prefixes (sm:, md:, lg:, xl:)
- **Dark mode**: Use dark: prefix for dark mode styles

### CSS Custom Properties
- **Theme colors**: Use CSS custom properties defined in globals.css
- **Consistent values**: Reference variables instead of hard-coding colors
- **Dynamic theming**: Support light/dark theme switching

### Animation Guidelines
- **Smooth transitions**: Use `transition-all duration-300` for hover effects
- **Loading states**: Implement skeleton loaders and spinners
- **Micro-interactions**: Add subtle animations for better UX
- **Performance**: Use `transform` and `opacity` for animations

### Responsive Design
```tsx
// Mobile-first responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Content */}
</div>
```

## Performance Guidelines

### Code Splitting
- **Route-based splitting**: Split by major sections/routes
- **Component lazy loading**: Use React.lazy for heavy components
- **Dynamic imports**: Import heavy libraries dynamically

### Image Optimization
- **ImageWithFallback**: Always use the ImageWithFallback component
- **Appropriate formats**: Use WebP with fallbacks
- **Responsive images**: Use srcSet for different screen sizes
- **Lazy loading**: Implement lazy loading for below-fold images

### Bundle Optimization
- **Tree shaking**: Import only used functions from libraries
- **Minimal dependencies**: Avoid unnecessary dependencies
- **Code splitting**: Split vendor and application code

## Accessibility Guidelines

### Semantic HTML
- **Proper headings**: Use h1-h6 in hierarchical order
- **Landmark elements**: Use semantic elements (nav, main, aside, footer)
- **Form labels**: Associate labels with form controls
- **Button vs links**: Use buttons for actions, links for navigation

### ARIA Attributes
- **Screen readers**: Add aria-label for non-obvious elements
- **States**: Use aria-expanded, aria-selected for dynamic states
- **Descriptions**: Use aria-describedby for additional context

### Keyboard Navigation
- **Tab order**: Ensure logical tab order
- **Focus indicators**: Maintain visible focus indicators
- **Keyboard shortcuts**: Support standard keyboard interactions
- **Skip links**: Provide skip navigation links

### Color and Contrast
- **WCAG compliance**: Meet WCAG 2.1 AA contrast requirements
- **Color-blind friendly**: Don't rely on color alone for information
- **Dark mode**: Ensure accessibility in both light and dark themes

## Component-Specific Guidelines

### Buttons
- **Variants**: primary, secondary, outline, ghost
- **Sizes**: sm, md (default), lg
- **States**: loading, disabled
- **Accessibility**: proper role and keyboard support

```tsx
// Good button implementation
<Button 
  variant="primary" 
  size="lg"
  className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-6"
  disabled={loading}
>
  {loading ? <Spinner /> : 'Submit'}
</Button>
```

### Forms
- **Validation**: Real-time validation with clear error messages
- **Accessibility**: Proper labels and error associations
- **Loading states**: Show loading during submission
- **Multi-step**: Use clear progress indicators

### Cards
- **Consistent structure**: Header, content, footer pattern
- **Hover effects**: Subtle elevation and color changes
- **Loading states**: Skeleton placeholders
- **Responsive**: Stack on mobile, grid on desktop

### Modals/Dialogs
- **Focus management**: Trap focus within modal
- **Escape key**: Close on escape key press
- **Overlay click**: Close on overlay click (optional)
- **Accessibility**: Proper ARIA attributes

## Testing Guidelines

### Component Testing
- **Unit tests**: Test component logic and rendering
- **Integration tests**: Test component interactions
- **Accessibility tests**: Test with screen readers and keyboard
- **Visual tests**: Screenshot testing for UI consistency

### Performance Testing
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Bundle analysis**: Regular bundle size analysis
- **Load testing**: Test with slow network conditions

## Documentation Standards

### Code Documentation
- **JSDoc comments**: Document complex functions and components
- **README files**: Maintain up-to-date README files
- **Inline comments**: Explain complex business logic
- **Type documentation**: Document complex types and interfaces

### Component Documentation
```tsx
/**
 * Primary button component for user actions
 * 
 * @param variant - Visual style variant
 * @param size - Button size
 * @param loading - Shows loading spinner when true
 * @param children - Button content
 * @param onClick - Click handler function
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  onClick,
  ...props
}: ButtonProps) {
  // Implementation
}
```

## Browser Support

### Target Browsers
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+
- **No IE support**: Internet Explorer not supported

### Progressive Enhancement
- **Core functionality**: Works without JavaScript
- **Enhanced experience**: JavaScript adds interactions
- **Graceful degradation**: Fallbacks for unsupported features

---

## Quick Reference

### Common Patterns
```tsx
// Section wrapper
<section id="section-name" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative">
    {/* Content */}
  </div>
</section>

// Card component
<Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>

// Loading state
if (loading) {
  return <LoadingSpinner />;
}

if (error) {
  return <ErrorMessage error={error} />;
}
```

### Useful Commands
```bash
# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Building
npm run build
```

---

**Remember**: These guidelines are living documents. Update them as the project evolves and new patterns emerge.