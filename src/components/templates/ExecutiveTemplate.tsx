import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { LinkedIn } from 'lucide-react';

interface ExecutiveTemplateProps {
  className?: string;
  data: TemplateData;
}

export function ExecutiveTemplate({ className, data }: ExecutiveTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans", className)}>
      {/* Header */}
      <div className="px-8 py-6">
        <h1 className="text-4xl font-bold text-[#2D1674]">{data.personalInfo.name}</h1>
        <div className="bg-[#2D1674] text-white px-4 py-2 mt-2 inline-block">
          <h2 className="text-lg">{data.personalInfo.title}</h2>
        </div>
        
        {/* Contact Info */}
        <div className="mt-4 flex flex-wrap gap-6 text-sm">
          {data.personalInfo.email && (
            <span>{data.personalInfo.email}</span>
          )}
          {data.personalInfo.phone && (
            <span>{data.personalInfo.phone}</span>
          )}
          {data.personalInfo.location && (
            <span>{data.personalInfo.location}</span>
          )}
          {data.personalInfo.linkedin && (
            <a href={data.personalInfo.linkedin} className="text-[#2D1674] hover:underline">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-[250px_1fr] gap-6">
        {/* Left Sidebar */}
        <div className="bg-[#2D1674] text-white p-6 min-h-full">
          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 uppercase">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="text-sm opacity-80">{edu.year}</div>
                <div className="font-semibold">{edu.degree}</div>
                <div>{edu.school}</div>
                {edu.gpa && <div className="text-sm">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 uppercase">Skills</h2>
            <ul className="space-y-2">
              {data.skills.technical.map((skill, index) => (
                <li key={index}>• {skill.name}</li>
              ))}
            </ul>
          </section>

          {/* Certifications Section */}
          {data.certifications && data.certifications.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 uppercase">Certifications</h2>
              {data.certifications.map((cert, index) => (
                <div key={index} className="mb-3">
                  <div className="font-semibold">{cert.name}</div>
                  <div className="text-sm">{cert.issuer}</div>
                  <div className="text-sm opacity-80">{cert.date}</div>
                </div>
              ))}
            </section>
          )}

          {/* Awards Section */}
          {data.awards && (
            <section>
              <h2 className="text-xl font-bold mb-4 uppercase">Awards</h2>
              <ul className="space-y-2">
                {data.awards.map((award, index) => (
                  <li key={index}>• {award}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Career Summary */}
          {data.personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#2D1674] mb-4">Career Summary</h2>
              <p className="text-gray-700">{data.personalInfo.summary}</p>
            </section>
          )}

          {/* Work Experience */}
          <section>
            <h2 className="text-xl font-bold text-[#2D1674] mb-6">Work Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800">{exp.title}</h3>
                    <span className="text-gray-600">{exp.duration}</span>
                  </div>
                  <div className="text-[#2D1674] font-semibold mb-2">
                    {exp.company} | {exp.location}
                  </div>
                  <p className="text-gray-700 mb-2">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="list-disc list-inside text-gray-700">
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
    </div>
  );
} 