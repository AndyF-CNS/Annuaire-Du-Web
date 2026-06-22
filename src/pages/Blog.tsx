import React, { useState } from "react"
import { ArrowUpRight, BookOpen, ArrowLeft, Clock, ChevronRight, Lightbulb, AlertTriangle } from "lucide-react"
// Importation de votre structure de données nettoyée
import { blogArticles } from "../data/blogData" 

// --- DESIGN TOKENS (TFH-THEME) ---
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

// Cartographie des visuels associés aux identifiants stricts de blogData.ts
const POST_IMAGES: Record<string, string> = {
  "featured-1": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  "grid-1": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop",
  "grid-2": "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?q=80&w=600&auto=format&fit=crop",
  "grid-3": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
  "grid-4": "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop",
  "grid-5": "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop",
  "grid-6": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop"
}

export default function BlogSection() {
  // --- ÉTATS POUR LA LECTURE DES ARTICLES ---
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null)
  const [activeToc, setActiveToc] = useState<string>("")

  // Extraction dynamique basée sur le modèle structurel de blogData.ts
  const featuredPost = blogArticles.find(article => article.isFeatured) || blogArticles[0]
  const sidePosts = blogArticles.filter(article => article.id.startsWith("side"))
  const gridPosts = blogArticles.filter(article => article.id.startsWith("grid"))

  // Gestionnaire de sélection d'un article
  const handleSelectArticle = (article: any) => {
    setSelectedArticle(article)
    if (article.toc?.length) {
      setActiveToc(article.toc[0])
    }
    // Remonte en haut de page de manière fluide à l'ouverture
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Extraction dynamique du module interactif s'il existe
  const InteractiveModule = selectedArticle?.component
  const SelectedIcon = selectedArticle?.icon

  return (
    <section 
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: C.surface, fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        
        {!selectedArticle ? (
          /* ========================================================================= */
          /* --- VUE 1 : CATALOGUE / LISTING DES ARTICLES ---------------------------- */
          /* ========================================================================= */
          <div className="animate-fade-in">
            {/* --- EN-TÊTE ÉDITORIAL --- */}
            <div className="mb-16 pb-6 border-b" style={{ borderColor: C.border }}>
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-white border"
                  style={{ color: C.blue, borderColor: C.border }}
                >
                  Ressources Éducatives
                </span>
              </div>
              <h2 
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Le Journal de TechFacile<span style={{ color: C.cyan }}>Hub</span>
              </h2>
              <p className="text-sm mt-2 max-w-xl leading-relaxed" style={{ color: C.t3 }}>
                L'actualité tech décryptée, simplifiée et pensée pour accompagner vos équipes au quotidien.
              </p>
            </div>

            {/* --- SECTION HÉROS ASYMÉTRIQUE --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-16">
              
              {/* Article Vedette (Gauche) */}
              <div 
                className="lg:col-span-2 group cursor-pointer"
                onClick={() => handleSelectArticle(featuredPost)}
              >
                <div 
                  className="aspect-video w-full rounded-xl overflow-hidden bg-white border mb-6 relative transition-shadow duration-300 group-hover:shadow-lg"
                  style={{ borderColor: C.border }}
                >
                  <img 
                    src={POST_IMAGES[featuredPost.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded" style={{ backgroundColor: C.surfaceAlt, color: C.blueXD }}>
                        {featuredPost.badge?.text}
                      </span>
                    </div>
                    <h3 
                      className="text-xl sm:text-2xl font-bold tracking-tight leading-snug group-hover:text-blue-600 transition-colors"
                      style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {featuredPost.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase block mb-2" style={{ color: C.cyan }}>
                        {featuredPost.category} • {featuredPost.readTime}
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed line-clamp-3" style={{ color: C.t2 }}>
                        {featuredPost.summary}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold block mt-4" style={{ color: C.t4 }}>
                      {featuredPost.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Liste Latérale (Droite) */}
              <div className="flex flex-col justify-between h-full bg-white p-6 rounded-xl border" style={{ borderColor: C.border }}>
                {sidePosts.map((post, index) => {
                  const IconComponent = post.icon
                  return (
                    <div 
                      key={post.id} 
                      className={`group cursor-pointer pb-6 ${index > 0 ? "pt-6 border-t" : ""}`}
                      style={index > 0 ? { borderColor: C.border } : {}}
                      onClick={() => handleSelectArticle(post)}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        {IconComponent && (
                          <div className="p-1 rounded bg-slate-50 border" style={{ borderColor: C.border, color: C.blue }}>
                            <IconComponent size={12} />
                          </div>
                        )}
                        <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: C.blue }}>
                          {post.category}
                        </span>
                      </div>
                      <h4 
                        className="text-base font-bold tracking-tight leading-snug flex items-start gap-1"
                        style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <span className="group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all shrink-0 mt-1 text-blue-600 translate-y-1 group-hover:translate-y-0" style={{ color: C.blue }} />
                      </h4>
                      <p className="text-xs mt-2 line-clamp-2 leading-relaxed" style={{ color: C.t3 }}>
                        {post.summary}
                      </p>
                      <span className="text-[11px] font-medium block mt-3" style={{ color: C.t4 }}>
                        {post.date}
                      </span>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* --- GRILLE SECONDAIRE À 3 COLONNES --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12 pt-12 border-t" style={{ borderColor: C.border }}>
              {gridPosts.map((post) => {
                const IconComponent = post.icon
                return (
                  <div 
                    key={post.id} 
                    className="group cursor-pointer flex flex-col justify-between bg-white p-4 rounded-xl border transition-shadow duration-300 hover:shadow-md"
                    style={{ borderColor: C.border }}
                    onClick={() => handleSelectArticle(post)}
                  >
                    <div>
                      <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 border mb-4" style={{ borderColor: C.border }}>
                        <img 
                          src={POST_IMAGES[post.id] || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop"} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" 
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          {IconComponent && (
                            <span className="p-1 rounded text-white" style={{ backgroundColor: C.blueXD }}>
                              <IconComponent size={10} />
                            </span>
                          )}
                          <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: C.t3 }}>
                            {post.category}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border" style={{ borderColor: C.border, color: C.t2, backgroundColor: C.surface }}>
                          {post.badge?.text}
                        </span>
                      </div>
                      <h4 
                        className="text-sm sm:text-base font-bold tracking-tight leading-snug line-clamp-2"
                        style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <span className="group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </span>
                      </h4>
                    </div>
                    
                    <div className="mt-4 pt-2 border-t flex justify-between items-center text-[11px]" style={{ borderColor: C.surface, color: C.t4 }}>
                      <span>{post.date}</span>
                      <span className="font-medium">{post.readTime} de lecture</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* --- BOUTON DE CHARGEMENT CENTRALISÉ --- */}
            <div className="flex justify-center mt-20">
              <button 
                className="text-xs font-bold uppercase tracking-wider text-white px-8 py-3.5 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer flex items-center gap-2"
                style={{ backgroundColor: C.blue }}
              >
                <BookOpen size={14} />
                Voir plus d'articles
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* --- VUE 2 : PAGE DE LECTURE DÉTAILLÉE DE L'ARTICLE ---------------------- */
          /* ========================================================================= */
          <div className="animate-fade-in bg-white border rounded-2xl p-6 sm:p-10 shadow-sm" style={{ borderColor: C.border }}>
            
            {/* BOUTON RETOUR & FIL D'ARIANE */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b" style={{ borderColor: C.surface }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-slate-50 border cursor-pointer"
                style={{ color: C.blueXD, borderColor: C.border }}
              >
                <ArrowLeft size={14} /> Retour au Journal
              </button>
              
              <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: C.t3 }}>
                <span className="cursor-pointer hover:underline" onClick={() => setSelectedArticle(null)}>Journal</span>
                <ChevronRight size={12} />
                <span className="font-bold uppercase tracking-wider text-[10px]" style={{ color: C.blue }}>{selectedArticle.category}</span>
                <ChevronRight size={12} />
                <span className="text-slate-400 truncate max-w-[180px] sm:max-w-xs">{selectedArticle.title}</span>
              </div>
            </div>

            {/* EN-TÊTE DE L'ARTICLE */}
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded" style={{ backgroundColor: C.surface, color: C.blueXD }}>
                  {selectedArticle.badge?.text}
                </span>
                <span className="text-xs font-medium" style={{ color: C.t4 }}>• {selectedArticle.readTime} de lecture</span>
              </div>
              
              <h1 
                className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4"
                style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {selectedArticle.title}
              </h1>
              
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: C.t2 }}>
                {selectedArticle.summary}
              </p>
            </div>

            {/* BANNIÈRE ILLUSTRÉE PRINCIPALE */}
            <div 
              className="w-full aspect-[21/9] rounded-xl overflow-hidden border bg-slate-50 mb-12 relative"
              style={{ borderColor: C.border }}
            >
              <img 
                src={POST_IMAGES[selectedArticle.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
              {SelectedIcon && (
                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur border shadow-sm" style={{ color: C.blue, borderColor: C.border }}>
                  <SelectedIcon size={24} />
                </div>
              )}
            </div>

            {/* METADONNÉES / AUTEUR */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b" style={{ borderColor: C.surface }}>
              <div className="w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center border" style={{ backgroundColor: C.surface, borderColor: C.border, color: C.blueXD }}>
                TFH
              </div>
              <div>
                <span className="block text-sm font-bold" style={{ color: C.blueXD }}>La Rédaction TechFacileHub</span>
                <span className="block text-xs" style={{ color: C.t4 }}>Publié le {selectedArticle.date}</span>
              </div>
            </div>

            {/* ZONE DE CONTENU DEUX COLONNES (SOMMAIRE STICKY + BLOCKS DE TEXTE) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* COLONNE GAUCHE : SOMMAIRE DYNAMIQUE */}
              {selectedArticle.toc && selectedArticle.toc.length > 0 && (
                <div className="lg:col-span-1 lg:sticky lg:top-8 h-fit border-l-2 pl-4 space-y-3 hidden lg:block" style={{ borderColor: C.surface }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: C.t4 }}>Dans cet article</p>
                  {selectedArticle.toc.map((heading: string) => (
                    <button
                      key={heading}
                      onClick={() => setActiveToc(heading)}
                      className="block text-left text-xs font-medium transition-all hover:text-blue-600 w-full"
                      style={{ color: activeToc === heading ? C.blue : C.t3, fontWeight: activeToc === heading ? 700 : 500 }}
                    >
                      {heading}
                    </button>
                  ))}
                </div>
              )}

              {/* COLONNE DROITE : PARSEUR DE BLOCS DE CONTENU */}
              <div className={`space-y-6 ${selectedArticle.toc?.length ? "lg:col-span-3" : "lg:col-span-4"} max-w-3xl`}>
                {selectedArticle.contentBlocks?.map((block: any, index: number) => {
                  switch (block.type) {
                    case "paragraph":
                      return (
                        <p key={index} className="text-sm sm:text-base leading-relaxed" style={{ color: C.t2 }}>
                          {block.text}
                        </p>
                      )
                    case "heading":
                      return (
                        <h3 
                          key={index} 
                          className="text-lg sm:text-xl font-bold pt-4 tracking-tight"
                          style={{ color: C.blueXD, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {block.text}
                        </h3>
                      )
                    case "tip":
                      return (
                        <div key={index} className="p-4 rounded-xl border-l-4 my-4 flex gap-3 items-start bg-cyan-50/40" style={{ borderColor: C.cyan }}>
                          <Lightbulb className="shrink-0 mt-0.5" size={16} style={{ color: C.cyan }} />
                          <div>
                            <span className="block text-xs font-bold uppercase mb-1" style={{ color: C.cyan }}>{block.title || "Astuce"}</span>
                            <p className="text-xs sm:text-sm" style={{ color: C.t2 }}>{block.text}</p>
                          </div>
                        </div>
                      )
                    case "warning":
                      return (
                        <div key={index} className="p-4 rounded-xl border-l-4 my-4 flex gap-3 items-start bg-orange-50/40" style={{ borderColor: C.orange }}>
                          <AlertTriangle className="shrink-0 mt-0.5" size={16} style={{ color: C.orange }} />
                          <div>
                            <span className="block text-xs font-bold uppercase mb-1" style={{ color: C.orange }}>{block.title || "Attention"}</span>
                            <p className="text-xs sm:text-sm" style={{ color: C.t2 }}>{block.text}</p>
                          </div>
                        </div>
                      )
                    case "quote":
                      return (
                        <blockquote key={index} className="pl-4 italic my-6 border-l-4 text-sm sm:text-base" style={{ borderColor: C.blue, color: C.t3 }}>
                          “ {block.text} ”
                        </blockquote>
                      )
                    default:
                      return null
                  }
                })}

                {/* MODULE INTERACTIF S'IL EXISTE */}
                {InteractiveModule && (
                  <div className="mt-8 pt-6 border-t border-dashed" style={{ borderColor: C.border }}>
                    <InteractiveModule />
                  </div>
                )}

                {/* LES TAGS DE L'ARTICLE */}
                {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                  <div className="pt-6 mt-8 border-t flex flex-wrap gap-2" style={{ borderColor: C.surface }}>
                    {selectedArticle.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-semibold px-2.5 py-1 rounded bg-slate-50 border text-slate-500"
                        style={{ borderColor: C.border }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* DEUXIÈME BOUTON RETOUR EN BAS DE PAGE */}
            <div className="mt-12 pt-8 border-t flex justify-center" style={{ borderColor: C.surface }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:bg-slate-50 border cursor-pointer"
                style={{ color: C.blueXD, borderColor: C.border }}
              >
                <ArrowLeft size={14} /> Revenir à la liste des articles
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}