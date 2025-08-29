import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  DollarSign, 
  Briefcase,
  Star,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award,
  Building,
  Heart,
  Rocket
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { LoadingSpinner, SectionSkeleton } from './LoadingSpinner';
import { JobApplicationForm } from './JobApplicationForm';

export function CareerSection() {
  const { careers, loading, error } = useData();

  if (loading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return (
      <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive mb-4">Failed to load career opportunities</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    );
  }

  const activeCareers = careers.filter(career => career.isActive);
  const featuredCareers = activeCareers.filter(career => career.featured);
  const regularCareers = activeCareers.filter(career => !career.featured);

  const formatSalary = (salary: { min: number; max: number; currency: string }) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: salary.currency,
      maximumFractionDigits: 0,
    });
    return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`;
  };

  const getTypeColor = (type: string) => {
    const colorMap = {
      'full-time': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
      'part-time': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
      'contract': 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
      'internship': 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
    };
    return colorMap[type] || colorMap['full-time'];
  };

  const CareerCard = ({ career, featured = false }) => (
    <Card className={`p-4 group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${featured ? 'ring-2 ring-blue-200 dark:ring-blue-800 border-blue-200 dark:border-blue-800' : 'border-border/50 hover:border-blue-300 dark:hover:border-blue-700'} bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative`}>
      {featured && (
        <div className="absolute -top-1 -right-2 z-10">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1 animate-pulse">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-blue-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getTypeColor(career.type)}>
                {career.type.replace('-', ' ')}
              </Badge>
              {career.featured && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Hot
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl md:text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              {career.title}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                <span>{career.department}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{career.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{career.experience}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative pt-0">
        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
          {career.description}
        </p>
        
        {/* Key Requirements Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            Key Requirements
          </h4>
          <ul className="space-y-1">
            {career.requirements.slice(0, 3).map((requirement, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <span className="line-clamp-1">{requirement}</span>
              </li>
            ))}
            {career.requirements.length > 3 && (
              <li className="text-sm text-muted-foreground italic">
                +{career.requirements.length - 3} more requirements...
              </li>
            )}
          </ul>
        </div>

        {/* Benefits Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            Benefits & Perks
          </h4>
          <div className="flex flex-wrap gap-2">
            {career.benefits.slice(0, 3).map((benefit, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                {benefit.split(' ').slice(0, 3).join(' ')}...
              </Badge>
            ))}
          </div>
        </div>

        {/* Salary and Posted Date */}
        <div className="flex items-center justify-between mb-6 p-3 bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg border border-gray-200/30 dark:border-gray-700/30">
          <div className="flex items-center gap-4">
            {career.salary && (
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {formatSalary(career.salary)}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-muted-foreground">
                Posted {new Date(career.postedDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <JobApplicationForm jobId={career.id} jobTitle={career.title}>
            <Button 
              className="flex-1 group/button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Rocket className="mr-2 h-4 w-4 group-hover/button:animate-pulse" />
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Button>
          </JobApplicationForm>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Details
          </Button>
        </div>
      </CardContent>

      {/* Hover effect accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
    </Card>
  );

  return (
    <section id="careers" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-blue-900/50 border border-blue-200/50 dark:border-blue-800/50 mb-8 backdrop-blur-sm">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </span>
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Career</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
              Opportunities
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Join our world-class team and help shape the future of technology. 
            We offer competitive packages, flexible work arrangements, and opportunities 
            to work on cutting-edge projects with industry-leading professionals.
          </p>

          {/* Career Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">
                {activeCareers.length}+
              </div>
              <div className="text-sm text-muted-foreground">Open Positions</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">
                {featuredCareers.length}
              </div>
              <div className="text-sm text-muted-foreground">Featured Roles</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">
                4.8
              </div>
              <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
            </div>
          </div>
        </div>

        {/* Featured Positions */}
        {featuredCareers.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1" />
              <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Featured Positions
                </span>
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredCareers.map((career) => (
                <div key={career.id}>
                  <CareerCard career={career} featured />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              All Open Positions
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all our current openings and find the perfect role to advance your career with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCareers.map((career, index) => (
              <div
                key={career.id}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CareerCard career={career} />
              </div>
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
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">Can't Find the Right Role?</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span> Anyway
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Don't see a position that matches your skills? We're always interested in 
                connecting with talented individuals. Send us your resume and let's explore 
                opportunities together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 px-8 py-6 text-lg hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  Submit General Application
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Always Reviewing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Best Workplace</span>
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