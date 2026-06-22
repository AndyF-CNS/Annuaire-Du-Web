import { Brain, ShieldCheck, Smartphone, Wifi, Star } from "lucide-react";
import PasswordModule from "../components/blog/PasswordModule"; // Ajustez le chemin selon votre arborescence
import QuizModule from "../components/blog/QuizzModule"; // Intégration du module de quiz de Prompting

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
  component?: React.ComponentType<any>; // Permet d'associer un module interactif complet
  icon: React.ComponentType<any>;
  colorClass: string;
  isFeatured?: boolean;
  toc: string[];
  tags: string[];
  contentBlocks: ContentBlock[];
}

export const blogArticles: Article[] = [
  {
    id: "chatgpt-gemini-claude-2026",
    title: "ChatGPT, Gemini, Claude… Ce que vous devez vraiment savoir sur ces outils en 2026",
    summary: "Ils sont partout dans les médias. Mais concrètement, à quoi servent-ils ? Sont-ils fiables ? On vous explique tout sans jargon.",
    date: "14 juin 2026",
    readTime: "6 min",
    category: "IA",
    badge: { text: "Grand public", type: "pub" },
    icon: Brain,
    colorClass: "bg-blue-600", // Bleu profond de la marque
    isFeatured: true,
    component: QuizModule, // Le mini-quiz sur le Prompting est maintenant injecté ici
    toc: ["Introduction", "C'est quoi une IA ?", "ChatGPT vs les autres", "Conclusion"],
    tags: ["#IA", "#ChatGPT", "#Numérique", "#Grand public"],
    contentBlocks: [
      { type: 'paragraph', text: "Depuis fin 2022, on n'arrête pas d'entendre parler de ChatGPT. Puis de Gemini (Google), Claude (Anthropic), Copilot (Microsoft)… Mais qu'est-ce que c'est vraiment ? Et est-ce que vous devriez les utiliser ?" },
      { type: 'heading', text: "C'est quoi une IA exactement ?" },
      { type: 'paragraph', text: "Une IA comme ChatGPT, c'est un programme qui a 'lu' des milliards de textes sur Internet. Il a appris à reconnaître des mots qui vont bien ensemble. Quand vous lui posez une question, il prédit la suite la plus probable." },
      { type: 'tip', title: "Bon à savoir", text: "ChatGPT ne 'pense' pas. Il prédit. C'est pour ça qu'il peut parfois inventer des réponses qui semblent vraies mais sont fausses." },
      { type: 'heading', text: "ChatGPT vs les autres : les différences" },
      { type: 'paragraph', text: "Il existe aujourd'hui plusieurs IA conversationnelles. Elles se ressemblent beaucoup, mais ont quelques différences selon vos besoins et vos appareils." },
      { type: 'warning', title: "Attention", text: "Ne donnez jamais vos mots de passe ou données bancaires à une IA, même si elle vous le demande." },
      { type: 'quote', text: "L'IA est un outil formidable pour gagner du temps — à condition de vérifier ce qu'elle vous dit." }
    ]
  },
  {
    id: "arnaques-seniors-2026",
    title: "Les arnaques en ligne qui ciblent les seniors en 2026",
    summary: "Faux colis, faux impôts, faux Apple… comment les reconnaître et ne plus se faire avoir.",
    date: "8 juin 2026",
    readTime: "5 min",
    category: "Sécurité",
    badge: { text: "Débutant", type: "deb" },
    icon: ShieldCheck,
    colorClass: "bg-emerald-700", // Vert de sécurité standardisé
    toc: ["Introduction", "Le top des arnaques", "Les signes suspects", "Que faire ?"],
    tags: ["#Sécurité", "#Seniors", "#Arnaques"],
    contentBlocks: [
      { type: 'paragraph', text: "Les tentatives de fraude se perfectionnent en 2026. SMS alarmants, faux conseillers bancaires... Les techniques reposent toujours sur l'urgence." },
      { type: 'heading', text: "Comment repérer le piège en 3 secondes" },
      { type: 'paragraph', text: "Une administration officielle ou votre banque ne vous demandera jamais de cliquer sur un lien d'urgence pour annuler un virement ou payer une taxe douanière par SMS." },
      { type: 'warning', title: "Règle d'or", text: "Au moindre doute, raccrochez et rappelez vous-même le numéro officiel de votre organisme." }
    ]
  },
  {
    id: "iphone-vs-android-2026",
    title: "iPhone vs Android en 2026 : lequel vous convient vraiment ?",
    summary: "On compare les deux sans choisir de camp. Ce qui compte, c'est votre usage.",
    date: "2 juin 2026",
    readTime: "7 min",
    category: "Smartphones",
    badge: { text: "Grand public", type: "pub" },
    icon: Smartphone,
    colorClass: "bg-blue-800", // Variante sombre de votre bleu
    toc: ["Introduction", "La simplicité Apple", "La liberté Android", "Le verdict"],
    tags: ["#Smartphones", "#iPhone", "#Android"],
    contentBlocks: [
      { type: 'paragraph', text: "Le choix d'un smartphone est souvent une affaire d'habitude. Pourtant, les lignes bougent en 2026 avec l'intégration massive d'outils intelligents embarqués." },
      { type: 'heading', text: "Apple : Le choix de la tranquillité" },
      { type: 'paragraph', text: "Si vous cherchez un appareil qui fonctionne sans configuration complexe et qui garde sa valeur longtemps, l'écosystème Apple reste redoutable." }
    ]
  },
  {
    id: "pourquoi-wifi-ralentit",
    title: "Pourquoi votre Wi-Fi ralentit (et comment y remédier en 3 étapes)",
    summary: "Pas besoin de technicien. Un redémarrage bien fait suffit souvent à tout régler.",
    date: "25 mai 2026",
    readTime: "4 min",
    category: "Internet",
    badge: { text: "Débutant", type: "deb" },
    icon: Wifi,
    colorClass: "bg-cyan-600", // Cyan moderne de la marque
    toc: ["Introduction", "Les obstacles physiques", "La règle du redémarrage"],
    tags: ["#Internet", "#WiFi", "#AstuceTech"],
    contentBlocks: [
      { type: 'paragraph', text: "Une baisse de débit en plein film ou appel vidéo ? Avant de pester contre votre opérateur, quelques vérifications locales s'imposent." }
    ]
  },
  {
    id: "applications-contact-proches",
    title: "Les 8 applications gratuites pour rester en contact avec vos proches",
    summary: "WhatsApp, Messenger, FaceTime… laquelle choisir selon votre téléphone ?",
    date: "18 mai 2026",
    readTime: "5 min",
    category: "Conseils",
    badge: { text: "Débutant", type: "deb" },
    icon: Star,
    colorClass: "bg-orange-600", // Orange dynamique pour les conseils pratiques
    toc: ["Introduction", "Le trio indispensable", "Sécuriser ses échanges"],
    tags: ["#Applications", "#Famille", "#Social"],
    contentBlocks: [
      { type: 'paragraph', text: "Garder le lien avec les enfants ou petits-enfants n'a jamais été aussi simple, à condition d'avoir la même application qu'eux." }
    ]
  },
  {
    id: "astuces-smartphone-2026",
    title: "10 astuces pour mieux utiliser votre smartphone en 2026",
    summary: "Des gestes simples qui vous feront gagner du temps et de la batterie.",
    date: "10 mai 2026",
    readTime: "6 min",
    category: "Conseils",
    badge: { text: "Débutant", type: "deb" },
    icon: Star,
    colorClass: "bg-orange-600",
    toc: ["Introduction", "Astuce 1 : Gestes rapides", "Astuce 2 : Gestion de la batterie", "Astuce 3 : Sécurité et confidentialité"],
    tags: ["#Smartphone", "#Astuces", "#Conseils"],
    contentBlocks: [
      { type: 'paragraph', text: "Votre smartphone est un outil puissant, mais beaucoup de fonctionnalités restent méconnues. Voici 10 astuces pour en tirer le meilleur parti." }
    ]
  },
  {
    id: "securite-mots-de-passe-2026",
    title: "Sécurité : pourquoi vos mots de passe sont votre première ligne de défense",
    summary: "Et comment les gérer efficacement sans vous compliquer la vie.",
    date: "1 mai 2026",
    readTime: "5 min",
    category: "Sécurité",
    badge: { text: "Grand public", type: "pub" },
    icon: ShieldCheck,
    colorClass: "bg-emerald-700",
    component: PasswordModule, // Liaison correcte du composant interactif
    toc: ["Introduction", "Pourquoi les mots de passe sont cruciaux", "Gestion efficace des mots de passe", "Conclusion"],
    tags: ["#Sécurité", "#MotsDePasse", "#Protection"],
    contentBlocks: [
      { type: 'paragraph', text: "Les mots de passe sont votre première ligne de défense contre les cyberattaques. Voici comment les gérer efficacement." },
      { type: 'heading', text: "Comment construire un mot de passe sécurisé ?" },
      { type: 'paragraph', text: "Un bon mot de passe est long, aléatoire et unique. Évitez les phrases évidentes ou les informations personnelles." },
      { type: 'tip', title: "Bon à savoir", text: "Utilisez un gestionnaire de mots de passe pour générer et stocker des mots de passe complexes." },
      { type: 'heading', text: "Pourquoi ne pas utiliser le même mot de passe partout ?" },
      { type: 'paragraph', text: "Si un seul de vos comptes est piraté, tous les autres le sont aussi. Utilisez des mots de passe uniques pour chaque compte." },
      { type: 'warning', title: "Attention", text: "Ne donnez jamais vos mots de passe ou données bancaires à une personne, même si elle prétend être une personne de confiance, en physique, mais aussi en ligne." },
      { type: 'quote', text: "La sécurité commence par de simples gestes quotidiens." }
    ]
  }
];