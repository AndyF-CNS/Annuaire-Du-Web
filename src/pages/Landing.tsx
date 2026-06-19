import { useEffect, useState, useRef } from "react"
import { ArrowRight, Globe, Sparkles, BookOpen, Zap, Quote, Newspaper, Star, Handshake, Wrench } from "lucide-react"
import { Link } from "react-router-dom"
import Marquee from "../components/ui/Marquee";
import { testimonials } from "../data/testimonials"
import LandingVideo from "../assets/landing.mp4"
import Lenis from "lenis"

const STEPS = [
  { id: "step-1", title: "L'Annuaire", icon: Globe },
  { id: "step-2", title: "Fiches & Guides", icon: BookOpen },
  { id: "step-3", title: "Initiation IA", icon: Zap },
  { id: "step-4", title: "Vos Favoris", icon: Star },
  { id: "step-5", title: "TechFacile", icon: Wrench },
  { id: "step-6", title: "Blog & Actus", icon: Newspaper },
  { id: "step-7", title: "Les Ateliers", icon: Handshake },
]

export default function Landing() {
  const [activeSection, setActiveSection] = useState<string>("accueil")
  const [activeStep, setActiveStep] = useState<string>("step-1")
  const [revealed, setRevealed] = useState<Record<string, boolean>>({ "step-1": true })
  
  // 🧭 État pour déplacer physiquement TOUT le bloc de gauche en pixels
  const [sidebarY, setSidebarY] = useState<number>(0)
  
  const lenisRef = useRef<Lenis | null>(null)
  const activeIndex = STEPS.findIndex((step) => step.id === activeStep)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    })

    lenisRef.current = lenis

    // Fonction globale de synchronisation au scroll
    const handleScrollAndTracking = () => {
      const scrollY = window.scrollY
      const triggerPoint = window.innerHeight / 2

      // 1. Suivi des grandes sections (Accueil, Découverte, Avis)
      const mainSections = ["accueil", "services", "temoignages"]
      for (const id of mainSections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollY >= top - 200 && scrollY < bottom - 200) {
            setActiveSection(id)
          }
        }
      }

      // 2. Suivi des étapes à droite (Fiches, IA, Favoris...)
      let currentStep = "step-1"
      STEPS.forEach((step) => {
        const el = document.getElementById(step.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerPoint) {
            currentStep = step.id
          }
          if (rect.top < window.innerHeight * 0.85) {
            setRevealed((prev) => ({ ...prev, [step.id]: true }))
          }
        }
      })
      setActiveStep(currentStep)

      // 3. 🚀 DÉPLACEMENT FLUIDE DE TOUTE LA PARTIE GAUCHE
      const container = document.getElementById("services-container")
      const aside = document.getElementById("sidebar-parcours")
      
      if (container && aside) {
        const containerRect = container.getBoundingClientRect()
        const asideHeight = aside.offsetHeight
        const offsetTop = 140 // Position fixe idéale par rapport au haut de l'écran (ex: sous ta navbar)
        
        // Calcul de la descente par rapport au conteneur global
        let translate = offsetTop - containerRect.top
        const maxTranslate = containerRect.height - asideHeight

        // On borne la position pour pas que ça sorte en haut ou en bas du conteneur
        if (translate < 0) translate = 0
        if (translate > maxTranslate) translate = maxTranslate

        setSidebarY(translate)
      }
    }

    // Brancher l'événement sur le moteur de Lenis
    lenis.on("scroll", handleScrollAndTracking)
    
    // Forcer un premier calcul au chargement de la page
    setTimeout(handleScrollAndTracking, 50)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -120,
        duration: 1.4,
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans overflow-x-hidden selection:bg-violet-500/30">

      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="text-base sm:text-lg font-bold text-white tracking-tight shrink-0">
            TechFacile <span className="text-violet-400 font-normal">Hub</span>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs tracking-widest uppercase font-medium">
            <button
              onClick={() => scrollTo("accueil")}
              className={`group flex items-center gap-2 transition-colors duration-300 focus:outline-hidden cursor-pointer ${activeSection === "accueil" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === "accueil" ? "text-violet-400" : "text-slate-600 group-hover:text-violet-400"}`}>01</span> Accueil
            </button>
            <div className="w-4 h-px bg-white/10" />
            <button
              onClick={() => scrollTo("services")}
              className={`group flex items-center gap-2 transition-colors duration-300 focus:outline-hidden cursor-pointer ${activeSection === "services" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === "services" ? "text-violet-400" : "text-slate-600 group-hover:text-violet-400"}`}>02</span> Découverte
            </button>
            <div className="w-4 h-px bg-white/10" />
            <button
              onClick={() => scrollTo("temoignages")}
              className={`group flex items-center gap-2 transition-colors duration-300 focus:outline-hidden cursor-pointer ${activeSection === "temoignages" ? "text-white font-semibold" : "text-slate-400 hover:text-white"}`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === "temoignages" ? "text-violet-400" : "text-slate-600 group-hover:text-violet-400"}`}>03</span> Avis
            </button>
          </div>

          <Link
            to="/annuaire"
            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-slate-950 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-slate-200 transition-colors shrink-0"
          >
            Découvrir mon Hub
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/4 w-70 sm:w-125 h-70 sm:h-125 bg-violet-600/15 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-6 sm:mb-8 mx-auto">
            <Sparkles size={12} className="text-violet-400" /> Espace Numérique Sécurisé
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white max-w-3xl leading-[1.2] md:leading-[1.15] text-center mx-auto mb-6 sm:mb-8">
            L'informatique devient <br />
            <span className="italic font-sans font-bold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              simple et évident.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed text-center mb-8 sm:mb-10 px-2">
            Un annuaire de vos sites favoris, des explications claires sans jargon technique et des ateliers pas-à-pas pour naviguer sur internet en toute sérénité.
          </p>

          <div className="flex justify-center w-full px-4 sm:px-0">
            <Link
              to="/annuaire"
              className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-violet-600 text-white font-bold text-sm sm:text-base rounded-full hover:bg-violet-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-violet-600/20"
            >
              Accéder à mon espace <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 max-w-4xl w-full mx-auto px-4 relative z-10">
          <div className="relative bg-[#0f1524] border border-white/10 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl overflow-hidden aspect-video">
            <video src={LandingVideo} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
          </div>
        </div>
      </section>

      {/* --- SECTION DÉCOUVERTE --- */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10">
        
        <div className="absolute top-1/4 left-0 w-62.5 sm:w-100 h-62.5 sm:h-100 bg-violet-500/5 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none" />

        <div className="text-center mb-16 sm:mb-24 relative z-10">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Étape 02 — Aperçu du Hub</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mt-2">Tout votre univers web, bien ordonné</h2>
        </div>

        {/* 📦 1. AJOUT DE L'ID "services-container" ICI POUR MESURER LA ZONE */}
        <div id="services-container" className="flex gap-12 items-start relative w-full">
          
          {/* 🧭 2. MENU GAUCHE INTEGRALEMENT DYNAMIQUE (Propulsé par transform en pixel-perfect) */}
          <aside 
            id="sidebar-parcours" 
            style={{ transform: `translateY(${sidebarY}px)` }}
            className="hidden md:flex flex-col w-48 shrink-0 self-start z-20 will-change-transform"
          >
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-4 pl-4">Parcours</div>
            
            <div className="relative flex flex-col gap-6 border-l border-white/10 pl-4 py-1">
              
              {/* L'indicateur violet reste à sa place relative parfaite dans la barre */}
              <div 
                className="absolute left-[-1.5px] w-[2px] bg-violet-400 rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_10px_rgba(167,139,250,0.8)]"
                style={{
                  height: "26px",
                  transform: `translateY(${activeIndex * 64 + 7}px)` 
                }}
              />

              {STEPS.map((step, index) => {
                const Icon = step.icon
                const isCurrent = activeStep === step.id
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollTo(step.id)}
                    className="group flex items-center h-10 gap-3 text-left focus:outline-hidden cursor-pointer"
                  >
                    <div className={`p-1.5 rounded-md border transition-all duration-300 ${isCurrent ? "bg-violet-500/10 border-violet-400 text-violet-400 scale-110" : "bg-white/2 border-white/5 text-slate-500 group-hover:text-slate-300"}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    
                    <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-0.5">
                      <span className={`text-[9px] font-mono leading-none transition-colors ${isCurrent ? "text-violet-400" : "text-slate-600"}`}>0{index + 1}</span>
                      <span className={`text-xs font-medium tracking-tight transition-all ${isCurrent ? "text-white font-semibold" : "text-slate-200"}`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* 📝 CONTENU DROITE (Déroule normalement) */}
          <div className="space-y-32 sm:space-y-44 flex-1 w-full">

            {/* 1. ANNUAIRE */}
            <div id="step-1" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Globe className="text-violet-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">L'Annuaire vérifié</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Ne vous perdez plus sur les moteurs de recherche. Retrouvez un accès direct et sécurisé à vos sites administratifs (Impôts, CAF), de santé (Ameli) et de loisirs favoris.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="col-span-2 bg-violet-500/10 border border-violet-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-violet-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Écran Principal</div>
                <div className="space-y-1.5 sm:space-y-2 flex flex-col justify-between">
                  <div className="h-1/2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Doc 1</div>
                  <div className="h-1/2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Doc 2</div>
                </div>
              </div>
            </div>

            {/* 2. FICHES */}
            <div id="step-2" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <BookOpen className="text-cyan-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Fiches & Guides</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Des fiches mémo imprimables et imagées pour comprendre comment réaliser vos démarches courantes, envoyer de gros fichiers ou gérer sereinement vos mots de passe.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group order-2 lg:order-1">
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Aperçu A</div>
                <div className="col-span-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-cyan-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Guide PDF</div>
              </div>
            </div>

            {/* 3. IA */}
            <div id="step-3" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Zap className="text-fuchsia-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Initiation à l'IA</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Découvrez l'intelligence artificielle à votre rythme grâce à notre espace simplifié pour rédiger des courriers complexes ou résumer de longs documents en un clin d'œil.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="col-span-2 sm:col-span-3 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-fuchsia-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Prompt AI</div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500 text-center p-1">Résultat</div>
              </div>
            </div>

            {/* 4. FAVORIS */}
            <div id="step-4" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <Star className="text-emerald-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Favoris</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Retrouvez vos sites dans votre carnet de navigation personnel. Retrouvez ici en un clin d'œil tous les sites et services utiles que vous avez marqués d'une étoile pour ne plus jamais les perdre.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video flex flex-col gap-1.5 sm:gap-2 overflow-hidden group order-2 lg:order-1">
                <div className="h-2/3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-emerald-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.01] duration-500">Grille des Favoris</div>
                <div className="h-1/3 grid grid-cols-2 gap-1.5 sm:gap-2">
                  <div className="bg-white/5 border border-white/10 rounded-md sm:rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Lien 1</div>
                  <div className="bg-white/5 border border-white/10 rounded-md sm:rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Lien 2</div>
                </div>
              </div>
            </div>

            {/* 5. TECHFACILE */}
            <div id="step-5" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-5"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Wrench className="text-orange-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">TechFacile</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Rejoignez une communauté active. Profitez d'une plateforme complète. Des exercices guidés illustrés pas à pas vous attendent pour devenir autonome en quelques minutes par jour !
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Étape 1</div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-orange-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500 col-span-2">Exercice Interactif</div>
              </div>
            </div>

            {/* 6. BLOG */}
            <div id="step-6" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-6"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <Newspaper className="text-blue-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Blog & Veille Numérique</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Restez informé sans être submergé. Nous rédigeons et décomplexifions des articles sur divers sujets de l'informatique, pour suivre les actualités importantes simplement.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video grid grid-cols-2 gap-1.5 sm:gap-2 overflow-hidden group order-2 lg:order-1">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-blue-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Article à la Une</div>
                <div className="space-y-1.5 sm:space-y-2 flex flex-col justify-between">
                  <div className="h-[48%] bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Actu Récente</div>
                  <div className="h-[48%] bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500">Conseil Tech</div>
                </div>
              </div>
            </div>

            {/* 7. ATELIERS */}
            <div id="step-7" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-7"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Handshake className="text-red-400 w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Ateliers</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Participez à des ateliers numériques locaux ou échangez des conseils avec d'autres membres. <span className="font-bold text-violet-400">Vous trouverez également des comptes-rendus complets d'ateliers.</span>
                </p>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="col-span-2 bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-red-400 font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Planning & Ateliers</div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-slate-500 text-center p-1">Compte rendu</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION TÉMOIGNAGES --- */}
      <section id="temoignages" className="py-16 sm:py-24 max-w-7xl mx-auto border-t border-white/5 relative z-10 overflow-hidden">
        <div className="text-center mb-10 sm:mb-12 flex flex-col items-center justify-center px-4 sm:px-6">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Étape 03</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white mt-2">Paroles d'utilisateurs</h2>
        </div>

        <Marquee>
          {testimonials.map((item) => (
            <div key={item.id} className="w-70 sm:w-95 shrink-0 bg-white/2 border border-white/5 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <Quote className="text-cyan-500/40 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm md:text-base text-slate-300 italic font-serif whitespace-normal leading-relaxed">
                  « {item.text} »
                </p>
              </div>
              <span className="block text-[11px] sm:text-xs font-sans font-normal text-slate-500 mt-4">— {item.author}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 sm:py-16 text-center border-t border-white/5 px-4">
        <p className="text-[11px] sm:text-xs text-slate-600">TechFacile Hub &copy; 2026 — Plateforme d'inclusion numérique.</p>
      </footer>

    </div>
  )
}