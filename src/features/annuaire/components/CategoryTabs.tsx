import type { Category } from "../../../types/site"

const categories: (Category | "tous")[] = [
  "tous",
  "administration",
  "sante",
  "communication",
  "creation",
  "formation",
  "ia",
  "actualites",
  "shopping",
  "outils",
  "loisirs",
]

type Props = {
  value:
    Category | "tous"

  onChange: (
    value:
      Category | "tous"
  ) => void
}

export default function CategoryTabs({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2 flex-wrap mb-8">

      {categories.map((Category) => (
        <button
          key={Category}
          onClick={() => onChange(Category)}
          className={`
            px-4 py-2 rounded-xl font-medium
            transition

            ${
              value === Category
                ? "bg-blue-400 text-white"
                : "bg-white border"
            }
          `}
        >
          {Category}
        </button>
      ))}

    </div>
  )
}