import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import type { Education } from '@/types/template';

export function EducationForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const addEducation = () => {
    const newEducation: Education = {
      degree: '',
      school: '',
      location: '',
      year: '',
      gpa: '',
    };
    updateTemplateData({
      education: [...templateData.education, newEducation],
    });
  };

  const removeEducation = (index: number) => {
    const newEducation = templateData.education.filter((_, i) => i !== index);
    updateTemplateData({ education: newEducation });
  };

  const updateEducation = (index: number, field: keyof Education) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newEducation = [...templateData.education];
    newEducation[index] = {
      ...newEducation[index],
      [field]: e.target.value,
    };
    updateTemplateData({ education: newEducation });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Education</CardTitle>
        <Button onClick={addEducation} size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Education
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {templateData.education.map((edu, index) => (
          <div key={index} className="space-y-4 border-b pb-4 last:border-0">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Degree</Label>
              <Input
                value={edu.degree}
                onChange={updateEducation(index, 'degree')}
                placeholder="Bachelor of Science in Computer Science"
              />
            </div>
            <div className="space-y-2">
              <Label>School</Label>
              <Input
                value={edu.school}
                onChange={updateEducation(index, 'school')}
                placeholder="University Name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={edu.location}
                  onChange={updateEducation(index, 'location')}
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-2">
                <Label>Year</Label>
                <Input
                  value={edu.year}
                  onChange={updateEducation(index, 'year')}
                  placeholder="2020 - 2024"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>GPA (Optional)</Label>
              <Input
                value={edu.gpa}
                onChange={updateEducation(index, 'gpa')}
                placeholder="3.8/4.0"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 