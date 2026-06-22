// blogData.ts
import type { ComponentType } from "react";
import { Star, Brain, ShieldCheck, Smartphone, Wifi, Layers, RefreshCw } from "lucide-react";

// --- TYPES OFFICIELS DE VOTRE ARCHITECTURE ---
export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'tip' | 'warning' | 'quote';
  text: string;
  title?: string; // Optionnel, pour le titre des alertes/astuces
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  badge: { text: string; type: 'deb' | 'pub' | 'exp' };
  component?: ComponentType<any>; // Permet d'associer un module interactif complet
  icon: ComponentType<any>;
  colorClass: string;
  isFeatured?: boolean;
  toc: string[];
  tags: string[];
  contentBlocks: ContentBlock[];
}

// --- BASE DE DONNÉES ENRICHIE ET TYPÉE ---
export const blogArticles: Article[] = [
  {
    id: "featured-1",
    title: "Pourquoi moins c'est mieux : Simplifier radicalement votre navigation internet",
    summary: "Vouloir tout faire en même temps sur ordinateur conduit souvent à la frustration. Découvrez notre méthode pas-à-pas pour restreindre votre espace de travail aux outils essentiels, sans encombrement inutile.",
    date: "19 Juin 2026",
    readTime: "5 min",
    category: "Astuces & Organisation",
    badge: { text: "Débutant", type: "deb" },
    icon: Star,
    colorClass: "bg-orange-600",
    isFeatured: true,
    toc: ["L'enfer des 50 onglets ouverts", "Pourquoi notre cerveau sature", "La méthode des 3 fenêtres", "Conclusion"],
    tags: ["#Astuces", "#Organisation", "#Navigateur", "#Productivité"],
    contentBlocks: [
      { type: 'paragraph', text: "Ouvrir des dizaines d'onglets simultanément sur votre navigateur internet donne l'illusion d'être efficace. En réalité, cela ralentit votre ordinateur et fragmente votre attention de manière agressive." },
      { type: 'heading', text: "Le coût caché de l'encombrement numérique" },
      { type: 'paragraph', text: "Chaque onglet ouvert est une tâche laissée en suspens qui consomme de la mémoire vive (RAM) et de l'énergie mentale. À la fin de la journée, la sensation d'épuisement provient souvent de cette dispersion visuelle." },
      { type: 'tip', title: "Règle des 5 onglets", text: "Essayez de vous imposer une limite stricte : jamais plus de 5 onglets ouverts par fenêtre. Si un lien vous intéresse pour plus tard, ajoutez-le simplement à vos favoris." },
      { type: 'heading', text: "La méthode pas-à-pas pour nettoyer son espace" },
      { type: 'paragraph', text: "Pour retrouver de la clarté, séparez vos usages. Créez une fenêtre pour vos outils de communication (e-mails), une pour vos recherches en cours, et fermez systématiquement le reste dès qu'une tâche est accomplie." },
      { type: 'warning', title: "Attention aux bloqueurs d'attention", text: "Laisser les réseaux sociaux ouverts en arrière-plan détruit votre productivité à cause des notifications constantes." },
      { type: 'quote', text: "Simplifier son espace numérique, c'est avant tout s'offrir le luxe de la concentration." }
    ]
  },
  {
    id: "side-1",
    title: "Comprendre la mémoire vive (RAM) en 2 minutes chrono",
    summary: "L'architecture technique cachée derrière la fluidité de votre ordinateur expliquée simplement, sans jargon d'ingénieur.",
    date: "28 Mai 2026",
    readTime: "2 min",
    category: "Technologie",
    badge: { text: "Grand public", type: "pub" },
    icon: Brain,
    colorClass: "bg-blue-600",
    toc: ["La métaphore du bureau", "Pourquoi votre PC ralentit", "Le bon diagnostic"],
    tags: ["#Matériel", "#Technologie", "#RAM"],
    contentBlocks: [
      { type: 'paragraph', text: "La mémoire vive, souvent appelée RAM, est l'un des composants les plus essentiels de votre machine, mais aussi l'un des plus mal compris." },
      { type: 'heading', text: "La métaphore du bureau en bois" },
      { type: 'paragraph', text: "Imaginez que votre disque dur est une grande armoire de rangement : elle stocke tous vos dossiers. La RAM, elle, représente la surface de votre bureau. Plus votre bureau est grand, plus vous pouvez y étaler de dossiers en même temps pour travailler vite." },
      { type: 'tip', title: "Astuce Mémoire", text: "Si votre ordinateur ralentit lorsque vous ouvrez plusieurs logiciels, c'est que votre 'bureau' (la RAM) est saturé, et non pas que votre espace de stockage est plein." },
      { type: 'quote', text: "Augmenter la RAM redonne une seconde jeunesse à un ordinateur vieillissant à moindre coût." }
    ]
  },
  {
    id: "side-2",
    title: "Leçons tirées des dernières vagues d'e-mails frauduleux",
    summary: "Tous les pièges ne se ressemblent pas. Comment fonctionne le système de détection humain pour bloquer l'arnaque au premier coup d'œil.",
    date: "12 Mai 2026",
    readTime: "4 min",
    category: "Sécurité",
    badge: { text: "Grand public", type: "pub" },
    icon: ShieldCheck,
    colorClass: "bg-emerald-700",
    toc: ["L'évolution du phishing", "Le levier de l'urgence", "Le réflexe de vérification"],
    tags: ["#Sécurité", "#Arnaques", "#Phishing"],
    contentBlocks: [
      { type: 'paragraph', text: "En 2026, les cybercriminels n'utilisent plus de faux e-mails truffés de fautes d'orthographe grossières. Ils copient à la perfection les designs de vos administrations." },
      { type: 'heading', text: "Le piège de l'urgence émotionnelle" },
      { type: 'paragraph', text: "Qu'il s'agisse d'un prétendu colis bloqué, d'une amende à régler sous 48h ou d'une anomalie sur votre compte bancaire, l'objectif reste identique : vous faire paniquer pour neutraliser votre esprit critique." },
      { type: 'warning', title: "Règle d'or absolue", text: "Ne cliquez jamais sur le lien contenu dans un e-mail ou un SMS alarmant. Allez vous-même sur le site officiel de l'organisme en tapant son nom dans votre navigateur." }
    ]
  },
  {
    id: "side-3",
    title: "Pourquoi l'année 2026 change la donne pour l'Intelligence Artificielle",
    summary: "Ce qui rend les nouveaux assistants virtuels structurellement plus simples, plus humains et enfin adaptés aux grands débutants.",
    date: "07 Mai 2026",
    readTime: "5 min",
    category: "IA & Futur",
    badge: { text: "Expert", type: "exp" },
    icon: Brain,
    colorClass: "bg-cyan-600",
    toc: ["La fin des invites complexes", "Les modèles locaux", "L'accessibilité"],
    tags: ["#IA", "#Futur", "#Innovation"],
    contentBlocks: [
      { type: 'paragraph', text: "Oubliez les 'prompts' d'ingénieurs à rallonge. L'année 2026 marque l'avènement des IA contextuelles, capables de comprendre vos intentions de manière totalement naturelle." },
      { type: 'heading', text: "L'IA devient une extension de vos applications" },
      { type: 'paragraph', text: "Les outils récents n'attendent plus que vous leur posiez une question dans une boîte vide. Ils observent vos blocages et vous suggèrent des corrections ou des automatisations directement là où vous travaillez." },
      { type: 'tip', title: "Pour débuter", text: "Considérez les outils d'IA actuels comme des stagiaires très polis : ils exécutent rapidement les tâches ingrates, mais vous devez impérativement relire et valider leur travail." }
    ]
  },
  {
    id: "grid-1",
    title: "Gérer et trier ses demandes d'aide numérique avec sérénité",
    summary: "Une méthodologie claire et structurée pour organiser l'assistance informatique interne sans se laisser déborder par l'urgence.",
    date: "24 Avril 2026",
    readTime: "4 min",
    category: "Guides Pratiques",
    badge: { text: "Grand public", type: "pub" },
    icon: Layers,
    colorClass: "bg-blue-600",
    toc: ["Le syndrome de l'interruption", "Centraliser pour mieux souffler", "Créer des fiches d'autonomie"],
    tags: ["#Organisation", "#Entraide", "#Pédagogie"],
    contentBlocks: [
      { type: 'paragraph', text: "Être le référent technique d'une équipe ou d'une famille peut vite devenir un cauchemar si les sollicitations se font par SMS, e-mail et de vive voix en continu." },
      { type: 'heading', text: "Mettre en place un point d'entrée unique" },
      { type: 'paragraph', text: "Pour éviter l'épuisement face aux sollicitations, forcez la centralisation. Qu'il s'agisse d'un simple tableau partagé ou d'un canal dédié, regroupez les demandes pour les traiter par vagues plutôt qu'à la volée." },
      { type: 'tip', title: "Astuce Gain de Temps", text: "Lorsque vous dépannez quelqu'un pour la troisième fois sur le même problème, documentez la solution en 3 captures d'écran. Cette fiche d'autonomie réduira vos futures interruptions de 80%." }
    ]
  },
  {
    id: "grid-2",
    title: "Quand votre tablette ou votre ordinateur refuse de vous obéir",
    summary: "Découvrez les premiers réflexes de dépannage autonome à appliquer avant de paniquer ou d'appeler un réparateur tiers.",
    date: "15 Avril 2026",
    readTime: "4 min",
    category: "Astuces & Organisation",
    badge: { text: "Débutant", type: "deb" },
    icon: Smartphone,
    colorClass: "bg-orange-600",
    toc: ["Le freeze complet", "Le grand secret informatique", "Le check-up matériel"],
    tags: ["#Dépannage", "#Autonomie", "#Tablette"],
    contentBlocks: [
      { type: 'paragraph', text: "Un écran figé ou une application qui refuse de se fermer ne signifie pas que votre appareil est cassé. L'informatique subit parfois des conflits de processus invisibles." },
      { type: 'heading', text: "La règle universelle du redémarrage électrique" },
      { type: 'paragraph', text: "Près de 90% des pannes légères se résolvent par un redémarrage forcé. En coupant l'alimentation, vous videz complètement la RAM, ce qui élimine le bug à l'origine du blocage." },
      { type: 'warning', title: "Attention aux faux diagnostics", text: "Ne forcez jamais sur un bouton ou sur une prise si l'appareil ne réagit pas. Laissez-le reposer 5 minutes débranché avant de tenter de le rallumer." }
    ]
  },
  {
    id: "grid-3",
    title: "TechFacile Hub v2.0 : Découvrez notre nouveau créateur d'exercices",
    summary: "Présentation détaillée des nouvelles fonctionnalités interactives déployées pour optimiser l'apprentissage pratique de vos collaborateurs.",
    date: "02 Avril 2026",
    readTime: "3 min",
    category: "Mises à jour",
    badge: { text: "Expert", type: "exp" },
    icon: RefreshCw,
    colorClass: "bg-cyan-600",
    toc: ["Pourquoi cette mise à jour ?", "L'interactivité au cœur du projet", "Comment y accéder"],
    tags: ["#MiseÀJour", "#Hub", "#Outils"],
    contentBlocks: [
      { type: 'paragraph', text: "Nous sommes fiers de vous présenter le déploiement majeur de notre version 2.0. Notre plateforme évolue pour offrir des parcours de formation encore plus proches de vos réalités de terrain." },
      { type: 'heading', text: "Des exercices immersifs sans risque" },
      { type: 'paragraph', text: "Le nouveau créateur permet de simuler de vraies interfaces (boîtes e-mails, bureaux de systèmes d'exploitation) pour s'exercer en toute sécurité. L'apprenant commet ses erreurs dans un espace sécurisé, sans impacter la production." },
      { type: 'quote', text: "La théorie informe, mais c'est la pratique sécurisée qui construit la véritable confiance numérique." }
    ]
  },
  {
    id: "grid-4",
    title: "Comment automatiser l'envoi de gros fichiers à vos proches",
    summary: "Plus besoin de lutter avec les limitations des pièces jointes d'e-mails. Les solutions simples et sécurisées pour partager vos dossiers volumineux.",
    date: "21 Mars 2026",
    readTime: "4 min",
    category: "Guides Pratiques",
    badge: { text: "Débutant", type: "deb" },
    icon: Wifi,
    colorClass: "bg-blue-600",
    toc: ["Le plafond des e-mails", "Les outils de transfert direct", "Gagner du temps"],
    tags: ["#Partage", "#Cloud", "#Internet"],
    contentBlocks: [
      { type: 'paragraph', text: "Envoyer un album photo de vacances ou une vidéo de famille par e-mail se solde presque toujours par un message d'erreur indiquant que le fichier est trop lourd." },
      { type: 'heading', text: "Utiliser des services de transfert éphémères" },
      { type: 'paragraph', text: "Des solutions modernes permettent de déposer vos fichiers volumineux sur une plateforme sécurisée qui génère un lien de téléchargement. Vos proches n'ont plus qu'à cliquer pour récupérer le document." },
      { type: 'tip', title: "Alternative Souveraine", text: "Privilégiez les services respectueux des données personnelles qui suppriment automatiquement vos fichiers du serveur après quelques jours." }
    ]
  },
  {
    id: "grid-5",
    title: "Comment les petits modèles d'IA génèrent de meilleurs résultats",
    summary: "Comprendre la révolution des architectures d'IA légères et locales, idéales pour traiter les requêtes de manière ultra-rapide.",
    date: "10 Mars 2026",
    readTime: "5 min",
    category: "IA & Futur",
    badge: { text: "Expert", type: "exp" },
    icon: Brain,
    colorClass: "bg-cyan-600",
    toc: ["La fin du gigantisme", "La spécialisation des modèles", "Avantages écologiques et économiques"],
    tags: ["#IA", "#Technologie", "#Optimisation"],
    contentBlocks: [
      { type: 'paragraph', text: "La course à la taille des modèles d'intelligence artificielle ralentit. L'industrie se tourne massivement vers des modèles plus petits, spécialisés et hautement optimisés." },
      { type: 'heading', text: "Pourquoi la taille ne fait pas tout" },
      { type: 'paragraph', text: "Un modèle d'IA entraîné uniquement sur du code informatique ou sur de la documentation médicale surclassera un modèle géant généraliste, tout en consommant 100 fois moins d'énergie." },
      { type: 'warning', title: "Sécurité des données", text: "Ces petits modèles peuvent s'exécuter localement directement sur votre ordinateur ou smartphone, garantissant qu'aucune de vos données sensibles ne quitte votre entreprise." }
    ]
  },
  {
    id: "grid-6",
    title: "Rencontre locale : Le bilan complet de notre dernier atelier",
    summary: "Retour en images et données clés sur les échanges partagés avec notre communauté d'entraide numérique ce trimestre.",
    date: "25 Février 2026",
    readTime: "3 min",
    category: "Communauté",
    badge: { text: "Grand public", type: "pub" },
    icon: Layers,
    colorClass: "bg-emerald-700",
    toc: ["Une participation record", "Les thèmes abordés", "Perspectives"],
    tags: ["#Communauté", "#Atelier", "#Rencontre"],
    contentBlocks: [
      { type: 'paragraph', text: "Notre dernier atelier d'inclusion et d'accompagnement numérique a réuni plus de cinquante participants impatients de briser la glace avec les outils modernes." },
      { type: 'heading', text: "L'autonomie au cœur des ateliers" },
      { type: 'paragraph', text: "Les échanges ont principalement porté sur la sécurisation des smartphones personnels et la compréhension des démarches administratives en ligne. L'ambiance conviviale a permis de dédramatiser l'usage de l'outil informatique." },
      { type: 'tip', title: "Rejoignez-nous", text: "Les ateliers sont gratuits et ouverts à tous, quel que soit votre niveau initial. Consultez notre calendrier pour réserver votre place au prochain événement." }
    ]
  }
];