import { Calendar, Users, MapPin,ArrowRight, } from "lucide-react"

export default function Ateliers() {
  const ateliers2026 = [
    {
      title: "Premiers pas sur Internet sans crainte",
      date: "14 Mai 2026",
      type: "En Présentiel",
      location: "Centre Social Jeannine Dhersin - Salle Cyber",
      participants: "8 participants",
      status: "Terminé",
      description: "Un atelier pratique pour apprendre à faire des recherches, identifier les sites sécurisés et naviguer l'esprit tranquille.",
      topics: ["Utiliser Google", "Repérer le cadenas🔒", "Mettre en favoris"]
    },
    {
      title: "Garder le contact : Messenger, WhatsApp et Emails",
      date: "02 Juin 2026",
      type: "En Présentiel",
      location: "Centre Social Jeannine Dhersin - Salle Cyber",
      participants: "8 participants",
      status: "Terminé",
      description: "Envoyer des photos, passer des appels vidéo avec ses petits-enfants et répondre à un e-mail avec une pièce jointe.",
      topics: ["Appels vidéo gratuits", "Partager une photo", "Bloquer les spams"]
    },
    {
      title: "Atelier Spécial : Mes Démarches Administratives",
      date: "28 Juin 2026",
      type: "En Présentiel",
      location: "Centre Social Jeannine Dhersin - Salle Cyber",
      participants: "8 places restantes",
      status: "À venir",
      description: "Une session pas à pas pour se connecter à FranceConnect, déclarer en ligne et gérer ses espaces santé en toute confiance.",
      topics: ["FranceConnect", "Sécuriser ses accès", "Télécharger une attestation"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* En-tête de la page */}
      <header className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
          <Calendar size={24} className="text-violet-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Nos Ateliers Numériques (2026)
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Retrouvez les ateliers collectifs et conviviaux organisés cette année. Venez apprendre ensemble, poser vos questions à votre rythme et échanger sans complexe.
          </p>
        </div>
      </header>

      {/* Résumé d'impact */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Besoin d'une assistance personnalisée ?</h2>
          <p className="text-emerald-100 text-xs md:text-sm">Tous nos ateliers incluent un livret papier récapitulatif distribué gratuitement à la fin.</p>
        </div>
        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 shrink-0">
          ✨ Déjà +40 seniors formés cette année !
        </span>
      </section>

      {/* Grille des Ateliers */}
      <div className="grid md:grid-cols-2 gap-6">
        {ateliers2026.map((atelier, index) => (
          <div key={index} className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
            
            {/* Haut de la carte : Statut & Date */}
            <div className="p-5 space-y-4 flex-1">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  atelier.status === "Terminé" ? "bg-slate-100 text-green-600 animate-pulse" : "bg-violet-100 text-violet-700 animate-pulse"
                }`}>
                  • {atelier.status}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <Calendar size={14} />
                  {atelier.date}
                </span>
              </div>

              {/* Titre & Description */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {atelier.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {atelier.description}
                </p>
              </div>

              {/* Infos pratiques (Lieu, Public) */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-slate-400" />
                  {atelier.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={13} className="text-slate-400" />
                  {atelier.participants}
                </span>
              </div>

              {/* Liste des notions abordées */}
              <div className="bg-slate-50 p-3 rounded-xl space-y-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Compétences clés :</p>
                <div className="flex flex-wrap gap-2">
                  {atelier.topics.map((topic, i) => (
                    <span key={i} className="bg-white border border-slate-200 text-slate-700 text-xs px-2 py-1 rounded-md shadow-2xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bas de la carte : Action */}
            <div className="px-5 py-3.5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Format : {atelier.type}
              </span>
              <button className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-700">
                {atelier.status === "Terminé" ? "Voir le compte-rendu" : "Réserver ma place"}
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}