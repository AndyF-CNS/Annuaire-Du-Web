import { Search } from "lucide-react"

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100 px-8 py-3">
      <div className="flex justify-between items-center">
        <div className="
          flex
          items-center
          gap-2.5
          bg-slate-50
          border
          border-slate-200/60
          px-3.5
          py-2
          rounded-xl
          w-[360px]
          focus-within:border-violet-500
          focus-within:bg-white
          transition-all
        ">
          <Search size={16} className="text-slate-400 flex-shrink-0" />
          <input
            placeholder="Rechercher un site, un service..."
            className="
            bg-transparent
            outline-none
            w-full
            text-sm
            text-slate-800
            placeholder:text-slate-400
            "
          />
        </div>
      </div>
    </header>
  )
}