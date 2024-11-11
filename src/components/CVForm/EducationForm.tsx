import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

type Education = {
  school: string;
  degree: string;
  graduationDate: string;
};

export const EducationForm = ({
  data,
  onChange,
}: {
  data: Education[];
  onChange: (data: Education[]) => void;
}) => {
  const addEducation = () => {
    onChange([
      ...data,
      {
        school: "",
        degree: "",
        graduationDate: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  return (
    <div className="space-y-8">
      {data.map((education, index) => (
        <div key={index} className="p-6 border rounded-lg relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => removeEducation(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          
          <div className="space-y-4">
            <div>
              <Label>School</Label>
              <Input
                value={education.school}
                onChange={(e) =>
                  updateEducation(index, "school", e.target.value)
                }
                className="cv-input"
                placeholder="University Name"
              />
            </div>
            
            <div>
              <Label>Degree</Label>
              <Input
                value={education.degree}
                onChange={(e) =>
                  updateEducation(index, "degree", e.target.value)
                }
                className="cv-input"
                placeholder="Bachelor's in Computer Science"
              />
            </div>
            
            <div>
              <Label>Graduation Date</Label>
              <Input
                type="date"
                value={education.graduationDate}
                onChange={(e) =>
                  updateEducation(index, "graduationDate", e.target.value)
                }
                className="cv-input"
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button
        onClick={addEducation}
        variant="outline"
        className="w-full"
      >
        <Plus className="mr-2 h-4 w-4" /> Add Education
      </Button>
    </div>
  );
};