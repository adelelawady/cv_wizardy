import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import type { Certification } from '@/types/template';

export function CertificationsForm() {
  const { templateData, updateTemplateData } = useTemplate();

  const addCertification = () => {
    const newCertification: Certification = {
      name: '',
      issuer: '',
      date: '',
    };
    updateTemplateData({
      certifications: [...(templateData.certifications || []), newCertification],
    });
  };

  const removeCertification = (index: number) => {
    const newCertifications = templateData.certifications?.filter((_, i) => i !== index);
    updateTemplateData({ certifications: newCertifications });
  };

  const updateCertification = (index: number, field: keyof Certification) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCertifications = [...(templateData.certifications || [])];
    newCertifications[index] = {
      ...newCertifications[index],
      [field]: e.target.value,
    };
    updateTemplateData({ certifications: newCertifications });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Certifications</CardTitle>
        <Button onClick={addCertification} size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Certification
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {(templateData.certifications || []).map((cert, index) => (
          <div key={index} className="space-y-4 border-b pb-4 last:border-0">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCertification(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Certification Name</Label>
              <Input
                value={cert.name}
                onChange={updateCertification(index, 'name')}
                placeholder="AWS Solutions Architect"
              />
            </div>
            <div className="space-y-2">
              <Label>Issuing Organization</Label>
              <Input
                value={cert.issuer}
                onChange={updateCertification(index, 'issuer')}
                placeholder="Amazon Web Services"
              />
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <Input
                value={cert.date}
                onChange={updateCertification(index, 'date')}
                placeholder="March 2024"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 