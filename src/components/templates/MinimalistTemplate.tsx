import React from 'react';
import { cn } from "@/lib/utils";
import type { TemplateData } from "@/types/template";

interface MinimalistTemplateProps {
  className?: string;
  data: TemplateData;
}

export function MinimalistTemplate({ className, data }: MinimalistTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white p-8", className)}>
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-light tracking-wide text-slate-900">
          {data.personalInfo.name}
        </h1>
        <p className="text-lg text-slate-600 mt-1">{data.personalInfo.title}</p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-slate-500">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          {data.personalInfo.location && (
            <>
              <span>•</span>
              <span>{data.personalInfo.location}</span>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {data.personalInfo.summary && (
        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
            {data.personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold tracking-wider text-slate-900 uppercase mb-4">
          Experience
        </h2>
        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-medium text-slate-900">{exp.title}</h3>
                <span className="text-sm text-slate-500">{exp.duration}</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">{exp.company}</p>
              <p className="text-slate-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold tracking-wider text-slate-900 uppercase mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.technical?.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-semibold tracking-wider text-slate-900 uppercase mb-4">
          Education
        </h2>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-slate-900">{edu.degree}</h3>
                <span className="text-sm text-slate-500">{edu.year}</span>
              </div>
              <p className="text-sm text-slate-600">{edu.school}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 