import { useMemo, useState } from "react"
import { fichesData } from "../data/fiches"

export function useFiches() {
  const [search, setSearch] =
    useState("")

  const [categorie, setCategorie] =
    useState("all")

  const [niveau, setNiveau] =
    useState("all")

  const [animateur, setAnimateur] =
    useState("all")

  const [sort, setSort] =
    useState("default")

  const fiches = useMemo(() => {
    let result = [...fichesData]

    if (categorie !== "all") {
      result = result.filter(
        (f) => f.categorie === categorie
      )
    }

    if (niveau !== "all") {
      result = result.filter(
        (f) => f.niveau === niveau
      )
    }

    if (animateur !== "all") {
      result = result.filter(
        (f) => f.animateur === animateur
      )
    }

    if (search) {
      const q = search.toLowerCase()

      result = result.filter(
        (f) =>
          f.titre
            .toLowerCase()
            .includes(q) ||
          f.description
            .toLowerCase()
            .includes(q)
      )
    }

    switch (sort) {
      case "title":
        result.sort((a, b) =>
          a.titre.localeCompare(b.titre)
        )
        break

      case "duree":
        result.sort(
          (a, b) => a.duree - b.duree
        )
        break

      case "niveau":
        const order = {
          debutant: 1,
          intermediaire: 2,
          avance: 3,
        }

        result.sort(
          (a, b) =>
            order[a.niveau] -
            order[b.niveau]
        )
        break
    }

    return result
  }, [
    search,
    categorie,
    niveau,
    animateur,
    sort,
  ])

  const resetFilters = () => {
    setSearch("")
    setCategorie("all")
    setNiveau("all")
    setAnimateur("all")
    setSort("default")
  }

  return {
    fiches,
    search,
    setSearch,
    categorie,
    setCategorie,
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