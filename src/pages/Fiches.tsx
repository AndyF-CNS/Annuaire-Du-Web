import { FileText, Eye, Layers, ArrowDownToLine } from "lucide-react"
import { useState } from "react";

export default function Fiches() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const fichesPratiques = [
    {
      title: "Mémo : Le Clic-Gauche et Clic-Droit",
      category: "Débutant",
      pages: "1 page PDF",
      description: "Une fiche visuelle toute simple avec des couleurs pour ne plus jamais confondre l'utilité des deux boutons de votre souris.",
      difficulty: "Très facile",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      lien:""
    },
    {
      title: "Fiche : Créer et retenir un bon Mot de Passe",
      category: "Sécurité",
      pages: "2 pages PDF",
      description: "Notre méthode magique pour inventer un mot de passe impossible à deviner pour les pirates, mais très facile à retenir pour vous.",
      difficulty: "Conseillé",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      title: "Guide : Faire une photo d'écran (Capture)",
      category: "Astuces",
      pages: "1 page PDF",
      description: "Besoin de sauvegarder une preuve ou une image sur votre écran ? Découvrez la combinaison de touches magique expliquée simplement.",
      difficulty: "Pratique",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      title: "Mémo : Nettoyer sa boîte mail encombrée",
      category: "E-mails",
      pages: "3 pages PDF",
      description: "Étape par étape, apprenez à vous désabonner des publicités agaçantes et à vider la corbeille pour libérer de la place.",
      difficulty: "À faire",
      color: "bg-violet-50 text-violet-600 border-violet-100"
    }
  ]

  return (
    <div className="space-y-8">
      {/* En-tête de la page */}
      <header className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
          <FileText size={24} className="text-violet-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Fiches Pratiques & Mémos
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Téléchargez ou imprimez nos fiches résumées. Pas de long discours : uniquement de gros schémas clairs et des instructions numérotées pas à pas.
          </p>
        </div>
      </header>

      {/* Grille des Fiches */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {fichesPratiques.map((fiche, index) => (
          <div key={index} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition flex flex-col justify-between gap-5">
            
            <div className="space-y-3">
              {/* Catégorie & Indicateur de pages */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${fiche.color}`}>
                  {fiche.category}
                </span>
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <Layers size={13} />
                  {fiche.pages}
                </span>
              </div>

              {/* Titre & Description de la fiche */}
              <div className="space-y-1.5">
                <h2 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {fiche.title}
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {fiche.description}
                </p>
              </div>
            </div>

            {/* Boutons d'actions principaux d'une fiche */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              {/* Bouton de visualisation simple */}
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition">
                <Eye size={14} />
                Lire à l'écran
              </button>

              {/* Gros bouton d'action pour télécharger/imprimer */}
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl shadow-xs transition active:scale-98">
                <ArrowDownToLine size={14} />
                Télécharger (PDF)
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Bloc de rassurance pour l'impression papier */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex items-center gap-3">
        <span className="text-xl">🖨️</span>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          <strong>Astuce confort :</strong> Toutes nos fiches sont optimisées pour être imprimées sur du papier A4 standard. N'hésitez pas à les imprimer en couleur pour les garder près de votre clavier !
        </p>
      </div>
    </div>
  )
}