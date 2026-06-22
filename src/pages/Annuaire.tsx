import { useState } from "react";
import SearchBar from "../features/annuaire/components/SearchBar";
import CategoryFilter from "../features/annuaire/components/CategoryFilter";
import SiteGrid from "../features/annuaire/components/SiteGrid";
import { useSites } from "../hooks/useSites";
import { Globe } from "lucide-react";
import { TFH } from "../theme/tfh-themes";

export default function Annuaire() {
  const { search, setSearch, category, setCategory, filteredSites } = useSites();

  return (
    <div style={TFH.styles.container}>
      {/* EN-TÊTE */}
      <header style={TFH.styles.sectionHeader}>
        <div style={TFH.styles.headerIcon}>
          <Globe size={24} color={TFH.c.blue} />
        </div>
        <div>
          <h1 style={TFH.styles.sectionTitle}>Annuaire du Web</h1>
          <p style={TFH.styles.sectionSubtitle}>
            Découvrez une sélection de sites et services numériques incontournables,
            classés par catégorie pour simplifier vos démarches et loisirs au quotidien.
          </p>
        </div>
      </header>

      {/* ZONE D'OUTILS (Recherche + Filtres) */}
      <section
        style={{
          padding: TFH.spacing.md,
          background: TFH.c.white,
          borderRadius: TFH.radius.lg,
          border: `1px solid ${TFH.c.border}`,
          boxShadow: TFH.shadow.sm,
          marginBottom: TFH.spacing.xl,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: TFH.spacing.md,
          }}
        >
          <h2 style={{ fontSize: "14px", fontWeight: 700, color: TFH.c.t1 }}>Filtrer les ressources</h2>
          <span style={{ ...TFH.styles.badge, background: TFH.c.surface, color: TFH.c.t3 }}>
            {filteredSites.length} ressources trouvées
          </span>
        </div>
        <div style={{ display: "grid", gap: TFH.spacing.md }}>
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter value={category} onChange={setCategory} />
        </div>
      </section>

      {/* GRILLE DE SITES */}
      <SiteGrid sites={filteredSites} />
    </div>
  );
}