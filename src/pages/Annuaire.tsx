import SearchBar from "../features/annuaire/components/SearchBar"
import CategoryFilter from "../features/annuaire/components/CategoryFilter"
import SiteGrid from "../features/annuaire/components/SiteGrid"
import { useSites } from "../hooks/useSites"
import { Globe } from "lucide-react"

export default function Annuaire() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    filteredSites,
  } = useSites()

  return (
    <div className="space-y-6"> 
      
      {/* 1. En-tête de page épuré */}
      <header className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
          <Globe size={24} className="text-violet-600" />
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Annuaire du Web
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Découvrez une sélection de sites et services numériques incontournables,
            classés par catégorie pour simplifier vos démarches et loisirs au quotidien.
          </p>
        </div>
      </header>

      {/* 2. Zone d'outils (Recherche + Filtres) */}
      <section className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold text-slate-800">
            Filtrer les ressources
          </h2>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {filteredSites.length} ressources trouvées
          </span>
        </div>
        
        <div className="grid gap-4">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter value={category} onChange={setCategory} />
        </div>
      </section>

      {/* 3. Grille de sites */}
      <SiteGrid sites={filteredSites} />
    </div>
  )
}