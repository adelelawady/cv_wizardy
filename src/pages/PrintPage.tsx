import React, { useEffect } from 'react';
import { PrintPreview } from '@/components/preview/PrintPreview';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PrintPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add print-specific styles
    document.body.classList.add('print-page');
    return () => {
      document.body.classList.remove('print-page');
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print:p-0">
      {/* Header - Hidden when printing */}
      <div className="print:hidden bg-background border-b p-4 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Editor
          </Button>
          <Button onClick={handlePrint}>
            <Printer className="w-4 h-4 mr-2" />
            Print Resume
          </Button>
        </div>
      </div>

      {/* Print Preview */}
      <PrintPreview />
    </div>
  );
} 