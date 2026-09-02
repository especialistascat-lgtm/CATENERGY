export interface ServiceItem {
  id: string;
  slug: string;
  areaId: 'gestion-energia' | 'gestion-mantenimiento' | 'subestaciones-at-mt-bt';
  name: string;
  shortDescription: string;
  impactPhrase: string;
  badge?: string;
  heroImage: string;
  description: {
    whatIs: string;
    purpose: string;
    problemSolved: string;
    clientBenefits: string[];
  };
  scope: string[];
  benefits: {
    title: string;
    description: string;
    iconName: string;
  }[];
  applications: string[];
  methodology: {
    step: number;
    title: string;
    description: string;
  }[];
  technicalTags: string[];
}

export interface ServiceArea {
  id: 'gestion-energia' | 'gestion-mantenimiento' | 'subestaciones-at-mt-bt';
  title: string;
  subtitle: string;
  description: string;
  impactPhrase: string;
  heroImage: string;
  accentColor: string;
  services: ServiceItem[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'ENERGÍA' | 'MANTENIMIENTO' | 'ELECTRICIDAD' | 'SUBESTACIONES' | 'ENERGÍAS RENOVABLES' | 'SEGURIDAD' | 'CASOS DE ESTUDIO';
  date: string;
  author: {
    name: string;
    role: string;
  };
  readTime: string;
  summary: string;
  featuredImage: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      keyPoints?: string[];
    }[];
    conclusion: string;
  };
  tags: string[];
  relatedPostIds: string[];
}

export interface QuoteFormData {
  fullName: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  serviceId: string;
  installationType: string;
  city: string;
  description: string;
  fileName?: string;
  privacyAccepted: boolean;
}
