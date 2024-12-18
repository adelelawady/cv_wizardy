import { CVData } from "@/pages/Builder";
import { format } from "date-fns";

export const ModernTemplate = ({ data }: { data: CVData }) => {
  return (
    <div className="cv-section font-cv space-y-6">
      {/* Header */}
      <div className="text-center border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name || "Your Name"}</h1>
        <div className="text-gray-600 mt-2 flex justify-center gap-4">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>•</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>•</div>}
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
        </div>
      </div>

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary/20 pb-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            {data.workExperience.map((exp, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <div className="text-gray-700">{exp.company}</div>
                  <p className="mt-2 text-gray-600 text-sm">{exp.description}</p>
                </div>
                <div className="text-gray-600 text-sm text-right">
                  {exp.startDate && format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                  {exp.endDate ? format(new Date(exp.endDate), "MMM yyyy") : "Present"}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary/20 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <div className="text-gray-700">{edu.school}</div>
                </div>
                <div className="text-gray-600 text-sm text-right">
                  {edu.graduationDate && format(new Date(edu.graduationDate), "MMM yyyy")}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-primary/20 pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}; 