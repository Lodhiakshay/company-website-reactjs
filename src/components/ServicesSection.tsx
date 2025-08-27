import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Palette,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  Users,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { LoadingSpinner, SectionSkeleton } from './LoadingSpinner';
import { useState } from 'react';

// Icon mapping for dynamic icons
const iconMap = {
  Code,
  Smartphone,
  Cloud,
  ShieldCheck,
  BarChart3,
  Palette
};

export function ServicesSection() {
  const { services, loading, error } = useData();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive mb-4">Failed to load services</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    );
  }

  const activeServices = services.filter(service => service.isActive);
  const popularServices = activeServices.filter(service => service.popular);
  const regularServices = activeServices.filter(service => !service.popular);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        lightGradient: 'from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50',
        border: 'border-blue-200/50 dark:border-blue-800/50',
        hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-700',
        icon: 'text-blue-600 dark:text-blue-400',
        iconBg: 'bg-blue-100 dark:bg-blue-900/50',
        shadow: 'shadow-blue-100/50 dark:shadow-blue-900/20',
        accent: 'bg-blue-500',
        text: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        gradient: 'from-purple-500 to-purple-600',
        lightGradient: 'from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50',
        border: 'border-purple-200/50 dark:border-purple-800/50',
        hoverBorder: 'hover:border-purple-300 dark:hover:border-purple-700',
        icon: 'text-purple-600 dark:text-purple-400',
        iconBg: 'bg-purple-100 dark:bg-purple-900/50',
        shadow: 'shadow-purple-100/50 dark:shadow-purple-900/20',
        accent: 'bg-purple-500',
        text: 'text-purple-600 dark:text-purple-400'
      },
      green: {
        gradient: 'from-green-500 to-green-600',
        lightGradient: 'from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50',
        border: 'border-green-200/50 dark:border-green-800/50',
        hoverBorder: 'hover:border-green-300 dark:hover:border-green-700',
        icon: 'text-green-600 dark:text-green-400',
        iconBg: 'bg-green-100 dark:bg-green-900/50',
        shadow: 'shadow-green-100/50 dark:shadow-green-900/20',
        accent: 'bg-green-500',
        text: 'text-green-600 dark:text-green-400'
      },
      red: {
        gradient: 'from-red-500 to-red-600',
        lightGradient: 'from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50',
        border: 'border-red-200/50 dark:border-red-800/50',
        hoverBorder: 'hover:border-red-300 dark:hover:border-red-700',  
        icon: 'text-red-600 dark:text-red-400',
        iconBg: 'bg-red-100 dark:bg-red-900/50',
        shadow: 'shadow-red-100/50 dark:shadow-red-900/20',
        accent: 'bg-red-500',
        text: 'text-red-600 dark:text-red-400'
      },
      orange: {
        gradient: 'from-orange-500 to-orange-600',
        lightGradient: 'from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50',
        border: 'border-orange-200/50 dark:border-orange-800/50',
        hoverBorder: 'hover:border-orange-300 dark:hover:border-orange-700',
        icon: 'text-orange-600 dark:text-orange-400',
        iconBg: 'bg-orange-100 dark:bg-orange-900/50',
        shadow: 'shadow-orange-100/50 dark:shadow-orange-900/20',
        accent: 'bg-orange-500',
        text: 'text-orange-600 dark:text-orange-400'
      },
      pink: {
        gradient: 'from-pink-500 to-pink-600',
        lightGradient: 'from-pink-50 to-pink-100 dark:from-pink-950/50 dark:to-pink-900/50',
        border: 'border-pink-200/50 dark:border-pink-800/50',
        hoverBorder: 'hover:border-pink-300 dark:hover:border-pink-700',
        icon: 'text-pink-600 dark:text-pink-400',
        iconBg: 'bg-pink-100 dark:bg-pink-900/50',
        shadow: 'shadow-pink-100/50 dark:shadow-pink-900/20',
        accent: 'bg-pink-500',
        text: 'text-pink-600 dark:text-pink-400'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const ServiceCard = ({ service, featured = false, isPopular = false }) => {
    const colors = getColorClasses(service.color);
    const IconComponent = iconMap[service.icon] || Code;
    const isHovered = hoveredService === service.id;

    return (
      <Card 
        className={`group relative overflow-hidden border-2 ${colors.border} ${colors.hoverBorder} transition-all duration-500 hover:shadow-2xl ${colors.shadow} transform hover:-translate-y-3 ${isPopular ? 'ring-2 ring-purple-200 dark:ring-purple-800 scale-105' : ''} ${featured ? 'md:col-span-2 lg:col-span-1' : ''} bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm`}
        onMouseEnter={() => setHoveredService(service.id)}
        onMouseLeave={() => setHoveredService(null)}
      >
        {/* Popular/Featured Badge */}
        {isPopular && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1 animate-pulse">
              <Star className="w-3 h-3 fill-current" />
              Most Popular
            </div>
          </div>
        )}

        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Decorative Elements */}
        <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
        <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr ${colors.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
        
        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}>
              <IconComponent className={`h-8 w-8 ${colors.icon} z-10`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </div>
            
            {service.price && (
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                  <DollarSign className="w-3 h-3" />
                  <span>Pricing</span>
                </div>
                <div className={`text-lg font-bold ${colors.text}`}>
                  {service.price}
                </div>
              </div>
            )}
          </div>
          
          <CardTitle className={`text-xl md:text-2xl group-hover:${colors.text} transition-colors duration-300 mb-2`}>
            {service.title}
          </CardTitle>
          
          {service.duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Timeline: {service.duration}</span>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="relative pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
            {service.description}
          </p>
          
          {/* Features List */}
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Award className="w-4 h-4" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {service.features.slice(0, isHovered ? service.features.length : 3).map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="text-sm text-foreground flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
                  style={{ transitionDelay: `${featureIndex * 50}ms` }}
                >
                  <CheckCircle className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`} />
                  <span>{feature}</span>
                </li>
              ))}
              {!isHovered && service.features.length > 3 && (
                <li className="text-sm text-muted-foreground flex items-center gap-3 italic">
                  <span>+{service.features.length - 3} more features...</span>
                </li>
              )}
            </ul>
          </div>

          {/* Service Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg border border-gray-200/30 dark:border-gray-700/30">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                <span className="text-xs text-muted-foreground">Success Rate</span>
              </div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">99%</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span className="text-xs text-muted-foreground">Projects</span>
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">50+</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className={`flex-1 group/button bg-gradient-to-r ${colors.gradient} hover:shadow-lg hover:shadow-${service.color}-200/50 text-white border-0 transition-all duration-300 hover:scale-105`}
              onClick={() => scrollToSection('contact')}
            >
              <Zap className="mr-2 h-4 w-4" />
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className={`${colors.border} ${colors.hoverBorder} hover:bg-gradient-to-r hover:${colors.lightGradient} transition-all duration-300`}
              onClick={() => scrollToSection('portfolio')}
            >
              View Examples
            </Button>
          </div>
        </CardContent>

        {/* Hover Effect Accent */}
        <div className={`absolute bottom-0 left-0 h-1 w-0 ${colors.accent} group-hover:w-full transition-all duration-500`} />
      </Card>
    );
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-40 w-3 h-3 bg-green-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-blue-900/50 border border-blue-200/50 dark:border-blue-800/50 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Premium Services
            </span>
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Comprehensive</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
              Technology Solutions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            From innovative software development to cutting-edge AI solutions, 
            we provide end-to-end technology services that transform businesses 
            and drive sustainable growth.
          </p>

          {/* Enhanced Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">
                {activeServices.length}+
              </div>
              <div className="text-sm text-muted-foreground">Expert Services</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">
                {popularServices.length}
              </div>
              <div className="text-sm text-muted-foreground">Popular Choices</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-2">
                99%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Popular Services Showcase */}
        {popularServices.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1" />
              <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full border border-purple-200/50 dark:border-purple-800/50">
                <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Most Popular Services
                </span>
                <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {popularServices.map((service) => (
                <ServiceCard key={service.id} service={service} featured isPopular />
              ))}
            </div>
          </div>
        )}

        {/* All Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Service Portfolio
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your unique business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-50/80 via-purple-50/60 to-blue-50/80 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-blue-950/30 rounded-3xl p-8 md:p-16 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 rounded-full border border-white/30 dark:border-gray-700/30 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">Ready to Transform?</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Need a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Custom Solution</span>?
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our expert team specializes in creating tailor-made solutions that perfectly align with your unique 
                business requirements, industry standards, and growth objectives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 px-8 py-6 text-lg hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  <Zap className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  Start Your Project Today
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>24h Response</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200/30 dark:border-gray-700/30">
                <Button 
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection('portfolio')}
                  className="group text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TrendingUp className="mr-2 h-4 w-4 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  Explore Our Success Stories
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}