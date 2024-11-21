import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
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

  const handleTemplateSelect = (templateId: typeof templates[number]['id']) => {
    setActiveTemplate(templateId);
    navigate('/builder?tab=editor');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={cn(
            "relative overflow-hidden cursor-pointer group hover:border-primary transition-all",
            activeTemplate === template.id && "border-primary ring-2 ring-primary ring-offset-2"
          )}
          onClick={() => handleTemplateSelect(template.id as any)}
        >
          {/* Template Preview */}
          <div className="aspect-[210/297] relative overflow-hidden rounded-t-lg">
            <img
              src={template.thumbnail}
              alt={template.name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
            />
            {/* Selection Overlay */}
            {activeTemplate === template.id && (
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="bg-primary text-primary-foreground rounded-full p-2">
                  <Check className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>

          {/* Template Info */}
          <div className="p-4">
            <h3 className="font-semibold">{template.name}</h3>
            <p className="text-sm text-muted-foreground">{template.description}</p>
            <Button 
              className="w-full mt-4"
              variant={activeTemplate === template.id ? "default" : "outline"}
            >
              {activeTemplate === template.id ? "Selected" : "Use Template"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
} 