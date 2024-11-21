import React from 'react';
import { cn } from "@/lib/utils";

interface TemplateStructureProps {
  className?: string;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'single' | 'two-column';
}

export function TemplateStructure({ 
  className,
  header,
  sidebar,
  main,
  footer,
  variant = 'single'
}: TemplateStructureProps) {
  return (
    <div style={{height: "-webkit-fill-available"}} className={cn(
      "w-[210mm] bg-white",
      "print:w-[210mm] print:m-0 print:shadow-none",
      "[@page]:size-a4 [@page]:margin-0",
      className
    )}>
      {/* Header */}
      {header && (
        <div className="print:break-inside-avoid-page">
          {header}
        </div>
      )}

      {/* Content */}
      {variant === 'single' ? (
        <div className="print:break-inside-auto">
          {main}
        </div>
      ) : (
        <div className="grid grid-cols-3 print:break-inside-auto">
          {/* Main Content - 2/3 width */}
          <div className="col-span-2 print:break-inside-auto">
            {main}
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div className="col-span-1 print:break-inside-auto">
            {sidebar}
          </div>
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div className="print:break-inside-avoid-page">
          {footer}
        </div>
      )}
    </div>
  );
} 