import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CalculatorConfig, CardTheme } from '../types';

interface CalculatorCardProps {
  config: CalculatorConfig;
}

const THEME_STYLES: Record<CardTheme, { 
  bg: string; 
  tagBg: string; 
  tagText: string; 
  title: string;
  iconBg: string;
  iconColor: string;
  blob: string; 
  buttonBg: string;
  buttonText: string;
}> = {
  blue: {
    bg: 'bg-[#E0F2FE]', 
    tagBg: 'bg-[#BAE6FD]', 
    tagText: 'text-[#0369A1]', 
    title: 'text-[#0C4A6E]',
    iconBg: 'bg-[#0EA5E9]',
    iconColor: 'text-white',
    blob: 'bg-[#7DD3FC]',
    buttonBg: 'bg-[#0284C7]',
    buttonText: 'text-white'
  },
  orange: {
    bg: 'bg-[#FFEDD5]', 
    tagBg: 'bg-[#FED7AA]', 
    tagText: 'text-[#C2410C]', 
    title: 'text-[#7C2D12]',
    iconBg: 'bg-[#F97316]',
    iconColor: 'text-white',
    blob: 'bg-[#FDBA74]',
    buttonBg: 'bg-[#EA580C]',
    buttonText: 'text-white'
  },
  purple: {
    bg: 'bg-[#F3E8FF]', 
    tagBg: 'bg-[#E9D5FF]', 
    tagText: 'text-[#7E22CE]', 
    title: 'text-[#581C87]',
    iconBg: 'bg-[#9333EA]',
    iconColor: 'text-white',
    blob: 'bg-[#D8B4FE]',
    buttonBg: 'bg-[#7E22CE]',
    buttonText: 'text-white'
  },
  green: {
    bg: 'bg-[#DCFCE7]', 
    tagBg: 'bg-[#BBF7D0]', 
    tagText: 'text-[#15803D]', 
    title: 'text-[#14532D]',
    iconBg: 'bg-[#22C55E]',
    iconColor: 'text-white',
    blob: 'bg-[#86EFAC]',
    buttonBg: 'bg-[#16A34A]',
    buttonText: 'text-white'
  },
  rose: {
    bg: 'bg-[#FFE4E6]', 
    tagBg: 'bg-[#FECDD3]', 
    tagText: 'text-[#BE123C]', 
    title: 'text-[#881337]',
    iconBg: 'bg-[#E11D48]',
    iconColor: 'text-white',
    blob: 'bg-[#FDA4AF]',
    buttonBg: 'bg-[#E11D48]',
    buttonText: 'text-white'
  },
  teal: {
    bg: 'bg-[#CCFBF1]', 
    tagBg: 'bg-[#99F6E4]', 
    tagText: 'text-[#0F766E]', 
    title: 'text-[#134E4A]',
    iconBg: 'bg-[#14B8A6]',
    iconColor: 'text-white',
    blob: 'bg-[#5EEAD4]',
    buttonBg: 'bg-[#0D9488]',
    buttonText: 'text-white'
  }
};

const CalculatorCard: React.FC<CalculatorCardProps> = ({ config }) => {
  const styles = THEME_STYLES[config.theme];
  const Icon = config.icon;

  return (
    <Link 
      to={config.path}
      className={`group relative flex flex-col h-full rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${styles.bg}`}
    >
      {/* GFX: Decorative Blobs */}
      <div className={`absolute -right-12 -top-12 w-64 h-64 rounded-full blur-3xl opacity-50 transition-transform duration-700 group-hover:scale-110 ${styles.blob}`}></div>
      <div className={`absolute -left-12 -bottom-12 w-48 h-48 rounded-full blur-3xl opacity-40 transition-transform duration-700 group-hover:scale-125 ${styles.blob}`}></div>
      
      {/* GFX: Large Faded Icon in Background */}
      <div className={`absolute -right-6 -bottom-6 opacity-[0.07] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${styles.title}`}>
        <Icon size={200} strokeWidth={1.5} />
      </div>

      <div className="relative flex flex-col h-full z-10">
        {/* Header with Icon */}
        <div className="mb-6">
           <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-black/5 ${styles.iconBg} ${styles.iconColor} transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-105`}>
             <Icon size={32} strokeWidth={2} />
           </div>
        </div>

        {/* Text Content */}
        <h3 className={`text-3xl font-black mb-3 ${styles.title} tracking-tight leading-tight`}>
          {config.name}
        </h3>
        
        <p className={`${styles.title} opacity-80 font-medium leading-relaxed text-sm mb-6 flex-grow`}>
          {config.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {config.tags.map((tag) => (
            <span 
              key={tag} 
              className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider ${styles.tagBg} ${styles.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <div className={`flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm group-hover:shadow-md transition-all`}>
             <span className={`text-sm font-bold ${styles.title}`}>Calculate for free</span>
             <div className={`w-10 h-10 rounded-full flex items-center justify-center ${styles.buttonBg} ${styles.buttonText} transform transition-transform duration-300 group-hover:scale-110`}>
                <ArrowRight size={18} strokeWidth={3} />
             </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CalculatorCard;