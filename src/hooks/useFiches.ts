import { useMemo, useState } from "react"
import { fichesData } from "../data/fiches"

// 1. Déclaration des types en haut du fichier pour éviter les problèmes de portée
export type Niveau = "debutant" | "intermediaire" | "avance"
export type Animateur = "Andy" | "Emilie"

export interface Fiche {
  id?: string
  title: string
  pages: string
  description: string
  category: string
  niveau?: Niveau
  difficulty: string
  animateur?: Animateur
  duree?: number
  icon?: string
  lien: string
  color: string
}

// 2. Le Hook personnalisé
export function useFiches() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [niveau, setNiveau] = useState("all")
  const [animateur, setAnimateur] = useState("all")
  const [sort, setSort] = useState("default")

  const fiches = useMemo(() => {
    // Note : Assurez-vous que fichesData est bien typé comme Fiche[] dans son propre fichier
    let result = [...fichesData] as Fiche[]

    // --- FILTRES ---
    if (category !== "all") {
      result = result.filter((f) => f.category === category)
    }

    if (niveau !== "all") {
      result = result.filter((f) => f.niveau === niveau)
    }

    if (animateur !== "all") {
      result = result.filter((f) => f.animateur === animateur)
    }

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q)
      )
    }

    // --- TRI ---
    switch (sort) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break

      case "duree":
        result.sort((a, b) => (a.duree ?? 0) - (b.duree ?? 0))
        break

      case "niveau":
        const order: Record<Niveau, number> = {
          debutant: 1,
          intermediaire: 2,
          avance: 3,
        }

        result.sort((a, b) => {
          const scoreA = a.niveau ? order[a.niveau] : 0
          const scoreB = b.niveau ? order[b.niveau] : 0
          return scoreA - scoreB
        })
        break
    }

    return result
  }, [search, category, niveau, animateur, sort])

  const resetFilters = () => {
    setSearch("")
    setCategory("all")
    setNiveau("all")
    setAnimateur("all")
    setSort("default")
  }

  return {
    fiches,
    search,
    setSearch,
    category,
    setCategory,
    niveau,
    setNiveau,
    animateur,
    setAnimateur,
    sort,
    setSort,
    resetFilters,
    totalFiches: fichesData.length,
    visibleFiches: fiches.length,
  }
}