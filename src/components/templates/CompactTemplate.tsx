import { cn } from "@/lib/utils";
import type { CompactTemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface CompactTemplateProps {
  className?: string;
  data: CompactTemplateData;
}

export function CompactTemplate({ className, data }: CompactTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans", className)}>
      {/* Header with two columns */}
      <div className="grid grid-cols-[1fr_2fr] bg-slate-700 text-white">
        {/* Left column - Name and title */}
        <div className="p-8 bg-slate-800">
          <h1 className="text-4xl font-light mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl text-slate-300">{data.personalInfo.title}</p>
        </div>
        
        {/* Right column - Summary/Objective */}
        <div className="p-8">
          <h2 className="text-xl mb-3 font-medium">SUMMARY/OBJECTIVE</h2>
          <p className="text-slate-200 text-sm leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-[1fr_2fr]">
        {/* Left sidebar */}
        <div className="bg-slate-100 p-8 space-y-8">
          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Phone:</span>
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Email:</span>
                <a href={`mailto:${data.personalInfo.email}`} className="text-blue-600 hover:underline">
                  {data.personalInfo.email}
                </a>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Address:</span>
                {data.personalInfo.location}
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600">LinkedIn:</span>
                <a href={data.personalInfo.linkedin} className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-lg font-medium mb-4 text-slate-800 border-b pb-2">SKILLS</h2>
            <ul className="space-y-2 text-sm">
              {data.skills.technical.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <div>
              <h2 className="text-lg font-medium mb-4 text-slate-800 border-b pb-2">
                CERTIFICATIONS/LICENSES
              </h2>
              <ul className="space-y-2 text-sm">
                {data.certifications.map((cert, index) => (
                  <li key={index}>
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-slate-600">{cert.issuer}</div>
                    <div className="text-slate-500 text-xs">{cert.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Main content area */}
        <div className="p-8 space-y-8">
          {/* Work Experience */}
          <section>
            <h2 className="text-lg font-medium mb-6 text-slate-800 border-b pb-2">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-slate-800">
                      {exp.title} // {exp.company}
                    </h3>
                    <span className="text-slate-600 text-sm">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-slate-600">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
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
          <section>
            <h2 className="text-lg font-medium mb-6 text-slate-800 border-b pb-2">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <div className="text-slate-600">
                    {edu.school}, {edu.location}
                  </div>
                  <div className="font-medium text-slate-800">{edu.degree}</div>
                  <div className="text-sm text-slate-500">{edu.year}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 