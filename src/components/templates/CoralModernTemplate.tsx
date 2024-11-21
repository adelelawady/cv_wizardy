import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin } from 'lucide-react';

interface CoralModernTemplateProps {
  className?: string;
  data: TemplateData;
}

export function CoralModernTemplate({ className, data }: CoralModernTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans", className)}>
      {/* Header with coral background */}
      <div className="bg-[#FF6F61] text-white px-8 py-12">
        <h1 className="text-5xl font-light tracking-wide text-center mb-4">
          {data.personalInfo.name}
        </h1>
        
        {/* Contact Info */}
        <div className="flex justify-center gap-8 text-sm mt-4">
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Summary Statement */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#FF6F61] mb-2">SUMMARY STATEMENT</h2>
            <p className="text-gray-700 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Core Qualifications */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-[#FF6F61] mb-2">CORE QUALIFICATIONS</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.technical.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF6F61] rounded-full" />
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-[#FF6F61] mb-2">EDUCATION</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <span className="text-gray-600">{edu.year}</span>
                </div>
                <p className="text-gray-700">{edu.school}</p>
                {edu.location && (
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-lg font-semibold text-[#FF6F61] mb-2">WORK EXPERIENCE</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-gray-800">{exp.title}</h3>
                  <span className="text-gray-600">{exp.duration}</span>
                </div>
                <p className="text-gray-700 mb-2">{exp.company}, {exp.location}</p>
                <p className="text-gray-600 mb-2">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 