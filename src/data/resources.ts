import { sitesData } from "./siteData"
import { fichesData } from "./fiches"
import { aiTools } from "./aiTools"
import { blogArticles } from "./blogData"

export const resources = [
  ...sitesData.map((site) => ({
    id: site.id,
    type: "site",
    title: site.name,
    description: site.description,
    category: site.category,
    url: site.url,
    image: site.image,
  })),

  ...fichesData.map((fiche) => ({
    id: fiche.id,
    type: "fiche",
    title: fiche.titre,
    description: fiche.description,
    category: fiche.categorie,
  })),

  ...aiTools.map((tool) => ({
    id: tool.id,
    type: "ia",
    title: tool.title,
    description: tool.description,
    category: tool.category,
    url: tool.website,
  })),

  ...blogArticles
  
]