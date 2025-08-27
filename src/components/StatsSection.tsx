import { Award, Clock, Globe, Heart } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Globe,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across 25+ countries'
    },
    {
      icon: Heart,
      number: '200+',
      label: 'Happy Clients',
      description: 'Long-term partnerships built on trust'
    },
    {
      icon: Clock,
      number: '8+',
      label: 'Years Experience',
      description: 'Proven track record in the industry'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognition for excellence and innovation'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our numbers speak for themselves. We've consistently delivered exceptional 
            results that drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}