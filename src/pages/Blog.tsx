import { useState } from "react"
import { FileText, Calendar, Clock, ArrowRight, ArrowLeft, Zap, Target, BookOpen } from "lucide-react"
import { blogArticles } from "../data/blogData"
import type { Article } from "../data/blogData"
import QuizModule from "../components/blog/QuizzModule"
import PasswordModule from "../components/blog/PasswordModule"

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  // Couleurs dynamiques par catégorie
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'IA': return "from-violet-500 to-purple-500 text-white"
      case 'Sécurité': return "from-emerald-500 to-teal-500 text-white"
      default: return "from-blue-500 to-cyan-500 text-white"
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {!selectedArticle ? (
        <div className="space-y-8">
          <header className="space-y-2">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-slate-950 leading-tight">
              Le Lab <span className="text-violet-600">Interactif</span>
            </h1>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-slate-500">Apprendre en manipulant.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <div 
                key={article.id} 
                className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${getCategoryStyles(article.category)} flex items-center justify-center mb-6`}>
                  <Zap size={24} />
                </div>
                <h2 className="text-[clamp(1.2rem,2vw,1.5rem)] font-bold text-slate-950 mb-2">{article.title}</h2>
                <p className="text-slate-600 mb-6">{article.summary}</p>
                <button className="flex items-center gap-2 text-violet-600 font-bold text-sm">
                  Démarrer l'atelier <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* VUE ARTICLE AVEC INTERACTIVITÉ */
        <div className="max-w-3xl mx-auto space-y-8">
          <button onClick={() => setSelectedArticle(null)} className="text-slate-400 hover:text-violet-600 flex items-center gap-2">
            <ArrowLeft size={20} /> Retour
          </button>
          
          <article className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-950 mb-6">{selectedArticle.title}</h1>
            <div className="prose prose-lg text-slate-600 mb-10">{selectedArticle.content}</div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-yellow-400" />
                <h3 className="text-xl font-bold">Atelier Pratique</h3>
              </div>
              {/* Le module interactif est injecté ici */}
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                 {selectedArticle.interactivityType === 'quiz' ? <QuizModule /> : <PasswordModule />}
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}