import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface VibrantTemplateProps {
  className?: string;
  data: TemplateData;
}

export function VibrantTemplate({ className, data }: VibrantTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-zinc-800 text-white font-sans", className)}>
      {/* Header Section */}
      <div className="p-8 pb-6">
        <div className="flex gap-8">
          {/* Profile Photo Section */}
          <div className="w-32 h-32 rounded-full bg-red-500 overflow-hidden">
            {/* Add photo support later */}
          </div>
          
          {/* Name and Title */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
            <p className="text-xl text-red-400">{data.personalInfo.title}</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_2fr] gap-6">
        {/* Left Sidebar */}
        <div className="px-6">
          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="text-red-400 text-lg font-semibold mb-4 uppercase">Contact</h2>
            <div className="space-y-3">
              {data.personalInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-400" />
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>{data.personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-red-400 text-lg font-semibold mb-4 uppercase">Skills</h2>
            {Object.entries(data.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h3 className="text-sm font-medium mb-2 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-zinc-700 rounded-full">
                        <div 
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: `${(skill.level || 0) * 20}%` }}
                        />
                      </div>
                      <span className="text-sm min-w-[80px]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          {data.skills.languages && data.skills.languages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-red-400 text-lg font-semibold mb-4 uppercase">Languages</h2>
              <div className="space-y-2">
                {data.skills.languages.map((language, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-zinc-700 rounded-full">
                      <div 
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${(language.level || 0) * 20}%` }}
                      />
                    </div>
                    <span className="text-sm min-w-[80px]">{language.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="pr-8">
          {/* Profile Summary */}
          {data.personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-red-400 text-lg font-semibold mb-4 uppercase">Profile</h2>
              <p className="text-zinc-300">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-red-400 text-lg font-semibold mb-4 uppercase">Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l border-red-500">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <div className="text-red-400 text-sm mb-2">
                    {exp.company} • {exp.duration}
                  </div>
                  <p className="text-zinc-300 text-sm">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-zinc-300 text-sm">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-red-400 text-lg font-semibold mb-4 uppercase">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-red-500">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <div className="text-red-400 text-sm">{edu.school}</div>
                  <div className="text-zinc-300 text-sm">{edu.year}</div>
                  {edu.gpa && (
                    <div className="text-zinc-400 text-sm">GPA: {edu.gpa}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 