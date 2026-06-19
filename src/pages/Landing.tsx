import { useEffect, useState } from "react"
import { ArrowRight, Globe, Sparkles, BookOpen, Zap, Quote } from "lucide-react"
import { Link } from "react-router-dom"
import Marquee from "../components/ui/Marquee";
import { testimonials } from "../data/testimonials"
import LandingVideo from "../assets/landing.mp4"

export default function Landing() {
  // État pour suivre la section actuellement visible à l'écran
  const [activeSection, setActiveSection] = useState<string>("accueil")

  useEffect(() => {
    // Configuration de l'observateur de défilement
    const observerOptions = {
      root: null, 
      rootMargin: "-40% 0px -50% 0px", // Déclenche le changement environ au milieu du viewport
      threshold: 0,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // On cible les 3 sections majeures de la page d'accueil
    const sections = ["accueil", "services", "temoignages"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-200 font-sans overflow-x-hidden selection:bg-violet-500/30">
      
      {/* 🧭 BARRE DE NAVIGATION ÉDITORIALE DYNAMIQUE */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold text-white tracking-tight">
            TechFacile <span className="text-violet-400 font-normal">Hub</span>
          </div>

          {/* Indicateurs d'étapes mis à jour dynamiquement selon le défilement */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium">
            <a 
              href="#accueil" 
              className={`group flex items-center gap-2 transition-colors duration-300 ${
                activeSection === "accueil" ? "text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${
                activeSection === "accueil" ? "text-violet-400" : "text-slate-600 group-hover:text-violet-400"
              }`}>01</span> Accueil
            </a>
            
            <div className="w-4 h-[1px] bg-white/10" />
            
            <a 
              href="#services" 
              className={`group flex items-center gap-2 transition-colors duration-300 ${
                activeSection === "services" ? "text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${
                activeSection === "services" ? "text-violet-400" : "text-slate-600 group-hover:text-violet-400"
              }`}>02</span> Découverte
            </a>
            
            <div className="w-4 h-[1px] bg-white/10" />
            
            <a 
              href="#temoignages" 
              className={`group flex items-center gap-2 transition-colors duration-300 ${
                activeSection === "temoignages" ? "text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              <span className={`text-[10px] font-mono transition-colors duration-300 ${
                activeSection === "temoignages" ? "text-violet-400" : "text-slate-600 group-hover:text-violet-400"
              }`}>03</span> Avis
            </a>
          </div>

          {/* Bouton d'action principal */}
          <Link 
            to="/annuaire" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-slate-950 px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors"
          >
            Découvrir mon Hub
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION (ACCUEIL) --- */}
      <section id="accueil" className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/4 w-[500px] h-[500px] bg-violet-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-medium uppercase tracking-wider mb-8 mx-auto">
            <Sparkles size={12} className="text-violet-400" /> Espace Numérique Sécurisé
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-white max-w-3xl leading-[1.15] text-center mx-auto mb-8">
            L'informatique devient <br />
            <span className="italic font-sans font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              simple et évident.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed text-center mb-10 pt-3">
            Un annuaire de vos sites favoris, des explications claires sans jargon technique et des ateliers pas-à-pas pour naviguer sur internet en toute sérénité.
          </p>

          <div className="flex justify-center w-full pt-3">
            <Link 
              to="/annuaire" 
              className="px-10 py-4 bg-violet-600 text-white font-bold text-base rounded-full hover:bg-violet-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-violet-600/20"
            >
              Accéder à mon espace <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* 🎥 VIDÉO EN APERÇU */}
        <div className="mt-20 max-w-4xl w-full mx-auto px-4 relative z-10">
          <div className="relative bg-[#0f1524] border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden aspect-video">
            <video 
              src={LandingVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION DESCRIPTION ÉDITORIALE (SERVICES) --- */}
      <section id="services" className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5 relative z-10">
        <div className="text-center mb-20 flex flex-col items-center justify-center">
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Étape 02 — Aperçu du Hub</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-2 text-center">Tout votre univers web, bien ordonné</h2>
        </div>

        <div className="space-y-16">
          {/* Ligne 1 */}
          <div className="grid md:grid-cols-12 gap-6 items-start py-8 border-b border-white/5">
            <div className="md:col-span-1 text-xs font-mono text-slate-600">/ 01</div>
            <div className="md:col-span-4 flex items-center gap-3">
              <Globe className="text-violet-400 shrink-0" size={20} />
              <h3 className="text-lg font-bold text-white">L'Annuaire vérifié</h3>
            </div>
            <div className="md:col-span-7 text-sm text-slate-400 leading-relaxed">
              Ne vous perdez plus sur les moteurs de recherche. Retrouvez un accès direct et sécurisé à vos sites administratifs (Impôts, CAF), de santé (Ameli) et de loisirs favoris.
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="grid md:grid-cols-12 gap-6 items-start py-8 border-b border-white/5">
            <div className="md:col-span-1 text-xs font-mono text-slate-600">/ 02</div>
            <div className="md:col-span-4 flex items-center gap-3">
              <BookOpen className="text-cyan-400 shrink-0" size={20} />
              <h3 className="text-lg font-bold text-white">Fiches & Guides</h3>
            </div>
            <div className="md:col-span-7 text-sm text-slate-400 leading-relaxed">
              Des fiches mémo imprimables et imagées pour comprendre comment réaliser vos démarches courantes, envoyer de gros fichiers ou gérer sereinement vos mots de passe.
            </div>
          </div>

          {/* Ligne 3 */}
          <div className="grid md:grid-cols-12 gap-6 items-start py-8">
            <div className="md:col-span-1 text-xs font-mono text-slate-600">/ 03</div>
            <div className="md:col-span-4 flex items-center gap-3">
              <Zap className="text-fuchsia-400 shrink-0" size={20} />
              <h3 className="text-lg font-bold text-white">Initiation à l'IA</h3>
            </div>
            <div className="md:col-span-7 text-sm text-slate-400 leading-relaxed">
              Découvrez l'intelligence artificielle à votre rythme grâce à notre espace simplifié pour rédiger des courriers complexes ou résumer de longs documents en un clin d'œil.
            </div>
          </div>
        </div>

      </section>

      {/* --- SECTION CARROUSEL DES TÉMOIGNAGES (TEMOIGNAGES) --- */}
      <section id="temoignages" className="py-24 max-w-7xl mx-auto border-t border-white/5 relative z-10 overflow-hidden">
  <div className="text-center mb-12 flex flex-col items-center justify-center px-6">
    <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Étape 03</span>
    <h2 className="text-3xl font-serif text-white mt-2">Paroles d'utilisateurs</h2>
  </div>

  <Marquee>
    {testimonials.map((item) => (
      <div 
        key={item.id} 
        className="w-[380px] shrink-0 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-between"
      >
        <div className="space-y-3">
          <Quote className="text-cyan-500/40" size={22} />
          <p className="text-sm md:text-base text-slate-300 italic font-serif whitespace-normal leading-relaxed">
            « {item.text} »
          </p>
        </div>
        <span className="block text-xs font-sans font-normal text-slate-500 mt-4">— {item.author}</span>
      </div>
    ))}
  </Marquee>
</section>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center border-t border-white/5">
        <p className="text-xs text-slate-600">TechFacile Hub &copy; 2026 — Plateforme d'inclusion numérique.</p>
      </footer>

    </div>
  )
}