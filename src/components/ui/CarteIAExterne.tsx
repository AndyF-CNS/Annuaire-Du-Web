import { Bot, ExternalLink, Info } from "lucide-react"

export default function CarteIAExterne() {
  return (
    <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm max-w-sm relative flex flex-col justify-between group">
      
      <div>
        {/* EN-TÊTE DE LA CARTE */}
        <div className="flex justify-between items-start mb-4">
          {/* Logo de l'IA (Exemple : Claude) */}
          <div className="w-10 h-10 bg-amber-50 border border-amber-200/60 rounded-xl flex items-center justify-center text-xl shadow-2xs">
            🪶
          </div>
          
          {/* 🤖 LE BONHOMME INFORMATIF (Déclenche la bulle au survol) */}
          <div className="relative group/bot cursor-help">
            
            {/* LA BULLE DE DIALOGUE AMICALE */}
            <div className="
              absolute bottom-full right-0 mb-2 w-60 p-3
              bg-slate-900 text-white text-xs rounded-xl shadow-lg border border-slate-800
              
              /* Flèche vers le bas */
              after:content-[''] after:absolute after:top-full after:right-6 
              after:border-4 after:border-transparent after:border-top-slate-900
              
              /* Animation d'apparition au hover du bonhomme */
              opacity-0 translate-y-1 scale-95 pointer-events-none
              group-hover/bot:opacity-100 group-hover/bot:translate-y-0 group-hover/bot:scale-100
              transition-all duration-200 ease-out z-10
            ">
              <p className="font-bold text-amber-400 mb-1 flex items-center gap-1">
                <Info size={12} /> Note de TechFacile :
              </p>
              Pour utiliser Claude, il vous sera demandé de créer un compte gratuit sur leur site web.
            </div>

            {/* LE VISUEL DU BONHOMME (Le badge) */}
            <div className="
              flex items-center gap-1.5 px-2.5 py-1.5 
              bg-amber-50 text-amber-700 border border-amber-200/80 rounded-xl text-xs font-medium
              transition-colors group-hover/bot:bg-amber-100 group-hover/bot:text-amber-800
            ">
              <Bot size={15} className="transition-transform group-hover/bot:scale-110 group-hover/bot:rotate-6" />
              <span>Compte requis</span>
            </div>

          </div>
        </div>

        {/* TITRE & DESCRIPTION */}
        <h3 className="text-slate-800 font-bold text-lg mb-1">Claude 3.5 Sonnet</h3>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          Une intelligence artificielle exceptionnelle pour rédiger des e-mails, corriger des textes ou expliquer des notions informatiques compliquées avec des mots simples.
        </p>
      </div>

      {/* BOUTON DE REDIRECTION EXTERNE */}
      <a 
        href="https://claude.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="
          inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 
          bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold rounded-xl 
          shadow-xs transition active:scale-98
        "
      >
        Ouvrir le site de Claude
        <ExternalLink size={14} />
      </a>
      
    </div>
  )
}