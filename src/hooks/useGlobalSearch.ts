import { useMemo, useState } from "react"
import { resources } from "../data/resources"

export function useGlobalSearch() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    if (!query) return []

    return resources.filter((resource) =>
      [
        resource.title,
        resource.description,
        resource.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    )
  }, [query])

  return {
    query,
    setQuery,
    results,
  }
}