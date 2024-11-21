import React from 'react';
import { cn } from "@/lib/utils";
import type { ModernTemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ModernTemplateProps {
  className?: string;
  data: ModernTemplateData;
}

export function ModernTemplate({ className, data }: ModernTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white", className)}>
      {/* Header */}
      <div className="px-12 py-8 border-b-2">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {data.personalInfo.name}
          </h1>
          <p className="mt-2 text-xl text-gray-600">{data.personalInfo.title}</p>
          
          {/* Contact Grid */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-2 text-gray-600">
                <Linkedin className="w-4 h-4" />
                <a 
                  href={data.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  LinkedIn Profile
                </a>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <a 
                  href={data.personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Portfolio Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-12 py-8">
        <div className="max-w-3xl space-y-8">
          {/* Professional Summary */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Professional Summary
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Work Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <div className="text-gray-600 mb-2">{exp.company}</div>
                  <p className="text-gray-600">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-gray-700 font-medium mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <div className="text-gray-600">{edu.school}</div>
                    {edu.gpa && (
                      <div className="text-sm text-gray-500 mt-1">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                  <div className="text-gray-500">{edu.year}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Certifications
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">{cert.name}</h3>
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
    </div>
  );
} 