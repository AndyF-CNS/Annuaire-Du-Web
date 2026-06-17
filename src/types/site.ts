import type { LucideIcon } from "lucide-react"

export type Category =
  | "administration"
  | "sante"
  | "communication"
  | "creation"
  | "formation"
  | "ia"
  | "actualites"
  | "shopping"
  | "outils"
  | "loisirs"

export interface Site {
  id: number
  name: string
  description: string
  url: string
  icon?: LucideIcon
  image?: string
  category: Category
  featured?: boolean
  tags?: string[]
  article?: string
  tutorial?: string
}