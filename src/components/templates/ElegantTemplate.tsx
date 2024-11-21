import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

interface ElegantTemplateProps {
  className?: string;
  data: TemplateData;
}

export function ElegantTemplate({ className, data }: ElegantTemplateProps) {
  return (
    <div className={cn(
      "min-h-[297mm] w-[210mm] bg-black text-white font-light", 
      className
    )}>
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-light tracking-wide mb-2">
          {data.personalInfo.name}
        </h1>
        <p className="text-lg uppercase tracking-widest">
          {data.personalInfo.title}
        </p>
      </div>

      {/* Main Content */}
      <div className="px-12 grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl mb-6">Education</h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#C4A484]" />
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <div className="text-sm text-gray-300 mb-1">
                    {edu.year}
                  </div>
                  <p className="text-sm text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-2xl mb-6">Skills</h2>
          <div className="space-y-4">
            {Object.entries(data.skills).map(([category, skills]) => (
              skills.map((skill, index) => (
                <div key={`${category}-${index}`} className="space-y-1">
                  <div className="text-sm">{skill.name}</div>
                  <div className="h-1.5 bg-gray-800 rounded-full">
                    <div 
                      className="h-full bg-[#C4A484] rounded-full"
                      style={{ width: `${(skill.level || 0) * 20}%` }}
                    />
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="px-12 mt-12">
        <h2 className="text-2xl mb-6">Work Experience</h2>
        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <h3 className="text-lg mb-1">{exp.title}</h3>
              <div className="text-sm text-gray-300 mb-2">
                {exp.company} • {exp.duration}
              </div>
              <p className="text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <h2 className="text-2xl text-center mb-6">Contact</h2>
        <div className="flex justify-center gap-12 text-sm text-gray-300">
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {data.personalInfo.website}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {data.personalInfo.location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 