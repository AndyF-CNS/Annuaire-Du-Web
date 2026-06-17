import {
 Globe,
 BookOpen,
 Bot,
 Newspaper,
} from "lucide-react"

const items = [
 {
  icon: Globe,
  label: "Annuaire",
 },
 {
  icon: BookOpen,
  label: "Fiches",
 },
 {
  icon: Bot,
  label: "IA",
 },
 {
  icon: Newspaper,
  label: "Tech Facile",
 },
]

export default function QuickAccess() {
 return (
  <div
   className="
   grid
   md:grid-cols-4
   gap-4
   "
  >
   {items.map((item) => {
    const Icon = item.icon

    return (
     <div
      key={item.label}
      className="
      bg-white
      border
      rounded-3xl
      p-6
      hover:shadow-xl
      transition
      "
     >
      <Icon size={32} />

      <h3 className="mt-4 font-bold">
       {item.label}
      </h3>
     </div>
    )
   })}
  </div>
 )
}