import React from 'react';
import { TemplateBuilder } from '@/components/builder/TemplateBuilder';

export function PrintPreview() {
  return (
    <div className="print:p-0 print:m-0 print:bg-white min-h-screen flex justify-center bg-gray-100">
      <div className="print:shadow-none shadow-xl">
        <TemplateBuilder />
      </div>
    </div>
  );
} 