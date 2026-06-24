import { useState } from "react"
import { Eye, Layers, ArrowDownToLine, ArrowLeft, ChevronRight, Printer, Info } from "lucide-react"

// --- DESIGN TOKENS HARMONISÉS ---
const C = {
  blue:       "#1A4FD6",
  blueL:      "#3D6FE8",
  blueXD:     "#08152B",
  cyan:       "#00B4C8",
  orange:     "#FF6B35",
  surface:    "#F1F6FD",
  surfaceAlt: "#E2EBF8",
  border:     "#CDD9F5",
  t1:         "#0B1629",
  t2:         "#2D3F5E",
  t3:         "#5E718A",
  t4:         "#8FA3BB",
  white:      "#FFFFFF",
}

interface Fiche {
  id: string;
  title: string;
  category: string;
  pages: string;
  description: string;
  difficulty: string;
  color: string;
  lien: string;
}

export default function FichesSection() {
  // --- ÉTAT POUR LA LECTURE DES FICHES (Même logique que selectedArticle) ---
  const [selectedFiche, setSelectedFiche] = useState<Fiche | null>(null)

  // Votre base de données de fiches pratiques
  const fichesPratiques: Fiche[] = [
    {
      id: "fiche-1",
      title: "Mémo : Le Clic-Gauche et Clic-Droit",
      category: "Débutant",
      pages: "2 page PDF",
      description: "Une fiche visuelle toute simple avec des couleurs pour ne plus jamais confondre l'utilité des deux boutons de votre souris.",
      difficulty: "Très facile",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      lien: "/fiches/les-bon-clics.pdf"
    },
    {
      id: "fiche-2",
      title: "Fiche : Créer et retenir un bon Mot de Passe",
      category: "Sécurité",
      pages: "2 pages PDF",
      description: "Notre méthode magique pour inventer un mot de passe impossible à deviner pour les pirates, mais très facile à retenir pour vous.",
      difficulty: "Conseillé",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      lien: "https://drive.google.com/file/d/1z-9wxxpT-8x4phIeuQh_I786h9TSy-9n/preview"
    },
    {
      id: "fiche-3",
      title: "Guide : Faire une photo d'écran (Capture)",
      category: "Astuces",
      pages: "1 page PDF",
      description: "Besoin de sauvegarder une preuve ou une image sur votre écran ? Découvrez la combinaison de touches magique expliquée simplement.",
      difficulty: "Pratique",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      lien: "https://drive.google.com/file/d/1z-9wxxpT-8x4phIeuQh_I786h9TSy-9n/preview"
    },
    {
      id: "fiche-4",
      title: "Mémo : Nettoyer sa boîte mail encombrée",
      category: "E-mails",
      pages: "3 pages PDF",
      description: "Étape par étape, apprenez à vous désabonner des publicités agaçantes et à vider la corbeille pour libérer de la place.",
      difficulty: "À faire",
      color: "bg-violet-50 text-violet-600 border-violet-100",
      lien: "https://drive.google.com/file/d/1z-9wxxpT-8x4phIeuQh_I786h9TSy-9n/preview"
    },
    {
      id: "fiche-5",
      title: "Mémo : QRCODE",
      category: "QRCODE",
      pages: "2 pages PDF",
      description: "Étape par étape, apprenez à vous désabonner des publicités agaçantes et à vider la corbeille pour libérer de la place.",
      difficulty: "À faire",
      color: "bg-lime-50 text-lime-600 border-lime-100",
      lien: "fiches/qr-code.pdf"
    },
  ]

  // --- CONVERTISSEURS INTELLIGENTS DE LIENS GOOGLE DRIVE ---
  const getGoogleDriveId = (url: string) => {
    if (!url) return null
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
    return match ? match[1] : null
  }

  // Force le mode /view dans un nouvel onglet pour débloquer l'impression native haute résolution de Google
  const getPrintUrl = (url: string) => {
    const id = getGoogleDriveId(url)
    return id ? `https://drive.google.com/file/d/${id}/view` : url
  }

  // Permet le téléchargement immédiat et sans redirection du fichier PDF brut
  const getDownloadUrl = (url: string) => {
    const id = getGoogleDriveId(url)
    return id ? `https://drive.google.com/uc?export=download&id=${id}` : url
  }

  const handleSelectFiche = (fiche: Fiche) => {
    setSelectedFiche(fiche)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section 
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: C.surface, fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {!selectedFiche ? (
          /* ========================================================================= */
          /* --- VUE 1 : CATALOGUE / LISTING DES FICHES ------------------------------- */
          /* ========================================================================= */
          <div className="animate-fade-in space-y-12">
            
            {/* --- EN-TÊTE ÉDITORIAL --- */}
            <div className="pb-6 border-b" style={{ borderColor: C.border }}>
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-white border"
                  style={{ color: C.blue, borderColor: C.border }}
                >
                  Supports Pratiques
                </span>
              </div>
              <h2 
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Mémos & Fiches Pratiques
              </h2>
              <p className="text-sm mt-2 max-w-xl leading-relaxed" style={{ color: C.t3 }}>
                Des fiches résumées visuelles conçues pour aller à l'essentiel. Téléchargez, imprimez et maîtrisez vos outils numériques.
              </p>
            </div>

            {/* --- GRILLE DES FICHES --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fichesPratiques.map((fiche) => (
                <div 
                  key={fiche.id} 
                  className="group bg-white p-6 rounded-xl border flex flex-col justify-between gap-6 shadow-xs hover:shadow-md transition-all duration-300"
                  style={{ borderColor: C.border }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${fiche.color}`}>
                        {fiche.category}
                      </span>
                      <span className="text-[11px] font-medium flex items-center gap-1" style={{ color: C.t4 }}>
                        <Layers size={13} />
                        {fiche.pages}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 
                        className="text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors group-hover:text-blue-600"
                        style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {fiche.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: C.t3 }}>
                        {fiche.description}
                      </p>
                    </div>
                  </div>

                  {/* Boutons d'actions principaux */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t" style={{ borderColor: C.surface }}>
                    <button 
                      onClick={() => handleSelectFiche(fiche)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded-lg border transition cursor-pointer"
                      style={{ color: C.t2, borderColor: C.border }}
                    >
                      <Eye size={14} style={{ color: C.blue }} />
                      Lire en ligne
                    </button>

                    <a 
                      href={getDownloadUrl(fiche.lien)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition hover:scale-[1.01] active:scale-[0.99] text-center shadow-xs"
                      style={{ backgroundColor: C.orange }}
                    >
                      <ArrowDownToLine size={14} />
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* --- INFO BOX CONVERSATIONNELLE EN BAS DE CATALOGUE --- */}
            <div className="bg-white border rounded-xl p-5 flex items-start gap-4" style={{ borderColor: C.border }}>
              <div className="p-2 rounded-lg" style={{ backgroundColor: C.surface, color: C.blue }}>
                <Info size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wide block" style={{ color: C.blueXD }}>Conseil d'utilisation</span>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: C.t2 }}>
                  Toutes nos fiches utilisent une mise en page vectorielle A4 optimisée pour vos imprimantes de bureau. Gardez-les plastifiées à côté de votre ordinateur !
                </p>
              </div>
            </div>

          </div>
        ) : (
          /* ========================================================================= */
          /* --- VUE 2 : DEUXIÈME VUE DE LECTURE PLEINE PAGE (Idem Articles de Blog) - */
          /* ========================================================================= */
          <div className="animate-fade-in bg-white border rounded-2xl p-6 sm:p-10 shadow-sm" style={{ borderColor: C.border }}>
            
            {/* BARRE DE RETOUR & FIL D'ARIANE */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b" style={{ borderColor: C.surface }}>
              <button 
                onClick={() => setSelectedFiche(null)}
                className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-slate-50 border cursor-pointer"
                style={{ color: C.blueXD, borderColor: C.border }}
              >
                <ArrowLeft size={14} /> Retour aux Fiches
              </button>
              
              <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: C.t3 }}>
                <span className="cursor-pointer hover:underline" onClick={() => setSelectedFiche(null)}>Catalogue</span>
                <ChevronRight size={12} />
                <span className="font-bold uppercase tracking-wider text-[10px]" style={{ color: C.blue }}>{selectedFiche.category}</span>
                <ChevronRight size={12} />
                <span className="text-slate-400 truncate max-w-[180px] sm:max-w-xs">{selectedFiche.title}</span>
              </div>
            </div>

            {/* INFORMATIONS COMPLÈTES DE LA FICHE */}
            <div className="max-w-3xl mb-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border ${selectedFiche.color}`}>
                  {selectedFiche.category}
                </span>
                <span className="text-xs font-medium" style={{ color: C.t4 }}>• {selectedFiche.pages}</span>
              </div>
              
              <h1 
                className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight"
                style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {selectedFiche.title}
              </h1>
              
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: C.t2 }}>
                {selectedFiche.description}
              </p>
            </div>

            {/* ZONE DIVISION DE CONTENU (PANNEAU D'ACTION + VISIONNEUSE GOOGLE DRIVE) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              
              {/* ACCROCHES ET ACTIONS ACTIONS RAPIDES (COLONNE GAUCHE STICKY) */}
              <div className="lg:col-span-1 lg:sticky lg:top-8 space-y-4 bg-slate-50/50 p-4 rounded-xl border" style={{ borderColor: C.border }}>
                <p className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: C.t4 }}>Options du Document</p>
                
                {/* Bouton pour forcer l'outil d'impression natif Google */}
                <a 
                  href={getPrintUrl(selectedFiche.lien)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs transition text-center"
                >
                  <Printer size={35} />
                  Imprimer la Fiche
                </a>

                {/* Bouton de téléchargement direct */}
                <a 
                  href={getDownloadUrl(selectedFiche.lien)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs transition text-center"
                  style={{ backgroundColor: C.blue }}
                >
                  <ArrowDownToLine size={15} />
                  Télécharger (PDF)
                </a>

                <div className="pt-2 text-[11px] leading-relaxed border-t" style={{ borderColor: C.border, color: C.t3 }}>
                  💡 <strong>Note d'impression :</strong> Le bouton orange ouvrira le module d'impression PDF. Cliquez simplement sur l'icône d'imprimante en haut a gauche ou a droite sur la nouvelle page.
                </div>
              </div>

              {/* LECTEUR EMBARQUÉ GOOGLE DRIVE EN GRAND (COLONNE DROITE LECTEUR) */}
              <div className="lg:col-span-3 w-full bg-slate-100 rounded-xl overflow-hidden border aspect-[4/5] sm:h-[75vh]" style={{ borderColor: C.border }}>
                <iframe 
                  src={selectedFiche.lien}
                  className="w-full h-full border-0 bg-white"
                  title={selectedFiche.title}
                  allow="autoplay"
                />
              </div>

            </div>

            {/* BOUTON RETOUR INFÉRIEUR DE FIN DE PAGE */}
            <div className="mt-12 pt-8 border-t flex justify-center" style={{ borderColor: C.surface }}>
              <button 
                onClick={() => setSelectedFiche(null)}
                className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:bg-slate-50 border cursor-pointer"
                style={{ color: C.blueXD, borderColor: C.border }}
              >
                <ArrowLeft size={14} /> Revenir à la liste des fiches
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}