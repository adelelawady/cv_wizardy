import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Phone, Mail, Linkedin, MapPin, Briefcase, GraduationCap } from 'lucide-react';

interface ExecutiveTemplateProps {
  className?: string;
  data: TemplateData;
}

export function ExecutiveTemplate({ className, data }: ExecutiveTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans p-8", className)}>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">{data.personalInfo.name}</h1>
        <h2 className="text-xl text-gray-600 mt-1">{data.personalInfo.title}</h2>
        
        {/* Contact Information */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-gray-500" />
              <span>{data.personalInfo.linkedin}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary Section */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Experience
        </h2>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index} className="relative pl-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <div className="text-gray-600">{exp.company}, {exp.location}</div>
                </div>
                <div className="text-gray-500 text-sm">{exp.duration}</div>
              </div>
              <p className="text-gray-700 mt-2">{exp.description}</p>
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Education
        </h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index} className="relative pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <div className="text-gray-600">{edu.school}</div>
                </div>
                <div className="text-gray-500 text-sm">{edu.year}</div>
              </div>
              {edu.gpa && <div className="text-gray-600 mt-1">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-800 mb-2 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 