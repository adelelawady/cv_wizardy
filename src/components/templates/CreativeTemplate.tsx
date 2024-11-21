import React from 'react';
import { cn } from "@/lib/utils";
import type { CreativeTemplateData } from "@/types/template";
import { Link, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface CreativeTemplateProps {
  className?: string;
  data: CreativeTemplateData;
}

export function CreativeTemplate({ className, data }: CreativeTemplateProps) {
  return (
    <div className={cn("min-h-[297mm] w-[210mm] bg-white", className)}>
      {/* Header with gradient background */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl text-purple-100">{data.personalInfo.title}</p>
          
          {/* Contact Info */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
            {data.personalInfo.portfolio && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a 
                  href={data.personalInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-200"
                >
                  Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        {/* Summary */}
        {data.personalInfo.summary && (
          <section className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Projects Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Design</h3>
              <div className="space-y-2">
                {data.skills.design.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Development</h3>
              <div className="space-y-2">
                {data.skills.development.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tools</h3>
              <div className="space-y-2">
                {data.skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-purple-200 pl-4 ml-2">
                <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                <div className="text-purple-600 mb-2">
                  {exp.company} • {exp.duration}
                </div>
                <p className="text-gray-600">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                  <div className="text-gray-600">{edu.school}</div>
                </div>
                <div className="text-purple-600">{edu.year}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 