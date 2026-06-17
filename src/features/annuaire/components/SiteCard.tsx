import type { Site } from "../../../types/site"
import { ExternalLink, Star } from "lucide-react"
import { motion } from "framer-motion"

type Props = {
  site: Site
}

export default function SiteCard({ site }: Props) {
  const Icon = site.icon

 return (
    <motion.div
      whileHover={{ y: -3 }} // Élévation minimale
      transition={{ duration: 0.2, ease: "easeInOut" }} // Transition douce
      className="
      flex flex-col sm:flex-row items-stretch
      bg-white 
      rounded-[2rem] 
      border border-slate-100 
      shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
      hover:shadow-[0_10px_25px_-4px_rgba(0,0,0,0.06)]
      hover:border-slate-200/80
      transition-all duration-300
      overflow-hidden
      h-full
      "
    > 
    {/* 1. PARTIE GAUCHE : L'image prend toute la hauteur et s'adapte */}
      <div className="
        flex-shrink-0 
        w-full sm:w-40 
        bg-slate-50/70 
        flex items-center justify-center 
        p-6 
        border-b sm:border-b-0 sm:border-r border-slate-100
      ">
        {site.image ? (
          <img
            src={site.image}
            alt={site.name}
            className="w-full h-20 sm:h-24 object-contain max-h-24 transition-transform duration-300 hover:scale-105"
          />
        ) : Icon ? (
          <Icon size={40} className="text-violet-600" />
        ) : null}
      </div>

      {/* 2. PARTIE DROITE : Bloc de contenu (Textes en haut, Boutons en bas) */}
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          {/* Titre et description courte */}
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            {site.name}
          </h2>
          
          <p className="text-slate-500 text-sm leading-relaxed mt-2 line-clamp-2 md:line-clamp-3">
            {site.description}
          </p>
        </div>

        {/* Barre d'actions (Bouton pilule + Favori rond) */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={site.url}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            flex items-center justify-center gap-2
            bg-slate-950 hover:bg-slate-800 text-white 
            font-medium text-sm
            py-3 px-4 
            rounded-full
            shadow-sm
            "
          >
            <span>Accéder</span>
            <ExternalLink size={14} className="opacity-80" />
          </a>

          <button
            className="
            w-11 h-11
            flex items-center justify-center
            border border-slate-200 hover:border-yellow-200
            rounded-full
            text-slate-400 hover:text-yellow-500 hover:bg-yellow-50
            transition-all duration-200
            group
            "
            title="Ajouter aux favoris"
          >
            <Star size={16} className="transition-transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}