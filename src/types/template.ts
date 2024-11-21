export interface BasePersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location?: string;
  summary?: string;
  linkedin?: string;
  website?: string;
  portfolio?: string;
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  duration: string;
  description: string;
  achievements?: string[];
}

export interface Education {
  degree: string;
  school: string;
  location?: string;
  year: string;
  gpa?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level?: number; // 1-5 for skill proficiency
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Interest {
  name: string;
  icon: string; // Lucide icon name
}

// Add reference type
export interface Reference {
  name: string;
  title: string;
  contact: string;
}

// Base template data type
export interface TemplateData {
  personalInfo: BasePersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: {
    technical: Skill[];
    soft: Skill[];
    languages: Skill[];
  };
  projects?: Project[];
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  interests?: Interest[];
  references?: Reference[];
}

// Template-specific interfaces
export interface BasicTemplateData extends Omit<TemplateData, 'skills'> {
  skills: string[];
}

export interface ModernTemplateData extends Omit<TemplateData, 'skills'> {
  personalInfo: BasePersonalInfo & {
    summary: string;
  };
  skills: {
    technical: string[];
    soft: string[];
  };
}

export interface CreativeTemplateData extends Omit<TemplateData, 'skills'> {
  personalInfo: BasePersonalInfo & {
    portfolio: string;
  };
  projects: Project[];
  skills: {
    design: string[];
    development: string[];
    tools: string[];
  };
}

export interface ProfessionalTemplateData extends TemplateData {}
export interface MinimalistTemplateData extends TemplateData {}

export type TemplateType = 
  | "professional" 
  | "minimalist" 
  | "creative" 
  | "modern" 
  | "basic" 
  | "elegant"
  | "mechanical"
  | "simple"
  | "accent"
  | "compact"
  | "executive"
  | "vibrant";

// Add template-specific interface if needed
export interface CompactTemplateData extends TemplateData {
  personalInfo: BasePersonalInfo & {
    linkedin?: string;
  };
}