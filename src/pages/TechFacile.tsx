import { ExternalLink, GraduationCap, Monitor, Smartphone, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { TFH } from "../theme/tfh-themes";

export default function TechFacile() {
  const learningScreens = [
    {
      title: "Prendre en main l'Ordinateur",
      description: "Apprenez à utiliser la souris, le clavier, créer des dossiers et organiser vos documents pas à pas, sans stress.",
      icon: Monitor,
      color: { bg: `${TFH.c.blue}10`, text: TFH.c.blue, border: `${TFH.c.blue}30` },
      badge: "Idéal pour débuter",
      steps: ["Allumer & s'installer", "Manipuler la souris", "Classer ses fichiers"]
    },
    {
      title: "Maîtriser son Smartphone",
      description: "Envoyez des messages à vos proches, prenez de belles photos, installez des applications utiles et gérez vos contacts facilement.",
      icon: Smartphone,
      color: { bg: `${TFH.c.cyan}10`, text: TFH.c.cyan, border: `${TFH.c.cyan}30` },
      badge: "Indispensable",
      steps: ["SMS et appels vidéos", "Installer une application", "Régler la taille des textes"]
    },
    {
      title: "Naviguer sur Internet en Sécurité",
      description: "Repérez les pièges, faites vos démarches administratives ou vos achats en ligne en toute sérénité grâce à des conseils simples.",
      icon: ShieldCheck,
      color: { bg: `${TFH.c.cyan}10`, text: TFH.c.cyan, border: `${TFH.c.cyan}30` },
      badge: "Sécurité maximale",
      steps: ["Reconnaître les faux sites", "Créer un mot de passe fort", "Faire ses démarches"]
    }
  ];

  return (
    <div style={{ ...TFH.styles.container, fontFamily: TFH.font.body, background: TFH.c.surface }}>
      {/* 📌 EN-TÊTE */}
      <header style={TFH.styles.sectionHeader}>
        <div style={TFH.styles.headerIcon}>
          <GraduationCap size={24} color={TFH.c.blue} />
        </div>
        <div>
          <h1 style={TFH.styles.sectionTitle}>Espace Apprentissage — Tech Facile</h1>
          <p style={TFH.styles.sectionSubtitle}>
            Votre portail tranquille pour apprivoiser le numérique. Tout est pensé pour vous : des textes écrits en grand,
            des images claires et des explications simples.
          </p>
        </div>
      </header>

      {/* 🎯 BANDEAU CTA */}
      <section
        style={{
          background: TFH.c.gradientBlue,
          color: TFH.c.white,
          padding: "24px 32px",
          borderRadius: TFH.radius.lg,
          marginBottom: "24px",
          border: `1px solid ${TFH.c.blueD}`,
          boxShadow: TFH.shadow.md,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              display: "inline-flex",
              background: `${TFH.c.white}20`,
              color: TFH.c.white,
              padding: "4px 12px",
              borderRadius: TFH.radius.full,
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "8px",
            }}
          >
            Accès Gratuit & Sans Inscription
          </span>
          <h2
            style={{
              fontFamily: TFH.font.title,
              fontSize: "20px",
              fontWeight: 800,
              marginBottom: "8px",
            }}
          >
            Prêt à commencer un cours interactif ?
          </h2>
          <p style={{ opacity: 0.9, fontSize: "14px", lineHeight: 1.6, maxWidth: "600px" }}>
            Cliquez sur le bouton ci-contre pour ouvrir notre plateforme complète. Des centaines
            d'exercices guidés illustrés pas à pas vous attendent pour devenir autonome en quelques minutes par jour !
          </p>
        </div>
        <a
          href="https://techfacile.netlify.app/"
          target="_blank"
          rel="noreferrer"
          style={{
            ...TFH.styles.btn,
            background: TFH.c.white,
            color: TFH.c.blue,
            fontWeight: 700,
            padding: "12px 24px",
            fontSize: "14px",
            boxShadow: TFH.shadow.md,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Ouvrir Tech Facile
          <ExternalLink size={18} />
        </a>
      </section>

      {/* 📚 APERÇU DES ÉCRANS */}
      <section style={{ marginBottom: "24px" }}>
        <div style={{ marginBottom: "16px" }}>
          <h2
            style={{
              fontFamily: TFH.font.title,
              fontSize: "18px",
              fontWeight: 800,
              color: TFH.c.t1,
              marginBottom: "4px",
            }}
          >
            Ce que vous allez apprendre sur notre plateforme :
          </h2>
          <p style={{ color: TFH.c.t3, fontSize: "13px" }}>
            Découvrez un aperçu des parcours simples mis à votre disposition.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {learningScreens.map((screen) => {
            const IconComponent = screen.icon;
            return (
              <div
                key={screen.title}
                style={{ ...TFH.styles.card, display: "flex", flexDirection: "column" }}
              >
                {/* 🖥️ BARRE DE NAVIGATEUR */}
                <div
                  style={{
                    background: TFH.c.surface,
                    padding: "12px 16px",
                    borderBottom: `1px solid ${TFH.c.border}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: TFH.c.t5 }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: TFH.c.t5 }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: TFH.c.t5 }} />
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      color: TFH.c.t3,
                      background: TFH.c.surface,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontFamily: "monospace",
                    }}
                  >
                    tutoriel_interactif.html
                  </span>
                </div>

                {/* 📝 CONTENU */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: TFH.radius.md,
                          background: screen.color.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `1px solid ${screen.color.border}`,
                        }}
                      >
                        <IconComponent size={22} color={screen.color.text} />
                      </div>
                      <span
                        style={{
                          ...TFH.styles.badge,
                          background: TFH.c.surface,
                          color: TFH.c.t3,
                        }}
                      >
                        {screen.badge}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: TFH.font.title,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: TFH.c.t1,
                        marginBottom: "6px",
                      }}
                    >
                      {screen.title}
                    </h3>
                    <p style={{ color: TFH.c.t3, fontSize: "13px", lineHeight: 1.6 }}>
                      {screen.description}
                    </p>
                  </div>

                  {/* ✅ ÉTAPES */}
                  <div
                    style={{
                      paddingTop: "12px",
                      borderTop: `1px solid ${TFH.c.borderL}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: TFH.c.t3,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "8px",
                      }}
                    >
                      Au programme :
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {screen.steps.map((step, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "12px",
                            color: TFH.c.t2,
                            marginBottom: "6px",
                          }}
                        >
                          <CheckCircle2 size={14} color={TFH.c.cyan} />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 🔗 BOUTON */}
                <a
                  href="https://techfacile.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "12px 16px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: TFH.c.blue,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: TFH.radius.md,
                  }}
                >
                  Lancer ce module
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* 💡 PIED DE PAGE */}
      <footer
        style={{
          background: TFH.c.surface,
          border: `1px solid ${TFH.c.border}`,
          borderRadius: TFH.radius.lg,
          padding: "16px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "12px", color: TFH.c.t3, lineHeight: 1.6 }}>
          💡 Vous avez peur de faire une erreur ? Pas d'inquiétude ! Nos cours sont faits pour
          s'entraîner en toute sécurité, sans aucun risque pour votre matériel.
        </p>
      </footer>
    </div>
  );
}