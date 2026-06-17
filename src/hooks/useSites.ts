import { useMemo, useState } from "react"

import { sitesData } from "../data/siteData"
import type {Category,} from "../types/site"

export function useSites() {
  const [search, setSearch] =
    useState("")

  const [category, setCategory] =
    useState<
      Category | "tous"
    >("tous")

  const filteredSites =
    useMemo(() => {

      let result = sitesData

      if (category !== "tous") {
        result = result.filter(
          (site) =>
            site.category === category
        )
      }

      if (search.trim()) {

        const term =
          search.toLowerCase()

        result = result.filter(
          (site) =>
            site.name
              .toLowerCase()
              .includes(term) ||
            site.description
              .toLowerCase()
              .includes(term)
        )
      }

      return result

    }, [search, category])

  return {
 sites: sitesData,

 search,
 setSearch,

 category,
 setCategory,

 filteredSites,
}
}