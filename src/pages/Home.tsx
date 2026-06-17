import Hero from "../components/dashboard/Hero"
import StatsGrid from "../components/dashboard/StatsGrid"
import { Compass, BookOpen, GraduationCap, ArrowRight, Heart } from "lucide-react"

import { Link } from "react-router-dom"

export default function Home() {
  // Liste des actions prioritaires pour guider l'utilisateur dès son arrivée
  const quickActions = [
    {
      title: "Rechercher un site sécurisé",
      description: "Accédez à notre annuaire trié sur le volet : impôts, santé, loisirs, tous vérifiés et sans aucun danger.",
      link: "/annuaire",
      icon: Compass,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      actionText: "Ouvrir l'annuaire"
    },
    {
      title: "Consulter nos fiches mémos",
      description: "Des guides imagés à lire ou à imprimer chez vous pour retenir le fonctionnement de la souris, des e-mails, etc.",
      link: "/fiches",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      actionText: "Voir les fiches"
    },
    {
      title: "Lancer un cours interactif",
      description: "Rejoignez l'espace Tech Facile pour apprendre pas à pas à votre rythme, sans jargon et de manière ludique.",
      link: "/tech-facile",
      icon: GraduationCap,
      color: "text-violet-600 bg-violet-50 border-violet-100",
      actionText: "Commencer à apprendre"
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. Grand bandeau d'accueil premium (Votre composant existant) */}
      <Hero />

      {/* 2. Vue d'ensemble des chiffres clés (Votre composant existant) */}
      <StatsGrid />
      
      {/* 3. NOUVEAU : Section de guidage "Par quoi souhaitez-vous commencer ?" */}
      <section className="space-y-4 pt-2">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>🚀</span> Par quoi souhaitez-vous commencer aujourd'hui ?
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Sélectionnez une action ci-dessous pour être guidé pas à pas dans vos démarches ou vos apprentissages.
          </p>
        </div>

        {/* Grille de raccourcis clairs et lisibles à 100% de zoom */}
        <div className="grid md:grid-cols-3 gap-5">
          {quickActions.map((action, idx) => {
            const IconComponent = action.icon
            
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xs flex flex-col justify-between gap-4 transition hover:shadow-sm hover:border-slate-300"
              >
                <div className="space-y-3">
                  {/* Icône enveloppée */}
                  <div className={`w-10 h-10 rounded-xl ${action.color} border flex items-center justify-center`}>
                    <IconComponent size={20} />
                  </div>

                  {/* Titre & Description du raccourci */}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {action.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </div>

                {/* Lien d'action style bouton discret mais explicite */}
               <Link 
                  to={action.link}
                  className="inline-flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-violet-50 hover:text-violet-700 text-slate-700 text-xs font-bold rounded-xl border border-slate-100 transition group"
                >
                  <span>{action.actionText}</span>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-violet-600 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. NOUVEAU : Petit mot d'accompagnement quotidien en pied de page */}
      <footer className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs">
        <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
          <Heart size={15} className="fill-amber-500/10" />
        </div>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          <strong>Bienvenue chez vous !</strong> Ce hub est entièrement sécurisé. Vous pouvez cliquer partout et explorer l'intégralité des menus de gauche sans aucun risque de bloquer votre appareil. Bonne navigation !
        </p>
      </footer>

    </div>
  )
}