import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { TemplateProps } from '@/types/template';

export function ElegantSplitTemplate({ className, data }: TemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white grid grid-cols-[250px_1fr]", className)}>
      {/* Left Column */}
      <div className="bg-white p-8 print:break-inside-avoid">
        {/* Photo Container */}
        <div className="aspect-square w-full mb-6 overflow-hidden rounded-lg bg-gray-100">
          {data.personalInfo.photo && (
            <img 
              src={data.personalInfo.photo} 
              alt={data.personalInfo.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Contact Section */}
        <div className="space-y-4 text-gray-700">
          <h2 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-4">Contact</h2>
          
          {data.personalInfo.email && (
            <div className="flex items-start gap-2 text-sm">
              <Mail className="w-4 h-4 mt-1" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          
          {data.personalInfo.phone && (
            <div className="flex items-start gap-2 text-sm">
              <Phone className="w-4 h-4 mt-1" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          
          {data.personalInfo.location && (
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 mt-1" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>

        {/* Additional Skills */}
        {data.skills && (
          <div className="mt-8">
            <h2 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-4">
              Additional Skills
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {Object.entries(data.skills).map(([category, skills]) => 
                skills.map((skill, index) => (
                  <li key={`${category}-${index}`} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    {skill.name}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="p-8 bg-gray-50">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {data.personalInfo.name}
          </h1>
          <h2 className="text-xl text-gray-600">
            {data.personalInfo.title}
          </h2>
        </div>

        {/* Professional Summary */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{exp.title}</h3>
                    <div className="text-gray-600">{exp.company}</div>
                  </div>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <div className="text-gray-600">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.year}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 