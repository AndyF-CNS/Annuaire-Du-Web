import { Star, Heart, ArrowRight } from "lucide-react"
import SiteGrid from "../features/annuaire/components/SiteGrid"
import { useSites } from "../hooks/useSites"

export default function Favoris() {
  // Récupération des sites filtrés ou favoris via votre hook existant
  const { filteredSites } = useSites()
  
  // Simulation/Filtrage théorique des favoris pour l'affichage
  // (À remplacer par votre propre logique d'état ex: site.isFavorite)
  const favoriteSites = filteredSites.slice(0, 3) 

  return (
    <div className="space-y-8">
      {/* En-tête de la page */}
      <header className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
          <Star size={24} className="text-amber-500 fill-amber-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Mes Sites Favoris
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Votre carnet de navigation personnel. Retrouvez ici en un clin d'œil tous les sites et services utiles que vous avez marqués d'une étoile pour ne plus jamais les perdre.
          </p>
        </div>
      </header>

      {/* Bannière de bienvenue / Rassurance contextuelle */}
      <section className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200/60 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">⭐</span>
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold text-slate-900">Un tableau de bord à votre image</h2>
            <p className="text-slate-600 text-xs">
              Pour ajouter un site ici, cliquez simplement sur l'étoile grise présente sur n'importe quelle fiche de l'annuaire.
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full shrink-0">
          {favoriteSites.length} sites enregistrés
        </span>
      </section>

      {/* Affichage conditionnel selon s'il y a des favoris ou non */}
      {favoriteSites.length > 0 ? (
        <main className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Accès rapide à mes services :
            </h3>
          </div>
          
          {/* Réutilisation directe de votre superbe grille unifiée */}
          <SiteGrid sites={favoriteSites} />
        </main>
      ) : (
        /* Vue vide ultra-claire et incitative si aucun favori n'est coché */
        <div className="text-center py-12 bg-white border border-dashed border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="w-12 h-12 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto border border-slate-100">
            <Heart size={20} />
          </div>
          <div className="space-y-1">
            <p className="text-base font-bold text-slate-800">Votre carnet est encore vide</p>
            <p className="text-slate-500 text-xs max-w-sm mx-auto">
              Allez explorer l'annuaire général et cliquez sur les étoiles pour épingler vos sites préférés (Ameli, Impôts, Journaux...).
            </p>
          </div>
          <a 
            href="/annuaire" 
            className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-700 pt-1"
          >
            Parcourir l'Annuaire du Web
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </div>
  )
}