import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Star,
  Eye,
  MessageCircle,
  Share2,
  Tag,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useData } from '../contexts/DataContext';
import { LoadingSpinner, SectionSkeleton } from './LoadingSpinner';
import { useState } from 'react';

export function NewsSection() {
  const { news, loading, error } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (loading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return (
      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive mb-4">Failed to load news articles</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    );
  }

  const activeNews = news.filter(article => article.isActive);
  const featuredNews = activeNews.filter(article => article.featured);
  const categories = ['All', ...new Set(activeNews.map(article => article.category))];
  
  const filteredNews = selectedCategory === 'All' 
    ? activeNews 
    : activeNews.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getColorForCategory = (category: string) => {
    const colorMap = {
      'Partnership': 'blue',
      'Technology': 'purple',
      'Awards': 'green',
      'Security': 'red',
      'Company News': 'orange',
      'Development': 'indigo'
    };
    return colorMap[category] || 'gray';
  };

  const NewsCard = ({ article, featured = false }) => {
    const categoryColor = getColorForCategory(article.category);
    
    return (
      <Card className={`group overflow-hidden border-2 border-border/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transform hover:-translate-y-2 ${featured ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''} bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm`}>
        {featured && (
          <div className="absolute -top-1 -left-2 z-10 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}
        
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Article metadata overlay */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
            >
              <BookOpen className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-3">
            <Badge 
              variant="secondary" 
              className={`bg-${categoryColor}-100 text-${categoryColor}-800 dark:bg-${categoryColor}-900 dark:text-${categoryColor}-300`}
            >
              {article.category}
            </Badge>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime} min read
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {Math.floor(Math.random() * 1000) + 100}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {article.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-2 h-2 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Article footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium">{article.author}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {formatDate(article.publishDate)}
                </div>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="group/button text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="news" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-green-950/10" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-green-100/20 to-transparent dark:from-green-900/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-green-100 to-blue-100 dark:from-blue-900/50 dark:via-green-900/50 dark:to-blue-900/50 border border-blue-200/50 dark:border-blue-800/50 mb-8 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Latest Insights
            </span>
            <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block">News &</span>
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-green-400 dark:to-blue-300">
              Insights
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Stay updated with the latest technology trends, company news, industry insights, 
            and expert analysis from our team of technology leaders and innovators.
          </p>

          {/* News Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">
                {activeNews.length}+
              </div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">
                {featuredNews.length}
              </div>
              <div className="text-sm text-muted-foreground">Featured Articles</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-800/50 backdrop-blur-sm">
              <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredNews.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1" />
              <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/50 dark:to-green-900/50 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Featured Articles
                </span>
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredNews.slice(0, 2).map((article) => (
                <NewsCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" 
                : "border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700"
              }
            >
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredNews.slice(0, 6).map((article, index) => (
              <div
                key={article.id}
                className="animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
            <p className="text-muted-foreground mb-6">
              No articles match the selected category. Try selecting a different filter.
            </p>
            <Button variant="outline" onClick={() => setSelectedCategory('All')}>
              Show All Articles
            </Button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-50/80 via-green-50/60 to-blue-50/80 dark:from-blue-950/30 dark:via-green-950/20 dark:to-blue-950/30 rounded-3xl p-8 md:p-16 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 rounded-full border border-white/30 dark:border-gray-700/30 mb-6">
                <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium">Stay Informed</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Subscribe to Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Newsletter</span>
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Get the latest technology insights, industry trends, and company updates 
                delivered directly to your inbox. Join thousands of professionals who trust our expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 px-8 py-6 text-lg hover:scale-105"
                >
                  <BookOpen className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  Subscribe Now
                  <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>No Spam</span>
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