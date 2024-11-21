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
      <DialogContent className="max-w-[1100px] w-[90vw] h-[90vh]">
        <DialogHeader>
          <DialogTitle>Resume Preview</DialogTitle>
          <DialogDescription>
            This is how your resume will look when downloaded
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 p-6 bg-muted rounded-md">
          <div className="flex justify-center">
            <div className="shadow-2xl">
              <TemplateBuilder />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 