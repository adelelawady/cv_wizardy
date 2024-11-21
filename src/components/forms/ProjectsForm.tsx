import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Link as LinkIcon } from 'lucide-react';
import type { Project } from '@/types/template';

export function ProjectsForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const addProject = () => {
    const newProject: Project = {
      title: '',
      description: '',
      technologies: [],
      link: '',
    };
    updateTemplateData({
      projects: [...(templateData.projects || []), newProject],
    });
  };

  const removeProject = (index: number) => {
    const newProjects = templateData.projects?.filter((_, i) => i !== index);
    updateTemplateData({ projects: newProjects });
  };

  const updateProject = (index: number, field: keyof Project) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newProjects = [...(templateData.projects || [])];
    newProjects[index] = {
      ...newProjects[index],
      [field]: field === 'technologies' 
        ? e.target.value.split(',').map(tech => tech.trim())
        : e.target.value,
    };
    updateTemplateData({ projects: newProjects });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projects</CardTitle>
        <Button onClick={addProject} size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {(templateData.projects || []).map((project, index) => (
          <div key={index} className="space-y-4 border-b pb-4 last:border-0">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeProject(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Project Title</Label>
              <Input
                value={project.title}
                onChange={updateProject(index, 'title')}
                placeholder="Project Name"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={project.description}
                onChange={updateProject(index, 'description')}
                placeholder="Describe your project"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Technologies</Label>
              <Input
                value={project.technologies.join(', ')}
                onChange={updateProject(index, 'technologies')}
                placeholder="React, TypeScript, Node.js"
              />
              <p className="text-xs text-muted-foreground">
                Separate technologies with commas
              </p>
            </div>
            <div className="space-y-2">
              <Label>Project Link</Label>
              <div className="relative">
                <LinkIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  value={project.link}
                  onChange={updateProject(index, 'link')}
                  placeholder="https://..."
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 