import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Briefcase, Award, Clock, Target, Globe, Zap } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  value: number;
  suffix: string;
  color: string;
  description: string;
}

const stats: StatItem[] = [
  {
    id: '1',
    icon: Briefcase,
    label: 'Projects Completed',
    value: 500,
    suffix: '+',
    color: 'blue',
    description: 'Successfully delivered projects'
  },
  {
    id: '2',
    icon: Users,
    label: 'Expert Developers',
    value: 50,
    suffix: '+',
    color: 'purple',
    description: 'Skilled professionals in our team'
  },
  {
    id: '3',
    icon: Award,
    label: 'Years Experience',
    value: 8,
    suffix: '+',
    color: 'green',
    description: 'Years of industry expertise'
  },
  {
    id: '4',
    icon: Target,
    label: 'Success Rate',
    value: 99,
    suffix: '%',
    color: 'orange',
    description: 'Project success rate'
  },
  {
    id: '5',
    icon: Clock,
    label: 'Support Uptime',
    value: 99.9,
    suffix: '%',
    color: 'red',
    description: 'System availability'
  },
  {
    id: '6',
    icon: Globe,
    label: 'Countries Served',
    value: 25,
    suffix: '+',
    color: 'indigo',
    description: 'Global client reach'
  }
];

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = end * easeOutCubic;
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);
  
  return { count, isComplete };
}

function useIntersectionObserver(ref: React.RefObject<Element>, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return isIntersecting;
}

function StatCard({ stat, shouldAnimate }: { stat: StatItem; shouldAnimate: boolean }) {
  const { count, isComplete } = useCountUp(stat.value, 2000, shouldAnimate);
  
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50',
        border: 'border-blue-200/50 dark:border-blue-800/50',
        icon: 'text-blue-600 dark:text-blue-400',
        iconBg: 'bg-blue-100 dark:bg-blue-900/50',
        text: 'text-blue-600 dark:text-blue-400',
        accent: 'bg-blue-500'
      },
      purple: {
        bg: 'from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50',
        border: 'border-purple-200/50 dark:border-purple-800/50',
        icon: 'text-purple-600 dark:text-purple-400',
        iconBg: 'bg-purple-100 dark:bg-purple-900/50',
        text: 'text-purple-600 dark:text-purple-400',
        accent: 'bg-purple-500'
      },
      green: {
        bg: 'from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50',
        border: 'border-green-200/50 dark:border-green-800/50',
        icon: 'text-green-600 dark:text-green-400',
        iconBg: 'bg-green-100 dark:bg-green-900/50',
        text: 'text-green-600 dark:text-green-400',
        accent: 'bg-green-500'
      },
      orange: {
        bg: 'from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50',
        border: 'border-orange-200/50 dark:border-orange-800/50',
        icon: 'text-orange-600 dark:text-orange-400',
        iconBg: 'bg-orange-100 dark:bg-orange-900/50',
        text: 'text-orange-600 dark:text-orange-400',
        accent: 'bg-orange-500'
      },
      red: {
        bg: 'from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50',
        border: 'border-red-200/50 dark:border-red-800/50',
        icon: 'text-red-600 dark:text-red-400',
        iconBg: 'bg-red-100 dark:bg-red-900/50',
        text: 'text-red-600 dark:text-red-400',
        accent: 'bg-red-500'
      },
      indigo: {
        bg: 'from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/50',
        border: 'border-indigo-200/50 dark:border-indigo-800/50',
        icon: 'text-indigo-600 dark:text-indigo-400',
        iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
        text: 'text-indigo-600 dark:text-indigo-400',
        accent: 'bg-indigo-500'
      }
    };
    return colorMap[color] || colorMap.blue;
  };
  
  const colors = getColorClasses(stat.color);
  const IconComponent = stat.icon;
  
  const formatNumber = (num: number) => {
    if (stat.suffix === '%') {
      return num.toFixed(num < 10 ? 1 : 0);
    }
    return Math.floor(num).toLocaleString();
  };
  
  return (
    <div className={`group relative overflow-hidden bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} transition-all duration-500 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm`}>
      {/* Background decoration */}
      <div className={`absolute -top-2 -right-2 w-20 h-20 ${colors.accent} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className={`w-6 h-6 ${colors.icon}`} />
          </div>
          
          {shouldAnimate && (
            <div className="flex items-center gap-1">
              <TrendingUp className={`w-4 h-4 ${colors.icon} ${isComplete ? 'animate-pulse' : ''}`} />
              <Zap className={`w-3 h-3 ${colors.icon} ${shouldAnimate ? 'animate-bounce' : ''}`} />
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl md:text-4xl font-black ${colors.text} ${shouldAnimate ? 'animate-pulse' : ''}`}>
              {formatNumber(count)}
            </span>
            <span className={`text-xl font-bold ${colors.text}`}>
              {stat.suffix}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {stat.label}
          </h3>
          
          <p className="text-sm text-muted-foreground">
            {stat.description}
          </p>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-4">
          <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full ${colors.accent} transition-all duration-2000 ease-out`}
              style={{ 
                width: shouldAnimate ? `${(count / stat.value) * 100}%` : '0%',
                transitionDelay: shouldAnimate ? '0ms' : '500ms'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnimatedStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });
  
  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-purple-50/50 dark:from-gray-900/50 dark:via-blue-950/30 dark:to-purple-950/50" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200/50 dark:border-blue-800/50 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium">Our Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Driving{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
              Measurable Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the numbers. Here's how we've been making a difference in the technology landscape.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <StatCard stat={stat} shouldAnimate={isVisible} />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Real-time metrics</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Updated daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Verified results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}