import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { asBlob } from 'html-docx-js-typescript'


import { saveAs } from 'file-saver';

export async function exportToPDF(elementId: string, filename: string = 'resume.pdf') {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');

    const opt = {
      margin: 0,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 4,
        useCORS: true,
        logging: false,
        letterRendering: true,
        allowTaint: true,
        foreignObjectRendering: true,
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        precision: 16
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.page-break-before',
        after: '.page-break-after',
        avoid: [
          'img', 'table', 'tr', 'td', 
          'div.page-break-avoid', 
          'div.section',
          '.avoid-break'
        ]
      }
    };

    await html2pdf().set(opt).from(element).save();
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

export async function exportToImage(elementId: string, filename: string = 'resume.png') {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');

    // Create canvas with better quality settings
    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      allowTaint: true,
      foreignObjectRendering: true,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (document) => {
        const el = document.getElementById(elementId);
        if (el) {
          el.style.transform = 'none';
          el.style.width = '210mm';
          el.style.height = 'auto';
          el.style.position = 'relative';
        }
      },
    });

    // Create download link
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png', 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}

export  async function exportToWord(elementId: string, filename: string = 'resume.docx') {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');

    if (!element) {
      console.error('Element not found!');
      return;
    }
  
    // Get the HTML content from the element
    const htmlContent = element.outerHTML;
  
    // Convert HTML content to a DOCX Blob
   // const docxBlob = htmlDocx.asBlob(htmlContent);
   const opt = {
    margin: {
      top: 100
    },
    orientation: 'landscape' // type error: because typescript automatically widen this type to 'string' but not 'Orient' - 'string literal type'
  }

  const data = await asBlob(htmlContent, { orientation: 'landscape', margins: { top: 100 } })

    const blob = data instanceof ArrayBuffer || data instanceof Uint8Array
    ? new Blob([data])
    : data;

    saveAs(blob, filename) // save as docx file
    // Trigger the download
   // saveAs(docxBlob, filename);
    return true;
  } catch (error) {
    console.error('Error generating Word document:', error);
    throw error;
  }
}

function convertPxToPt(fontSize: string): number {
  const px = parseInt(fontSize);
  return Math.round(px * 0.75); // Convert px to pt (approximately)
} 