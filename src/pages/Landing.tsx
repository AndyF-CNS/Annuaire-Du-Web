import { useEffect, useState, useRef } from "react"
import { ArrowRight, Globe, Sparkles, BookOpen, Zap, Quote, Newspaper, Star, Handshake, Wrench } from "lucide-react"
import { Link } from "react-router-dom"
import Marquee from "../components/ui/Marquee";
import { testimonials } from "../data/testimonials"
import LandingVideo from "../assets/landing.mp4";
import Lenis from "lenis"

const STEPS = [
  { id: "step-1", title: "L'Annuaire", icon: Globe, color: "#00B4C8" }, // Cyan
  { id: "step-2", title: "Fiches & Guides", icon: BookOpen, color: "#1A4FD6" }, // Blue
  { id: "step-3", title: "Initiation IA", icon: Zap, color: "#FF6B35" }, // Orange
  { id: "step-4", title: "Vos Favoris", icon: Star, color: "#00B4C8" }, // Cyan
  { id: "step-5", title: "TechFacile", icon: Wrench, color: "#1A4FD6" }, // Blue
  { id: "step-6", title: "Blog & Actus", icon: Newspaper, color: "#FF6B35" }, // Orange
  { id: "step-7", title: "Les Ateliers", icon: Handshake, color: "#00B4C8" }, // Cyan
]

// ─── Nouveau Logo TechFacileHub ───
const HubSVG = ({ size = 24, primary = "#FFFFFF", accent = "#00B4C8", node = "#FFFFFF", line = "#FFFFFF" }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className="shrink-0">
    <circle cx="22" cy="22" r="7.5" fill={accent} opacity="0.25" />
    <circle cx="22" cy="22" r="5" fill={accent} />
    <circle cx="22" cy="22" r="3" fill={primary} />
    {(
      [[22, 5], [37, 13.5], [37, 30.5], [22, 39], [7, 30.5], [7, 13.5]] as [number, number][]
    ).map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill={node} />
    ))}
    <line x1="22" y1="8.5" x2="22" y2="16" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="33.5" y1="15.5" x2="27.5" y2="19" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="33.5" y1="28.5" x2="27.5" y2="25" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="22" y1="35.5" x2="22" y2="28" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="10.5" y1="28.5" x2="16.5" y2="25" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="10.5" y1="15.5" x2="16.5" y2="19" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export default function Landing() {
  const [activeSection, setActiveSection] = useState<string>("accueil")
  const [activeStep, setActiveStep] = useState<string>("step-1")
  const [revealed, setRevealed] = useState<Record<string, boolean>>({ "step-1": true })
  const [sidebarY, setSidebarY] = useState<number>(0)
  const lenisRef = useRef<Lenis | null>(null)
  const activeIndex = STEPS.findIndex((step) => step.id === activeStep)

  useEffect(() => {
    // Import des nouvelles polices (Plus Jakarta Sans & Inter)
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    })

    lenisRef.current = lenis

    const handleScrollAndTracking = () => {
      const scrollY = window.scrollY
      const triggerPoint = window.innerHeight / 2

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

      const container = document.getElementById("services-container")
      const aside = document.getElementById("sidebar-parcours")

      if (container && aside) {
        const containerRect = container.getBoundingClientRect()
        const asideHeight = aside.offsetHeight
        const offsetTop = 140

        let translate = offsetTop - containerRect.top
        const maxTranslate = containerRect.height - asideHeight

        if (translate < 0) translate = 0
        if (translate > maxTranslate) translate = maxTranslate

        setSidebarY(translate)
      }
    }

    lenis.on("scroll", handleScrollAndTracking)
    setTimeout(handleScrollAndTracking, 50)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      try { document.head.removeChild(link); } catch (_) {}
    }
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
    <div className="min-h-screen bg-[#08152B] text-[#E2EBF8] selection:bg-[#00B4C8]/30 overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#08152B]/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HubSVG size={26} primary="#FFFFFF" accent="#00B4C8" node="#FFFFFF" line="#FFFFFF" />
            <div className="text-base sm:text-lg font-extrabold text-white tracking-tight shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              TechFacile<span className="text-[#00B4C8]">Hub</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs tracking-widest uppercase font-medium">
            <button
              onClick={() => scrollTo("accueil")}
              className={`group flex items-center gap-2 transition-colors duration-300 focus:outline-hidden cursor-pointer ${activeSection === "accueil" ? "text-white font-semibold" : "text-[#8FA3BB] hover:text-white"}`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === "accueil" ? "text-[#00B4C8]" : "text-[#5E718A] group-hover:text-[#00B4C8]"}`}>01</span> Accueil
            </button>
            <div className="w-4 h-px bg-white/10" />
            <button
              onClick={() => scrollTo("services")}
              className={`group flex items-center gap-2 transition-colors duration-300 focus:outline-hidden cursor-pointer ${activeSection === "services" ? "text-white font-semibold" : "text-[#8FA3BB] hover:text-white"}`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === "services" ? "text-[#00B4C8]" : "text-[#5E718A] group-hover:text-[#00B4C8]"}`}>02</span> Découverte
            </button>
            <div className="w-4 h-px bg-white/10" />
            <button
              onClick={() => scrollTo("temoignages")}
              className={`group flex items-center gap-2 transition-colors duration-300 focus:outline-hidden cursor-pointer ${activeSection === "temoignages" ? "text-white font-semibold" : "text-[#8FA3BB] hover:text-white"}`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === "temoignages" ? "text-[#00B4C8]" : "text-[#5E718A] group-hover:text-[#00B4C8]"}`}>03</span> Avis
            </button>
          </div>

          <Link
            to="/home"
            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white text-[#0B1629] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#E2EBF8] transition-colors shrink-0"
          >
            Découvrir mon Hub
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/4 w-70 sm:w-125 h-70 sm:h-125 bg-[#1A4FD6]/15 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#33C8D8] text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-6 sm:mb-8 mx-auto">
            <Sparkles size={12} className="text-[#00B4C8]" /> Espace Numérique Sécurisé
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-3xl leading-[1.2] md:leading-[1.15] text-center mx-auto mb-6 sm:mb-8 tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            L'informatique devient <br />
            <span className="italic font-sans font-bold bg-linear-to-r from-[#1A4FD6] to-[#00B4C8] bg-clip-text text-transparent">
              simple et évident.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#8FA3BB] max-w-2xl mx-auto leading-relaxed text-center mb-8 sm:mb-10 px-2">
            Un annuaire de vos sites favoris, des explications claires sans jargon technique et des ateliers pas-à-pas pour naviguer sur internet en toute sérénité.
          </p>

          <div className="flex justify-center w-full px-4 sm:px-0">
            <Link
              to="/annuaire"
              className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-[#FF6B35] text-white font-bold text-sm sm:text-base rounded-lg hover:bg-[#FF8F62] transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(255,107,53,0.25)]"
            >
              Accéder à mon espace <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 max-w-4xl w-full mx-auto px-4 relative z-10">
          <div className="relative bg-[#08152B] border border-white/10 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl overflow-hidden aspect-video">
            <video src={LandingVideo} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
          </div>
        </div>
        
         <div className="text-center mb-10 sm:mb-12 flex flex-col items-center justify-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 pt-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Voici Quelques chiffres</h2>
        </div>
        <div className="flex grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-12 text-center px-4 sm:px-6">
          <div className="space-y-2"> 
            <div className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>73%</div>
            <div className="text-sm sm:text-base text-[#8FA3BB]">des plus de 60 ans sont en ligne — mais peu se sentent en sécurité</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>1,5M</div>
            <div className="text-sm sm:text-base text-[#8FA3BB]">de français ont besoin d'aide pour leurs démarches administratives en ligne</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>+ 50%</div>
            <div className="text-sm sm:text-base text-[#8FA3BB]">dont déjà reçu une aide ou formation numérique</div>
          </div>
        </div>
      </section>

      {/* --- SECTION DÉCOUVERTE --- */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#CDD9F5]/10 relative z-10">

        <div className="absolute top-1/4 left-0 w-62.5 sm:w-100 h-62.5 sm:h-100 bg-[#1A4FD6]/10 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none" />

        <div className="text-center mb-16 sm:mb-24 relative z-10">
          <span className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest">Étape 02 — Aperçu du Hub</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}>Tout votre univers web, bien ordonné</h2>
        </div>

        <div id="services-container" className="flex gap-12 items-start relative w-full">

          {/* 🧭 MENU GAUCHE */}
          <aside
            id="sidebar-parcours"
            style={{ transform: `translateY(${sidebarY}px)` }}
            className="hidden md:flex flex-col w-48 shrink-0 self-start z-20 will-change-transform"
          >
            <div className="text-[10px] font-mono text-[#5E718A] uppercase tracking-wider mb-4 pl-4">Parcours</div>

            <div className="relative flex flex-col gap-6 border-l border-white/10 pl-4 py-1">
              <div
                className="absolute left-[-1.5px] w-[2px] bg-[#00B4C8] rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_10px_rgba(0,180,200,0.8)]"
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
                    <div className={`p-1.5 rounded-md border transition-all duration-300 ${isCurrent ? `bg-[${step.color}]/10 border-[${step.color}] scale-110` : "bg-white/5 border-white/5 text-[#5E718A] group-hover:text-[#E2EBF8]"}`} style={{ color: isCurrent ? step.color : undefined, borderColor: isCurrent ? step.color : undefined }}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-0.5">
                      <span className={`text-[9px] font-mono leading-none transition-colors ${isCurrent ? "text-[#00B4C8]" : "text-[#5E718A]"}`}>0{index + 1}</span>
                      <span className={`text-xs font-medium tracking-tight transition-all ${isCurrent ? "text-white font-semibold" : "text-[#C4D0DF]"}`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </aside>

          {/* 📝 CONTENU DROITE */}
          <div className="space-y-32 sm:space-y-44 flex-1 w-full">
            

            {/* 1. ANNUAIRE */}
            <div id="step-1" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Globe className="text-[#00B4C8] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>L'Annuaire vérifié</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Ne vous perdez plus sur les moteurs de recherche. Retrouvez un accès direct et sécurisé à vos sites administratifs (Impôts, CAF), de santé (Ameli) et de loisirs favoris.
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="col-span-2 bg-[#00B4C8]/10 border border-[#00B4C8]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#00B4C8] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Écran Principal</div>
                <div className="space-y-1.5 sm:space-y-2 flex flex-col justify-between">
                  <div className="h-1/2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Doc 1</div>
                  <div className="h-1/2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Doc 2</div>
                </div>
              </div>
            </div>

            {/* 2. FICHES */}
            <div id="step-2" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <BookOpen className="text-[#1A4FD6] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Fiches & Guides</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Des fiches mémo imprimables et imagées pour comprendre comment réaliser vos démarches courantes, envoyer de gros fichiers ou gérer sereinement vos mots de passe.
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group order-2 lg:order-1">
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Aperçu A</div>
                <div className="col-span-2 bg-[#1A4FD6]/10 border border-[#1A4FD6]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#3D6FE8] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Guide PDF</div>
              </div>
            </div>

            {/* 3. IA */}
            <div id="step-3" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Zap className="text-[#FF6B35] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Initiation à l'IA</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Découvrez l'intelligence artificielle à votre rythme grâce à notre espace simplifié pour rédiger des courriers complexes ou résumer de longs documents en un clin d'œil.
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="col-span-2 sm:col-span-3 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#FF8F62] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Prompt AI</div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB] text-center p-1">Résultat</div>
              </div>
            </div>

            {/* 4. FAVORIS */}
            <div id="step-4" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-4"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <Star className="text-[#00B4C8] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Favoris</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Retrouvez vos sites dans votre carnet de navigation personnel. Retrouvez ici en un clin d'œil tous les sites et services utiles que vous avez marqués d'une étoile pour ne plus jamais les perdre.
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video flex flex-col gap-1.5 sm:gap-2 overflow-hidden group order-2 lg:order-1">
                <div className="h-2/3 bg-[#00B4C8]/10 border border-[#00B4C8]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#00B4C8] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.01] duration-500">Grille des Favoris</div>
                <div className="h-1/3 grid grid-cols-2 gap-1.5 sm:gap-2">
                  <div className="bg-white/5 border border-white/10 rounded-md sm:rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Lien 1</div>
                  <div className="bg-white/5 border border-white/10 rounded-md sm:rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Lien 2</div>
                </div>
              </div>
            </div>

            {/* 5. TECHFACILE */}
            <div id="step-5" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-5"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Wrench className="text-[#1A4FD6] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TechFacile</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Rejoignez une communauté active. Profitez d'une plateforme complète. Des exercices guidés illustrés pas à pas vous attendent pour devenir autonome en quelques minutes par jour !
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Étape 1</div>
                <div className="bg-[#1A4FD6]/10 border border-[#1A4FD6]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#3D6FE8] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500 col-span-2">Exercice Interactif</div>
              </div>
            </div>

            {/* 6. BLOG */}
            <div id="step-6" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-6"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <Newspaper className="text-[#FF6B35] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Blog & Veille Numérique</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Restez informé sans être submergé. Nous rédigeons et décomplexifions des articles sur divers sujets de l'informatique, pour suivre les actualités importantes simplement.
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video grid grid-cols-2 gap-1.5 sm:gap-2 overflow-hidden group order-2 lg:order-1">
                <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#FF8F62] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Article à la Une</div>
                <div className="space-y-1.5 sm:space-y-2 flex flex-col justify-between">
                  <div className="h-[48%] bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Actu Récente</div>
                  <div className="h-[48%] bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB]">Conseil Tech</div>
                </div>
              </div>
            </div>

            {/* 7. ATELIERS */}
            <div id="step-7" className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center transition-all duration-1000 ease-out transform ${revealed["step-7"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-3 sm:space-y-4">
                <Handshake className="text-[#00B4C8] w-7 h-7 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ateliers</h3>
                <p className="text-sm sm:text-base text-[#8FA3BB] leading-relaxed">
                  Participez à des ateliers numériques locaux ou échangez des conseils avec d'autres membres. <span className="font-bold text-[#00B4C8]">Vous trouverez également des comptes-rendus complets d'ateliers.</span>
                </p>
              </div>
              <div className="bg-[#08152B]/60 border border-[#CDD9F5]/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[0_4px_20px_rgba(26,79,214,0.15)] aspect-video grid grid-cols-3 gap-1.5 sm:gap-2 overflow-hidden group">
                <div className="col-span-2 bg-[#00B4C8]/10 border border-[#00B4C8]/30 rounded-lg sm:rounded-xl flex items-center justify-center text-[#33C8D8] font-mono text-[10px] sm:text-xs transition-transform group-hover:scale-[1.02] duration-500">Planning & Ateliers</div>
                <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-[9px] sm:text-[10px] text-[#8FA3BB] text-center p-1">Compte rendu</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION TÉMOIGNAGES --- */}
      <section id="temoignages" className="py-16 sm:py-24 max-w-7xl mx-auto border-t border-[#CDD9F5]/10 relative z-10 overflow-hidden">
        <div className="text-center mb-10 sm:mb-12 flex flex-col items-center justify-center px-4 sm:px-6">
          <span className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest">Étape 03</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Paroles d'utilisateurs</h2>
        </div>

        <Marquee>
          {testimonials.map((item) => (
            <div key={item.id} className="w-70 sm:w-95 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <Quote className="text-[#00B4C8]/40 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm md:text-base text-[#E2EBF8] italic font-serif whitespace-normal leading-relaxed">
                  « {item.text} »
                </p>
              </div>
              <span className="block text-[11px] sm:text-xs font-sans font-normal text-[#8FA3BB] mt-4">— {item.author}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 sm:py-16 text-center border-t border-[#CDD9F5]/10 px-4 bg-[#08152B]">
        <p className="text-[11px] sm:text-xs text-[#5E718A]">TechFacile Hub &copy; 2026 — Plateforme d'inclusion numérique.</p>
      </footer>

    </div>
  )
}