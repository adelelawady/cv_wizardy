import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useState } from "react";

export const SkillsForm = ({
  data,
  onChange,
}: {
  data: string[];
  onChange: (data: string[]) => void;
}) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    onChange(data.filter((s) => s !== skill));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Add Skills</Label>
        <div className="flex gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
            className="cv-input"
            placeholder="Enter a skill"
          />
          <Button onClick={addSkill} className="cv-button-primary">
            Add
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};