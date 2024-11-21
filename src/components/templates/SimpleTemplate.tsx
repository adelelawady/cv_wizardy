import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Globe, MapPin, Phone } from 'lucide-react';

interface SimpleTemplateProps {
  className?: string;
  data: TemplateData;
}

export function SimpleTemplate({ className, data }: SimpleTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white p-12 font-sans", className)}>
      {/* Header - Name and Title */}
      <header className="text-center mb-12">
        <h1 className="text-4xl tracking-wide text-gray-800 uppercase mb-2">
          {data.personalInfo.name}
        </h1>
        <h2 className="text-xl text-gray-600 uppercase">
          {data.personalInfo.title}
        </h2>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-[1fr_2fr] gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Contact Section */}
          <section>
            <h3 className="text-lg uppercase mb-4 border-b border-gray-200 pb-2">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              {data.personalInfo.phone && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.email && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.website && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span>{data.personalInfo.website}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{data.personalInfo.location}</span>
                </div>
              )}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h3 className="text-lg uppercase mb-4 border-b border-gray-200 pb-2">
              Skills
            </h3>
            <div className="space-y-2">
              {Object.entries(data.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-700 capitalize mb-1">
                    {category}
                  </h4>
                  <div className="space-y-1">
                    {skills.map((skill, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          {data.skills.languages && data.skills.languages.length > 0 && (
            <section>
              <h3 className="text-lg uppercase mb-4 border-b border-gray-200 pb-2">
                Languages
              </h3>
              <div className="space-y-2">
                {data.skills.languages.map((language, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {language.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          <section>
            <h3 className="text-lg uppercase mb-4 border-b border-gray-200 pb-2">
              Education
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-800">{edu.degree}</h4>
                  <div className="text-sm text-gray-600">{edu.school}</div>
                  <div className="text-sm text-gray-500">{edu.year}</div>
                  {edu.gpa && (
                    <div className="text-sm text-gray-500 italic">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Profile Section */}
          {data.personalInfo.summary && (
            <section>
              <h3 className="text-lg uppercase mb-4 border-b border-gray-200 pb-2">
                Profile
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {data.personalInfo.summary}
              </p>
            </section>
          )}

          {/* Work Experience Section */}
          <section>
            <h3 className="text-lg uppercase mb-4 border-b border-gray-200 pb-2">
              Work Experience
            </h3>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-medium text-gray-800">{exp.title}</h4>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{exp.company}</div>
                  <p className="text-sm text-gray-600 mb-2">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
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