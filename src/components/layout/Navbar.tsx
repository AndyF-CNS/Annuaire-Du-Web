import {
 Link,
 useLocation,
} from "react-router-dom"

import {
 Globe,
 BookOpen,
 Bot,
 Star,
} from "lucide-react"

export default function Navbar() {

 const location = useLocation()

 const links = [
  {
   label: "Annuaire",
   icon: Globe,
   href: "/annuaire",
  },
  {
   label: "Fiches",
   icon: BookOpen,
   href: "/fiches",
  },
  {
   label: "IA",
   icon: Bot,
   href: "/ia",
  },
  {
   label: "Favoris",
   icon: Star,
   href: "/favoris",
  },
 ]

 return (
  <nav
   className="
   sticky top-0 z-50
   bg-white/80
   backdrop-blur
   border-b
   "
  >
   <div
    className="
    max-w-7xl
    mx-auto
    px-6
    py-4
    flex
    items-center
    justify-between
    "
   >
    <Link
     to="/"
     className="font-bold text-xl"
    >
     Tech Facile Hub
    </Link>

    <div className="flex gap-6">

     {links.map((link) => {

      const Icon = link.icon

      return (
       <Link
        key={link.href}
        to={link.href}
        className={`
        flex items-center gap-2

        ${
         location.pathname === link.href
          ? "text-violet-600"
          : "text-slate-600"
        }
        `}
       >
        <Icon size={18} />

        {link.label}
       </Link>
      )
     })}

    </div>
   </div>
  </nav>
 )
}