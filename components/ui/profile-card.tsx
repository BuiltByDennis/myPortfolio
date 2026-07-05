import React from 'react';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

export function ProfileCard({ imageSrc, name, role }: ProfileCardProps) {
  return (
    <div className="relative group w-full max-w-sm mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative p-8 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center shadow-2xl glass-panel">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background/50 shadow-inner mb-6 group-hover:scale-105 transition-transform duration-500">
          <img 
            src={imageSrc} 
            alt={name}
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{name}</h3>
        <p className="text-xs font-medium text-primary uppercase tracking-widest text-center">{role}</p>
        
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-accent mt-6 mb-4"></div>
      </div>
    </div>
  );
}
