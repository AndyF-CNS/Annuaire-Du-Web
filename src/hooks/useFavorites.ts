import { useEffect, useState } from "react"

export function useFavorites() {
  const [favorites, setFavorites] =
    useState<number[]>([])

  useEffect(() => {
    const saved =
      localStorage.getItem("favorites")

    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  const toggleFavorite = (
    id: number
  ) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    )
  }

  return {
    favorites,
    toggleFavorite,
  }
}