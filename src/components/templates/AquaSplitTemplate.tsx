import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin } from 'lucide-react';

interface AquaSplitTemplateProps {
  className?: string;
  data: TemplateData;
}

export function AquaSplitTemplate({ className, data }: AquaSplitTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans grid grid-cols-[2fr_1fr]", className)}>
      {/* Left Column - Main Content */}
      <div className="p-12 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.personalInfo.name}</h1>
        
        {/* Personal Profile */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Personal profile</h2>
          <p className="text-gray-600 leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Work experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">
                  {exp.title}, {exp.company}, {exp.location}, {exp.duration}
                </h3>
                <p className="text-gray-600 mt-2">{exp.description}</p>
                {exp.achievements && (
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="italic">{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <div className="space-y-2">
            {data.certifications?.map((cert, index) => (
              <div key={index}>
                <div className="font-medium">{cert.name}</div>
                <div className="text-gray-600">
                  {cert.issuer}, {cert.date}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column - Sidebar */}
      <div className="bg-cyan-500 text-white p-8">
        {/* Personal Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Personal details</h2>
          <div className="space-y-2">
            <div>
              <div className="font-medium">Name</div>
              <div>{data.personalInfo.name}</div>
            </div>
            <div>
              <div className="font-medium">Address</div>
              <div>{data.personalInfo.location}</div>
            </div>
            <div>
              <div className="font-medium">Phone number</div>
              <div>{data.personalInfo.phone}</div>
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div>{data.personalInfo.email}</div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="font-medium">{edu.degree}</div>
                <div>{edu.school}</div>
                <div>{edu.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4">
            {Object.entries(data.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-medium capitalize mb-2">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="space-y-1">
                  {skills.map((skill, index) => (
                    <div key={index} className="text-cyan-50">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="space-y-2">
            {data.skills.languages.map((lang, index) => (
              <div key={index}>
                <div className="font-medium">{lang.name}</div>
                <div className="text-cyan-50">
                  {lang.level ? `Level ${lang.level}` : 'Fluent'}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 