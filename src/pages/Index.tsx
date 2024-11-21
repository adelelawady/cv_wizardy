import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Palette, Download, FileSearch } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Create Your Professional CV in Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Our AI-powered CV maker helps you craft the perfect resume with beautiful templates
            and expert suggestions.
          </p>
          <Button
            onClick={() => navigate("/builder")}
            className="cv-button-primary text-lg"
          >
            Create Your CV Now
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Easy to Use"
            description="Simple step-by-step process to create your professional CV"
            icon="✨"
          />
          <FeatureCard
            title="Professional Templates"
            description="Choose from beautiful, ATS-friendly templates"
            icon="📄"
          />
          <FeatureCard
            title="Export to PDF"
            description="Download your CV in perfect PDF format"
            icon="⬇️"
          />
        </div>

        {/* New Section for Multiple Templates */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-8">Explore Our Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  <TemplateCard
    title="Classic"
    description="A timeless design for traditional industries."
    imageSrc="/images/templates/classic-preview.jpg"
    onClick={() => navigate("/builder?template=classic")}
  />
  <TemplateCard
    title="Modern"
    description="Sleek and professional for contemporary fields."
    imageSrc="/images/templates/modern-preview.jpg"
    onClick={() => navigate("/builder?template=modern")}
  />
  <TemplateCard
    title="Creative"
    description="Bold and eye-catching for creative industries."
    imageSrc="/images/templates/creative-preview.jpg"
    onClick={() => navigate("/builder?template=creative")}
  />
  <TemplateCard
    title="Minimalist"
    description="Clean and simple for a minimalist approach."
    imageSrc="/images/templates/minimalist-preview.jpg"
    onClick={() => navigate("/builder?template=minimalist")}
  />
</div>

        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="cv-section text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TemplateCard = ({
  title,
  description,
  imageSrc,
  onClick,
}: {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}) => (
  <div
    className="cv-section cursor-pointer hover:shadow-lg p-6 rounded-lg border border-gray-300 transition duration-300"
    onClick={onClick}
  >
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


export default Index;
