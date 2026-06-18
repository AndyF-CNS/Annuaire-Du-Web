import { useState } from "react"
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from "lucide-react"

export default function QuizModule() {
  // --- ÉTATS ---
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isVerified, setIsVerified] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const options = [
    "« Corrige mon mail »",
    "« Lis ce mail s'il te plaît »",
    "« Agis en expert en communication. Corrige les fautes et rends le ton plus chaleureux dans ce mail : [Texte] »"
  ]

  const correctAnswerIndex = 2

  // --- ACTIONS ---
  const handleVerify = () => {
    if (selectedAnswer === null) return
    setIsVerified(true)
    setIsCorrect(selectedAnswer === correctAnswerIndex)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setIsVerified(false)
    setIsCorrect(null)
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] space-y-6 max-w-xl mx-auto transition-all">
      {/* En-tête du Quiz */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
          <HelpCircle size={20} />
        </div>
        <div>
          <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider bg-violet-50 px-2.5 py-1 rounded-md">
            Mini-Quiz Interactif
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-1">
            Testez vos compétences en Prompting
          </h3>
        </div>
      </div>

      {/* Question */}
      <p className="text-sm font-semibold text-slate-800 leading-relaxed">
        Quelle est la meilleure façon de demander à une IA de relire un mail ?
      </p>
      
      {/* Liste des réponses */}
      <div className="space-y-3">
        {options.map((option, idx) => {
          const isSelected = selectedAnswer === idx
          
          // Calcul des styles dynamiques post-vérification
          let buttonStyles = "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
          if (isSelected && !isVerified) {
            buttonStyles = "border-violet-600 bg-violet-50/50 text-violet-900 font-medium ring-2 ring-violet-600/10"
          } else if (isVerified) {
            if (idx === correctAnswerIndex) {
              buttonStyles = "border-emerald-500 bg-emerald-50/60 text-emerald-900 font-medium"
            } else if (isSelected && idx !== correctAnswerIndex) {
              buttonStyles = "border-rose-500 bg-rose-50/60 text-rose-900"
            } else {
              buttonStyles = "border-slate-100 bg-slate-50/40 text-slate-400 opacity-60 pointer-events-none"
            }
          }

          return (
            <button
              key={idx}
              disabled={isVerified}
              onClick={() => setSelectedAnswer(idx)}
              className={`w-full text-left p-4 rounded-2xl border text-xs transition-all duration-200 flex items-start gap-3 relative group ${buttonStyles}`}
            >
              {/* Indicateur visuel (puce ou icône de validation) */}
              <div className="mt-0.5 shrink-0">
                {isVerified && idx === correctAnswerIndex ? (
                  <CheckCircle2 size={16} className="text-emerald-600 animate-scale-in" />
                ) : isVerified && isSelected && idx !== correctAnswerIndex ? (
                  <XCircle size={16} className="text-rose-600 animate-scale-in" />
                ) : (
                  <div className={`w-4 f h-4 rounded-full border flex items-center justify-center text-[10px] font-bold font-sans transition-all
                    ${isSelected 
                      ? "border-violet-600 bg-violet-600 text-white" 
                      : "border-slate-300 text-slate-400 group-hover:border-slate-400"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </div>
                )}
              </div>

              <span className="leading-relaxed">{option}</span>
            </button>
          )
        })}
      </div>

      {/* Barre d'action basse (Bouton de validation ou Recommencer) */}
      <div className="pt-2">
        {!isVerified ? (
          <button
            disabled={selectedAnswer === null}
            onClick={handleVerify}
            className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs rounded-2xl shadow-sm hover:shadow-md disabled:opacity-40 disabled:hover:bg-violet-600 disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Vérifier ma réponse
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <div className="space-y-4 animate-fade-in">
            {/* Boîte de feedback explicatif */}
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
              isCorrect 
                ? "bg-emerald-50/50 border-emerald-100 text-emerald-850" 
                : "bg-rose-50/50 border-rose-100 text-rose-850"
            }`}>
              <p className="font-bold mb-1">
                {isCorrect ? "🎉 Excellent choix !" : "💡 Ce n'est pas tout à fait ça..."}
              </p>
              <p className="text-slate-600">
                {isCorrect 
                  ? "En attribuant un rôle à l'IA (« expert en communication ») et en lui donnant un contexte précis ainsi que des directives claires sur le ton attendu, vous obtenez un résultat infiniment plus pertinent !"
                  : "Les réponses courtes donnent souvent des résultats génériques. Pour exploiter la puissance de l'IA, donnez-lui un contexte (un rôle d'expert) et précisez vos attentes (le ton chaleureux). Réessayez !"}
              </p>
            </div>

            {/* Bouton Recommencer */}
            <button
              onClick={handleReset}
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} />
              Recommencer le quiz
            </button>
          </div>
        )}
      </div>
    </div>
  )
}