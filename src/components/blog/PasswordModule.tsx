import { useState } from "react"
import { ShieldCheck, Copy, Check } from "lucide-react"

export default function PasswordModule() {
  const [length, setLength] = useState(12)
  const [copied, setCopied] = useState(false)

  // Nettoyage et correction de la fonction ici :
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
    if (len < 10) return { label: "Faible (Piraté en quelques heures)", color: "text-red-500 bg-red-50" }
    if (len < 14) return { label: "Moyen (Robuste)", color: "text-amber-600 bg-amber-50" }
    return { label: "Excellent (Incraquable !)", color: "text-emerald-600 bg-emerald-50" }
  }

  const strength = getStrength(length)

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4 max-w-md">
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-1">
          Longueur du mot de passe : <span className="text-violet-600 text-sm">{length} caractères</span>
        </label>
        <input 
          type="range" min="6" max="25" value={length} 
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-violet-600"
        />
      </div>

      <div className="p-3 bg-slate-900 rounded-xl flex items-center justify-between text-amber-50 font-mono text-sm break-all">
        <span>{generated}</span>
        <button onClick={copyToClipboard} className="text-slate-400 hover:text-white ml-2 shrink-0">
          {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
        </button>
      </div>

      <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${strength.color}`}>
        <ShieldCheck size={16} />
        <span>Force : {strength.label}</span>
      </div>
    </div>
  )
}