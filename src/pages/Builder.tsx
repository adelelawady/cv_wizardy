import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { TemplateBuilder } from '@/components/builder/TemplateBuilder';
import { TemplateSelector } from '@/components/builder/TemplateSelector';
import { PreviewModal } from '@/components/preview/PreviewModal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PersonalInfoForm } from '@/components/forms/PersonalInfoForm';
import { ExperienceForm } from '@/components/forms/ExperienceForm';
import { EducationForm } from '@/components/forms/EducationForm';
import { SkillsForm } from '@/components/forms/SkillsForm';
import { ProjectsForm } from '@/components/forms/ProjectsForm';
import { CertificationsForm } from '@/components/forms/CertificationsForm';
import { LanguagesForm } from '@/components/forms/LanguagesForm';
import { InterestsForm } from '@/components/forms/InterestsForm';
import { TemplateType, useTemplate } from '@/contexts/TemplateContext';
import { ChevronLeft, ChevronRight, Loader2, Download, Check, FileIcon, FileText, Image, Printer, BugIcon, X } from 'lucide-react';
import { exportToPDF, exportToImage, exportToWord, printTemplate } from '@/lib/export';
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';


const isDevelopment = import.meta.env.MODE === 'development';
const isProduction = import.meta.env.MODE === 'production';

const imageTemplateSrc=isProduction?'/cv_wizardy/templates/':'/templates/';

const formSteps = [
  { id: 'personal', title: 'Personal Info', component: PersonalInfoForm },
  { id: 'experience', title: 'Experience', component: ExperienceForm },
  { id: 'education', title: 'Education', component: EducationForm },
  { id: 'skills', title: 'Skills', component: SkillsForm },
  { id: 'languages', title: 'Languages', component: LanguagesForm },
  { id: 'interests', title: 'Interests', component: InterestsForm },
  { id: 'projects', title: 'Projects', component: ProjectsForm },
  { id: 'certifications', title: 'Certifications', component: CertificationsForm },
] as const;

const templates = [
  {
    id: 'professional' as const,
    name: 'Professional',
    description: 'Clean and modern design with a professional look',
  },
  {
    id: 'minimalist' as const,
    name: 'Minimalist',
    description: 'Simple and elegant design focused on content',
  },
  {
    id: 'creative' as const,
    name: 'Creative',
    description: 'Stand out with a unique and creative layout',
  },
  {
    id: 'modern' as const,
    name: 'Modern',
    description: 'Contemporary design with a professional edge',
  },
  {
    id: 'basic' as const,
    name: 'Basic',
    description: 'Traditional resume layout, perfect for ATS',
  },
  {
    id: 'elegant' as const,
    name: 'Elegant',
    description: 'Professional layout with a distinctive dark theme',
  },
  {
    id: 'mechanical' as const,
    name: 'Mechanical',
    description: 'Modern technical design with engineering focus',
  },
  {
    id: 'simple' as const,
    name: 'Simple',
    description: 'Clean and minimal design with perfect typography',
    thumbnail: '/templates/simple.png'
  },
  {
    id: 'accent' as const,
    name: 'Accent',
    description: 'Modern design with distinctive side accent',
    thumbnail: '/templates/accent.png'
  },
  {
    id: 'compact' as const,
    name: 'Compact',
    description: 'Clean and efficient layout with clear sections',
    thumbnail: '/templates/compact.png'
  },
  {
    id: 'executive' as const,
    name: 'Executive',
    description: 'Professional layout with clear sections and metrics',
    thumbnail: '/templates/executive.png'
  },
  {
    id: 'vibrant' as const,
    name: 'Vibrant',
    description: 'Modern dark theme with vibrant red accents',
    thumbnail: '/templates/vibrant.png'
  },
  {
    id: 'elegantSplit' as const,
    name: 'Elegant Split',
    description: 'Professional two-column layout with photo',
    thumbnail: '/templates/elegant-split.png'
  },
  {
    id: 'aquaSplit' as const,
    name: 'Aqua Split',
    description: 'Modern two-column layout with fresh aqua accent',
    thumbnail: '/templates/aqua-split.png'
  },
  {
    id: 'standard' as const,
    name: 'Standard',
    description: 'Traditional resume format with clean typography',
    thumbnail: '/templates/standard.png'
  },
  {
    id: 'coralModern' as const,
    name: 'Coral Modern',
    description: 'Clean and professional design with coral accents',
    thumbnail: '/templates/coral-modern.png'
  },
] as const;


const exportOptions = [
  {
    id: 'pdf',
    label: 'Export as PDF',
    icon: FileText,
    description: 'Save as a PDF document',
    disabled:false
  },
  {
    id: 'image',
    label: 'Export as Image',
    icon: Image,
    description: 'Save as a PNG image (NEED FIX)',
    disabled:true

  },
  {
    id: 'word',
    label: 'Export as Word',
    icon: FileIcon,
    description: 'Save as a DOCX document (NEED FIX)',
    disabled:true

  },
  {
    id: 'print',
    label: 'Print Resume',
    icon: Printer,
    description: 'Open print preview',
    disabled:false

  }
] as const;

export function Builder() {
  const { templateData, updateTemplateData, activeTemplate, setActiveTemplate } = useTemplate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'editor';
  const [currentStep, setCurrentStep] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { toast } = useToast();
  const templateRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(current => current + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
    }
  };

  const handleExport = async (format: 'pdf' | 'image' | 'word' | 'print') => {
    if (!templateRef.current) return;
    
    setIsExporting(true);
    try {
      switch (format) {
        case 'pdf':
          await exportToPDF('resume-template');
          break;
        case 'image':
          await exportToImage('resume-template');
          break;
        case 'word':
          await exportToWord('resume-template');
          break;
        case 'print':
          await printTemplate('resume-template');
          break;
      }
      
      if (format !== 'print') {
        toast({
          title: "Export successful",
          description: `Resume exported as ${format.toUpperCase()} file`,
        });
      }
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "There was an error exporting your resume",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  const CurrentFormComponent = formSteps[currentStep].component;

  const handleTemplateSelect = (templateId: TemplateType) => {
    setActiveTemplate(templateId);
    changeTab('editor');
  };
  const [activeTab, setActiveTab] = useState('editor'); // Default to 'editor'
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const handlePrint = () => {
    navigate('/print');
  };

  // Handle template selection from URL parameter
  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      // Validate that the template exists in our supported templates
      const isValidTemplate = [
        'professional',
        'minimalist',
        'creative',
        'modern',
        'basic',
        'elegant',
        'mechanical',
        'simple',
        'accent',
        'compact',
        'executive',
        'vibrant',
        'elegantSplit',
        'aquaSplit',
        'standard',
        'coralModern'
      ].includes(templateParam);

      if (isValidTemplate) {
        setActiveTemplate(templateParam as TemplateType);
      }
    }
  }, [searchParams, setActiveTemplate]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1800px] mx-auto px-2 py-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue={defaultTab} className="space-y-2">
          <div className="flex items-center justify-between">
            <TabsList>
            <TabsTrigger style={{    background: activeTab==='home'?'gainsboro':''}} onClick={()=>navigate('/')} value="home">Home</TabsTrigger>
              <TabsTrigger  style={{    background: activeTab==='editor'?'gainsboro':''}}  value="editor">Editor</TabsTrigger>
              <TabsTrigger  style={{    background: activeTab==='templates'?'gainsboro':''}}  value="templates">Templates</TabsTrigger>
            </TabsList>
            
            <div className="space-x-2">
              <Button 
                variant="outline"
                onClick={() => setPreviewOpen(true)}
              >
                Preview
              </Button>
              
              <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="default" disabled={isExporting}>
          {isExporting ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {exportOptions.map((option) => (
          <DropdownMenuItem
            disabled={option.disabled}
            key={option.id}
            onClick={() => handleExport(option.id)}
            className="flex flex-col items-start py-2 cursor-pointer"
          >
            <div className="flex items-center w-full">
              <option.icon className="w-4 h-4 mr-2 text-muted-foreground" />
             {option.disabled &&  
             <X /> } 
              <span className="font-medium">{option.label}</span>
            </div>
            <span className="text-xs text-muted-foreground ml-6">
              {option.description}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
            </div>
          </div>

          <TabsContent value="editor" className="space-y-2">
            <div className="grid grid-cols-12 gap-2 h-[calc(100vh-5rem)]">
              {/* Left sidebar - Form controls */}
              <div className="col-span-3 bg-background rounded-lg border flex flex-col h-[calc(100vh-6rem)]">
                {/* Step indicator - Fixed at top */}
                <div className="p-3 border-b shrink-0">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Step {currentStep + 1} of {formSteps.length}
                    </span>
                    <span className="font-medium">
                      {formSteps[currentStep].title}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ 
                        width: `${((currentStep + 1) / formSteps.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>

                {/* Form content - Scrollable */}
                <div className="flex-1 overflow-hidden">
                  <ScrollArea 
                    className="h-full px-4 py-4"
                    scrollHideDelay={0}
                  >
                    <CurrentFormComponent />
                  </ScrollArea>
                </div>

                {/* Navigation buttons - Fixed at bottom */}
                <div className="p-3 border-t bg-background mt-auto shrink-0">
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={currentStep === formSteps.length - 1}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Middle - Resume preview */}
              <div className="col-span-7 bg-muted rounded-lg overflow-hidden">
                <ScrollArea className="h-[calc(100vh-6rem)]">
                  <div className="p-6 flex justify-center min-h-full">
                    <div 
                      className="w-[210mm] bg-white shadow-xl transform scale-[0.75] origin-top"
                      style={{ 
                        marginBottom: 'calc(-297mm * 0.25)',
                        marginTop: '-1rem'
                      }}
                    >
                      <TemplateBuilder ref={templateRef} />
                    </div>
                  </div>
                </ScrollArea>
              </div>

              {/* Right sidebar - Quick template selector */}
              <div className="col-span-2 bg-background rounded-lg border h-[calc(100vh-6rem)]">
                <div className="h-full flex flex-col">
                  <h3 className="font-semibold p-3 border-b shrink-0">Templates</h3>
                  <ScrollArea className="flex-1 p-2">
                    <div className="space-y-1 pr-2">
                      {templates.map((template) => (
                        <button
                          key={template.id}
                          onClick={() => handleTemplateSelect(template.id)}
                          className={cn(
                            "w-full text-left px-2 py-1.5 rounded-lg text-sm transition-colors relative",
                            "hover:bg-accent hover:text-accent-foreground",
                            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                            activeTemplate === template.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium">{template.name}</span>
                              <p className="text-xs mt-0.5 line-clamp-2 opacity-80">
                                {template.description}
                              </p>
                            </div>
                            {activeTemplate === template.id && (
                              <Check className="w-4 h-4 shrink-0 ml-2" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid grid-cols-3 gap-6 p-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={cn(
                    "relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200",
                    activeTemplate === template.id
                      ? "border-primary shadow-lg"
                      : "border-transparent hover:border-primary/50"
                  )}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  {/* Template Preview Image */}
                  <div className="aspect-[210/297] relative">
                    <img
                      src={imageTemplateSrc+template.id+'.png'}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white p-4">
                      <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                      <p className="text-sm text-center text-gray-200">
                        {template.description}
                      </p>
                      <Button 
                        className="mt-4"
                        variant="outline"
                        onClick={() => handleTemplateSelect(template.id)}
                      >
                        Use Template
                      </Button>
                    </div>

                    {/* Selected Indicator */}
                    {activeTemplate === template.id && (
                      <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Template Info (Below Image) */}
                  <div className="p-4 bg-white">
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {template.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>







          </TabsContent>
























        </Tabs>
      </div>

      <PreviewModal 
        open={previewOpen} 
        onOpenChange={setPreviewOpen}
      />
    </div>
  );
}