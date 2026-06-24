import type { Fiche } from "../../../types/fiche"

type Props = {
  fiche: Fiche
}

export default function FicheCard({
  fiche,
}: Props) {
  return (
    <article
      className="
      bg-white
      border
      rounded-2xl
      p-6
      hover:shadow-xl
      transition
    "
    >
      <div className="flex justify-between">

        <div className="text-5xl">
          {fiche.icon}
        </div>

        <span
          className="
          bg-slate-100
          rounded-full
          px-3 py-1
          text-sm
        "
        >
          {fiche.category}
        </span>

      </div>

      <h3 className="font-bold text-xl mt-4">
        {fiche.title}
      </h3>

      <p className="text-slate-600 mt-3">
        {fiche.description}
      </p>

      <div className="flex gap-2 mt-4">

        <span
          className="
          bg-green-100
          text-green-700
          px-3 py-1
          rounded-full
          text-sm
        "
        >
          {fiche.niveau}
        </span>

        <span
          className="
          bg-blue-100
          text-blue-700
          px-3 py-1
          rounded-full
          text-sm
        "
        >
          {fiche.duree} min
        </span>

      </div>

      <a
        href={fiche.lien}
        target="_blank"
        className="
        inline-block
        mt-6
        bg-violet-600
        text-white
        px-4 py-2
        rounded-xl
      "
      >
        Consulter
      </a>
    </article>
  )
}