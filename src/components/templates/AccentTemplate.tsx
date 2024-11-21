import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface AccentTemplateProps {
  className?: string;
  data: TemplateData;
}

export function AccentTemplate({ className, data }: AccentTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white font-sans grid grid-cols-[12px_1fr]", className)}>
      {/* Left Accent Bar */}
      <div className="bg-cyan-500 h-full" />

      <div className="flex-1">
        {/* Header Section */}
        <header className="p-8 grid grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{data.personalInfo.name}</h1>
            <h2 className="text-lg text-cyan-600 mt-1">{data.personalInfo.title}</h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-right">
            {data.personalInfo.email && (
              <div className="flex items-center justify-end gap-2">
                <span>{data.personalInfo.email}</span>
                <Mail className="w-4 h-4 text-cyan-600" />
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center justify-end gap-2">
                <span>{data.personalInfo.phone}</span>
                <Phone className="w-4 h-4 text-cyan-600" />
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center justify-end gap-2">
                <span>{data.personalInfo.location}</span>
                <MapPin className="w-4 h-4 text-cyan-600" />
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center justify-end gap-2">
                <a href={data.personalInfo.linkedin} className="hover:text-cyan-600">
                  LinkedIn Profile
                </a>
                <Linkedin className="w-4 h-4 text-cyan-600" />
              </div>
            )}
          </div>
        </header>

        <main className="px-8 pb-8">
          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-cyan-200 pb-2">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index} className="grid grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="font-semibold text-slate-800">{exp.title}</h3>
                    <div className="text-cyan-600">{exp.company}</div>
                    <p className="mt-2 text-sm text-slate-600">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="text-sm text-slate-500">{exp.duration}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-cyan-200 pb-2">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.skills).map(([category, skills]) => (
                skills.map((skill, index) => (
                  <span
                    key={`${category}-${index}`}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-cyan-200 pb-2">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="grid grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="font-semibold text-slate-800">{edu.degree}</h3>
                    <div className="text-cyan-600">{edu.school}</div>
                    {edu.gpa && (
                      <div className="text-sm text-slate-500 mt-1">GPA: {edu.gpa}</div>
                    )}
                  </div>
                  <div className="text-sm text-slate-500">{edu.year}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          {data.skills.languages && data.skills.languages.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-cyan-200 pb-2">
                LANGUAGES
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.skills.languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-700">{language.name}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={cn(
                            "w-2 h-2 rounded-full",
                            level <= (language.level || 0)
                              ? "bg-cyan-500"
                              : "bg-slate-200"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
} 