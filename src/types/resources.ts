export type ResourceType =
  | "site"
  | "fiche"
  | "ia"
  | "article"

export interface Resource {
  id: number
  type: ResourceType
  title: string
  description: string
  category: string
  url?: string
  article?: string
  image?: string
  featured?: boolean
  tags?: string[]
}