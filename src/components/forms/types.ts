export interface ApplicationData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    portfolio?: string;
    linkedin?: string;
  };
  experience: {
    currentRole: string;
    company: string;
    experience: string;
    salary: string;
    availability: string;
  };
  documents: {
    resume?: File;
    coverLetter?: File;
    portfolio?: File;
  };
  questions: {
    whyInterested: string;
    whyCompany: string;
    experience: string;
  };
  preferences: {
    remote: boolean;
    relocation: boolean;
    notifications: boolean;
  };
}

export const EXPERIENCE_OPTIONS = [
  { value: '0-1', label: '0-1 years' },
  { value: '2-3', label: '2-3 years' },
  { value: '4-5', label: '4-5 years' },
  { value: '6-8', label: '6-8 years' },
  { value: '9-12', label: '9-12 years' },
  { value: '13+', label: '13+ years' },
];

export const AVAILABILITY_OPTIONS = [
  { value: 'immediately', label: 'Immediately' },
  { value: '2-weeks', label: '2 weeks notice' },
  { value: '1-month', label: '1 month notice' },
  { value: '2-months', label: '2 months notice' },
  { value: '3-months', label: '3+ months' },
];

export const INITIAL_APPLICATION_DATA: ApplicationData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
    linkedin: '',
  },
  experience: {
    currentRole: '',
    company: '',
    experience: '',
    salary: '',
    availability: '',
  },
  documents: {},
  questions: {
    whyInterested: '',
    whyCompany: '',
    experience: '',
  },
  preferences: {
    remote: false,
    relocation: false,
    notifications: true,
  },
};
