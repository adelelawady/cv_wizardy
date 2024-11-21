import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Palette, Download, FileSearch } from "lucide-react";

const isDevelopment = import.meta.env.MODE === 'development';
const isProduction = import.meta.env.MODE === 'production';

const imageTemplateSrc=isProduction?'/cv_wizardy/templates/':'/templates/';

const  Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 my-2">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Adel eLawady cv_wizardy</h2>
        <p className="text-gray-400 mb-4">
        CV Wizardry This tool is designed to help you create, customize, and export professional CVs quickly and easily.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/adelelawady" className="text-white hover:text-gray-300">
            🌟 GitHub
          </a>
          <a href="https://www.linkedin.com/in/adelelawady" className="text-white hover:text-gray-300">
            💼 LinkedIn
          </a>
          <a href="mailto:adelelawady@gmail.com" className="text-white hover:text-gray-300">
            ✉️ Email
          </a>
        </div>
        <p className="text-gray-500">
          Created with ❤️ by Adel eLawady. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};


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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TemplateCard
              title="Professional"
              description="Clean and modern design with a professional look"
              imageSrc={imageTemplateSrc+"professional.png"}
              onClick={() => navigate("/builder?template=professional")}
            />
            <TemplateCard
              title="Minimalist"
              description="Simple and elegant design focused on content"
              imageSrc={imageTemplateSrc+"minimalist.png"}
              onClick={() => navigate("/builder?template=minimalist")}
            />
            <TemplateCard
              title="Creative"
              description="Stand out with a unique and creative layout"
              imageSrc={imageTemplateSrc+"creative.png"}
              onClick={() => navigate("/builder?template=creative")}
            />
            <TemplateCard
              title="Modern"
              description="Contemporary design with a professional edge"
              imageSrc={imageTemplateSrc+"modern.png"}
              onClick={() => navigate("/builder?template=modern")}
            />
            <TemplateCard
              title="Basic"
              description="Traditional resume layout, perfect for ATS"
              imageSrc={imageTemplateSrc+"basic.png"}
              onClick={() => navigate("/builder?template=basic")}
            />
            <TemplateCard
              title="Elegant"
              description="Professional layout with a distinctive dark theme"
              imageSrc={imageTemplateSrc+"elegant.png"}
              onClick={() => navigate("/builder?template=elegant")}
            />
            <TemplateCard
              title="Mechanical"
              description="Modern technical design with engineering focus"
              imageSrc={imageTemplateSrc+"mechanical.png"}
              onClick={() => navigate("/builder?template=mechanical")}
            />
            <TemplateCard
              title="Simple"
              description="Clean and minimal design with perfect typography"
              imageSrc={imageTemplateSrc+"simple.png"}
              onClick={() => navigate("/builder?template=simple")}
            />
            <TemplateCard
              title="Accent"
              description="Modern design with distinctive side accent"
              imageSrc={imageTemplateSrc+"accent.png"}
              onClick={() => navigate("/builder?template=accent")}
            />
            <TemplateCard
              title="Compact"
              description="Clean and efficient layout with clear sections"
              imageSrc={imageTemplateSrc+"compact.png"}
              onClick={() => navigate("/builder?template=compact")}
            />
            <TemplateCard
              title="Executive"
              description="Professional layout with clear sections and metrics"
              imageSrc={imageTemplateSrc+"executive.png"}
              onClick={() => navigate("/builder?template=executive")}
            />
            <TemplateCard
              title="Vibrant"
              description="Modern dark theme with vibrant red accents"
              imageSrc={imageTemplateSrc+"vibrant.png"}
              onClick={() => navigate("/builder?template=vibrant")}
            />
            <TemplateCard
              title="Elegant Split"
              description="Professional two-column layout with photo"
              imageSrc={imageTemplateSrc+"elegantSplit.png"}
              onClick={() => navigate("/builder?template=elegantSplit")}
            />
            <TemplateCard
              title="Aqua Split"
              description="Modern two-column layout with fresh aqua accent"
              imageSrc={imageTemplateSrc+"aquaSplit.png"}
              onClick={() => navigate("/builder?template=aquaSplit")}
            />
            <TemplateCard
              title="Standard"
              description="Traditional resume format with clean typography"
              imageSrc={imageTemplateSrc+"standard.png"}
              onClick={() => navigate("/builder?template=standard")}
            />
            <TemplateCard
              title="Coral Modern"
              description="Clean and professional design with coral accents"
              imageSrc={imageTemplateSrc+"coralModern.png"}
              onClick={() => navigate("/builder?template=coralModern")}
            />
          </div>
        </div>
        <Footer />
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
    className="group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-gray-200"
    onClick={onClick}
  >
    <div className="relative h-[400px] overflow-hidden bg-gray-50">
      <img
        src={imageSrc}
        alt={`${title} Template Preview`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);


export default Index;
