import { useState } from "react"

export default function QuizModule() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState<boolean | null>(null)

  const handleVerify = () => {
    if (selectedAnswer === 2) setScore(true) // la bonne réponse est l'index 2
    else setScore(false)
  }

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4 max-w-md">
      <p className="text-sm font-bold text-slate-800">
        Quelle est la meilleure façon de demander à une IA de relire un mail ?
      </p>
      
      <div className="space-y-2">
        {["'Corrige mon mail'", "'Lis ce mail s'il te plaît'", "'Agis en expert en communication. Corrige les fautes et rends le ton plus chaleureux dans ce mail : [Texte]'"].map((ans, idx) => (
          <button
            key={idx}
            onClick={() => { setSelectedAnswer(idx); setScore(null); }}
            className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${selectedAnswer === idx ? 'border-violet-600 bg-violet-50/50 text-violet-900 font-medium' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
          >
            {ans}
          </button>
        ))}
      </div>

      <button
        disabled={selectedAnswer === null}
        onClick={handleVerify}
        className="w-full py-2.5 bg-violet-600 text-white font-bold text-xs rounded-xl disabled:opacity-50 transition"
      >
        Vérifier ma réponse
      </button>

      {score !== null && (
        <div className={`p-3 rounded-xl text-xs font-bold ${score ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {score ? "🎉 Bravo ! Vous lui donnez un rôle ('expert'), un objectif précis et le contexte." : "❌ Dommage ! L'IA a besoin de plus de contexte pour être performante. Réessayez !"}
        </div>
      )}
    </div>
  )
}