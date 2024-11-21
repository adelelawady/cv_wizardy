import React from 'react';
import { cn } from "@/lib/utils";
import type { ProfessionalTemplateData } from "@/types/template";
import { TemplateStructure } from './structure/TemplateStructure';
import { Section } from './structure/Section';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Folder,
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

interface ProfessionalTemplateProps {
  className?: string;
  data: ProfessionalTemplateData;
}

export function ProfessionalTemplate({ className, data }: ProfessionalTemplateProps) {
  const Header = (
    <header className="bg-slate-800 text-white px-8 py-6 print:break-inside-avoid">
      <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
      <p className="text-xl mt-1 text-slate-200">{data.personalInfo.title}</p>
      <div className="flex gap-4 mt-3 text-sm text-slate-300">
        <span className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          {data.personalInfo.email}
        </span>
        <span className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          {data.personalInfo.phone}
        </span>
        {data.personalInfo.location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {data.personalInfo.location}
          </span>
        )}
      </div>
    </header>
  );

  const MainContent = (
    <div className="p-8 print:break-inside-avoid">
      {data.personalInfo.summary && (
        <Section title="Professional Summary">
          <p className="text-slate-600">{data.personalInfo.summary}</p>
        </Section>
      )}

      <Section title="Work Experience" icon={<Briefcase className="w-5 h-5" />}>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4 last:mb-0 print:break-inside-avoid">
            <h3 className="font-medium text-slate-800">{exp.title}</h3>
            <div className="text-slate-600">
              {exp.company} | {exp.duration}
            </div>
            <p className="mt-2 text-slate-700">{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-slate-600">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>

      {data.projects && data.projects.length > 0 && (
        <Section title="Projects" icon={<Folder className="w-5 h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((project, index) => (
              <div 
                key={index} 
                className="p-4 bg-slate-50 rounded-lg print:break-inside-avoid"
              >
                <h3 className="font-medium text-slate-800">{project.title}</h3>
                <p className="text-slate-600 mt-1">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );

  const Sidebar = (
    <div className="p-8 bg-slate-50 print:break-inside-avoid">
      <Section title="Skills" icon={<Award className="w-5 h-5" />}>
        {Object.entries(data.skills).map(([category, skills]) => (
          <div key={category} className="mb-4 last:mb-0 print:break-inside-avoid">
            <h3 className="font-medium text-slate-700 mb-2 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-slate-600">{skill.name}</span>
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full">
                    <div 
                      className="h-full bg-slate-600 rounded-full"
                      style={{ width: `${(skill.level || 0) * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Education" icon={<GraduationCap className="w-5 h-5" />}>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3 last:mb-0 print:break-inside-avoid">
            <h3 className="font-medium text-slate-800">{edu.degree}</h3>
            <div className="text-slate-600">
              {edu.school} | {edu.year}
            </div>
            {edu.gpa && (
              <div className="text-sm text-slate-500 mt-1">
                GPA: {edu.gpa}
              </div>
            )}
          </div>
        ))}
      </Section>

      {data.certifications && data.certifications.length > 0 && (
        <Section title="Certifications" icon={<Award className="w-5 h-5" />}>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-3 last:mb-0 print:break-inside-avoid">
              <h3 className="font-medium text-slate-800">{cert.name}</h3>
              <div className="text-slate-600">
                {cert.issuer} | {cert.date}
              </div>
            </div>
          ))}
        </Section>
      )}
    </div>
  );

  return (
    <TemplateStructure
      className={cn(
        "print:min-h-0 print:h-auto print:overflow-visible",
        className
      )}
      header={Header}
      main={MainContent}
      sidebar={Sidebar}
      variant="two-column"
    />
  );
} 