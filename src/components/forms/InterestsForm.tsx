import React from 'react';
import { useTemplate } from '@/contexts/TemplateContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

// Common hobby/interest icons
const commonIcons = [
  'Bike', 'Book', 'Camera', 'Code', 'Coffee', 'Gamepad2', 'Globe2', 'Headphones', 
  'Heart', 'Image', 'Laptop2', 'Mic2', 'Mountain', 'Music2', 'Palette', 'Plane', 
  'Plant', 'Running', 'Shirt', 'ShoppingBag', 'Smile', 'Snowflake', 'Sun', 'Swords',
  'Target', 'Trees', 'Trophy', 'Tv2', 'Utensils', 'Video', 'Waves', 'Yoga'
] as const;

type IconName = typeof commonIcons[number];

export function InterestsForm() {
  const { templateData, updateTemplateData } = useTemplate();
  const interests = templateData.interests || [];

  const addInterest = () => {
    updateTemplateData({
      interests: [...interests, { name: '', icon: 'Heart' }],
    });
  };

  const removeInterest = (index: number) => {
    const newInterests = interests.filter((_, i) => i !== index);
    updateTemplateData({ interests: newInterests });
  };

  const updateInterest = (
    index: number,
    field: 'name' | 'icon',
    value: string
  ) => {
    const newInterests = [...interests];
    newInterests[index] = {
      ...newInterests[index],
      [field]: value,
    };
    updateTemplateData({ interests: newInterests });
  };

  const IconComponent = ({ name }: { name: IconName }) => {
    const Icon = Icons[name as keyof typeof Icons];
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Interests & Hobbies</CardTitle>
        <Button
          onClick={addInterest}
          size="sm"
          variant="outline"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Interest
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="space-y-2 group relative bg-muted/50 p-4 rounded-lg hover:bg-muted/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="w-10"
                  >
                    <IconComponent name={interest.icon as IconName} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                  <Command>
                    <CommandGroup heading="Select icon">
                      <ScrollArea className="h-[300px]">
                        <div className="grid grid-cols-6 gap-1 p-2">
                          {commonIcons.map((iconName) => (
                            <CommandItem
                              key={iconName}
                              value={iconName}
                              onSelect={() => updateInterest(index, 'icon', iconName)}
                              className={cn(
                                "flex items-center justify-center p-2 cursor-pointer",
                                interest.icon === iconName && "bg-primary text-primary-foreground"
                              )}
                            >
                              <IconComponent name={iconName} />
                            </CommandItem>
                          ))}
                        </div>
                      </ScrollArea>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <div className="flex-1">
                <Input
                  value={interest.name}
                  onChange={(e) => updateInterest(index, 'name', e.target.value)}
                  placeholder="Enter interest or hobby (e.g., Photography, Gaming, etc.)"
                  className="bg-background"
                />
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeInterest(index)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {interests.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No interests added yet. Click "Add Interest" to get started.
          </div>
        )}
      </CardContent>
    </Card>
  );
} 