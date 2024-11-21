import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';

const templates = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and modern design with a professional look',
    thumbnail: '/templates/professional.png'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and elegant design focused on content',
    thumbnail: '/templates/minimalist.png'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with a unique and creative layout',
    thumbnail: '/templates/creative.png'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary design with a professional edge',
    thumbnail: '/templates/modern.png'
  },
  {
    id: 'basic',
    name: 'Basic',
    description: 'Traditional resume layout, perfect for ATS',
    thumbnail: '/templates/basic.png'
  },
] as const;

export function TemplateSelector() {
  const { activeTemplate, setActiveTemplate } = useTemplate();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTemplateSelect = (templateId: TemplateType) => {
    setActiveTemplate(templateId);
    setSearchParams({ template: templateId }, { replace: true });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={cn(
            "cursor-pointer hover:shadow-md transition-shadow",
            activeTemplate === template.id && "ring-2 ring-primary"
          )}
          onClick={() => handleTemplateSelect(template.id)}
        >
          <div className="aspect-[210/297] relative overflow-hidden">
            <img
              src={template.thumbnail}
              alt={template.name}
              className="w-full h-full object-cover"
            />
            {activeTemplate === template.id && (
              <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                <Check className="w-4 h-4" />
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium">{template.name}</h3>
            <p className="text-sm text-muted-foreground">{template.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
} 