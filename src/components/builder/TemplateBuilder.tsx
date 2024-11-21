import React, { forwardRef } from 'react';
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
import { VibrantTemplate } from '../templates/VibrantTemplate';
import { ElegantSplitTemplate } from '@/components/templates/ElegantSplitTemplate';
import { AquaSplitTemplate } from '@/components/templates/AquaSplitTemplate';
import { StandardTemplate } from '@/components/templates/StandardTemplate';
import { CoralModernTemplate } from '../templates/CoralModernTemplate';
import type { BasicTemplateData, ModernTemplateData, CreativeTemplateData, TemplateData } from '@/types/template';

interface TemplateBuilderProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const TemplateBuilder = forwardRef<HTMLDivElement, TemplateBuilderProps>(
  ({ containerRef }, ref) => {
    const { activeTemplate, templateData } = useTemplate();

    console.log("ref",ref);
    console.log("activeTemplate",activeTemplate);
    console.log("containerRef",containerRef);

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

    const renderTemplate = (template: string, data: TemplateData) => {
      switch (template) {
        case 'basic':
          return <BasicTemplate className='h-full'  data={convertToBasicTemplate(data)} />;
        case 'modern':
          return <ModernTemplate className='h-full' data={convertToModernTemplate(data)} />;
        case 'creative':
          return <CreativeTemplate className='h-full' data={convertToCreativeTemplate(data)} />;
        case 'professional':
          return <ProfessionalTemplate className='h-full' data={data} />;
        case 'minimalist':
          return <MinimalistTemplate className='h-full' data={data} />;
        case 'elegant':
          return <ElegantTemplate className='h-full'  data={data} />;
        case 'mechanical':
          return <MechanicalTemplate className='h-full' data={data} />;
        case 'simple':
          return <SimpleTemplate className='h-full' data={data} />;
        case 'accent':
          return <AccentTemplate className='h-full' data={data} />;
        case 'compact':
          return <CompactTemplate className='h-full'  data={data} />;
        case 'executive':
          return <ExecutiveTemplate className='h-full' data={data} />;
        case 'vibrant':
          return <VibrantTemplate className='h-full' data={data} />;
        case 'elegantSplit':
          return <ElegantSplitTemplate  className='h-full' data={data} />;
        case 'aquaSplit':
          return <AquaSplitTemplate  className='h-full' data={data} />;
        case 'standard':
          return <StandardTemplate className='h-full'  data={data} />;
        case 'coralModern':
          return <CoralModernTemplate className='h-full'  data={data} />;
        default:
          return null;
      }
    };

    return (
      <div 
        ref={ref || containerRef}
        id="resume-template"
        className="print:shadow-none print:m-0 bg-white h-full"
        style={{
          width: '210mm',
          minHeight: '297mm',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {renderTemplate(activeTemplate, templateData)}
      </div>
    );
  }
);

TemplateBuilder.displayName = 'TemplateBuilder'; 