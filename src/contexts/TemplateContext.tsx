import React, { createContext, useContext, useState } from 'react';
import type { TemplateData } from '@/types/template';

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
  | "vibrant"
  | "elegantSplit"
  | "aquaSplit"
  | "standard";

interface TemplateContextType {
  activeTemplate: TemplateType;
  setActiveTemplate: (template: TemplateType) => void;
  templateData: TemplateData;
  updateTemplateData: (data: Partial<TemplateData>) => void;
}

const defaultTemplateData: TemplateData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
  },
  experience: [],
  education: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
  },
  projects: [],
  certifications: [],
  interests: [],
};

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>('professional');
  const [templateData, setTemplateData] = useState<TemplateData>(defaultTemplateData);

  const updateTemplateData = (newData: Partial<TemplateData>) => {
    setTemplateData(prev => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <TemplateContext.Provider 
      value={{
        activeTemplate,
        setActiveTemplate,
        templateData,
        updateTemplateData,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTemplate() {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
} 