export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  interactivityType: 'quiz' | 'generateur-mot-de-passe' | 'simulateur-ia';
  content: string;
}

export const blogArticles: Article[] = [
  {
    id: "comprendre-les-mots-de-passe",
    title: "Pourquoi votre mot de passe à 8 caractères est une passoire 🛑",
    summary: "Découvrez comment les hackers piratent vos comptes en quelques secondes et testez la force de vos mots de passe en temps réel.",
    date: "18 Juin 2026",
    readTime: "4 min",
    category: "Sécurité",
    interactivityType: "generateur-mot-de-passe",
    content: "La plupart des utilisateurs choisissent des mots de passe simples pour s'en souvenir facilement. Cependant, avec la puissance de calcul actuelle, un mot de passe de 8 caractères contenant uniquement des lettres minuscules est craqué instantanément. Utilisez notre générateur ci-dessous pour adopter la méthode des phrases secrètes !"
  },
  {
    id: "initiation-ia-invite",
    title: "L'art du Prompt : Parler à l'IA comme un chef 🤖",
    summary: "Marre d'obtenir des réponses vagues de ChatGPT ou Vibe ? Devenez un pro du prompt grâce à notre mini-quiz interactif.",
    date: "15 Juin 2026",
    readTime: "5 min",
    category: "IA",
    interactivityType: "quiz",
    content: "Pour obtenir un bon résultat d'une IA, il ne faut pas lui poser une question comme à Google, il faut lui donner un rôle, un contexte, et un objectif clair. Testez vos compétences avec le cas pratique interactif ci-dessous."
  }
];