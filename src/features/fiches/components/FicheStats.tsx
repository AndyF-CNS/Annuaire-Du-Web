type Props = {
  total: number
  visible: number
}

export default function FicheStats({
  total,
  visible,
}: Props) {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      gap-4
      mb-6
      "
    >

      <div
        className="
        bg-white
        rounded-2xl
        p-5
        border
        text-center
        "
      >
        <div className="text-3xl font-bold">
          {total}
        </div>

        <div>
          Fiches disponibles
        </div>
      </div>

      <div
        className="
        bg-white
        rounded-2xl
        p-5
        border
        text-center
        "
      >
        <div className="text-3xl font-bold">
          {visible}
        </div>

        <div>
          Résultats affichés
        </div>
      </div>

    </div>
  )
}