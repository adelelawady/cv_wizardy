import React from 'react';
import { cn } from "@/lib/utils";
import type { BasicTemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

interface BasicTemplateProps {
  className?: string;
  data: BasicTemplateData;
}

export function BasicTemplate({ className, data }: BasicTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans", className)}>
      {/* Header */}
      <div className="border-b-4 border-gray-900 px-12 pt-12 pb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          {data.personalInfo.name}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
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

      <div className="px-12 py-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-4 border-l-2 border-gray-200 hover:border-gray-400 transition-colors"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <div className="text-gray-700 font-medium mb-2">{exp.company}</div>
                <p className="text-gray-600">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600 text-sm">
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
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <div className="text-gray-600">{edu.school}</div>
                  {edu.gpa && (
                    <div className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</div>
                  )}
                </div>
                <div className="text-gray-500">{edu.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <div className="text-gray-600 text-sm mt-1">
                    {cert.issuer} • {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
} 