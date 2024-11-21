import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Section({ 
  className,
  title,
  children,
  icon
}: SectionProps) {
  return (
    <section className={cn("mb-6 print:break-inside-avoid", className)}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {icon && <div className="text-gray-700">{icon}</div>}
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
        </div>
      )}
      <div className="print:break-inside-avoid">
        {children}
      </div>
    </section>
  );
} 