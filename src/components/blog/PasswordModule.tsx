import { useState } from "react"
import { ShieldCheck, Copy, Check, ShieldAlert, KeyRound } from "lucide-react"

export default function PasswordModule() {
  const [length, setLength] = useState(14) // 14 par défaut pour encourager la sécurité
  const [copied, setCopied] = useState(false)

  const generatePassword = (len: number) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  }

  const generated = generatePassword(length)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getStrength = (len: number) => {
    if (len < 10) return { label: "Faible (Piraté en quelques heures)", color: "text-red-600 bg-red-50 border-red-200", fill: "w-1/3 bg-red-500", icon: ShieldAlert }
    if (len < 14) return { label: "Moyen (Robuste pour vos comptes ordinaires)", color: "text-amber-600 bg-amber-50 border-amber-200", fill: "w-2/3 bg-amber-500", icon: ShieldCheck }
    return { label: "Excellent (Sécurité maximale conseillée)", color: "text-emerald-600 bg-emerald-50 border-emerald-200", fill: "w-full bg-emerald-500", icon: ShieldCheck }
  }

  const strength = getStrength(length)
  const StrengthIcon = strength.icon

  return (
    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200/60 shadow-xs space-y-5 max-w-md mx-auto transition-all">
      {/* En-tête du mini-outil */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-violet-100 text-violet-600 rounded-xl">
          <KeyRound size={20} />
        </div>
        <div>
          <h4 className="font-bold text-sm text-slate-900">Outil de Simulation</h4>
          <p className="text-xs text-slate-500">Générez une clé d'accès sécurisée</p>
        </div>
      </div>

      {/* Slider de longueur */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-slate-700">
          <span>Longueur de la clé :</span>
          <span className="text-violet-600 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-md font-mono text-sm">{length} caractères</span>
        </div>
        <input 
          type="range" min="6" max="25" value={length} 
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600 focus:outline-none"
        />
      </div>

      {/* Affichage du mot de passe */}
      <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center justify-between shadow-inner focus-within:border-violet-400 transition-all">
        <span className="font-mono text-base tracking-wider text-slate-800 break-all font-semibold select-all">
          {generated}
        </span>
        <button 
          onClick={copyToClipboard} 
          className={`ml-3 shrink-0 px-4 py-2.5 rounded-xl transition-all border flex items-center gap-1.5 text-xs font-bold ${
            copied 
              ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
              : 'bg-slate-950 text-white border-slate-950 hover:bg-slate-800'
          }`}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copié !" : "Copier"}
        </button>
      </div>

      {/* Jauge d'analyse visuelle */}
      <div className="space-y-2">
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div className={`h-full transition-all duration-300 ${strength.fill}`} />
        </div>
        <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 border ${strength.color}`}>
          <StrengthIcon size={16} className="shrink-0" />
          <span>Force : {strength.label}</span>
        </div>
      </div>
    </div>
  )
}