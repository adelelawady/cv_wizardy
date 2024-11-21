import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TemplateBuilder } from '@/components/builder/TemplateBuilder';

interface PreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PreviewModal({ open, onOpenChange }: PreviewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1200px] w-[90vw] h-[90vh] rounded-lg shadow-lg p-6 bg-white">
        <DialogHeader className="border-b border-gray-200 pb-4">
          <DialogTitle className="text-2xl font-semibold text-gray-900">Resume Preview</DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-600">
            This is how your resume will look when downloaded.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-6 overflow-hidden rounded-md bg-gray-50 shadow-md">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl p-4 bg-white rounded-lg shadow-xl">
              <TemplateBuilder />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
