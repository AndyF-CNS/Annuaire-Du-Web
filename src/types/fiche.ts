export type Niveau =
  | "debutant"
  | "intermediaire"
  | "avance"

export type Animateur =
  | "Andy"
  | "Emilie"

export interface Fiche {
  id?: string
  title: string
  pages:string
  description: string
  category: string
  niveau?: Niveau
  difficulty:string
  animateur?: Animateur
  duree?: number
  icon?: string
  lien: string
  color:string
}