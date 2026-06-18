import { LayoutDashboard, Globe, BookOpen, Sparkles, Star, MoreHorizontal, X, Wrench, Newspaper, NotebookPen } from "lucide-react"
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const menu = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Annuaire", path: "/annuaire", icon: Globe },
  { label: "Fiches", path: "/fiches", icon: BookOpen },
  { label: "IA", path: "/ia", icon: Sparkles },
  { label: "Favoris", path: "/favoris", icon: Star },
  { label: "TechFacile", path: "/tech-facile", icon: Wrench },
  { label: "Blog", path: "/blog", icon: Newspaper },
  { label: "Ateliers", path: "/ateliers", icon: NotebookPen },
]

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false)
  const location = useLocation()
  const mainLinks = menu.slice(0, 4)

  return (
    <>
      {/* 1. VERSION DESKTOP */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-52 bg-slate-950 p-6 flex-col gap-8">
        <div className="text-xl font-bold text-white px-2">TechFacile <span className="text-violet-400">Hub</span></div>
        <nav className="flex flex-col gap-1.5">
          {menu.map((item) => (
             <NavLink key={item.path} to={item.path} className={({isActive}) => `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${isActive ? "bg-violet-600 text-white" : "text-slate-400 hover:text-slate-100"}`}>
               <item.icon size={20} /> {item.label}
             </NavLink>
          ))}
        </nav>
      </aside>

      {/* 2. VERSION MOBILE (Floating Dock) */}
      <nav className="md:hidden fixed bottom-4 inset-x-4 z-[60] bg-black text-white p-2 rounded-full flex items-center justify-between shadow-2xl border border-slate-800">
        {mainLinks.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={`flex items-center gap-2 rounded-full p-2 transition-all duration-300 ${isActive ? "bg-white text-black px-4" : "text-slate-400"}`}
            >
              <item.icon size={22} />
              {/* Le label apparaît uniquement si actif */}
              {isActive && <span className="text-xs font-bold whitespace-nowrap">{item.label}</span>}
            </NavLink>
          )
        })}
        <button onClick={() => setShowMore(!showMore)} className="p-3 text-slate-400">
          {showMore ? <X size={22} /> : <MoreHorizontal size={22} />}
        </button>
      </nav>

      {/* 3. MODALE "PLUS" PLEIN ÉCRAN (Smooth Transition) */}
      <div className={`md:hidden fixed inset-0 bg-slate-950 z-50 p-8 pt-20 transition-all duration-500 ease-in-out ${showMore ? "opacity-100 visible" : "opacity-0 invisible"}`}>
         <div className="flex justify-end mb-10">
            <button onClick={() => setShowMore(false)} className="p-2 text-white"><X size={32}/></button>
         </div>
         <div className="grid grid-cols-2 gap-4">
           {menu.slice(4).map(item => (
             <NavLink 
                key={item.path} 
                to={item.path} 
                onClick={() => setShowMore(false)} 
                className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-900 rounded-3xl text-slate-300"
             >
               <item.icon size={32} className="text-violet-400"/> 
               <span className="font-bold text-sm">{item.label}</span>
             </NavLink>
           ))}
         </div>
      </div>
    </>
  )
}