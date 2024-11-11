import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="cv-section text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;