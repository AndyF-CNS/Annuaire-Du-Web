import { useFiches } from "../../../hooks/useFiches"

import FicheGrid from "./FicheGrid"
import FicheSearch from "./FicheSearch"
import FicheFilters from "./FicheFilters"
import FicheSort from "./FicheSort"
import FicheStats from "./FicheStats"

export default function ClassificationSection() {

  const {
    fiches,

    search,
    setSearch,

    categorie,
    setCategorie,

    niveau,
    setNiveau,

    animateur,
    setAnimateur,

    sort,
    setSort,

    totalFiches,
    visibleFiches,

    resetFilters,
  } = useFiches()

  return (
    <section
      className="
      max-w-7xl
      mx-auto
      p-6
      mt-10
      "
    >

      <h2
        className="
        text-4xl
        font-bold
        mb-4
        "
      >
        📚 Fiches ateliers
      </h2>

      <p className="mb-8 text-slate-600">
        Retrouvez toutes les fiches
        pédagogiques numériques.
      </p>

      <FicheStats
        total={totalFiches}
        visible={visibleFiches}
      />

      <FicheSearch
        value={search}
        onChange={setSearch}
      />

      <FicheFilters
        categorie={categorie}
        setCategorie={setCategorie}

        niveau={niveau}
        setNiveau={setNiveau}

        animateur={animateur}
        setAnimateur={setAnimateur}
      />

      <FicheSort
        sort={sort}
        setSort={setSort}
      />

      <button
        onClick={resetFilters}
        className="
        mb-6
        px-4
        py-2
        bg-red-500
        text-white
        rounded-xl
        "
      >
        Réinitialiser les filtres
      </button>

      {fiches.length > 0 ? (
        <FicheGrid fiches={fiches} />
      ) : (
        <div
          className="
          text-center
          py-20
          bg-white
          rounded-2xl
          border
          "
        >
          <div className="text-6xl mb-4">
            🔍
          </div>

          <h3 className="text-2xl font-bold">
            Aucun résultat
          </h3>

          <p className="text-slate-500 mt-2">
            Essayez de modifier vos filtres
          </p>
        </div>
      )}

    </section>
  )
}