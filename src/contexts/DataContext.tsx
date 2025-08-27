import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getMockData } from '../data/mockData';

// Types for our dynamic content
export interface HeroData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    action: string;
  };
  secondaryCta: {
    text: string;
    action: string;
  };
  stats: {
    projects: string;
    developers: string;
    experience: string;
  };
  backgroundImage: string;
  isActive: boolean;
}

export interface AboutData {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  mission: string;
  vision: string;
  values: {
    id: string;
    icon: string;
    title: string;
    description: string;
    color: string;
  }[];
  achievements: {
    id: string;
    icon: string;
    text: string;
  }[];
  companyStats: {
    projects: string;
    teamMembers: string;
    experience: string;
    uptime: string;
  };
  isActive: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  popular: boolean;
  price?: string;
  duration?: string;
  isActive: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  clientName: string;
  projectUrl?: string;
  githubUrl?: string;
  duration: string;
  teamSize: number;
  featured: boolean;
  isActive: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  isActive: boolean;
}

export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  experience: string;
  achievements: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  isActive: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
  featured: boolean;
  isActive: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  projectId?: string;
  isActive: boolean;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  isActive: boolean;
  featured: boolean;
  postedDate: string;
}

export interface ContactInfo {
  id: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
  };
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  isActive: boolean;
}

export interface CompanySettings {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  timezone: string;
  currency: string;
  language: string;
  isActive: boolean;
}

// Main data interface
export interface WebsiteData {
  hero: HeroData | null;
  about: AboutData | null;
  services: Service[];
  portfolio: PortfolioProject[];
  team: TeamMember[];
  leadership: LeadershipMember[];
  news: NewsArticle[];
  testimonials: Testimonial[];
  careers: Career[];
  contact: ContactInfo | null;
  settings: CompanySettings | null;
  loading: boolean;
  error: string | null;
}

// Context interface
interface DataContextType extends WebsiteData {
  refreshData: () => Promise<void>;
  updateHero: (data: Partial<HeroData>) => Promise<void>;
  updateAbout: (data: Partial<AboutData>) => Promise<void>;
  updateService: (id: string, data: Partial<Service>) => Promise<void>;
  addService: (data: Omit<Service, 'id'>) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  updatePortfolioProject: (id: string, data: Partial<PortfolioProject>) => Promise<void>;
  addPortfolioProject: (data: Omit<PortfolioProject, 'id'>) => Promise<void>;
  deletePortfolioProject: (id: string) => Promise<void>;
  updateTeamMember: (id: string, data: Partial<TeamMember>) => Promise<void>;
  addTeamMember: (data: Omit<TeamMember, 'id'>) => Promise<void>;
  deleteTeamMember: (id: string) => Promise<void>;
  updateLeadershipMember: (id: string, data: Partial<LeadershipMember>) => Promise<void>;
  addLeadershipMember: (data: Omit<LeadershipMember, 'id'>) => Promise<void>;
  deleteLeadershipMember: (id: string) => Promise<void>;
  updateNewsArticle: (id: string, data: Partial<NewsArticle>) => Promise<void>;
  addNewsArticle: (data: Omit<NewsArticle, 'id'>) => Promise<void>;
  deleteNewsArticle: (id: string) => Promise<void>;
  updateTestimonial: (id: string, data: Partial<Testimonial>) => Promise<void>;
  addTestimonial: (data: Omit<Testimonial, 'id'>) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  updateCareer: (id: string, data: Partial<Career>) => Promise<void>;
  addCareer: (data: Omit<Career, 'id'>) => Promise<void>;
  deleteCareer: (id: string) => Promise<void>;
  updateContact: (data: Partial<ContactInfo>) => Promise<void>;
  updateSettings: (data: Partial<CompanySettings>) => Promise<void>;
  submitJobApplication: (jobId: string, applicationData: any) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<WebsiteData>({
    hero: null,
    about: null,
    services: [],
    portfolio: [],
    team: [],
    leadership: [],
    news: [],
    testimonials: [],
    careers: [],
    contact: null,
    settings: null,
    loading: true,
    error: null,
  });

  // API base URL - can be configured when connecting to real backend
  const API_BASE_URL = '/api';

  // Generic API call function
  const apiCall = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  };

  // Load initial data
  const loadData = async () => {
    setData(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // In a real app, these would be actual API calls
      // For demo purposes, we'll use mock data
      const mockData = await getMockData();
      
      setData(prev => ({
        ...prev,
        ...mockData,
        loading: false,
      }));
    } catch (error) {
      setData(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load data',
      }));
    }
  };

  // CRUD operations
  const refreshData = async () => {
    await loadData();
  };

  const updateHero = async (heroData: Partial<HeroData>) => {
    try {
      const updated = { ...data.hero, ...heroData };
      setData(prev => ({ ...prev, hero: updated as HeroData }));
    } catch (error) {
      console.error('Failed to update hero:', error);
      throw error;
    }
  };

  const updateAbout = async (aboutData: Partial<AboutData>) => {
    try {
      const updated = { ...data.about, ...aboutData };
      setData(prev => ({ ...prev, about: updated as AboutData }));
    } catch (error) {
      console.error('Failed to update about:', error);
      throw error;
    }
  };

  const updateService = async (id: string, serviceData: Partial<Service>) => {
    try {
      const updatedServices = data.services.map(service =>
        service.id === id ? { ...service, ...serviceData } : service
      );
      setData(prev => ({ ...prev, services: updatedServices }));
    } catch (error) {
      console.error('Failed to update service:', error);
      throw error;
    }
  };

  const addService = async (serviceData: Omit<Service, 'id'>) => {
    try {
      const newService = { ...serviceData, id: Date.now().toString() };
      setData(prev => ({ ...prev, services: [...prev.services, newService] }));
    } catch (error) {
      console.error('Failed to add service:', error);
      throw error;
    }
  };

  const deleteService = async (id: string) => {
    try {
      const filteredServices = data.services.filter(service => service.id !== id);
      setData(prev => ({ ...prev, services: filteredServices }));
    } catch (error) {
      console.error('Failed to delete service:', error);
      throw error;
    }
  };

  const updatePortfolioProject = async (id: string, projectData: Partial<PortfolioProject>) => {
    try {
      const updatedProjects = data.portfolio.map(project =>
        project.id === id ? { ...project, ...projectData } : project
      );
      setData(prev => ({ ...prev, portfolio: updatedProjects }));
    } catch (error) {
      console.error('Failed to update portfolio project:', error);
      throw error;
    }
  };

  const addPortfolioProject = async (projectData: Omit<PortfolioProject, 'id'>) => {
    try {
      const newProject = { ...projectData, id: Date.now().toString() };
      setData(prev => ({ ...prev, portfolio: [...prev.portfolio, newProject] }));
    } catch (error) {
      console.error('Failed to add portfolio project:', error);
      throw error;
    }
  };

  const deletePortfolioProject = async (id: string) => {
    try {
      const filteredProjects = data.portfolio.filter(project => project.id !== id);
      setData(prev => ({ ...prev, portfolio: filteredProjects }));
    } catch (error) {
      console.error('Failed to delete portfolio project:', error);
      throw error;
    }
  };

  const updateTeamMember = async (id: string, memberData: Partial<TeamMember>) => {
    try {
      const updatedTeam = data.team.map(member =>
        member.id === id ? { ...member, ...memberData } : member
      );
      setData(prev => ({ ...prev, team: updatedTeam }));
    } catch (error) {
      console.error('Failed to update team member:', error);
      throw error;
    }
  };

  const addTeamMember = async (memberData: Omit<TeamMember, 'id'>) => {
    try {
      const newMember = { ...memberData, id: Date.now().toString() };
      setData(prev => ({ ...prev, team: [...prev.team, newMember] }));
    } catch (error) {
      console.error('Failed to add team member:', error);
      throw error;
    }
  };

  const deleteTeamMember = async (id: string) => {
    try {
      const filteredTeam = data.team.filter(member => member.id !== id);
      setData(prev => ({ ...prev, team: filteredTeam }));
    } catch (error) {
      console.error('Failed to delete team member:', error);
      throw error;
    }
  };

  const updateLeadershipMember = async (id: string, memberData: Partial<LeadershipMember>) => {
    try {
      const updatedLeadership = data.leadership.map(member =>
        member.id === id ? { ...member, ...memberData } : member
      );
      setData(prev => ({ ...prev, leadership: updatedLeadership }));
    } catch (error) {
      console.error('Failed to update leadership member:', error);
      throw error;
    }
  };

  const addLeadershipMember = async (memberData: Omit<LeadershipMember, 'id'>) => {
    try {
      const newMember = { ...memberData, id: Date.now().toString() };
      setData(prev => ({ ...prev, leadership: [...prev.leadership, newMember] }));
    } catch (error) {
      console.error('Failed to add leadership member:', error);
      throw error;
    }
  };

  const deleteLeadershipMember = async (id: string) => {
    try {
      const filteredLeadership = data.leadership.filter(member => member.id !== id);
      setData(prev => ({ ...prev, leadership: filteredLeadership }));
    } catch (error) {
      console.error('Failed to delete leadership member:', error);
      throw error;
    }
  };

  const updateNewsArticle = async (id: string, articleData: Partial<NewsArticle>) => {
    try {
      const updatedNews = data.news.map(article =>
        article.id === id ? { ...article, ...articleData } : article
      );
      setData(prev => ({ ...prev, news: updatedNews }));
    } catch (error) {
      console.error('Failed to update news article:', error);
      throw error;
    }
  };

  const addNewsArticle = async (articleData: Omit<NewsArticle, 'id'>) => {
    try {
      const newArticle = { ...articleData, id: Date.now().toString() };
      setData(prev => ({ ...prev, news: [...prev.news, newArticle] }));
    } catch (error) {
      console.error('Failed to add news article:', error);
      throw error;
    }
  };

  const deleteNewsArticle = async (id: string) => {
    try {
      const filteredNews = data.news.filter(article => article.id !== id);
      setData(prev => ({ ...prev, news: filteredNews }));
    } catch (error) {
      console.error('Failed to delete news article:', error);
      throw error;
    }
  };

  const updateTestimonial = async (id: string, testimonialData: Partial<Testimonial>) => {
    try {
      const updatedTestimonials = data.testimonials.map(testimonial =>
        testimonial.id === id ? { ...testimonial, ...testimonialData } : testimonial
      );
      setData(prev => ({ ...prev, testimonials: updatedTestimonials }));
    } catch (error) {
      console.error('Failed to update testimonial:', error);
      throw error;
    }
  };

  const addTestimonial = async (testimonialData: Omit<Testimonial, 'id'>) => {
    try {
      const newTestimonial = { ...testimonialData, id: Date.now().toString() };
      setData(prev => ({ ...prev, testimonials: [...prev.testimonials, newTestimonial] }));
    } catch (error) {
      console.error('Failed to add testimonial:', error);
      throw error;
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      const filteredTestimonials = data.testimonials.filter(testimonial => testimonial.id !== id);
      setData(prev => ({ ...prev, testimonials: filteredTestimonials }));
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
      throw error;
    }
  };

  const updateCareer = async (id: string, careerData: Partial<Career>) => {
    try {
      const updatedCareers = data.careers.map(career =>
        career.id === id ? { ...career, ...careerData } : career
      );
      setData(prev => ({ ...prev, careers: updatedCareers }));
    } catch (error) {
      console.error('Failed to update career:', error);
      throw error;
    }
  };

  const addCareer = async (careerData: Omit<Career, 'id'>) => {
    try {
      const newCareer = { ...careerData, id: Date.now().toString() };
      setData(prev => ({ ...prev, careers: [...prev.careers, newCareer] }));
    } catch (error) {
      console.error('Failed to add career:', error);
      throw error;
    }
  };

  const deleteCareer = async (id: string) => {
    try {
      const filteredCareers = data.careers.filter(career => career.id !== id);
      setData(prev => ({ ...prev, careers: filteredCareers }));
    } catch (error) {
      console.error('Failed to delete career:', error);
      throw error;
    }
  };

  const updateContact = async (contactData: Partial<ContactInfo>) => {
    try {
      const updated = { ...data.contact, ...contactData };
      setData(prev => ({ ...prev, contact: updated as ContactInfo }));
    } catch (error) {
      console.error('Failed to update contact:', error);
      throw error;
    }
  };

  const updateSettings = async (settingsData: Partial<CompanySettings>) => {
    try {
      const updated = { ...data.settings, ...settingsData };
      setData(prev => ({ ...prev, settings: updated as CompanySettings }));
    } catch (error) {
      console.error('Failed to update settings:', error);
      throw error;
    }
  };

  const submitJobApplication = async (jobId: string, applicationData: any) => {
    try {
      // In a real app, this would submit to an API
      console.log('Submitting application for job:', jobId, applicationData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to submit application:', error);
      throw error;
    }
  };

  // Load data on mount
  useEffect(() => {
    loadData();
  }, []);

  const contextValue: DataContextType = {
    ...data,
    refreshData,
    updateHero,
    updateAbout,
    updateService,
    addService,
    deleteService,
    updatePortfolioProject,
    addPortfolioProject,
    deletePortfolioProject,
    updateTeamMember,
    addTeamMember,
    deleteTeamMember,
    updateLeadershipMember,
    addLeadershipMember,
    deleteLeadershipMember,
    updateNewsArticle,
    addNewsArticle,
    deleteNewsArticle,
    updateTestimonial,
    addTestimonial,
    deleteTestimonial,
    updateCareer,
    addCareer,
    deleteCareer,
    updateContact,
    updateSettings,
    submitJobApplication,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};