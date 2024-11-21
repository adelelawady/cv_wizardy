import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import type { Experience } from '@/types/template';

export function ExperienceForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const addExperience = () => {
    const newExperience: Experience = {
      title: '',
      company: '',
      location: '',
      duration: '',
      description: '',
    };
    updateTemplateData({
      experience: [...templateData.experience, newExperience],
    });
  };

  const removeExperience = (index: number) => {
    const newExperience = templateData.experience.filter((_, i) => i !== index);
    updateTemplateData({ experience: newExperience });
  };

  const updateExperience = (index: number, field: keyof Experience) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newExperience = [...templateData.experience];
    newExperience[index] = {
      ...newExperience[index],
      [field]: e.target.value,
    };
    updateTemplateData({ experience: newExperience });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Work Experience</CardTitle>
        <Button onClick={addExperience} size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {templateData.experience.map((exp, index) => (
          <div key={index} className="space-y-4 border-b pb-4 last:border-0">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input
                value={exp.title}
                onChange={updateExperience(index, 'title')}
                placeholder="Senior Software Engineer"
              />
            </div>
            <div className="space-y-2">
              <Label>Company</Label>
              <Input
                value={exp.company}
                onChange={updateExperience(index, 'company')}
                placeholder="Company Name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={exp.location}
                  onChange={updateExperience(index, 'location')}
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input
                  value={exp.duration}
                  onChange={updateExperience(index, 'duration')}
                  placeholder="2020 - Present"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={exp.description}
                onChange={updateExperience(index, 'description')}
                placeholder="Describe your responsibilities and achievements"
                rows={4}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 