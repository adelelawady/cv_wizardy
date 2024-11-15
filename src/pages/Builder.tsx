import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonalInfoForm } from "@/components/CVForm/PersonalInfoForm";
import { WorkExperienceForm } from "@/components/CVForm/WorkExperienceForm";
import { EducationForm } from "@/components/CVForm/EducationForm";
import { SkillsForm } from "@/components/CVForm/SkillsForm";
import { CVPreview } from "@/components/CVPreview/CVPreview";
import { toast } from "@/components/ui/use-toast";

const steps = ["Personal Info", "Work Experience", "Education", "Skills"];

export type CVData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  workExperience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    graduationDate: string;
  }>;
  skills: string[];
};

const Builder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cvData, setCVData] = useState<CVData>({
    personalInfo: { name: "", email: "", phone: "", location: "" },
    workExperience: [],
    education: [],
    skills: [],
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleExport = () => {
    // TODO: Implement PDF export
    toast({
      title: "Coming Soon!",
      description: "PDF export will be available in the next update.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Form Section */}
          <div className="w-1/2">
            <div className="cv-section">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">
                  {steps[currentStep]}
                </h2>
                <div className="text-sm text-gray-500">
                  Step {currentStep + 1} of {steps.length}
                </div>
              </div>

              {currentStep === 0 && (
                <PersonalInfoForm
                  data={cvData.personalInfo}
                  onChange={(data) =>
                    setCVData({ ...cvData, personalInfo: data })
                  }
                />
              )}
              {currentStep === 1 && (
                <WorkExperienceForm
                  data={cvData.workExperience}
                  onChange={(data) =>
                    setCVData({ ...cvData, workExperience: data })
                  }
                />
              )}
              {currentStep === 2 && (
                <EducationForm
                  data={cvData.education}
                  onChange={(data) =>
                    setCVData({ ...cvData, education: data })
                  }
                />
              )}
              {currentStep === 3 && (
                <SkillsForm
                  data={cvData.skills}
                  onChange={(data) => setCVData({ ...cvData, skills: data })}
                />
              )}

              <div className="flex justify-between mt-8">
                <Button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  variant="outline"
                >
                  Back
                </Button>
                <div className="flex gap-4">
                  {currentStep === steps.length - 1 ? (
                    <Button onClick={handleExport} className="cv-button-primary">
                      Export PDF
                    </Button>
                  ) : (
                    <Button onClick={handleNext} className="cv-button-primary">
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="w-1/2 sticky top-8">
            <CVPreview data={cvData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;