import {
  LayoutDashboard,
  Globe,
  BookOpen,
  Sparkles,
  Star,
  NotebookPen
} from "lucide-react"
import { NavLink } from "react-router-dom"

const menu = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Annuaire", path: "/annuaire", icon: Globe },
  { label: "Fiches", path: "/fiches", icon: BookOpen },
  { label: "IA", path: "/ia", icon: Sparkles },
  { label: "Favoris", path: "/favoris", icon: Star },
  { label: "TechFacile", path: "/tech-facile", icon: Star },
  { label:  "Ateliers", path:"/ateliers", icon: NotebookPen }
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-slate-950 text-slate-200 p-6 flex flex-col gap-8">
      {/* Remplacement du h1 par une div mieux contrôlée */}
      <div className="text-xl font-bold text-white tracking-tight px-2">
        TechFacile <span className="text-violet-400">Hub</span>
      </div>

      <nav className="flex flex-col gap-1.5">
        {menu.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex
                items-center
                gap-3
                px-4
                py-2.5
                rounded-xl
                text-sm
                font-medium
                transition-colors
                duration-200
                ${isActive 
                  ? "bg-violet-600 text-white font-semibold" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                }
              `}
            >
              {/* Taille d'icône ajustée de 35 à 20 pour un rendu pro */}
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}