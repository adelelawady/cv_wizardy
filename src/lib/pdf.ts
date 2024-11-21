import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function generatePDF(elementId: string, filename: string = 'resume.pdf') {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');

    // Create canvas with better quality settings
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (document) => {
        // Ensure proper rendering of the cloned element
        const el = document.getElementById(elementId);
        if (el) {
          el.style.transform = 'none';
          el.style.width = '210mm'; // A4 width
          el.style.height = 'auto';
          el.style.position = 'relative';
        }
      },
    });

    // A4 dimensions in mm
    const imgWidth = 210;
    const pageHeight = 297;
    
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF with proper dimensions
    const pdf = new jsPDF({
      orientation: imgHeight > pageHeight ? 'portrait' : 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Add image to PDF with proper scaling
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

    // Save the PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
} 