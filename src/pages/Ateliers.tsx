import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import { TFH } from "../themes/tfh-themes";

export default function Ateliers() {
  const ateliers2026 = [
    {
      title: "Premiers pas sur Internet sans crainte",
      date: "14 Mai 2026",
      type: "En Présentiel",
      location: "Centre Social Jeannine Dhersin - Salle Cyber",
      participants: "8 participants",
      status: "Terminé",
      description: "Un atelier pratique pour apprendre à faire des recherches, identifier les sites sécurisés et naviguer l'esprit tranquille.",
      topics: ["Utiliser Google", "Repérer le cadenas🔒", "Mettre en favoris"],
    },
    {
      title: "Garder le contact : Messenger, WhatsApp et Emails",
      date: "02 Juin 2026",
      type: "En Présentiel",
      location: "Centre Social Jeannine Dhersin - Salle Cyber",
      participants: "8 participants",
      status: "Terminé",
      description: "Envoyer des photos, passer des appels vidéo avec ses petits-enfants et répondre à un e-mail avec une pièce jointe.",
      topics: ["Appels vidéo gratuits", "Partager une photo", "Bloquer les spams"],
    },
    {
      title: "Atelier Spécial : Mes Démarches Administratives",
      date: "28 Juin 2026",
      type: "En Présentiel",
      location: "Centre Social Jeannine Dhersin - Salle Cyber",
      participants: "8 places restantes",
      status: "À venir",
      description: "Une session pas à pas pour se connecter à FranceConnect, déclarer en ligne et gérer ses espaces santé en toute confiance.",
      topics: ["FranceConnect", "Sécuriser ses accès", "Télécharger une attestation"],
    },
  ];

  return (
    <div style={TFH.styles.container}>
      {/* EN-TÊTE */}
      <header style={TFH.styles.sectionHeader}>
        <div style={TFH.styles.headerIcon}>
          <Calendar size={24} color={TFH.c.blue} />
        </div>
        <div>
          <h1 style={TFH.styles.sectionTitle}>Nos Ateliers Numériques (2026)</h1>
          <p style={TFH.styles.sectionSubtitle}>
            Retrouvez les ateliers collectifs et conviviaux organisés cette année. Venez apprendre ensemble,
            poser vos questions à votre rythme et échanger sans complexe.
          </p>
        </div>
      </header>

      {/* RÉSUMÉ D'IMPACT */}
      <section
        style={{
          background: TFH.c.gradientBlue,
          color: TFH.c.white,
          padding: TFH.spacing.md,
          borderRadius: TFH.radius.lg,
          marginBottom: TFH.spacing.xl,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          boxShadow: TFH.shadow.sm,
        }}
      >
        <div>
          <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: TFH.spacing.xs }}>
            Besoin d'une assistance personnalisée ?
          </h2>
          <p style={{ opacity: 0.9, fontSize: "13px" }}>
            Tous nos ateliers incluent un livret papier récapitulatif distribué gratuitement à la fin.
          </p>
        </div>
        <span
          style={{
            background: `${TFH.c.white}20`,
            color: TFH.c.white,
            padding: `${TFH.spacing.xs} ${TFH.spacing.md}`,
            borderRadius: TFH.radius.md,
            fontSize: "11px",
            fontWeight: 700,
            marginTop: TFH.spacing.sm,
            border: `1px solid ${TFH.c.white}30`,
          }}
        >
          ✨ Déjà +40 seniors formés cette année !
        </span>
      </section>

      {/* GRILLE DES ATELIERS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: TFH.spacing.md }}>
        {ateliers2026.map((atelier, index) => (
          <div key={index} style={{ ...TFH.styles.card, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {/* HAUT DE LA CARTE */}
            <div style={{ padding: TFH.spacing.md, display: "flex", flexDirection: "column", gap: TFH.spacing.md, flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    ...TFH.styles.badge,
                    background: atelier.status === "Terminé" ? `${TFH.c.cyan}10` : `${TFH.c.blue}10`,
                    border: `1px solid ${atelier.status === "Terminé" ? TFH.c.cyan + "30" : TFH.c.blue + "30"}`,
                    color: atelier.status === "Terminé" ? TFH.c.cyan : TFH.c.blue,
                  }}
                >
                  • {atelier.status}
                </span>
                <span style={{ fontSize: "11px", color: TFH.c.t3, display: "flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={14} /> {atelier.date}
                </span>
              </div>

              <div>
                <h3 style={{ ...TFH.styles.sectionTitle, fontSize: "16px", marginBottom: TFH.spacing.xs }}>
                  {atelier.title}
                </h3>
                <p style={{ color: TFH.c.t3, fontSize: "13px", lineHeight: 1.6 }}>{atelier.description}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: TFH.spacing.sm, fontSize: "11px", color: TFH.c.t3 }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin size={13} /> {atelier.location}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Users size={13} /> {atelier.participants}
                </span>
              </div>

              {/* COMPÉTENCES CLÉS */}
              <div style={{ background: TFH.c.surface, padding: TFH.spacing.md, borderRadius: TFH.radius.md }}>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: TFH.c.t3,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: TFH.spacing.sm,
                  }}
                >
                  Compétences clés :
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: TFH.spacing.xs }}>
                  {atelier.topics.map((topic, i) => (
                    <span key={i} style={{ ...TFH.styles.tag, background: TFH.c.white, color: TFH.c.t2 }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BAS DE LA CARTE */}
            <div
              style={{
                padding: `${TFH.spacing.md} ${TFH.spacing.lg}`,
                background: TFH.c.surface,
                borderTop: `1px solid ${TFH.c.borderL}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "11px", color: TFH.c.t3 }}>Format : {atelier.type}</span>
              <button
                style={{
                  ...TFH.styles.btn,
                  ...TFH.styles.btnSecondary,
                  background: "transparent",
                  border: `1px solid ${TFH.c.blue}`,
                }}
              >
                {atelier.status === "Terminé" ? "Voir le compte-rendu" : "Réserver ma place"}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}