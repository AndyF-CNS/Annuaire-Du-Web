import { 
  Layers, 
  Landmark, 
  Stethoscope, 
  MessageSquare, 
  Palette, 
  GraduationCap, 
  Bot, 
  Newspaper, 
  ShoppingCart, 
  Wrench, 
  Gamepad2 
} from "lucide-react"

import type { Category } from "../../../types/site"

// Cartographie complète des 10 catégories avec leurs icônes Lucide dédiées
const categories = [
  { value: "tous", label: "Tous", icon: Layers },
  { value: "administration", label: "Administration", icon: Landmark },
  { value: "sante", label: "Santé", icon: Stethoscope },
  { value: "communication", label: "Communication", icon: MessageSquare },
  { value: "creation", label: "Création", icon: Palette },
  { value: "formation", label: "Formation", icon: GraduationCap },
  { value: "ia", label: "IA", icon: Bot },
  { value: "actualites", label: "Actualités", icon: Newspaper },
  { value: "shopping", label: "Shopping", icon: ShoppingCart },
  { value: "outils", label: "Outils", icon: Wrench },
  { value: "loisirs", label: "Loisirs", icon: Gamepad2 },
] as const

type Props = {
  value: Category | "tous"
  onChange: (value: Category | "tous") => void
}

export default function CategoryFilter({ value, onChange }: Props) {
  return (
    <div className="flex gap-2.5 flex-wrap mb-8">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = value === category.value

        return (
          <button
            key={category.value}
            onClick={() => onChange(category.value as Category | "tous")}
            className={`
              flex items-center gap-2
              px-4 py-2.5 
              rounded-xl
              text-sm font-medium
              transition-all duration-200
              cursor-pointer
              ${
                isActive
                  ? "bg-violet-600 text-white shadow-sm shadow-violet-600/10 border border-violet-600"
                  : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100/80 hover:text-slate-900"
              }
            `}
          >
            <Icon size={16} className={isActive ? "opacity-100" : "opacity-70"} />
            <span>{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}