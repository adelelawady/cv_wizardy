import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { BasicTemplate } from '@/components/templates/BasicTemplate';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { CreativeTemplate } from '@/components/templates/CreativeTemplate';
import { ProfessionalTemplate } from '@/components/templates/ProfessionalTemplate';
import { MinimalistTemplate } from '@/components/templates/MinimalistTemplate';
import { ElegantTemplate } from '../templates/ElegantTemplate';
import { MechanicalTemplate } from '../templates/MechanicalTemplate';
import { SimpleTemplate } from '../templates/SimpleTemplate';
import { AccentTemplate } from '../templates/AccentTemplate';
import { CompactTemplate } from '../templates/CompactTemplate';
import { ExecutiveTemplate } from '../templates/ExecutiveTemplate';
import type { BasicTemplateData, ModernTemplateData, CreativeTemplateData, TemplateData } from '@/types/template';

interface TemplateBuilderProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}

export function TemplateBuilder({ containerRef }: TemplateBuilderProps) {
  const { activeTemplate, templateData } = useTemplate();

  const convertToBasicTemplate = (data: TemplateData): BasicTemplateData => ({
    ...data,
    skills: data.skills.technical.map(skill => skill.name)
  });

  const convertToModernTemplate = (data: TemplateData): ModernTemplateData => ({
    ...data,
    personalInfo: {
      ...data.personalInfo,
      summary: data.personalInfo.summary || ''
    },
    skills: {
      technical: data.skills.technical.map(skill => skill.name),
      soft: data.skills.soft.map(skill => skill.name)
    }
  });

  const convertToCreativeTemplate = (data: TemplateData): CreativeTemplateData => ({
    ...data,
    personalInfo: {
      ...data.personalInfo,
      portfolio: data.personalInfo.portfolio || ''
    },
    projects: data.projects || [],
    skills: {
      design: data.skills.technical.map(skill => skill.name),
      development: data.skills.soft.map(skill => skill.name),
      tools: data.skills.languages.map(skill => skill.name)
    }
  });

  const renderTemplate = () => {
    switch (activeTemplate) {
      case 'basic':
        return <BasicTemplate data={convertToBasicTemplate(templateData)} />;
      case 'modern':
        return <ModernTemplate data={convertToModernTemplate(templateData)} />;
      case 'creative':
        return <CreativeTemplate data={convertToCreativeTemplate(templateData)} />;
      case 'professional':
        return <ProfessionalTemplate data={templateData} />;
      case 'minimalist':
        return <MinimalistTemplate data={templateData} />;
      case 'elegant':
        return <ElegantTemplate data={templateData} />;
      case 'mechanical':
        return <MechanicalTemplate data={templateData} />;
      case 'simple':
        return <SimpleTemplate data={templateData} />;
      case 'accent':
        return <AccentTemplate data={templateData} />;
      case 'compact':
        return <CompactTemplate data={templateData} />;
      case 'executive':
        return <ExecutiveTemplate data={templateData} />;
      default:
        return <ProfessionalTemplate data={templateData} />;
    }
  };

  return (
    <div className="w-full h-full overflow-auto bg-gray-100 flex justify-center">
      <div 
        ref={containerRef}
        id="resume-template" 
        className="relative shadow-xl"
      >
        {renderTemplate()}
      </div>
    </div>
  );
} 