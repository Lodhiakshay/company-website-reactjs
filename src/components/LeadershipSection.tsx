import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Award, 
  TrendingUp, 
  Users, 
  Crown,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Star,
  Building,
  Target
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useData } from '../contexts/DataContext';
import { LoadingSpinner, SectionSkeleton } from './LoadingSpinner';

export function LeadershipSection() {
  const { leadership, loading, error } = useData();

  if (loading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return (
      <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive mb-4">Failed to load leadership team</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    );
  }

  const activeLeadership = leadership.filter(leader => leader.isActive);

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-950/10 dark:via-transparent dark:to-blue-950/10" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100 dark:from-purple-900/50 dark:via-blue-900/50 dark:to-purple-900/50 border border-purple-200/50 dark:border-purple-800/50 mb-8 backdrop-blur-sm">
            <Crown className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Executive Leadership
            </span>
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Visionary</span>
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-400 dark:to-purple-300">
              Leadership Team
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Meet the exceptional leaders driving TechFlow's vision, innovation, and success. 
            Our executive team brings decades of experience and proven track records in 
            technology, business, and strategic growth.
          </p>

          {/* Leadership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">
                {activeLeadership.length}
              </div>
              <div className="text-sm text-muted-foreground">C-Level Executives</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">
                60+
              </div>
              <div className="text-sm text-muted-foreground">Years Combined</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-2">
                5+
              </div>
              <div className="text-sm text-muted-foreground">Successful Exits</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">
                $1B+
              </div>
              <div className="text-sm text-muted-foreground">Value Created</div>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {activeLeadership.map((leader, index) => (
            <Card 
              key={leader.id}
              className="group relative overflow-hidden border-2 border-border/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20 transform hover:-translate-y-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-purple-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                {/* Centered Profile Section */}
                <div className="text-center mb-6">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-transform duration-300 shadow-xl mx-auto">
                      <ImageWithFallback
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Achievement Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-full shadow-lg">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Name and Position */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {leader.position}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span>{leader.experience} experience</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed text-center line-clamp-4">
                    {leader.bio}
                  </p>
                </div>
                
                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground flex items-center justify-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {leader.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <div 
                        key={achIndex} 
                        className="flex items-start gap-2 text-sm text-foreground group-hover:translate-x-1 transition-transform duration-300 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg p-3"
                        style={{ transitionDelay: `${achIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-center flex-1">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/50">
                  {leader.socialLinks.linkedin && (
                    <a
                      href={leader.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/social"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600 group-hover/social:text-white" />
                    </a>
                  )}
                  {leader.socialLinks.twitter && (
                    <a
                      href={leader.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/social"
                    >
                      <Twitter className="w-5 h-5 text-blue-600 group-hover/social:text-white" />
                    </a>
                  )}
                  {leader.socialLinks.email && (
                    <a
                      href={`mailto:${leader.socialLinks.email}`}
                      className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/social"
                    >
                      <Mail className="w-5 h-5 text-purple-600 group-hover/social:text-white" />
                    </a>
                  )}
                </div>
              </CardContent>
              
              {/* Hover effect accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-purple-50/80 via-blue-50/60 to-purple-50/80 dark:from-purple-950/30 dark:via-blue-950/20 dark:to-purple-950/30 rounded-3xl p-8 md:p-16 border border-purple-200/30 dark:border-purple-800/30 backdrop-blur-sm overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 rounded-full border border-white/30 dark:border-gray-700/30 mb-6">
                <Building className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium">Join Our Team</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Work with <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Industry Leaders</span>
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our world-class team and work alongside these exceptional leaders. 
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 px-8 py-6 text-lg hover:scale-105"
                  onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Users className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  View Open Positions
                  <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Always Hiring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Top Employer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>Global Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}