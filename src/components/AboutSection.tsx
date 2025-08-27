import { CheckCircle, Target, Users, Zap, Award, Globe, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to create solutions that give our clients a competitive edge.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Fast, flexible, and efficient development processes that adapt to your changing business needs.',
      color: 'green'
    }
  ];

  const achievements = [
    { icon: Award, text: 'ISO 27001 Certified Security Standards' },
    { icon: Globe, text: 'Google Cloud & AWS Partner' },
    { icon: Target, text: '99.9% Project Success Rate' },
    { icon: Clock, text: '24/7 Technical Support' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50',
          icon: 'text-blue-600 dark:text-blue-400',
          border: 'border-blue-200/50 dark:border-blue-800/50',
          hover: 'hover:border-blue-300 dark:hover:border-blue-700'
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50',
          icon: 'text-purple-600 dark:text-purple-400',
          border: 'border-purple-200/50 dark:border-purple-800/50',
          hover: 'hover:border-purple-300 dark:hover:border-purple-700'
        };
      case 'green':
        return {
          bg: 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50',
          icon: 'text-green-600 dark:text-green-400',
          border: 'border-green-200/50 dark:border-green-800/50',
          hover: 'hover:border-green-300 dark:hover:border-green-700'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/50',
          icon: 'text-gray-600 dark:text-gray-400',
          border: 'border-gray-200/50 dark:border-gray-800/50',
          hover: 'hover:border-gray-300 dark:hover:border-gray-700'
        };
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium">About TechFlow</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
              Innovation
            </span>{' '}
            Through Technology
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded in 2016, TechFlow has been at the forefront of digital transformation, 
            helping businesses across industries harness the power of technology to achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Mission Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                Our Mission
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We believe in creating lasting partnerships 
                  with our clients through transparent communication, exceptional service, and 
                  measurable results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team of experienced developers, designers, and strategists work collaboratively 
                  to transform complex business challenges into elegant, scalable solutions.
                </p>
              </div>
            </div>

            {/* Enhanced Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Our Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200/30 dark:border-blue-800/30 hover:border-blue-300/50 dark:hover:border-blue-700/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Values Cards */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-center mb-8">Our Core Values</h4>
            {values.map((value, index) => {
              const colors = getColorClasses(value.color);
              return (
                <Card 
                  key={index} 
                  className={`border-2 ${colors.border} ${colors.hover} transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transform hover:-translate-y-1 group overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/10 dark:to-purple-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <value.icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-blue-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-blue-950/20 rounded-3xl p-8 md:p-12 border border-blue-200/30 dark:border-blue-800/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose TechFlow?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', color: 'blue' },
              { number: '50+', label: 'Team Members', color: 'purple' },
              { number: '8+', label: 'Years Experience', color: 'green' },
              { number: '99.9%', label: 'Uptime Guarantee', color: 'orange' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}