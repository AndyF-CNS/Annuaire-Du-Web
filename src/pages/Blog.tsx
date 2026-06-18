import { useState } from "react"
import { Calendar, Clock, ArrowRight, ArrowLeft, Sparkles, BookOpen } from "lucide-react"
import { blogArticles  } from "../data/blogData"
import type { Article } from "../data/blogData"
import QuizModule from "../components/blog/QuizzModule"
import PasswordModule from "../components/blog/PasswordModule"

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const renderInteractivity = (type: Article['interactivityType']) => {
    switch (type) {
      case 'quiz':
        return <QuizModule />
      case 'generateur-mot-de-passe':
        return <PasswordModule />
      default:
        return null
    }
  }

  // VUE 1 : Lecture d'un guide unique
  if (selectedArticle) {
    return (
      <div className="space-y-8 max-w-3xl mx-auto pb-12 animate-fade-in">
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-violet-600 bg-white border border-slate-200 shadow-2xs px-4 py-2 rounded-xl transition cursor-pointer"
        >
          <ArrowLeft size={16} /> Retour aux guides
        </button>

        <article className="bg-white rounded-[2.5rem] border border-slate-100 shadow-md overflow-hidden">
          {/* Ligne d'accent supérieure */}
          <div className="h-3 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600" />
          
          <div className="p-8 md:p-12 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1.5 ml-2">
                <Calendar size={14} /> {selectedArticle.date}
              </span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock size={14} /> {selectedArticle.readTime} de lecture
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {selectedArticle.title}
            </h1>

            {/* Texte de l'article soigné */}
            <div className="text-slate-700 text-base md:text-lg leading-relaxed space-y-5 border-t border-slate-100 pt-6">
              {selectedArticle.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-violet-600 first-letter:font-bold first-letter:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Zone d'atelier pratique intégré */}
            {selectedArticle.interactivityType && (
              <div className="mt-12 pt-8 border-t border-slate-100 space-y-6">
                <div className="text-center max-w-md mx-auto space-y-1.5">
                  <div className="inline-flex p-2 bg-amber-50 text-amber-600 border border-amber-100 rounded-xl mb-1">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Atelier Pratique Intégré</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Passez instantanément de la théorie à l'action grâce au simulateur sécurisé ci-dessous.
                  </p>
                </div>
                
                <div className="p-2 bg-slate-100/40 rounded-[2.2rem] border border-slate-200/40">
                  {renderInteractivity(selectedArticle.interactivityType)}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    )
  }

  // VUE 2 : Catalogue des articles (Index)
  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-12">
      {/* En-tête épuré */}
      <header className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
          <BookOpen size={24} className="text-violet-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Les Guides Pratiques
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Des fiches claires, sans termes complexes, associées à des exercices réels pour prendre confiance en informatique.
          </p>
        </div>
      </header>

      {/* Grille d'articles asymétrique et aérée */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogArticles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white rounded-[2rem] border border-slate-100 shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-7 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                  <Clock size={13} /> {article.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors leading-snug">
                {article.title}
              </h2>
              
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>
            
            <div className="px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Mis à jour en 2026
              </span>
              <button
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-950 text-white hover:bg-violet-600 px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer group-hover:scale-[1.02]"
              >
                Ouvrir le guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}