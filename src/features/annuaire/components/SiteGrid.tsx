import { motion } from "framer-motion"
import type { Variants } from "framer-motion" // 1. On ajoute l'import de Variants
import SiteCard from "./SiteCard"
import type { Site } from "../../../types/site"

type Props = {
  sites: Site[]
}

// 2. On type explicitement containerVariants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
}

// 3. On type explicitement itemVariants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.80,
      ease: "easeOut", // 👈 TypeScript sait maintenant que c'est une transition valide !
    },
  },
}

export default function SiteGrid({ sites }: Props) {
  if (sites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 bg-white border border-slate-100 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] min-h-[350px]">
        <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm">
          🔍
        </div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Aucun site trouvé
        </h2>
        <p className="text-slate-500 text-sm max-w-sm mt-2 leading-relaxed">
          Nous n'avons trouvé aucun résultat correspondant à votre recherche.
        </p>
      </div>
    )
  }

  return (<motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      // Utilisation de 'items-stretch' pour forcer l'alignement des hauteurs
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
    >
      {sites.map((site) => (
        <motion.div key={site.name} variants={itemVariants} className="h-full flex">
          <SiteCard site={site} />
        </motion.div>
      ))}
    </motion.div>
  )
}