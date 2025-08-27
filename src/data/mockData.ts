import { WebsiteData } from '../contexts/DataContext';

export const getMockData = async (): Promise<Omit<WebsiteData, 'loading' | 'error'>> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    hero: {
      id: '1',
      title: 'Innovation Meets Excellence in Technology',
      subtitle: 'Transforming Ideas into Digital Reality',
      description: "We're a leading IT solutions company specializing in custom software development, digital transformation, and cutting-edge technology solutions that drive business growth and innovation.",
      primaryCta: {
        text: 'Get Started Today',
        action: 'contact'
      },
      secondaryCta: {
        text: 'View Our Work',
        action: 'portfolio'
      },
      stats: {
        projects: '500',
        developers: '50',
        experience: '8'
      },
      backgroundImage: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      isActive: true
    },
    about: {
      id: '1',
      title: 'Empowering Innovation Through Technology',
      subtitle: 'About TechFlow',
      description: [
        'Founded in 2016, TechFlow has been at the forefront of digital transformation, helping businesses across industries harness the power of technology to achieve their goals.',
        'Our team of experienced developers, designers, and strategists work collaboratively to transform complex business challenges into elegant, scalable solutions that drive measurable results.'
      ],
      mission: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe in creating lasting partnerships with our clients through transparent communication, exceptional service, and measurable results.',
      vision: 'To be the global leader in innovative technology solutions, setting new standards for excellence in software development, digital transformation, and client satisfaction while fostering a culture of continuous learning and innovation.',
      values: [
        {
          id: '1',
          icon: 'Target',
          title: 'Innovation First',
          description: 'We leverage cutting-edge technologies and creative thinking to create solutions that give our clients a competitive edge in their markets.',
          color: 'blue'
        },
        {
          id: '2',
          icon: 'Users',
          title: 'Client-Centric',
          description: 'Your success is our priority. We work closely with you to understand your unique challenges and exceed your expectations at every step.',
          color: 'purple'
        },
        {
          id: '3',
          icon: 'Zap',
          title: 'Agile Excellence',
          description: 'Fast, flexible, and efficient development processes that adapt to your changing business needs while maintaining the highest quality standards.',
          color: 'green'
        }
      ],
      achievements: [
        { id: '1', icon: 'Award', text: 'ISO 27001 Certified Security Standards' },
        { id: '2', icon: 'Globe', text: 'Google Cloud & AWS Premier Partner' },
        { id: '3', icon: 'Target', text: '99.9% Project Success Rate' },
        { id: '4', icon: 'Clock', text: '24/7 Technical Support & Maintenance' }
      ],
      companyStats: {
        projects: '500',
        teamMembers: '50',
        experience: '8',
        uptime: '99.9'
      },
      isActive: true
    },
    services: [
      {
        id: '1',
        icon: 'Code',
        title: 'Custom Software Development',
        description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements and drive digital transformation.',
        features: ['Full-Stack Development', 'API Integration & Development', 'Legacy System Migration', 'Performance Optimization', 'Code Review & Refactoring'],
        color: 'blue',
        popular: false,
        price: 'Starting at $15,000',
        duration: '3-6 months',
        isActive: true
      },
      {
        id: '2',
        icon: 'Smartphone',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.',
        features: ['iOS & Android Native Apps', 'React Native Development', 'Flutter Cross-Platform', 'App Store Optimization', 'Mobile Security Implementation'],
        color: 'purple',
        popular: true,
        price: 'Starting at $25,000',
        duration: '4-8 months',
        isActive: true
      },
      {
        id: '3',
        icon: 'Cloud',
        title: 'Cloud Solutions & DevOps',
        description: 'Scalable cloud infrastructure, migration services, and DevOps practices to help your business grow and adapt rapidly.',
        features: ['AWS & Azure Migration', 'Cloud Architecture Design', 'DevOps & CI/CD Pipelines', 'Serverless Solutions', 'Infrastructure as Code'],
        color: 'green',
        popular: false,
        price: 'Starting at $10,000',
        duration: '2-4 months',
        isActive: true
      },
      {
        id: '4',
        icon: 'ShieldCheck',
        title: 'Cybersecurity Services',
        description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain customer trust.',
        features: ['Security Audits & Assessments', 'Penetration Testing', 'Compliance Management', 'Incident Response Planning', 'Security Training Programs'],
        color: 'red',
        popular: false,
        price: 'Starting at $8,000',
        duration: '1-3 months',
        isActive: true
      },
      {
        id: '5',
        icon: 'BarChart3',
        title: 'Data Analytics & AI',
        description: 'Transform your data into actionable insights with advanced analytics, business intelligence, and AI-powered solutions.',
        features: ['Business Intelligence Dashboards', 'Data Visualization & Reporting', 'Machine Learning Models', 'Predictive Analytics', 'AI Integration & Automation'],
        color: 'orange',
        popular: true,
        price: 'Starting at $20,000',
        duration: '3-5 months',
        isActive: true
      },
      {
        id: '6',
        icon: 'Palette',
        title: 'UI/UX Design & Strategy',
        description: 'User-centered design solutions that create engaging, accessible, and intuitive digital experiences that convert.',
        features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems & Guidelines', 'Usability & Accessibility Testing', 'Brand Identity Design'],
        color: 'pink',
        popular: false,
        price: 'Starting at $12,000',
        duration: '2-4 months',
        isActive: true
      }
    ],
    portfolio: [
      {
        id: '1',
        title: 'E-Commerce Platform Revolution',
        description: 'Complete digital transformation of a traditional retail business into a modern e-commerce powerhouse with advanced analytics, AI-powered recommendations, and seamless payment integration.',
        image: 'https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'E-Commerce',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML', 'Stripe'],
        clientName: 'RetailCorp',
        projectUrl: 'https://example.com',
        duration: '6 months',
        teamSize: 8,
        featured: true,
        isActive: true
      },
      {
        id: '2',
        title: 'Healthcare Management System',
        description: 'Comprehensive healthcare management platform with patient portals, telemedicine capabilities, advanced medical data analytics, and HIPAA-compliant security.',
        image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Healthcare',
        technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'HIPAA', 'WebRTC'],
        clientName: 'MedTech Solutions',
        projectUrl: 'https://example.com',
        duration: '8 months',
        teamSize: 12,
        featured: true,
        isActive: true
      },
      {
        id: '3',
        title: 'Financial Analytics Dashboard',
        description: 'Real-time financial analytics and reporting platform for investment management firms with advanced risk assessment tools, portfolio tracking, and regulatory compliance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Finance',
        technologies: ['Angular', 'C#', 'SQL Server', 'Azure', 'Power BI', 'OAuth'],
        clientName: 'InvestPro',
        githubUrl: 'https://github.com',
        duration: '4 months',
        teamSize: 6,
        featured: true,
        isActive: true
      },
      {
        id: '4',
        title: 'Smart City IoT Platform',
        description: 'IoT-enabled smart city management platform for traffic optimization, utilities management, public services coordination, and environmental monitoring.',
        image: 'https://images.unsplash.com/photo-1753781466416-0109acf7098b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'IoT',
        technologies: ['React', 'IoT Core', 'Machine Learning', 'Cloud', 'Big Data', 'MQTT'],
        clientName: 'Smart City Initiative',
        duration: '12 months',
        teamSize: 15,
        featured: false,
        isActive: true
      },
      {
        id: '5',
        title: 'Educational Learning Platform',
        description: 'Modern learning management system with interactive content, video streaming, AI-powered personalized learning paths, and comprehensive progress tracking.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Education',
        technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Video Streaming', 'AI/ML'],
        clientName: 'EduTech Inc',
        projectUrl: 'https://example.com',
        duration: '5 months',
        teamSize: 9,
        featured: false,
        isActive: true
      },
      {
        id: '6',
        title: 'Supply Chain Management Suite',
        description: 'End-to-end supply chain management solution with real-time tracking, inventory optimization, predictive analytics, and automated warehouse management.',
        image: 'https://images.unsplash.com/photo-1672552226669-f6c3041972ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Logistics',
        technologies: ['Django', 'React', 'Redis', 'Docker', 'Microservices', 'RFID'],
        clientName: 'LogiFlow',
        duration: '7 months',
        teamSize: 10,
        featured: false,
        isActive: true
      }
    ],
    team: [
      {
        id: '1',
        name: 'Sarah Johnson',
        position: 'CEO & Founder',
        bio: 'Visionary leader with 15+ years in technology and business transformation. Passionate about driving innovation and building exceptional teams that deliver world-class solutions.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        skills: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Digital Transformation'],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'sarah@techflow.com'
        },
        isActive: true
      },
      {
        id: '2',
        name: 'Michael Chen',
        position: 'Chief Technology Officer',
        bio: 'Technology architect with expertise in scalable systems and emerging technologies. Leading our technical vision and innovation with a focus on cutting-edge solutions.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        skills: ['System Architecture', 'Cloud Technologies', 'AI/ML', 'DevOps'],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          email: 'michael@techflow.com'
        },
        isActive: true
      },
      {
        id: '3',
        name: 'Emily Rodriguez',
        position: 'Head of Design',
        bio: 'Creative director passionate about user-centered design and digital experiences. Creating beautiful, functional, and accessible interfaces that users love.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        skills: ['UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'emily@techflow.com'
        },
        isActive: true
      },
      {
        id: '4',
        name: 'David Kim',
        position: 'Lead Developer',
        bio: 'Full-stack developer with expertise in modern web technologies and agile methodologies. Building scalable, maintainable applications that stand the test of time.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        skills: ['React', 'Node.js', 'DevOps', 'Agile', 'TypeScript'],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          github: 'https://github.com',
          email: 'david@techflow.com'
        },
        isActive: true
      }
    ],
    leadership: [
      {
        id: '1',
        name: 'Robert Anderson',
        position: 'Chief Executive Officer',
        bio: 'Visionary leader with 20+ years of experience in technology and business transformation. Robert has successfully scaled multiple tech companies from startup to IPO, with expertise in strategic planning, market expansion, and building high-performance teams.',
        image: 'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        experience: '20+ years',
        achievements: [
          'Led 3 successful IPOs',
          'Forbes 40 Under 40 recipient',
          'Scaled company from $1M to $100M ARR',
          'Built teams of 500+ employees'
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'robert@techflow.com'
        },
        isActive: true
      },
      {
        id: '2',
        name: 'Dr. Lisa Chen',
        position: 'Chief Technology Officer',
        bio: 'Technology visionary and former MIT professor with deep expertise in AI, machine learning, and distributed systems. Dr. Chen holds 15 patents and has published over 50 research papers in top-tier technology journals.',
        image: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        experience: '18+ years',
        achievements: [
          'PhD in Computer Science from MIT',
          '15 technology patents',
          '50+ published research papers',
          'Former Google Principal Engineer'
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'lisa@techflow.com'
        },
        isActive: true
      },
      {
        id: '3',
        name: 'James Wilson',
        position: 'Chief Operating Officer',
        bio: 'Operations expert with extensive experience in scaling technology companies and optimizing business processes. James has a proven track record of improving operational efficiency by 300% while maintaining quality standards.',
        image: 'https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        experience: '16+ years',
        achievements: [
          'MBA from Stanford Business School',
          'Improved operational efficiency by 300%',
          'Led digital transformation at Fortune 500',
          'Certified Six Sigma Black Belt'
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          email: 'james@techflow.com'
        },
        isActive: true
      },
      {
        id: '4',
        name: 'Maria Rodriguez',
        position: 'Chief Financial Officer',
        bio: 'Financial strategist with expertise in scaling tech companies, venture capital, and strategic partnerships. Maria has raised over $200M in funding and led financial operations for multiple successful exits.',
        image: 'https://images.unsplash.com/photo-1677594333719-c5eb422bbdc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        experience: '15+ years',
        achievements: [
          'CPA and CFA certifications',
          'Raised $200M+ in funding',
          'Led 5 successful company exits',
          'Former Goldman Sachs VP'
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'maria@techflow.com'
        },
        isActive: true
      }
    ],
    news: [
      {
        id: '1',
        title: 'TechFlow Announces Partnership with Leading AI Research Institute',
        excerpt: 'Strategic collaboration to advance artificial intelligence and machine learning capabilities in enterprise solutions.',
        content: 'TechFlow is excited to announce a groundbreaking partnership with the Advanced AI Research Institute to develop next-generation artificial intelligence solutions for enterprise clients...',
        author: 'Sarah Johnson',
        publishDate: '2025-01-20',
        category: 'Partnership',
        tags: ['AI', 'Machine Learning', 'Enterprise', 'Innovation'],
        image: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        readTime: 5,
        featured: true,
        isActive: true
      },
      {
        id: '2',
        title: 'The Future of Cloud Computing: Trends to Watch in 2025',
        excerpt: 'Exploring emerging cloud technologies and their impact on business transformation and digital innovation.',
        content: 'As we move into 2025, cloud computing continues to evolve at an unprecedented pace. Our latest analysis reveals key trends that will shape the industry...',
        author: 'Michael Chen',
        publishDate: '2025-01-18',
        category: 'Technology',
        tags: ['Cloud Computing', 'Technology Trends', 'Digital Transformation'],
        image: 'https://images.unsplash.com/photo-1704969723938-0c310608d6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        readTime: 7,
        featured: true,
        isActive: true
      },
      {
        id: '3',
        title: 'TechFlow Wins Best Innovation Award at Tech Summit 2025',
        excerpt: 'Recognition for our groundbreaking work in AI-powered business intelligence and data analytics solutions.',
        content: 'We are thrilled to announce that TechFlow has been honored with the Best Innovation Award at the prestigious Tech Summit 2025...',
        author: 'Emily Rodriguez',
        publishDate: '2025-01-15',
        category: 'Awards',
        tags: ['Awards', 'Innovation', 'Recognition', 'AI'],
        image: 'https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        readTime: 4,
        featured: false,
        isActive: true
      },
      {
        id: '4',
        title: 'Cybersecurity Best Practices for Remote Teams',
        excerpt: 'Essential security measures and strategies to protect your business in the era of distributed workforces.',
        content: 'With remote work becoming the new normal, cybersecurity has never been more critical. Here are our top recommendations for keeping your team secure...',
        author: 'David Kim',
        publishDate: '2025-01-12',
        category: 'Security',
        tags: ['Cybersecurity', 'Remote Work', 'Best Practices', 'Security'],
        image: 'https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        readTime: 6,
        featured: false,
        isActive: true
      },
      {
        id: '5',
        title: 'TechFlow Expands Operations to European Market',
        excerpt: 'Opening new offices in London and Berlin to serve our growing European client base and expand our global presence.',
        content: 'As part of our global expansion strategy, TechFlow is pleased to announce the opening of new offices in London and Berlin...',
        author: 'Robert Anderson',
        publishDate: '2025-01-10',
        category: 'Company News',
        tags: ['Expansion', 'Europe', 'Growth', 'Global'],
        image: 'https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        readTime: 3,
        featured: false,
        isActive: true
      },
      {
        id: '6',
        title: 'Building Scalable Microservices Architecture',
        excerpt: 'A comprehensive guide to designing and implementing microservices that can grow with your business needs.',
        content: 'Microservices architecture has become the gold standard for building scalable, maintainable applications. In this guide, we share our expertise...',
        author: 'Lisa Chen',
        publishDate: '2025-01-08',
        category: 'Development',
        tags: ['Microservices', 'Architecture', 'Scalability', 'Development'],
        image: 'https://images.unsplash.com/photo-1509483730228-811e47696246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        readTime: 8,
        featured: false,
        isActive: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Jennifer Martinez',
        position: 'CEO',
        company: 'InnovateNow',
        content: 'TechFlow transformed our business with their innovative solutions. The team was professional, responsive, and delivered beyond our expectations. Our digital transformation journey with them has been exceptional and resulted in 300% growth.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2d82888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        rating: 5,
        isActive: true
      },
      {
        id: '2',
        name: 'Robert Thompson',
        position: 'CTO',
        company: 'DataDriven Solutions',
        content: 'Outstanding technical expertise and project management. They delivered our complex analytics platform on time and within budget. The quality of code and architecture is exceptional - truly world-class.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        rating: 5,
        isActive: true
      },
      {
        id: '3',
        name: 'Lisa Wang',
        position: 'Founder',
        company: 'StartupX',
        content: 'From concept to launch, TechFlow was instrumental in bringing our vision to life. Their agile approach and attention to detail made all the difference. We couldn\'t have asked for a better partner.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        rating: 5,
        isActive: true
      },
      {
        id: '4',
        name: 'James Wilson',
        position: 'VP of Technology',
        company: 'Enterprise Solutions',
        content: 'TechFlow delivered a robust enterprise solution that scaled perfectly with our growing business. Their ongoing support and maintenance has been outstanding. A truly reliable technology partner.',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        rating: 5,
        isActive: true
      }
    ],
    careers: [
      {
        id: '1',
        title: 'Senior Full-Stack Developer',
        department: 'Engineering',
        location: 'San Francisco, CA / Remote',
        type: 'full-time',
        experience: '5+ years',
        description: 'Join our engineering team to build next-generation web applications using modern technologies. You\'ll work on challenging projects and have the opportunity to influence technical decisions while mentoring junior developers.',
        requirements: [
          '5+ years of experience in full-stack development',
          'Proficiency in React, Node.js, and TypeScript',
          'Experience with cloud platforms (AWS/Azure)',
          'Strong problem-solving and communication skills',
          'Experience with agile development methodologies'
        ],
        benefits: [
          'Competitive salary and equity package',
          'Health, dental, and vision insurance',
          'Flexible work arrangements',
          'Professional development budget ($5,000/year)',
          '4 weeks paid vacation + holidays',
          'Top-tier equipment and tools'
        ],
        salary: {
          min: 120000,
          max: 180000,
          currency: 'USD'
        },
        isActive: true,
        featured: true,
        postedDate: '2025-01-15'
      },
      {
        id: '2',
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'San Francisco, CA / Remote',
        type: 'full-time',
        experience: '3+ years',
        description: 'Create exceptional user experiences for our digital products and client projects. You\'ll work closely with developers and product managers to bring designs to life while maintaining our high design standards.',
        requirements: [
          '3+ years of UI/UX design experience',
          'Proficiency in Figma, Sketch, or similar tools',
          'Strong portfolio demonstrating design thinking',
          'Experience with user research and testing',
          'Knowledge of design systems and accessibility'
        ],
        benefits: [
          'Competitive salary and benefits',
          'Creative freedom and ownership',
          'Learning and development opportunities',
          'Collaborative team environment',
          'Modern design tools and resources',
          'Conference and workshop attendance'
        ],
        salary: {
          min: 90000,
          max: 130000,
          currency: 'USD'
        },
        isActive: true,
        featured: false,
        postedDate: '2025-01-10'
      },
      {
        id: '3',
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Remote',
        type: 'full-time',
        experience: '4+ years',
        description: 'Lead our infrastructure and deployment processes. You\'ll work on scaling our systems and improving our development workflows while ensuring high availability and security.',
        requirements: [
          '4+ years of DevOps experience',
          'Expertise in AWS/Azure cloud platforms',
          'Experience with Docker, Kubernetes',
          'Knowledge of CI/CD pipelines',
          'Infrastructure as Code (Terraform, CloudFormation)'
        ],
        benefits: [
          'Competitive compensation package',
          'Remote-first culture',
          'Latest development tools',
          'Professional certifications sponsored',
          'Health and wellness benefits'
        ],
        salary: {
          min: 130000,
          max: 170000,
          currency: 'USD'
        },
        isActive: true,
        featured: false,
        postedDate: '2025-01-08'
      }
    ],
    contact: {
      id: '1',
      address: {
        street: '123 Innovation Drive, Suite 500',
        city: 'San Francisco',
        state: 'California',
        zipCode: '94105',
        country: 'United States'
      },
      phone: '+1 (555) 123-4567',
      email: 'hello@techflow.com',
      socialLinks: {
        linkedin: 'https://linkedin.com/company/techflow',
        twitter: 'https://twitter.com/techflow',
        facebook: 'https://facebook.com/techflow',
        github: 'https://github.com/techflow',
        instagram: 'https://instagram.com/techflow'
      },
      businessHours: {
        monday: '9:00 AM - 6:00 PM PST',
        tuesday: '9:00 AM - 6:00 PM PST',
        wednesday: '9:00 AM - 6:00 PM PST',
        thursday: '9:00 AM - 6:00 PM PST',
        friday: '9:00 AM - 6:00 PM PST',
        saturday: '10:00 AM - 2:00 PM PST',
        sunday: 'Closed'
      },
      isActive: true
    },
    settings: {
      id: '1',
      name: 'TechFlow',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      tagline: 'Transforming Ideas into Digital Reality',
      description: 'Leading IT solutions company specializing in innovative technology solutions that drive business growth and digital transformation across industries.',
      primaryColor: '#3B82F6',
      secondaryColor: '#8B5CF6',
      accentColor: '#10B981',
      timezone: 'America/Los_Angeles',
      currency: 'USD',
      language: 'en',
      isActive: true
    }
  };
};