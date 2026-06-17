export type Niveau =
  | "debutant"
  | "intermediaire"
  | "avance"

export type Animateur =
  | "andy"
  | "emilie"

export interface Fiche {
  id: number
  titre: string
  description: string
  categorie: string
  niveau: Niveau
  animateur: Animateur
  duree: number
  icon: string
  lien: string
}