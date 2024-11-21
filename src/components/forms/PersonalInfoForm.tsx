import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PersonalInfoForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const handleChange = (field: keyof typeof templateData.personalInfo) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateTemplateData({
      personalInfo: {
        ...templateData.personalInfo,
        [field]: e.target.value,
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={templateData.personalInfo.name}
            onChange={handleChange('name')}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            value={templateData.personalInfo.title}
            onChange={handleChange('title')}
            placeholder="Software Engineer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={templateData.personalInfo.email}
            onChange={handleChange('email')}
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={templateData.personalInfo.phone}
            onChange={handleChange('phone')}
            placeholder="+1 234 567 890"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            value={templateData.personalInfo.summary || ''}
            onChange={handleChange('summary')}
            placeholder="Brief overview of your professional background and goals"
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
} 