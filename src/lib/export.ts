import html2pdf from 'html2pdf.js';
import { saveAs } from 'file-saver';
import { asBlob } from 'html-docx-js-typescript';

// Helper function to create print window with styles
const createPrintWindow = async (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Template element not found');
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    throw new Error('Failed to open print window');
  }

  // Add print-specific styles
  const printStyles = `
    <style>
      @page {
        size: A4;
        margin: 0;
      }
      body {
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      #print-container {
        width: 210mm;
        min-height: 297mm;
        padding: 0;
        margin: 0;
        background: white;
      }
      @media print {
        html, body {
          width: 210mm;
          height: 297mm;
        }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
      }
    </style>
  `;

  // Set up the print window content
  printWindow.document.open();
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Export</title>
        ${printStyles}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
        ${Array.from(document.styleSheets)
          .filter(styleSheet => !styleSheet.href || styleSheet.href.startsWith(window.location.origin))
          .map(styleSheet => {
            try {
              return `<style>${Array.from(styleSheet.cssRules)
                .map(rule => rule.cssText)
                .join('\n')}</style>`;
            } catch (e) {
              console.warn('Could not load stylesheet rules');
              return '';
            }
          })
          .join('\n')}
      </head>
      <body>
        <div id="print-container">
          ${element.outerHTML}
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();

  // Wait for resources to load
  await new Promise<void>((resolve) => {
    printWindow.onload = () => resolve();
  });

  return { printWindow, element: printWindow.document.getElementById('print-container') };
};

export async function exportToPDF(elementId: string, filename: string = 'resume.pdf') {
  try {
    const { printWindow } = await createPrintWindow(elementId);
    
    // Add script to handle PDF printing
    const script = printWindow.document.createElement('script');
    script.textContent = `
      window.onload = function() {
        const mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
          if (!mql.matches) {
            window.close();
          }
        });
      };
    `;
    printWindow.document.head.appendChild(script);

    // Set the document title (will be the default PDF filename)
    printWindow.document.title = filename.replace('.pdf', '');

    // Trigger the print dialog
    printWindow.print();

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

export async function exportToImage(elementId: string, filename: string = 'resume.png') {
  try {
    const { printWindow, element } = await createPrintWindow(elementId);
    if (!element) throw new Error('Export element not found');

    // Wait a bit for styles to apply
    await new Promise(resolve => setTimeout(resolve, 500));

    // Use html2canvas on the print window's element
    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
      logging: false,
      allowTaint: true,
      foreignObjectRendering: true,
      backgroundColor: '#ffffff',
    });

    // Create download link
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png', 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    printWindow.close();
    return true;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}

export async function printTemplate(elementId: string) {
  try {
    const { printWindow } = await createPrintWindow(elementId);
    
    // Trigger print
    printWindow.print();
    
    // Close the window after printing
    printWindow.onafterprint = () => {
      printWindow.close();
    };

    return true;
  } catch (error) {
    console.error('Error printing template:', error);
    throw error;
  }
}

// Word export remains the same as it uses a different approach
export async function exportToWord(elementId: string, filename: string = 'resume.docx') {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');
    
    const htmlContent = element.outerHTML;
    const data = await asBlob(htmlContent, { 
      orientation: 'portrait', 
      margins: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    const blob = data instanceof ArrayBuffer || data instanceof Uint8Array
      ? new Blob([data])
      : data;

    saveAs(blob, filename);
    return true;
  } catch (error) {
    console.error('Error generating Word document:', error);
    throw error;
  }
} 