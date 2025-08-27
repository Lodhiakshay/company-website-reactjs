import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Github,
  ArrowRight,
  Heart,
  Sparkles,
  Globe,
  Clock,
  Award,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Coffee,
  Rocket,
  CheckCircle
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useState } from 'react';

export function Footer() {
  const { contact, settings, services, loading } = useData();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <footer className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading footer...</div>
        </div>
      </footer>
    );
  }

  const currentYear = new Date().getFullYear();
  const companyName = settings?.name || 'TechFlow';

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-gray-50 to-purple-50/30 dark:from-blue-950/20 dark:via-gray-900 dark:to-purple-950/20" />
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Newsletter Section */}
          <div className="text-center mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-white">Stay Updated</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span> Journey
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get the latest insights on technology trends, industry updates, and exclusive content delivered straight to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 bg-white dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                  disabled={subscribed}
                >
                  {subscribed ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {subscribed && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-600/20 border border-green-300 dark:border-green-400/30 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    🎉 Welcome aboard! You'll receive our next newsletter soon.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{companyName}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{settings?.tagline}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {settings?.description || 'Leading technology solutions provider transforming businesses through innovation.'}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50">
                    <Shield className="w-3 h-3 mr-1" />
                    ISO 27001
                  </Badge>
                  <Badge className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50">
                    <Globe className="w-3 h-3 mr-1" />
                    AWS Partner
                  </Badge>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services?.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', id: 'about' },
                  { name: 'Portfolio', id: 'portfolio' },
                  { name: 'Leadership', id: 'leadership' },
                  { name: 'Our Team', id: 'team' },
                  { name: 'Careers', id: 'careers' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contact?.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {contact?.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contact?.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                      <p className="text-sm leading-relaxed">
                        {contact.address.street}<br />
                        {contact.address.city}, {contact.address.state} {contact.address.zipCode}
                      </p>
                    </div>
                  </div>
                )}

                {contact?.businessHours && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Business Hours</p>
                      <p className="text-sm">Mon-Fri: {contact.businessHours.monday}</p>
                      <p className="text-sm">Sat: {contact.businessHours.saturday}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Separator className="bg-gray-300 dark:bg-gray-700 mb-12" />

          {/* Social Links & Stats */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex items-center gap-4">
                {contact?.socialLinks?.linkedin && (
                  <a
                    href={contact.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                )}
                {contact?.socialLinks?.twitter && (
                  <a
                    href={contact.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                )}
                {contact?.socialLinks?.github && (
                  <a
                    href={contact.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                )}
                {contact?.socialLinks?.facebook && (
                  <a
                    href={contact.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                )}
                {contact?.socialLinks?.instagram && (
                  <a
                    href={contact.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                )}
              </div>
            </div>

            {/* Company Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">50+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">24/7</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-300 dark:bg-gray-700 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
              <Separator orientation="vertical" className="h-4 bg-gray-300 dark:bg-gray-600" />
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <Separator orientation="vertical" className="h-4 bg-gray-300 dark:bg-gray-600" />
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-orange-500" />
              <span>by the {companyName} team</span>
              <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-white"
          >
            <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
          </Button>
        </div>
      </div>
    </footer>
  );
}