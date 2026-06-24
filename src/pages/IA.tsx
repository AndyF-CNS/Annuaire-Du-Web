import { useState, useRef } from "react"
import {
  Bot,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Code2,
  LayoutGrid,
  Image as ImageIcon,
  PlayCircle,
  Headphones,
  Search,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  Layers,
  Smile // 1. Ajout de l'avatar humain bienveillant
} from "lucide-react"

// Import du fichier PNG d'identité
import iaBrain from "../assets/ia-brain.png";

export default function IA() {
  // --- ÉTATS INTERACTIFS ---
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [showHelp, setShowHelp] = useState(true)

  // Référence pour faire défiler la page après un clic sur la cartographie
  const viewSectionRef = useRef<HTMLDivElement>(null)

  // --- DONNÉES DES OUTILS IA ---
  // 2. Ajout de la propriété "requiresAccount: true" sur les outils concernés
  const aiTools = [
    // Texte
    {
      id: "vibe",
      title: "Vibe - (Le Chat)",
      category: "Texte",
      purpose: "Idéal pour : Explorer en profondeur",
      description: "L'alternative moderne à Google. Posez-lui une question, il cherche sur Internet et vous fait un résumé clair en citant ses sources.",
      website: "https://chat.mistral.ai/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/960px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png",
      badge: "Recherche d'actualités",
      examples: ["Suivre l'actualité d'un sujet", "Trouver l'origine d'une expression"],
      requiresAccount: true
    },
    {
      id: "claude",
      title: "Claude",
      category: "Texte",
      purpose: "Idéal pour : Améliorer le style et corriger",
      description: "Un assistant virtuel doté d'un style d'écriture naturel et poli. Parfait pour relire vos lettres ou corriger l'orthographe.",
      website: "https://claude.ai",
      logo: "https://images.seeklogo.com/logo-png/55/2/claude-logo-png_seeklogo-554534.png",
      badge: "Très chaleureux",
      examples: ["Corriger les fautes d'un texte", "Résumer un long article"],
      requiresAccount: true
    },
    {
      id: "chatgpt",
      title: "ChatGPT",
      category: "Texte",
      purpose: "Idéal pour : Écrire, traduire et répondre",
      description: "Considérez-le comme un secrétaire particulier. Demandez-lui de rédiger un courrier, résumer un texte ou vous donner une recette.",
      website: "https://chatgpt.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1280px-ChatGPT-Logo.svg.png",
      badge: "Le plus populaire",
      examples: ["Rédiger une lettre administrative", "Trouver des idées de recettes"],
      requiresAccount: true
    },
    {
      id: "gemini",
      title: "Gemini",
      category: "Texte",
      purpose: "Idéal pour : Raisonnement avancé",
      description: "Un modèle multilingue et multimodal pour des réponses précises et contextuelles.",
      website: "https://gemini.google.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/1280px-Google_Gemini_icon_2025.svg.png",
      badge: "Multimodal",
      examples: ["Analyser un document PDF", "Traduire un texte technique"],
      requiresAccount: true
    },
    // Image
    {
      id: "leonardo",
      title: "Leonardo.AI",
      category: "Image",
      purpose: "Idéal pour : Créer des images artistiques",
      description: "Générez des images de haute qualité avec des styles variés, idéal pour les créatifs.",
      website: "https://leonardo.ai",
      logo: "https://cdn.prod.website-files.com/66d825d3650f70aa06553ed3/68d2a097dcedc6bd656a0769_logo-leonardo.png",
      badge: "Art génératif",
      examples: ["Créer un personnage de jeu vidéo", "Générer un paysage futuriste"],
      requiresAccount: true
    },
    {
      id: "ideogram",
      title: "Ideogram",
      category: "Image",
      purpose: "Idéal pour : Texte dans les images",
      description: "Générez des images avec du texte intégré, parfait pour les memes ou les affiches.",
      website: "https://ideogram.ai",
      logo: "https://ideogram.ai/favicon.ico",
      badge: "Texte + Image",
      examples: ["Créer une affiche avec du texte", "Générer un logo avec un slogan"],
      requiresAccount: true
    },
    {
      id: "bing",
      title: "Bing Image Creator",
      category: "Image",
      purpose: "Idéal pour : Création rapide d'images",
      description: "Utilisez DALL·E 3 via Bing pour générer des images à partir de vos descriptions.",
      website: "https://www.bing.com/images/create",
      logo: "https://www.bing.com/favicon.ico",
      badge: "Intégré à Bing",
      examples: ["Créer une illustration pour un article", "Imaginer un animal fantastique"],
      requiresAccount: true
    },
    {
      id: "firefly",
      title: "Firefly",
      category: "Image",
      purpose: "Idéal pour : Design professionnel",
      description: "Outil d'Adobe pour générer des images et des effets visuels de qualité professionnelle.",
      website: "https://firefly.adobe.com",
      logo: "https://www.adobe.com/cc-shared/assets/img/firefly.svg",
      badge: "Adobe",
      examples: ["Retoucher une photo", "Créer un fond pour une bannière"],
      requiresAccount: true
    },
    // Vidéo
    {
      id: "animoto",
      title: "Animoto",
      category: "Vidéo",
      purpose: "Idéal pour : Montage vidéo simple",
      description: "Créez des vidéos professionnelles à partir de vos photos et vidéos en quelques clics.",
      website: "https://animoto.com",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Pkln3QpSv8wdwKRBQdjlVP_-Rk-sW70fYg&s",
      badge: "Montage automatique",
      examples: ["Créer une vidéo de vacances", "Faire un diaporama musical"],
      requiresAccount: true
    },
    {
      id: "pika",
      title: "Pika.art",
      category: "Vidéo",
      purpose: "Idéal pour : Génération vidéo par IA",
      description: "Générez des vidéos à partir de prompts textuels, comme pour les images mais en mouvement.",
      website: "https://pika.art",
      logo: "https://pika.art/favicon.ico",
      badge: "Vidéo IA",
      examples: ["Créer une scène animée", "Générer une vidéo à partir d'un story-board"],
      requiresAccount: true
    },
    {
      id: "pippit",
      title: "Pippit AI",
      category: "Vidéo",
      purpose: "Idéal pour : Édition vidéo intelligente",
      description: "Éditez vos vidéos avec des outils d'IA pour ajouter des effets, des sous-titres, etc.",
      website: "https://pippit.ai",
      logo: "https://cdn.prod.website-files.com/66d825d3650f70aa06553ed3/68cc274e2a4ab88da09078c7_Pippit%20AI.jpg",
      badge: "Édition intelligente",
      examples: ["Ajouter des sous-titres automatiques", "Appliquer un filtre artistique"],
      requiresAccount: false
    },
    // Musique
    {
      id: "riffusion",
      title: "Riffusion",
      category: "Musique",
      purpose: "Idéal pour : Créer des mélodies",
      description: "Générez des mélodies et des rythmes à partir de descriptions textuelles.",
      website: "https://riffusion.com",
      logo: "https://riffusion.com/favicon.ico",
      badge: "Création musicale",
      examples: ["Créer une mélodie pour une chanson", "Générer un rythme de batterie"],
      requiresAccount: false
    },
    {
      id: "udio",
      title: "Udio",
      category: "Musique",
      purpose: "Idéal pour : Composition musicale",
      description: "Créez des morceaux complets avec des voix et des instruments réalistes.",
      website: "https://udio.com",
      logo: "https://udio.com/favicon.ico",
      badge: "Studio IA",
      examples: ["Composer une chanson pop", "Créer une bande-son pour une vidéo"],
      requiresAccount: true
    },
    {
      id: "boomy",
      title: "Boomy",
      category: "Musique",
      purpose: "Idéal pour : Musique sans expérience",
      description: "Créez de la musique en quelques secondes, même sans connaissances musicales.",
      website: "https://boomy.com",
      logo: "https://boomy.com/favicon.ico",
      badge: "Accessible à tous",
      examples: ["Créer un morceau pour un podcast", "Générer une ambiance sonore"],
      requiresAccount: true
    },
    {
      id: "suno",
      title: "Suno AI",
      category: "Musique",
      purpose: "Idéal pour : Générer des musiques",
      description: "Écrivez le style de musique que vous aimez et l'IA compose une chanson complète avec voix en quelques secondes.",
      website: "https://suno.com",
      logo: "https://avenuedelia.com/media/img/suno-icon.max-300x300.png",
      badge: "Magie musicale",
      examples: ["Créer un jazz d'ambiance pour lire", "Une chanson d'anniversaire amusante"],
      requiresAccount: true
    },
    // Code
    {
      id: "replit",
      title: "Replit AI",
      category: "Code",
      purpose: "Idéal pour : Apprendre à coder",
      description: "Un environnement de développement en ligne avec assistance IA pour apprendre et pratiquer la programmation.",
      website: "https://replit.com",
      logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/replit-color.png",
      badge: "Apprentissage",
      examples: ["Créer un jeu en Python", "Apprendre les bases de JavaScript"],
      requiresAccount: true
    },
    {
      id: "github",
      title: "GitHub Copilot",
      category: "Code",
      purpose: "Idéal pour : Complétion de code",
      description: "Un assistant IA intégré à votre éditeur de code pour écrire du code plus rapidement et avec moins d'erreres.",
      website: "https://github.com/features/copilot",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      badge: "Intégration IDE",
      examples: ["Générer une fonction complexe", "Corriger des bugs dans votre code"],
      requiresAccount: true
    },
    {
      id: "windsurf",
      title: "WindSurf",
      category: "Code",
      purpose: "Idéal pour : Automatisation de tâches",
      description: "Automatisez vos workflows de développement avec des scripts IA.",
      website: "https://windsurf.com",
      logo: "💻",
      badge: "Automatisation",
      requiresAccount: true
    },
    // Autre
    {
      id: "perplexity",
      title: "Perplexity",
      category: "Autre",
      purpose: "Idéal pour : Chercher des infos vérifiées",
      description: "L'alternative moderne à Google. Posez-lui une question, il cherche sur Internet à votre place et vous fait un résumé clair en citant ses sources.",
      website: "https://perplexity.ai",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbKqia9h-6FPu4yhtOmldu5R33c1cC53hHA&s",
      badge: "Recherche nette",
      examples: ["Suivre l'actualité d'un sujet", "Trouver l'origine d'une expression"],
      requiresAccount: false // Optionnel sans compte
    },
    {
      id: "napkin",
      title: "Napkin AI",
      category: "Autre",
      purpose: "Idéal pour : Organiser ses idées",
      description: "Transformez vos notes manuscrites ou vos idées en cartes mentales et en plans structurés.",
      website: "https://napkin.ai",
      logo: "https://napkin.ai/favicon.ico",
      badge: "Productivité",
      examples: ["Créer une mind map pour un projet", "Organiser une brainstorming"],
      requiresAccount: true
    },
    {
      id: "notion",
      title: "Notion AI",
      category: "Autre",
      purpose: "Idéal pour : Gestion de projets et notes",
      description: "Un assistant IA intégré à Notion pour vous help à rédiger, organiser et gérer vos projets.",
      website: "https://notion.ai",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/960px-Notion-logo.svg.png",
      badge: "Tout-en-un",
      examples: ["Rédiger un compte-rendu de réunion", "Créer un plan de projet détaillé"],
      requiresAccount: true
    },
    {
      id: "notebooklm",
      title: "NotebookLM",
      category: "Autre",
      purpose: "Idéal pour : Résumer vos documents",
      description: "Import vos notes et documents, et l'IA vous aide à les comprendre, les résumer et en extraire les informations clés.",
      website: "https://notebooklm.google.com",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/notebooklm-icon.png",
      badge: "Gestion de connaissances",
      examples: ["Résumer un livre", "Extraire les points clés d'un rapport"],
      requiresAccount: true
    }
  ]

  // --- CONFIGURATION DES ONGLETS CONTENUS ---
  const categories = [
    { label: "Tous", icon: LayoutGrid },
    { label: "Texte", icon: FileText },
    { label: "Image", icon: ImageIcon },
    { label: "Vidéo", icon: PlayCircle },
    { label: "Audio", icon: Headphones },
    { label: "Code", icon: Code2 },
    { label: "Autre", icon: Layers }
  ]

  // --- LOGIQUE DE FILTRAGE INTERACTIF ---
  const filteredTools = aiTools.filter((tool) => {
    const targetCategory = activeCategory === "Audio" ? "Musique" : activeCategory
    const matchesCategory = activeCategory === "Tous" || tool.category === targetCategory
    const matchesSearch = 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.purpose.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  // --- INTERACTION DE LA CARTOGRAPHIE ---
  const handleBrainHubClick = (categoryLabel: string) => {
    setActiveCategory(categoryLabel)
    if (viewSectionRef.current) {
      viewSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCopyExample = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2000)
  }

  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 py-4">
      {/* En-tête principal */}
      <header className="flex items-center gap-4 pb-5 border-b border-slate-200/60">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-slate-100 shrink-0">
          <Bot size={24} className="text-violet-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Les Intelligences Artificielles
          </h1>
          <p className="text-slate-500 text-sm mt-0.5 max-w-2xl leading-relaxed">
            Découvrez notre selection d'outils intelligents classés par spécialités pour enrichir votre quotidien.
          </p>
        </div>
      </header>

      {/* ================= ZONE CENTRALE : CARTOGRAPHIE DES SAVOIRS ================= */}
      <section className="bg-slate-950 rounded-3xl p-6 md:p-12 shadow-xl border border-slate-800 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="relative z-10 mb-6 max-w-md mx-auto space-y-1">
          <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
            Identité Visuelle Centrale
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight">La Cartographie des Savoirs</h2>
          <p className="text-slate-400 text-xs">
            Sélectionnez une zone du cerveau pour filtrer les technologies associées.
          </p>
        </div>

        {/* Hub Technologique */}
        <div className="relative max-w-4xl mx-auto flex flex-col md:grid md:grid-cols-12 items-center gap-8 md:h-[420px] py-4">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" 
            viewBox="0 0 900 420" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad-texte" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="grad-image" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="grad-code" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="grad-video" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffb900" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="grad-audio" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="grad-autre" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
            </defs>

            <path 
              d="M 225 70 H 280 L 340 165 H 375" 
              fill="none" 
              stroke="url(#grad-texte)" 
              strokeWidth={activeCategory === "Texte" ? "3" : "1.5"} 
              strokeOpacity={activeCategory === "Texte" || activeCategory === "Tous" ? "1" : "0.4"}
              className="transition-all duration-300"
            />
            <circle cx="225" cy="70" r="3.5" fill="#3b82f6" opacity={activeCategory === "Texte" || activeCategory === "Tous" ? "1" : "0.4"}/>
            <circle cx="375" cy="165" r="2.5" fill="#8b5cf6" opacity={activeCategory === "Texte" || activeCategory === "Tous" ? "1" : "0.4"}/>

            <path 
              d="M 225 210 H 270 L 320 195 H 365" 
              fill="none" 
              stroke="url(#grad-image)" 
              strokeWidth={activeCategory === "Image" ? "3" : "1.5"} 
              strokeOpacity={activeCategory === "Image" || activeCategory === "Tous" ? "1" : "0.4"}
              className="transition-all duration-300"
            />
            <circle cx="225" cy="210" r="3.5" fill="#a855f7" opacity={activeCategory === "Image" || activeCategory === "Tous" ? "1" : "0.4"}/>
            <circle cx="365" cy="195" r="2.5" fill="#c084fc" opacity={activeCategory === "Image" || activeCategory === "Tous" ? "1" : "0.4"}/>

            <path 
              d="M 225 350 H 280 L 340 255 H 375" 
              fill="none" 
              stroke="url(#grad-code)" 
              strokeWidth={activeCategory === "Code" ? "3" : "1.5"} 
              strokeOpacity={activeCategory === "Code" || activeCategory === "Tous" ? "1" : "0.4"}
              className="transition-all duration-300"
            />
            <circle cx="225" cy="350" r="3.5" fill="#06b6d4" opacity={activeCategory === "Code" || activeCategory === "Tous" ? "1" : "0.4"}/>
            <circle cx="375" cy="255" r="2.5" fill="#6366f1" opacity={activeCategory === "Code" || activeCategory === "Tous" ? "1" : "0.4"}/>

            <path 
              d="M 675 70 H 620 L 560 165 H 525" 
              fill="none" 
              stroke="url(#grad-video)" 
              strokeWidth={activeCategory === "Vidéo" ? "3" : "1.5"} 
              strokeOpacity={activeCategory === "Vidéo" || activeCategory === "Tous" ? "1" : "0.4"}
              className="transition-all duration-300"
            />
            <circle cx="675" cy="70" r="3.5" fill="#ffb900" opacity={activeCategory === "Vidéo" || activeCategory === "Tous" ? "1" : "0.4"}/>
            <circle cx="525" cy="165" r="2.5" fill="#f59e0b" opacity={activeCategory === "Vidéo" || activeCategory === "Tous" ? "1" : "0.4"}/>

            <path 
              d="M 675 210 H 630 L 580 195 H 535" 
              fill="none" 
              stroke="url(#grad-audio)" 
              strokeWidth={activeCategory === "Audio" ? "3" : "1.5"} 
              strokeOpacity={activeCategory === "Audio" || activeCategory === "Tous" ? "1" : "0.4"}
              className="transition-all duration-300"
            />
            <circle cx="675" cy="210" r="3.5" fill="#f43f5e" opacity={activeCategory === "Audio" || activeCategory === "Tous" ? "1" : "0.4"}/>
            <circle cx="535" cy="195" r="2.5" fill="#ec4899" opacity={activeCategory === "Audio" || activeCategory === "Tous" ? "1" : "0.4"}/>

            <path 
              d="M 675 350 H 620 L 560 255 H 525" 
              fill="none" 
              stroke="url(#grad-autre)" 
              strokeWidth={activeCategory === "Autre" ? "3" : "1.5"} 
              strokeOpacity={activeCategory === "Autre" || activeCategory === "Tous" ? "1" : "0.4"}
              className="transition-all duration-300"
            />
            <circle cx="675" cy="350" r="3.5" fill="#ef4444" opacity={activeCategory === "Autre" || activeCategory === "Tous" ? "1" : "0.4"}/>
            <circle cx="525" cy="255" r="2.5" fill="#b91c1c" opacity={activeCategory === "Autre" || activeCategory === "Tous" ? "1" : "0.4"}/>
          </svg>

          {/* HÉMISPHÈRE GAUCHE */}
          <div className="md:col-span-3 w-full h-full flex flex-row md:grid md:grid-rows-3 items-center gap-4 z-10">
            <button 
              onClick={() => handleBrainHubClick("Texte")}
              className={`flex-1 md:w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeCategory === "Texte" ? "bg-blue-950/80 border-blue-500 text-white shadow-lg shadow-blue-500/20 scale-102" : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-blue-400"><FileText size={16} /></div>
              <span className="text-xs font-bold tracking-tight">Génération Texte</span>
            </button>
            <button 
              onClick={() => handleBrainHubClick("Image")}
              className={`flex-1 md:w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeCategory === "Image" ? "bg-purple-950/80 border-purple-500 text-white shadow-lg shadow-purple-500/20 scale-102" : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-purple-400"><ImageIcon size={16} /></div>
              <span className="text-xs font-bold tracking-tight">Création Image</span>
            </button>
            <button 
              onClick={() => handleBrainHubClick("Code")}
              className={`flex-1 md:w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeCategory === "Code" ? "bg-cyan-950/80 border-cyan-300 text-white shadow-lg shadow-cyan-500/20 scale-102" : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-cyan-400"><Code2 size={16} /></div>
              <span className="text-xs font-bold tracking-tight">Programmation</span>
            </button>
          </div>

          {/* CENTRE */}
          <div className="md:col-span-6 w-full h-full flex items-center justify-center relative px-2 z-10">
            <div className={`absolute w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
              activeCategory === "Texte" ? "bg-blue-600" :
              activeCategory === "Image" ? "bg-purple-600" :
              activeCategory === "Code" ? "bg-cyan-400" :
              activeCategory === "Vidéo" ? "bg-amber-600" :
              activeCategory === "Audio" ? "bg-pink-600" :
              activeCategory === "Autre" ? "bg-red-500" : "bg-violet-600/15"
            }`}></div>
            <img 
              src={iaBrain} 
              alt="IA brain" 
              className="relative z-10 max-h-64 md:max-h-72 w-auto object-contain select-none drop-shadow-[0_0_35px_rgba(139,92,246,0.2)]"
            />
          </div>

          {/* HÉMISPHÈRE DROIT */}
          <div className="md:col-span-3 w-full h-full flex flex-row md:grid md:grid-rows-3 items-center gap-4 z-10">
            <button 
              onClick={() => handleBrainHubClick("Vidéo")}
              className={`flex-1 md:w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeCategory === "Vidéo" ? "bg-amber-950/80 border-amber-500 text-white shadow-lg shadow-amber-500/20 scale-102" : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-amber-400"><PlayCircle size={16} /></div>
              <span className="text-xs font-bold tracking-tight">Studio Vidéo</span>
            </button>
            <button 
              onClick={() => handleBrainHubClick("Audio")}
              className={`flex-1 md:w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeCategory === "Audio" ? "bg-pink-950/80 border-pink-500 text-white shadow-lg shadow-pink-500/20 scale-102" : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-pink-400"><Headphones size={16} /></div>
              <span className="text-xs font-bold tracking-tight">Musique & Son</span>
            </button>
            <button 
              onClick={() => handleBrainHubClick("Autre")}
              className={`flex-1 md:w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeCategory === "Autre" ? "bg-red-950/80 border-red-500 text-white shadow-lg shadow-red-500/20 scale-102" : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-red-400"><Layers size={16} /></div>
              <span className="text-xs font-bold tracking-tight">Productivité</span>
            </button>
          </div>
        </div>
      </section>

      {/* Guide interactif */}
      {showHelp && (
        <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-5 rounded-2xl shadow-xs relative overflow-hidden transition-all">
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <HelpCircle size={18} className="text-violet-200" />
                <h2 className="text-base font-bold">Astuce d'utilisation</h2>
              </div>
              <p className="text-violet-100 text-xs md:text-sm max-w-2xl leading-relaxed">
                Cliquez sur une section du cerveau ci-dessus ou un onglet pour filtrer les applications. Vous pouvez aussi <strong>cliquer sur une idée de question</strong> dans les fiches pour la copier instantanément !
              </p>
            </div>
            <button 
              onClick={() => setShowHelp(false)}
              className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-xl transition font-medium"
            >
              Masquer l'aide
            </button>
          </div>
        </section>
      )}

      {/* Filtres par onglets et recherche locale */}
      <div ref={viewSectionRef} className="space-y-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs scroll-mt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl w-fit">
            {categories.map((cat) => {
              const IconComponent = cat.icon
              const isSelected = activeCategory === cat.label
              
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`
                    flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-all duration-200
                    ${isSelected 
                      ? "bg-white text-violet-600 shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }
                  `}
                >
                  <IconComponent size={14} className={isSelected ? "text-violet-600" : "text-slate-400"} />
                  {cat.label}
                </button>
              )
            })}
          </div>

          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un outil, un usage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:border-violet-400 focus:bg-white transition"
            />
          </div>
        </div>
      </div>

      {/* Grille d'affichage principale */}
      {filteredTools.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div 
              key={tool.id} 
              className="bg-white border border-slate-200/80 rounded-2xl shadow-2xs flex flex-col justify-between overflow-hidden transition duration-200 hover:shadow-md hover:border-slate-300"
            >
              <div className="p-5 space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden p-1.5 shadow-2xs">
                    {tool.logo.startsWith("http") ? (
                      <img 
                        src={tool.logo} 
                        alt={`Logo ${tool.title}`} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-xl select-none">{tool.logo}</span>
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100/50">
                    {tool.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {tool.title}
                    </h3>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-violet-600">
                    {tool.purpose}
                  </p>
                </div>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {tool.description}
                </p>

                {tool.examples && tool.examples.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={10} className="text-violet-400" />
                      Cliquez sur une idée pour la copier :
                    </p>
                    <ul className="space-y-1.5">
                      {tool.examples.map((example, i) => {
                        const isCopied = copiedText === example
                        return (
                          <li key={i}>
                            <button
                              onClick={() => handleCopyExample(example)}
                              className={`
                                w-full text-left flex items-start gap-2 text-xs p-2 rounded-lg transition group border border-transparent
                                ${isCopied 
                                  ? "bg-green-50 text-green-700 border-green-200" 
                                  : "text-slate-700 hover:bg-slate-50 hover:border-slate-100 italic"
                                }
                              `}
                            >
                              {isCopied ? (
                                <Check size={13} className="text-green-600 mt-0.5 shrink-0" />
                              ) : (
                                <CheckCircle2 size={13} className="text-violet-500 mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                              )}
                              <span className="flex-1">"{example}"</span>
                              <span className="opacity-0 group-hover:opacity-100 ml-1 text-slate-400 self-center transition-opacity">
                                <Copy size={11} />
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {/* ⬇️ ZONE PIED DE CARTE MODIFIÉE ⬇️ */}
              <div className="px-5 py-3 bg-slate-50/50 border-t border-slate-100 flex flex-col gap-2.5">
                
                {/* 3. AVATAR HUMAIN INFORMATIF (Se déclenche au Hover PC / au Tap Mobile) */}
                {tool.requiresAccount && (
                  <div className="relative group/avatar flex items-center gap-2 px-3 py-1.5 bg-amber-50/80 border border-amber-200/70 rounded-xl cursor-help select-none w-fit transition-colors hover:bg-amber-100/70">
                    
                    {/* BULLE DE DIALOGUE SOURIANTE */}
                    <div className="
                      absolute bottom-full left-2 mb-2 w-56 p-3
                      bg-slate-900 text-white text-[11px] rounded-xl shadow-lg border border-slate-800
                      leading-relaxed font-normal
                      
                      /* Flèche de la bulle vers le bas */
                      after:content-[''] after:absolute after:top-full after:left-4 
                      after:border-4 after:border-transparent after:border-top-slate-900
                      
                      /* Animation d'apparition fluide */
                      opacity-0 translate-y-1 scale-95 pointer-events-none
                      group-hover/avatar:opacity-100 group-hover/avatar:translate-y-0 group-hover/avatar:scale-100
                      transition-all duration-200 ease-out z-20
                    ">
                      <span className="font-bold text-amber-400 block mb-0.5">Note de TechFacile :</span>
                      Pour utiliser cet outil, le site web va vous demander de créer un compte gratuit chez eux.
                    </div>

                    {/* Le visuel de l'avatar humain (icône Smile) */}
                    <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Smile size={13} strokeWidth={2.5} />
                    </div>
                    
                    <span className="text-[11px] font-bold text-amber-800 tracking-tight">
                      Création de compte requise
                    </span>
                  </div>
                )}

                {/* BOUTON D'ACTION DÉJÀ EXISTANT */}
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50/20 text-xs font-bold rounded-xl shadow-2xs transition-all group"
                >
                  Ouvrir l'outil gratuitement
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-violet-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              {/* ⬆️ FIN DE LA ZONE PIED DE CARTE ⬆️ */}

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl shadow-2xs">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-base font-bold text-slate-800">Aucun outil trouvé</h3>
          <p className="text-slate-500 text-xs mt-1">Essayez d'ajuster votre recherche ou changez d'onglet.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("Tous"); }}
            className="mt-4 inline-flex items-center text-xs text-violet-600 font-bold hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  )
}