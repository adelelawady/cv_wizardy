import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface StandardTemplateProps {
  className?: string;
  data: TemplateData;
}

export function StandardTemplate({ className, data }: StandardTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans p-8", className)}>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[#8B0000] mb-2">{data.personalInfo.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</h2>
        
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          {data.personalInfo.location && (
            <span>{data.personalInfo.location}</span>
          )}
          {data.personalInfo.phone && (
            <span>• {data.personalInfo.phone}</span>
          )}
          {data.personalInfo.email && (
            <span>• {data.personalInfo.email}</span>
          )}
          {data.personalInfo.linkedin && (
            <span>• {data.personalInfo.linkedin}</span>
          )}
        </div>
      </header>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#8B0000] border-b border-gray-300 mb-4">WORK EXPERIENCE</h2>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="font-medium">{exp.company}, {exp.location}</h3>
                  <p className="text-gray-600 italic text-sm">{exp.description}</p>
                </div>
                <span className="text-gray-600">{exp.duration}</span>
              </div>
              <h4 className="font-medium mb-2">{exp.title}</h4>
              {exp.achievements && (
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-[#8B0000] border-b border-gray-300 mb-4">EDUCATION</h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <h3 className="font-medium">{edu.school}</h3>
                <p className="text-gray-700">{edu.degree}</p>
              </div>
              <span className="text-gray-600">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg font-bold text-[#8B0000] border-b border-gray-300 mb-4">SKILLS</h2>
        <div className="space-y-2">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-medium capitalize mb-1">
                {category.charAt(0).toUpperCase() + category.slice(1)}:
              </h3>
              <p className="text-gray-700">
                {skills.map(skill => skill.name).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 