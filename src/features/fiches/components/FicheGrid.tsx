import type { Fiche } from "../../../types/fiche"
import FicheCard from "./FicheCard"

type Props = {
  fiches: Fiche[]
}

export default function FicheGrid({
  fiches,
}: Props) {
  return (
    <div
      className="
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-3
      "
    >
      {fiches.map((fiche) => (
        <FicheCard
          key={fiche.id}
          fiche={fiche}
        />
      ))}
    </div>
  )
}