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

const skillLevelDescriptions = {
  1: 'Beginner',
  2: 'Elementary',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Expert',
} as const;

export function SkillsForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const addSkill = () => {
    const newSkill: Skill = { name: '', level: 3 };
    updateTemplateData({
      skills: {
        ...templateData.skills,
        technical: [...templateData.skills.technical, newSkill],
      },
    });
  };

  const removeSkill = (index: number) => {
    const newSkills = templateData.skills.technical.filter((_, i) => i !== index);
    updateTemplateData({
      skills: {
        ...templateData.skills,
        technical: newSkills,
      },
    });
  };

  const updateSkill = (
    index: number,
    field: keyof Skill,
    value: string | number
  ) => {
    const newSkills = [...templateData.skills.technical];
    newSkills[index] = {
      ...newSkills[index],
      [field]: value,
    };
    updateTemplateData({
      skills: {
        ...templateData.skills,
        technical: newSkills,
      },
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Skills</CardTitle>
        <Button
          onClick={addSkill}
          size="sm"
          variant="outline"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {templateData.skills.technical.map((skill, index) => (
          <div 
            key={index} 
            className="space-y-2 group relative bg-muted/50 p-4 rounded-lg hover:bg-muted/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(index, 'name', e.target.value)}
                  placeholder="Enter skill (e.g., JavaScript, Project Management, etc.)"
                  className="bg-background"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(index)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <Select
                  value={String(skill.level)}
                  onValueChange={(value) => updateSkill(index, 'level', Number(value))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(skillLevelDescriptions).map(([level, description]) => (
                      <SelectItem key={level} value={level}>
                        {description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Progress 
                  value={(skill.level || 3) * 20} 
                  className="w-20 h-2"
                />
              </div>
            </div>
          </div>
        ))}

        {templateData.skills.technical.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No skills added yet. Click "Add Skill" to get started.
          </div>
        )}
      </CardContent>
    </Card>
  );
} 