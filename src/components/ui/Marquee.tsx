import React from 'react';

export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    // 1. Conteneur parent : cache tout ce qui dépasse
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      
      {/* 2. Conteneur animé : 'flex' + 'w-max' obligatoires ici */}
      <div className="flex w-max animate-marquee gap-8">
        
        {/* Premier groupe de contenu */}
        <div className="flex gap-8 shrink-0">
          {children}
        </div>
        
        {/* Second groupe (duplication pour la boucle infinie) */}
        <div aria-hidden="true" className="flex gap-8 shrink-0">
          {children}
        </div>
        
      </div>
    </div>
  );
}