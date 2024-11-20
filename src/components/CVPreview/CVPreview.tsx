import { CVData } from "@/pages/Builder";
import { ModernTemplate } from "./templates/ModernTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ClassicTemplate } from "./templates/ClassicTemplate";

export type TemplateType = "classic" | "modern" | "minimal";

interface CVPreviewProps {
  data: CVData;
  template: TemplateType;
}

export const CVPreview = ({ data, template }: CVPreviewProps) => {
  const templates = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
  };

  const SelectedTemplate = templates[template];
  return <SelectedTemplate data={data} />;
};