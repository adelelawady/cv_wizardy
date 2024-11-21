import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface AquaSplitTemplateProps {
  className?: string;
  data: TemplateData;
}

export function AquaSplitTemplate({ className, data }: AquaSplitTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans grid grid-cols-[1fr_2fr]", className)}>
      {/* Left Sidebar */}
      <div className="bg-[#2A9D8F] text-white p-8">
        {/* Profile Photo Area */}
        <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
          {/* Photo placeholder */}
          <span className="text-4xl">
            {data.personalInfo.name.charAt(0)}
          </span>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          {data.personalInfo.email && (
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn Profile</span>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="space-y-2">
            {data.skills.technical.map((skill, index) => (
              <div key={index} className="bg-white/10 px-3 py-2 rounded-md">
                <div className="text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        {data.skills.languages.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <div className="space-y-2">
              {data.skills.languages.map((language, index) => (
                <div key={index} className="bg-white/10 px-3 py-2 rounded-md">
                  <div className="text-sm">{language.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-8 bg-white">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {data.personalInfo.name}
          </h1>
          <h2 className="text-xl text-[#2A9D8F]">{data.personalInfo.title}</h2>
          {data.personalInfo.summary && (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          )}
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#2A9D8F]">
            Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="print:break-inside-avoid">
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <div className="text-[#2A9D8F] font-medium">{exp.company}</div>
                <div className="text-gray-600 text-sm mb-2">{exp.duration}</div>
                <p className="text-gray-700">{exp.description}</p>
                {exp.achievements && (
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#2A9D8F]">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="print:break-inside-avoid">
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <div className="text-[#2A9D8F]">{edu.school}</div>
                <div className="text-gray-600 text-sm">{edu.year}</div>
                {edu.gpa && (
                  <div className="text-gray-600 text-sm">GPA: {edu.gpa}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 