type Props = {
  categorie: string
  setCategorie: (v: string) => void

  niveau: string
  setNiveau: (v: string) => void

  animateur: string
  setAnimateur: (v: string) => void
}

export default function FicheFilters({
  categorie,
  setCategorie,

  niveau,
  setNiveau,

  animateur,
  setAnimateur,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">

      <select
        value={categorie}
        onChange={(e) =>
          setCategorie(e.target.value)
        }
        className="border rounded-xl p-3"
      >
        <option value="all">
          Toutes catégories
        </option>

        <option value="bureautique">
          Bureautique
        </option>

        <option value="securite">
          Sécurité
        </option>

        <option value="demandes">
          Démarches
        </option>

        <option value="outils">
          Outils
        </option>
      </select>

      <select
        value={niveau}
        onChange={(e) =>
          setNiveau(e.target.value)
        }
        className="border rounded-xl p-3"
      >
        <option value="all">
          Tous niveaux
        </option>

        <option value="debutant">
          Débutant
        </option>

        <option value="intermediaire">
          Intermédiaire
        </option>

        <option value="avance">
          Avancé
        </option>
      </select>

      <select
        value={animateur}
        onChange={(e) =>
          setAnimateur(e.target.value)
        }
        className="border rounded-xl p-3"
      >
        <option value="all">
          Tous animateurs
        </option>

        <option value="andy">
          Andy
        </option>

        <option value="emilie">
          Émilie
        </option>
      </select>

    </div>
  )
}