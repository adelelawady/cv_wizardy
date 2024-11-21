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
    <div  className={cn(
      
      //"print:w-[210mm] print:m-0 print:shadow-none",
     
      className
    )}>
      {/* Header */}
      {header && (
        <div >
          {header}
        </div>
      )}

      {/* Content */}
      {variant === 'single' ? (
        <div >
          {main}
        </div>
      ) : (
        <div >
          {/* Main Content - 2/3 width */}
          <div >
            {main}
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div >
            {sidebar}
          </div>
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div >
          {footer}
        </div>
      )}
    </div>
  );
} 