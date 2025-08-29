import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Star,
  ArrowRight,
  Filter,
  Grid3x3,
  List
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useData } from '../contexts/DataContext';
import { LoadingSpinner, SectionSkeleton } from './LoadingSpinner';

export function PortfolioSection() {
  const { portfolio, loading, error } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (loading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return (
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive mb-4">Failed to load portfolio</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    );
  }

  const activeProjects = portfolio.filter(project => project.isActive);
  const featuredProjects = activeProjects.filter(project => project.featured);
  const categories = ['All', ...new Set(activeProjects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? activeProjects 
    : activeProjects.filter(project => project.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ProjectCard = ({ project, featured = false }) => (
    <Card className={`group overflow-hidden border-2 border-border/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transform hover:-translate-y-2 ${featured ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''}`}>
      <div className="relative overflow-hidden">
        {featured && (
          <div className="absolute -top-1 -left-2 z-10 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}
        
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <ImageWithFallback
            src={project.image}
            alt={`${project.title} - ${project.description}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Project Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.projectUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="w-8 h-8 p-0 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
                asChild
              >
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="w-8 h-8 p-0 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            {project.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {project.duration}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Project Metrics */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              Team: {project.teamSize}
            </div>
            <div>
              Client: {project.clientName}
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full group/button border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50"
          onClick={() => scrollToSection('contact')}
        >
          Start Similar Project
          <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-950/10 dark:via-transparent dark:to-blue-950/10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-100/20 to-transparent dark:from-purple-900/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 border border-purple-200/50 dark:border-purple-800/50 mb-6">
            <Grid3x3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Projects That{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-400 dark:to-purple-300">
              Drive Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our collection of successful projects that showcase our expertise 
            in delivering innovative solutions across various industries.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {activeProjects.length}+
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-xl border border-purple-200/50 dark:border-purple-800/50">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {categories.length - 1}
            </div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-xl border border-green-200/50 dark:border-green-800/50">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              {featuredProjects.length}
            </div>
            <div className="text-sm text-muted-foreground">Featured Projects</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-xl border border-orange-200/50 dark:border-orange-800/50">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              100%
            </div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <h3 className="text-2xl font-bold">Featured Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                  : "border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700"
                }
              >
                <Filter className="w-3 h-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className={`grid gap-8 mb-16 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid3x3 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
            <p className="text-muted-foreground mb-6">
              No projects match the selected category. Try selecting a different filter.
            </p>
            <Button variant="outline" onClick={() => setSelectedCategory('All')}>
              Show All Projects
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50/50 via-blue-50/30 to-purple-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-purple-950/20 rounded-2xl p-8 md:p-12 border border-purple-200/30 dark:border-purple-800/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our proven expertise and innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="border-2 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}