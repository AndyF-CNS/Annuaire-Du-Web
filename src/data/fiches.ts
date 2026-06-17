import type { Fiche } from "../types/fiche"

export const fichesData: Fiche[] = [
  {
    id: 1,
    titre: "Créer une adresse Gmail",
    description: "Apprendre à créer une adresse mail",
    categorie: "Communication",
    niveau: "debutant",
    animateur: "andy",
    duree: 30,
    icon: "📧",
    lien: "/pdf/gmail.pdf",
  },

  {
    id: 2,
    titre: "Découvrir ChatGPT",
    description: "Premiers pas avec l'IA",
    categorie: "IA",
    niveau: "debutant",
    animateur: "andy",
    duree: 45,
    icon: "🤖",
    lien: "/pdf/chatgpt.pdf",
  },
]