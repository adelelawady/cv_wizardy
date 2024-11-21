import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface MechanicalTemplateProps {
  className?: string;
  data: TemplateData;
}

export function MechanicalTemplate({ className, data }: MechanicalTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-slate-100 font-sans", className)}>
      {/* Header Section */}
      <div className="bg-slate-700 text-white p-8">
        <h1 className="text-4xl font-light tracking-wide mb-2">
          {data.personalInfo.name}
        </h1>
        <p className="text-slate-300 text-lg">
          {data.personalInfo.title}
        </p>
      </div>

      <div className="grid grid-cols-12 min-h-[calc(297mm-8rem)]">
        {/* Left Sidebar */}
        <div className="col-span-4 bg-slate-600 text-white p-6 space-y-8">
          {/* About Me */}
          <section>
            <h2 className="text-lg font-semibold mb-3 border-b border-slate-500 pb-2">
              ABOUT ME
            </h2>
            <p className="text-slate-300 text-sm">
              {data.personalInfo.summary}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold mb-3 border-b border-slate-500 pb-2">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm text-slate-300">
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
              {data.personalInfo.website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{data.personalInfo.website}</span>
                </div>
              )}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold mb-3 border-b border-slate-500 pb-2">
              SKILLS
            </h2>
            <ul className="space-y-1 text-sm text-slate-300">
              {data.skills.technical.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
            </ul>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-lg font-semibold mb-3 border-b border-slate-500 pb-2">
              INTERESTS
            </h2>
            <ul className="space-y-1 text-sm text-slate-300">
              {data.interests?.map((interest, index) => (
                <li key={index}>{interest.name}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Main Content */}
        <div className="col-span-8 p-6 bg-white">
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b-2 border-pink-400 pb-2">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-slate-800">{edu.year}</h3>
                    <span className="text-slate-600">{edu.school}</span>
                  </div>
                  <p className="text-sm text-slate-600">{edu.degree}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b-2 border-pink-400 pb-2">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-slate-800">{exp.duration}</h3>
                    <span className="text-slate-600">{exp.company}</span>
                  </div>
                  <p className="text-sm text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-4 border-b-2 border-pink-400 pb-2">
              LANGUAGES
            </h2>
            <div className="space-y-2">
              {data.skills.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-slate-700">{lang.name}</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full">
                    <div 
                      className="h-full bg-pink-400 rounded-full"
                      style={{ width: `${(lang.level || 0) * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 