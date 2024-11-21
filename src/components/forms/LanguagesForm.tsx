import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Skill } from '@/types/template';

const languageLevels = {
  1: 'Basic',
  2: 'Conversational',
  3: 'Professional',
  4: 'Fluent',
  5: 'Native',
} as const;

export function LanguagesForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const addLanguage = () => {
    const newLanguage: Skill = { name: '', level: 3 };
    updateTemplateData({
      skills: {
        ...templateData.skills,
        languages: [...templateData.skills.languages, newLanguage],
      },
    });
  };

  const removeLanguage = (index: number) => {
    const newLanguages = templateData.skills.languages.filter((_, i) => i !== index);
    updateTemplateData({
      skills: {
        ...templateData.skills,
        languages: newLanguages,
      },
    });
  };

  const updateLanguage = (
    index: number,
    field: keyof Skill,
    value: string | number
  ) => {
    const newLanguages = [...templateData.skills.languages];
    newLanguages[index] = {
      ...newLanguages[index],
      [field]: value,
    };
    updateTemplateData({
      skills: {
        ...templateData.skills,
        languages: newLanguages,
      },
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Languages</CardTitle>
        <Button
          onClick={addLanguage}
          size="sm"
          variant="outline"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Language
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {templateData.skills.languages.map((language, index) => (
          <div 
            key={index} 
            className="space-y-2 group relative bg-muted/50 p-4 rounded-lg hover:bg-muted/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <Input
                  value={language.name}
                  onChange={(e) => updateLanguage(index, 'name', e.target.value)}
                  placeholder="Enter language (e.g., English, Spanish, etc.)"
                  className="bg-background"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeLanguage(index)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <Select
                  value={String(language.level)}
                  onValueChange={(value) => updateLanguage(index, 'level', Number(value))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(languageLevels).map(([level, description]) => (
                      <SelectItem key={level} value={level}>
                        {description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Progress 
                  value={(language.level || 3) * 20} 
                  className="w-20 h-2"
                />
              </div>
            </div>
          </div>
        ))}

        {templateData.skills.languages.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No languages added yet. Click "Add Language" to get started.
          </div>
        )}
      </CardContent>
    </Card>
  );
} 