// tfh-theme.ts
export const TFH = {
  // === COULEURS ===
  c: {
    // Bleu (Primaire)
    blue: "#1A4FD6", blueL: "#3D6FE8", blueXL: "#6B94F5", blueD: "#0F35A8", blueXD: "#08152B",
    // Cyan (Accent)
    cyan: "#00B4C8", cyanL: "#33C8D8", cyanD: "#0090A0",
    // Orange (CTA)
    orange: "#FF6B35", orangeL: "#FF8F62",
    // Surface
    surface: "#F1F6FD", surfaceAlt: "#E2EBF8",
    // Bordures
    border: "#CDD9F5", borderL: "#E8EEFB",
    // Textes
    t1: "#0B1629", t2: "#2D3F5E", t3: "#5E718A", t4: "#8FA3BB", t5: "#C4D0DF",
    white: "#FFFFFF",
    black: "#000000",
    // degradés
    gradientBlue: "linear-gradient(135deg, rgb(8, 21, 43), rgb(26, 79, 214))",
    gradientCyan: "linear-gradient(135deg, rgb(26, 79, 214), rgb(0, 180, 200))",
  },

  // === TYPOGRAPHIE ===
  font: {
    title: "'Plus Jakarta Sans', 'Inter', sans-serif", // Pour les titres
    body: "'Inter', -apple-system, sans-serif",       // Pour le corps
  },

  // === OMBRES ===
  shadow: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.03)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05)",
    md: "0 4px 12px rgba(0, 0, 0, 0.08)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.1)",
    xl: "0 16px 48px rgba(0, 0, 0, 0.12)",
  },

  // === BORDURES ===
  radius: {
    xs: "4px", sm: "6px", md: "10px", lg: "14px", xl: "18px", full: "9999px",
  },

  // === ESPACEMENTS ===
  spacing: {
    xs: "4px", sm: "8px", md: "12px", lg: "16px", xl: "20px", "2xl": "24px", "3xl": "32px", "4xl": "48px", "5xl": "64px", "6xl": "80px",
  },

  // === STYLES RÉUTILISABLES ===
  styles: {
    // Conteneur principal
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "24px 16px",
      fontFamily: "'Inter', sans-serif",
      background: "#F1F6FD",
    },

    // Cartes
    card: {
      background: "#FFFFFF",
      border: "1px solid #CDD9F5",
      borderRadius: "14px",
      overflow: "hidden",
      transition: "all 0.2s ease",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    },

    // Boutons
    btn: {
      padding: "8px 16px",
      borderRadius: "10px",
      fontSize: "12px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.2s ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
    },
    btnPrimary: {
      background: "#1A4FD6",
      color: "#FFFFFF",
      border: "1px solid #1A4FD6",
      boxShadow: "0 2px 4px rgba(26, 79, 214, 0.15)",
    },
    btnSecondary: {
      background: "#FFFFFF",
      color: "#1A4FD6",
      border: "1px solid #1A4FD6",
    },
    btnCta: {
      background: "#FF6B35",
      color: "#FFFFFF",
      border: "1px solid #FF6B35",
      boxShadow: "0 2px 4px rgba(255, 107, 53, 0.15)",
    },
    btnGhost: {
      background: "transparent",
      color: "#1A4FD6",
      border: "1px solid transparent",
    },

    // Badges
    badge: {
      padding: "2px 8px",
      borderRadius: "9999px",
      fontSize: "10px",
      fontWeight: 600,
      textTransform: "uppercase" as const,
      letterSpacing: "0.05em",
    },

    // Tags
    tag: {
      padding: "4px 10px",
      borderRadius: "9999px",
      fontSize: "11px",
      fontWeight: 500,
      border: "1px solid #CDD9F5",
      background: "#F1F6FD",
      color: "#5E718A",
    },

    // En-tête de section
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      paddingBottom: "20px",
      borderBottom: "1px solid #CDD9F5",
      marginBottom: "24px",
    },

    // Icône dans l'en-tête
    headerIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "10px",
      background: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #CDD9F5",
      flexShrink: 0,
    },

    // Titre de section
    sectionTitle: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontSize: "24px",
      fontWeight: 800,
      color: "#0B1629",
      margin: 0,
    },

    // Sous-titre de section
    sectionSubtitle: {
      color: "#5E718A",
      fontSize: "14px",
      marginTop: "4px",
      maxWidth: "600px",
      lineHeight: 1.6,
    },
  },
};