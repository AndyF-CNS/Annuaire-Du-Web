import { 
  ExternalLink, 
  GraduationCap, 
  Monitor, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react"

export default function TechFacile() {
  // Simulation de données des modules/écrans pour le rendu visuel
  const learningScreens = [
    {
      title: "Prendre en main l'Ordinateur",
      description: "Apprenez à utiliser la souris, le clavier, créer des dossiers et organiser vos documents pas à pas, sans stress.",
      icon: Monitor,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50 text-blue-600",
      badge: "Idéal pour débuter",
      steps: ["Allumer & s'installer", "Manipuler la souris", "Classer ses fichiers"]
    },
    {
      title: "Maîtriser son Smartphone",
      description: "Envoyez des messages à vos proches, prenez de belles photos, installez des applications utiles et gérez vos contacts facilement.",
      icon: Smartphone,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 text-violet-600",
      badge: "Indispensable",
      steps: ["SMS et appels vidéos", "Installer une application", "Régler la taille des textes"]
    },
    {
      title: "Naviguer sur Internet en Sécurité",
      description: "Repérez les pièges, faites vos démarches administratives ou vos achats en ligne en toute sérénité grâce à des conseils simples.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 text-emerald-600",
      badge: "Sécurité maximale",
      steps: ["Reconnaître les faux sites", "Créer un mot de passe fort", "Faire ses démarches"]
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. En-tête bienveillant et valorisant */}
      <header className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
          <GraduationCap size={24} className="text-violet-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Espace Apprentissage — Tech Facile
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Votre portail tranquille pour apprivoiser le numérique. Tout est pensé pour vous : des textes écrits en grand, des images claires et des explications simples.
          </p>
        </div>
      </header>

      {/* 2. Section "VISITE" - Le grand bandeau d'appel à l'action */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white p-6 md:p-8 rounded-2xl shadow-md border border-violet-700/50 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <span className="inline-flex bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Accès Gratuit & Sans Inscription
          </span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Prêt à commencer un cours interactif ?
          </h2>
          <p className="text-violet-100 text-sm md:text-base leading-relaxed">
            Cliquez sur le bouton ci-contre pour ouvrir notre plateforme complète. Des centaines d'exercices guidés illustrés pas à pas vous attendent pour devenir autonome en quelques minutes par jour !
          </p>
        </div>
        
        <a
          href="https://techfacile.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-violet-700 font-bold rounded-xl shadow-lg hover:bg-slate-50 active:scale-95 transition transform shrink-0 text-base"
        >
          Ouvrir Tech Facile
          <ExternalLink size={18} className="stroke-[2.5]" />
        </a>
      </section>

      {/* 3. Section "Aperçu des Écrans" - Pour donner l'effet "WOW, je peux tout apprendre" */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Ce que vous allez apprendre sur notre plateforme :
          </h2>
          <p className="text-slate-500 text-sm">
            Découvrez un aperçu des parcours simples mis à votre disposition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningScreens.map((screen) => {
            const IconComponent = screen.icon
            
            return (
              <div 
                key={screen.title} 
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col transition hover:shadow-md hover:border-slate-300"
              >
                {/* Simulation d'une barre de navigateur/écran pour le côté visuel premium */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 font-mono tracking-tight bg-slate-200/50 px-2 py-0.5 rounded">
                    tutoriel_interactif.html
                  </span>
                </div>

                {/* Contenu de la carte d'aperçu */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl ${screen.bgColor} flex items-center justify-center`}>
                        <IconComponent size={22} />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {screen.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {screen.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {screen.description}
                    </p>
                  </div>

                  {/* Liste des étapes imagées */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Au programme :
                    </p>
                    <ul className="space-y-1.5">
                      {screen.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bouton d'invitation discret mais engageant vers la plateforme globale */}
                  <a
                    href="https://techfacile.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-700 group pt-1"
                  >
                    Lancer ce module
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. Section de rassurance en bas de page */}
      <footer className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-center">
        <p className="text-xs text-slate-500 font-medium">
          💡 Vous avez peur de faire une erreur ? Pas d'inquiétude ! Nos cours sont faits pour s'entraîner en toute sécurité, sans aucun risque pour votre matériel.
        </p>
      </footer>

    </div>
  )
}