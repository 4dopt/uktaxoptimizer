import { LucideIcon } from 'lucide-react';

export type CardTheme = 'blue' | 'orange' | 'purple' | 'green' | 'rose' | 'teal';

export interface CalculatorConfig {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  heroTitle: string;
  heroSubtitle: string;
  educationalContent: {
    title: string;
    text: string;
  };
  tags: string[];
  theme: CardTheme;
}