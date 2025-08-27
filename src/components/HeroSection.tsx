import { Button } from './ui/button';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useData } from '../contexts/DataContext';
import { LoadingSpinner } from './LoadingSpinner';

export function HeroSection() {
  const { hero, loading, error } = useData();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <LoadingSpinner size="lg" text="Loading hero section..." />
      </section>
    );
  }

  if (error || !hero) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load hero section</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-purple-50/30 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500" />
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-foreground border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">{hero.subtitle}</span>
            </div>
            
            {/* Dynamic Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              {hero.title.split(' ').map((word, index) => {
                const highlightWords = ['Innovation', 'Excellence', 'Technology'];
                const isHighlight = highlightWords.includes(word);
                
                return (
                  <span key={index}>
                    {isHighlight ? (
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
                        {word}
                      </span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                );
              })}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {hero.description}
            </p>
          </div>

          {/* Dynamic Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection(hero.primaryCta.action)}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white border-0"
            >
              <span className="relative z-10 flex items-center">
                {hero.primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection(hero.secondaryCta.action)}
              className="group border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
              {hero.secondaryCta.text}
            </Button>
          </div>

          {/* Dynamic Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {hero.stats.projects}
              </div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {hero.stats.developers}
              </div>
              <div className="text-sm text-muted-foreground">Expert Developers</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {hero.stats.experience}
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-800 dark:text-blue-300">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/50 dark:bg-purple-900/30 border border-purple-200/50 dark:border-purple-800/50">
              <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-purple-800 dark:text-purple-300">Secure Solutions</span>
            </div>
          </div>
        </div>

        {/* Enhanced Image Section with Dynamic Background */}
        <div className="relative animate-fade-in delay-200">
          <div className="relative">
            {/* Main Image Container */}
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/50 dark:to-purple-950/50 p-6">
                <ImageWithFallback
                  src={hero.backgroundImage}
                  alt="Modern technology workspace showcasing innovation and collaboration"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
            
            {/* Dynamic Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium">Live Projects: {hero.stats.projects}</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium">AI Powered Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}