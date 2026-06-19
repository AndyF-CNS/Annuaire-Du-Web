import { useMemo, useState } from "react"
import { resources } from "../data/resources"

export function useGlobalSearch() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    if (!query) return []

    return resources.filter((resource) => {
      // 🛡️ On vérifie de manière sûre si 'description' existe sur cet objet précis
      const descriptionText = "description" in resource ? resource.description : ""

      // 💡 Optionnel : Si tes articles ont un champ 'content' ou 'summary', 
      // tu peux l'ajouter ici pour que la recherche globale fonctionne aussi dessus !
      const articleText = "content" in resource ? (resource as any).content : ""

      return [
        resource.title,
        descriptionText,
        articleText,
        resource.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    })
  }, [query])

  return {
    query,
    setQuery,
    results,
  }
}