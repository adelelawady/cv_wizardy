import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";

type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const WorkExperienceForm = ({
  data,
  onChange,
}: {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}) => {
  const addExperience = () => {
    onChange([
      ...data,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, field: keyof WorkExperience, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  return (
    <div className="space-y-8">
      {data.map((experience, index) => (
        <div key={index} className="p-6 border rounded-lg relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => removeExperience(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          
          <div className="space-y-4">
            <div>
              <Label>Company</Label>
              <Input
                value={experience.company}
                onChange={(e) =>
                  updateExperience(index, "company", e.target.value)
                }
                className="cv-input"
                placeholder="Company Name"
              />
            </div>
            
            <div>
              <Label>Position</Label>
              <Input
                value={experience.position}
                onChange={(e) =>
                  updateExperience(index, "position", e.target.value)
                }
                className="cv-input"
                placeholder="Job Title"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={experience.startDate}
                  onChange={(e) =>
                    updateExperience(index, "startDate", e.target.value)
                  }
                  className="cv-input"
                />
              </div>
              <div>
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={experience.endDate}
                  onChange={(e) =>
                    updateExperience(index, "endDate", e.target.value)
                  }
                  className="cv-input"
                />
              </div>
            </div>
            
            <div>
              <Label>Description</Label>
              <Textarea
                value={experience.description}
                onChange={(e) =>
                  updateExperience(index, "description", e.target.value)
                }
                className="cv-input min-h-[100px]"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button
        onClick={addExperience}
        variant="outline"
        className="w-full"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Work Experience
      </Button>
    </div>
  );
};