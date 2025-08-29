import { ThemeProvider } from './components/ThemeProvider';
import { DataProvider } from './contexts/DataContext';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AnimatedStatsSection } from './components/AnimatedStatsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { CareerSection } from './components/CareerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useData } from './contexts/DataContext';
import { Button } from './components/ui/button';
import { RefreshCw } from 'lucide-react';
import { Toaster } from 'sonner';

function AppContent() {
  const { loading, error, refreshData } = useData();

  if (loading) {
    return <LoadingSpinner fullScreen text="Loading TechFlow..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Unable to Load Website</h2>
          <p className="text-muted-foreground mb-6">
            We're experiencing technical difficulties. Please try refreshing the page.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={refreshData} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reload Page
            </Button>
          </div>
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
              Error Details
            </summary>
            <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-auto">
              {error}
            </pre>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AnimatedStatsSection />
        <ServicesSection />
        <PortfolioSection />
        <LeadershipSection />
        <TeamSection />
        <TestimonialsSection />
        <NewsSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors duration={4000} className="z-[99999]" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="techflow-theme">
      <DataProvider>
        <AppContent />
      </DataProvider>
    </ThemeProvider>
  );
}