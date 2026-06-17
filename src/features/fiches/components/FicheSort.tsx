type Props = {
  sort: string
  setSort: (value: string) => void
}

export default function FicheSort({
  sort,
  setSort,
}: Props) {
  return (
    <div className="mb-6">

      <select
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
        className="
        border
        rounded-xl
        p-3
        "
      >
        <option value="default">
          Tri par défaut
        </option>

        <option value="title">
          Ordre alphabétique
        </option>

        <option value="niveau">
          Niveau
        </option>

        <option value="duree">
          Durée
        </option>

      </select>

    </div>
  )
}