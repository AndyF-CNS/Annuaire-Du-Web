import React, { useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface HubSVGProps {
  size?: number;
  primary?: string;
  accent?: string;
  node?: string;
  line?: string;
}

interface LogoLockupProps {
  size?: number;
  dark?: boolean;
}

interface ColorSwatchProps {
  hex: string;
  role: string;
  size?: number;
}

interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
}

interface PillarItem {
  title: string;
  desc: string;
  ico: React.ReactNode;
}

interface IconItem {
  l: string;
  ico: React.ReactNode;
}

interface TypoItem {
  l: string;
  s: string;
}

interface LayoutMockup {
  label: string;
  rows: [number, string][];
}

interface SocialPost {
  bg: string;
  text: string;
  accent: string;
}

interface ToneBar {
  label: string;
  bar: number;
  color: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function TFHBrandIdentity(): React.ReactElement {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => {
      try {
        document.head.removeChild(link);
      } catch (_) {}
    };
  }, []);

  // ─── Design tokens ───────────────────────────────────────────────────────

  const C = {
    blue:       "#1A4FD6",
    blueL:      "#3D6FE8",
    blueXL:     "#6B94F5",
    blueD:      "#0F35A8",
    blueXD:     "#08152B",
    cyan:       "#00B4C8",
    cyanL:      "#33C8D8",
    cyanD:      "#0090A0",
    orange:     "#FF6B35",
    orangeL:    "#FF8F62",
    surface:    "#F1F6FD",
    surfaceAlt: "#E2EBF8",
    border:     "#CDD9F5",
    borderL:    "#E8EEFB",
    t1:         "#0B1629",
    t2:         "#2D3F5E",
    t3:         "#5E718A",
    t4:         "#8FA3BB",
    t5:         "#C4D0DF",
    white:      "#FFFFFF",
  } as const;

  // ─── Style helpers ────────────────────────────────────────────────────────

  const font = (
    size: number,
    weight: number = 400,
    color: string = C.t1,
    extra: React.CSSProperties = {}
  ): React.CSSProperties => ({
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontSize: size,
    fontWeight: weight,
    color,
    ...extra,
  });

  const display = (
    size: number,
    weight: number = 800,
    color: string = C.t1,
    extra: React.CSSProperties = {}
  ): React.CSSProperties => ({
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    fontSize: size,
    fontWeight: weight,
    color,
    letterSpacing: size > 18 ? "-0.025em" : "-0.01em",
    lineHeight: 1.1,
    ...extra,
  });

  const labelStyle = (color: string = C.t3): React.CSSProperties => ({
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontSize: 7,
    fontWeight: 700,
    color,
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    marginBottom: 10,
    paddingBottom: 7,
    borderBottom: `1px solid ${C.border}`,
  });

  // ─── Sub-components ───────────────────────────────────────────────────────

  const HubSVG: React.FC<HubSVGProps> = ({
    size = 44,
    primary = C.blue,
    accent = C.cyan,
    node = C.blue,
    line = C.blue,
  }) => (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="7.5" fill={accent} opacity="0.25" />
      <circle cx="22" cy="22" r="5"   fill={accent} />
      <circle cx="22" cy="22" r="3"   fill={primary} />
      {(
        [[22, 5], [37, 13.5], [37, 30.5], [22, 39], [7, 30.5], [7, 13.5]] as [number, number][]
      ).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill={node} />
      ))}
      <line x1="22"  y1="8.5"  x2="22"  y2="16"  stroke={line} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="33.5" y1="15.5" x2="27.5" y2="19"  stroke={line} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="33.5" y1="28.5" x2="27.5" y2="25"  stroke={line} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22"  y1="35.5" x2="22"  y2="28"  stroke={line} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="10.5" y1="28.5" x2="16.5" y2="25"  stroke={line} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="10.5" y1="15.5" x2="16.5" y2="19"  stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );

  const LogoLockup: React.FC<LogoLockupProps> = ({ size = 44, dark = false }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <HubSVG
        size={size}
        primary={dark ? C.blueXD : C.blue}
        accent={C.cyan}
        node={dark ? C.white : C.blue}
        line={dark ? C.white : C.blue}
      />
      <div style={display(size * 0.55, 800, dark ? C.white : C.t1)}>
        TechFacile<span style={{ color: C.cyan }}>Hub</span>
      </div>
    </div>
  );

  const ColorSwatch: React.FC<ColorSwatchProps> = ({ hex, role, size = 34 }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
      <div
        style={{
          width: size, height: size, borderRadius: 5,
          background: hex,
          border: hex === C.white ? `1px solid ${C.border}` : "none",
          flexShrink: 0,
        }}
      />
      <div>
        <div style={font(8.5, 600, C.t1, { letterSpacing: "0.01em" })}>{hex}</div>
        <div style={font(7.5, 400, C.t3)}>{role}</div>
      </div>
    </div>
  );

  const SectionLabel: React.FC<SectionLabelProps> = ({ children, color = C.t3 }) => (
    <div style={labelStyle(color)}>{children}</div>
  );

  // ─── Data ────────────────────────────────────────────────────────────────

  const pillars: PillarItem[] = [
    {
      title: "Simplicité",
      desc: "Des ressources tech claires, directement accessibles sans jargon ni complexité inutile.",
      ico: (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <polygon points="5.5,1 9.5,3.5 9.5,7.5 5.5,10 1.5,7.5 1.5,3.5" fill="none" stroke={C.cyan} strokeWidth="1.2" />
          <circle cx="5.5" cy="5.5" r="1.5" fill={C.cyan} />
        </svg>
      ),
    },
    {
      title: "Accessibilité",
      desc: "Un hub pour tous les professionnels francophones, sans barrière technique ni barrière d'entrée.",
      ico: (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <circle cx="5.5" cy="5.5" r="4.5" fill="none" stroke={C.cyan} strokeWidth="1.2" />
          <line x1="1" y1="5.5" x2="10" y2="5.5" stroke={C.cyan} strokeWidth="1.2" />
          <path d="M5.5 1 Q8 5.5 5.5 10 Q3 5.5 5.5 1Z" fill="none" stroke={C.cyan} strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      desc: "Un écosystème en constante évolution pour rester à la pointe des outils numériques disponibles.",
      ico: (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <circle cx="5.5" cy="5.5" r="4.5" fill="none" stroke={C.cyan} strokeWidth="1.2" />
          <circle cx="5.5" cy="5.5" r="2.5" fill="none" stroke={C.cyan} strokeWidth="1.2" />
          <circle cx="5.5" cy="5.5" r="1"   fill={C.cyan} />
        </svg>
      ),
    },
  ];

  const icons: IconItem[] = [
    { l: "Recherche",  ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="8" cy="8" r="5.5" stroke={C.blue} strokeWidth="1.4"/><line x1="12.5" y1="12.5" x2="17" y2="17" stroke={C.blue} strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { l: "Hub",        ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="10" cy="10" r="3" fill={C.blue}/><circle cx="10" cy="2.5" r="2" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="17.5" cy="7" r="2" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="17.5" cy="13" r="2" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="10" cy="17.5" r="2" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="2.5" cy="13" r="2" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="2.5" cy="7" r="2" fill="none" stroke={C.blue} strokeWidth="1.2"/></svg> },
    { l: "Évaluation", ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><polygon points="10,2 12.5,7.5 18,8.5 13.5,13 14.5,18.5 10,16 5.5,18.5 6.5,13 2,8.5 7.5,7.5" fill="none" stroke={C.blue} strokeWidth="1.2" strokeLinejoin="round"/></svg> },
    { l: "Compte",     ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="10" cy="7" r="3.5" stroke={C.blue} strokeWidth="1.2"/><path d="M3 18 C3 14.5 6 12 10 12 S17 14.5 17 18" stroke={C.blue} strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg> },
    { l: "Paramètres", ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="10" cy="10" r="3" stroke={C.blue} strokeWidth="1.2"/><path d="M10 1 L10 4 M10 16 L10 19 M1 10 L4 10 M16 10 L19 10 M3.3 3.3 L5.5 5.5 M14.5 14.5 L16.7 16.7 M16.7 3.3 L14.5 5.5 M5.5 14.5 L3.3 16.7" stroke={C.blue} strokeWidth="1.2" strokeLinecap="round"/></svg> },
    { l: "Partage",    ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="15" cy="4" r="2.5" stroke={C.blue} strokeWidth="1.2"/><circle cx="4" cy="10" r="2.5" stroke={C.blue} strokeWidth="1.2"/><circle cx="15" cy="16" r="2.5" stroke={C.blue} strokeWidth="1.2"/><line x1="6.5" y1="11" x2="12.5" y2="14.5" stroke={C.blue} strokeWidth="1.2"/><line x1="12.5" y1="5.5" x2="6.5" y2="9" stroke={C.blue} strokeWidth="1.2"/></svg> },
    { l: "Sauvegarde", ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M4 2 H16 V18 L10 14 L4 18 Z" stroke={C.blue} strokeWidth="1.2" strokeLinejoin="round" fill="none"/></svg> },
    { l: "Stats",      ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><rect x="2" y="12" width="4" height="6" rx="1" stroke={C.blue} strokeWidth="1.2"/><rect x="8" y="8" width="4" height="10" rx="1" stroke={C.blue} strokeWidth="1.2"/><rect x="14" y="4" width="4" height="14" rx="1" stroke={C.blue} strokeWidth="1.2"/></svg> },
    { l: "Globe",      ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="10" cy="10" r="7.5" stroke={C.blue} strokeWidth="1.2"/><ellipse cx="10" cy="10" rx="3.5" ry="7.5" stroke={C.blue} strokeWidth="1.2"/><line x1="2.5" y1="7" x2="17.5" y2="7" stroke={C.blue} strokeWidth="1.2"/><line x1="2.5" y1="13" x2="17.5" y2="13" stroke={C.blue} strokeWidth="1.2"/></svg> },
    { l: "Sécurité",   ico: <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M10 2 L16 5 L16 9.5 C16 13 13 16 10 17.5 C7 16 4 13 4 9.5 L4 5 Z" stroke={C.blue} strokeWidth="1.2" fill="none"/><polyline points="7.5,10 9.5,12 12.5,8" stroke={C.cyan} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  ];

  const typoScale: TypoItem[] = [
    { l: "H1", s: "32/40" }, { l: "H2", s: "24/32" }, { l: "H3", s: "18/26" },
    { l: "Corps", s: "14/22" }, { l: "Caption", s: "11/16" },
  ];

  const layoutMockups: LayoutMockup[] = [
    { label: "Maquetation Hero",    rows: [[35, C.blueXD], [25, C.surfaceAlt], [40, C.surface]] },
    { label: "Maquetation Grille",  rows: [[20, C.surface], [50, C.surfaceAlt], [30, C.border]] },
    { label: "Maquetation Article", rows: [[25, C.surface], [45, C.surfaceAlt], [30, C.borderL]] },
    { label: "Maquetation Tableau", rows: [[30, C.blue], [40, C.surfaceAlt], [30, C.borderL]] },
  ];

  const socialPosts: SocialPost[] = [
    { bg: C.blue,   text: "La tech ne doit plus être intimidante.", accent: C.white },
    { bg: C.blueXD, text: "+500 outils en français. Explorez.",     accent: C.cyan  },
    { bg: C.cyan,   text: "Votre hub tech francophone.",            accent: C.blueXD },
  ];

  const toneBars: ToneBar[] = [
    { label: "Confiant",   bar: 0.95, color: C.blue  },
    { label: "Accessible", bar: 0.88, color: C.cyan  },
    { label: "Innovant",   bar: 0.75, color: C.blueL },
    { label: "Énergique",  bar: 0.62, color: C.orange },
  ];

  const logoBgVariants = [
    { bg: C.white,   border: C.border,        dark: false },
    { bg: C.blue,    border: "transparent",   dark: true  },
    { bg: C.blueXD,  border: "transparent",   dark: true  },
    { bg: C.surface, border: C.border,        dark: false },
  ];

  // ─── Network pattern nodes/edges ─────────────────────────────────────────

  const netNodes: [number, number][] = [
    [18, 12], [52, 8], [82, 16], [10, 44], [50, 40], [88, 44], [22, 72], [52, 66], [82, 70],
  ];

  const netEdges: [number, number, number, number][] = [
    [18,12,52,8], [52,8,82,16], [10,44,50,40], [50,40,88,44],
    [22,72,52,66], [52,66,82,70], [18,12,10,44], [52,8,50,40],
    [82,16,88,44], [10,44,22,72], [50,40,52,66], [88,44,82,70],
  ];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div style={{ width: "100%", overflowX: "auto", background: "#EEF2FA" }}>
      <div style={{ width: 900, margin: "0 auto", background: C.surface }}>

        {/* ════════════════ HEADER ════════════════ */}
        <div style={{ background: C.blueXD, padding: "36px 40px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 190px", gap: 36, alignItems: "start" }}>

            {/* Logo + tagline */}
            <div>
              <LogoLockup size={46} dark />
              <div style={{ ...font(9, 500, C.cyan, { letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 6 }) }}>
                La tech, simplifiée pour vous.
              </div>
            </div>

            {/* Brand pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, paddingLeft: 16, borderLeft: `1px solid rgba(255,255,255,0.08)` }}>
              {pillars.map((p, i) => (
                <div key={i}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1.5px solid rgba(0,180,200,0.35)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {p.ico}
                    </div>
                    <div style={font(9.5, 700, C.white)}>{p.title}</div>
                  </div>
                  <div style={font(7.5, 400, C.t4, { lineHeight: 1.65 })}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Brand description */}
            <div style={font(8, 400, C.t4, { lineHeight: 1.75 })}>
              TechFacileHub est l'annuaire numérique de référence pour les professionnels francophones. Une plateforme pensée pour connecter entrepreneurs, créatifs et équipes aux meilleurs outils tech disponibles aujourd'hui.
            </div>
          </div>
        </div>

        {/* ════════════════ ROW 2: COLOR | TYPOGRAPHY | APPLICATIONS ════════════════ */}
        <div style={{ display: "grid", gridTemplateColumns: "210px 1fr 275px", borderTop: `1px solid ${C.border}` }}>

          {/* ── COL A: COLOR SYSTEM ── */}
          <div style={{ padding: "26px 22px", background: C.white, borderRight: `1px solid ${C.border}` }}>
            <SectionLabel>Système de couleurs</SectionLabel>

            <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 })}>Couleurs primaires</div>
            <ColorSwatch hex="#08152B" role="Fond / Contraste max." />
            <ColorSwatch hex="#F1F6FD" role="Surface / Fond clair" />
            <ColorSwatch hex="#1A4FD6" role="Primaire / UI actif" />
            <ColorSwatch hex="#00B4C8" role="Accent cyan" />
            <ColorSwatch hex="#FF6B35" role="Énergie / Appel à l'action" />

            <div style={{ height: 1, background: C.borderL, margin: "12px 0" }} />
            <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 })}>Couleurs secondaires</div>
            <ColorSwatch hex="#E2EBF8" role="Surface alt."  size={26} />
            <ColorSwatch hex="#3D6FE8" role="Bleu clair"    size={26} />
            <ColorSwatch hex="#8FA3BB" role="Atténué"       size={26} />

            <div style={{ height: 1, background: C.borderL, margin: "12px 0" }} />
            <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 })}>Dégradés</div>
            <div style={{ height: 26, borderRadius: 5, background: "linear-gradient(135deg,#1A4FD6,#00B4C8)", marginBottom: 5 }} />
            <div style={{ height: 26, borderRadius: 5, background: "linear-gradient(135deg,#08152B,#1A4FD6)" }} />

            <div style={{ height: 1, background: C.borderL, margin: "12px 0" }} />
            <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 })}>Combinaisons</div>
            <div style={{ display: "flex", gap: 3, marginBottom: 5 }}>
              {[C.blueXD, C.blue, C.cyan].map((c, i) => (
                <div key={i} style={{ flex: 1, height: 20, background: c, borderRadius: i === 0 ? "4px 0 0 4px" : i === 2 ? "0 4px 4px 0" : 0 }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
              {([C.blue, C.orange, C.surface] as string[]).map((c, i) => (
                <div key={i} style={{ flex: 1, height: 20, background: c, border: c === C.surface ? `1px solid ${C.border}` : "none", borderRadius: i === 0 ? "4px 0 0 4px" : i === 2 ? "0 4px 4px 0" : 0 }} />
              ))}
            </div>

            <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 })}>Variations tonales</div>
            <div style={{ display: "flex", gap: 2, marginBottom: 4 }}>
              {(["#0F35A8","#1A4FD6","#3D6FE8","#6B94F5","#A4BCF8"] as string[]).map((c, i) => (
                <div key={i} style={{ flex: 1, height: 16, background: c, borderRadius: i === 0 ? "3px 0 0 3px" : i === 4 ? "0 3px 3px 0" : 0 }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              {(["#0090A0","#00B4C8","#33C8D8","#66D8E4","#99E8EF"] as string[]).map((c, i) => (
                <div key={i} style={{ flex: 1, height: 16, background: c, borderRadius: i === 0 ? "3px 0 0 3px" : i === 4 ? "0 3px 3px 0" : 0 }} />
              ))}
            </div>
          </div>

          {/* ── COL B: TYPOGRAPHY + VISUAL LANGUAGE ── */}
          <div style={{ background: C.white, borderRight: `1px solid ${C.border}` }}>

            {/* Typography */}
            <div style={{ padding: "26px 28px 20px", borderBottom: `1px solid ${C.border}` }}>
              <SectionLabel>Système typographique</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
                <div>
                  <div style={display(60, 800, C.t1, { lineHeight: 1 })}>Aa</div>
                  <div style={font(7.5, 700, C.t1, { marginTop: 6 })}>FAMILLE PRINCIPALE</div>
                  <div style={font(11, 600, C.blue, { marginTop: 2 })}>Plus Jakarta Sans</div>
                  <div style={font(8, 400, C.t3, { lineHeight: 1.65, marginTop: 4 })}>Moderne. Précise.<br />Technique. Accessible.</div>
                </div>
                <div>
                  <div style={{ ...font(50, 300, C.t3, { lineHeight: 1 }) }}>Aa</div>
                  <div style={font(7.5, 700, C.t2, { marginTop: 6 })}>CORPS DE TEXTE</div>
                  <div style={font(11, 500, C.t2, { marginTop: 2 })}>Inter</div>
                  <div style={font(8, 400, C.t3, { lineHeight: 1.65, marginTop: 4 })}>Propre. Lisible.<br />Universelle.</div>
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <div style={font(7.5, 600, C.t4, { textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 4 })}>TITRE / DISPLAY</div>
                <div style={display(24, 800, C.t1, { marginBottom: 12, lineHeight: 1.15 })}>
                  Trouvez les meilleurs<br />outils tech en français.
                </div>
                <div style={font(7.5, 600, C.t4, { textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 4 })}>SOUS-TITRE</div>
                <div style={display(13, 600, C.blue, { marginBottom: 12, lineHeight: 1.4 })}>
                  L'annuaire numérique pour<br />professionnels francophones.
                </div>
                <div style={font(7.5, 600, C.t4, { textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 4 })}>TEXTE DE CORPS</div>
                <div style={font(8.5, 400, C.t2, { lineHeight: 1.75, marginBottom: 14 })}>
                  TechFacileHub référence et centralise les meilleurs outils numériques, formations et ressources tech pour naviguer le paysage technologique avec confiance et simplicité absolue.
                </div>
                <div style={{ display: "flex", gap: 20, paddingTop: 12, borderTop: `1px solid ${C.borderL}` }}>
                  {typoScale.map((t, i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={font(11, 700, C.t1)}>{t.l}</div>
                      <div style={font(7, 400, C.t4, { marginTop: 2 })}>{t.s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Language */}
            <div style={{ padding: "20px 28px" }}>
              <SectionLabel>Langage visuel</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: 14 }}>
                {/* Mood tile 1 – network dark */}
                <div style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${C.border}` }}>
                  <svg viewBox="0 0 82 62" fill="none" style={{ width: "100%", height: 62 }}>
                    <rect width="82" height="62" fill={C.blueXD} />
                    {([[18,14],[44,9],[66,18],[12,42],[44,38],[70,42]] as [number,number][]).map(([x,y], i) => (
                      <circle key={i} cx={x} cy={y} r="3.5" fill={C.cyan} opacity={0.5 + i * 0.08} />
                    ))}
                    <line x1="18" y1="14" x2="44" y2="9"  stroke={C.blue} strokeWidth="1" opacity="0.8" />
                    <line x1="44" y1="9"  x2="66" y2="18" stroke={C.blue} strokeWidth="1" opacity="0.8" />
                    <line x1="12" y1="42" x2="44" y2="38" stroke={C.cyan} strokeWidth="1" opacity="0.6" />
                    <line x1="44" y1="38" x2="70" y2="42" stroke={C.cyan} strokeWidth="1" opacity="0.6" />
                    <line x1="18" y1="14" x2="12" y2="42" stroke={C.blue} strokeWidth="1" opacity="0.5" />
                    <line x1="44" y1="9"  x2="44" y2="38" stroke={C.cyan} strokeWidth="1" opacity="0.5" />
                    <line x1="66" y1="18" x2="70" y2="42" stroke={C.blue} strokeWidth="1" opacity="0.5" />
                    <circle cx="44" cy="54" r="5" fill={C.orange} opacity="0.6" />
                    <line x1="44" y1="38" x2="44" y2="49" stroke={C.orange} strokeWidth="1" opacity="0.6" />
                  </svg>
                </div>
                {/* Mood tile 2 – gradient sphere */}
                <div style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${C.border}` }}>
                  <svg viewBox="0 0 82 62" fill="none" style={{ width: "100%", height: 62 }}>
                    <rect width="82" height="62" fill={C.surface} />
                    <defs>
                      <radialGradient id="sg1" cx="38%" cy="32%">
                        <stop offset="0%" stopColor={C.blueL} />
                        <stop offset="100%" stopColor={C.blueXD} />
                      </radialGradient>
                    </defs>
                    <circle cx="41" cy="31" r="26" fill="url(#sg1)" />
                    <circle cx="31" cy="21" r="8"  fill={C.white} opacity="0.12" />
                    <circle cx="52" cy="42" r="4"  fill={C.cyan}  opacity="0.35" />
                  </svg>
                </div>
                {/* Mood tile 3 – geometric */}
                <div style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${C.border}` }}>
                  <svg viewBox="0 0 82 62" fill="none" style={{ width: "100%", height: 62 }}>
                    <rect width="82" height="62" fill={C.surfaceAlt} />
                    <circle cx="18" cy="18" r="16" fill={C.blue}  opacity="0.10" />
                    <circle cx="18" cy="18" r="10" fill={C.blue}  opacity="0.15" />
                    <circle cx="18" cy="18" r="5"  fill={C.blue}  opacity="0.35" />
                    <circle cx="62" cy="44" r="18" fill={C.cyan}  opacity="0.08" />
                    <circle cx="62" cy="44" r="10" fill={C.cyan}  opacity="0.14" />
                    <circle cx="62" cy="44" r="5"  fill={C.cyan}  opacity="0.40" />
                    <rect x="34" y="14" width="18" height="18" rx="4" fill={C.blue} opacity="0.10" transform="rotate(20 43 23)" />
                  </svg>
                </div>
                {/* Mood tile 4 – clean block */}
                <div style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${C.border}` }}>
                  <svg viewBox="0 0 82 62" fill="none" style={{ width: "100%", height: 62 }}>
                    <rect width="82" height="62" fill={C.blue} />
                    <rect x="8"  y="8"  width="24" height="24" rx="5" fill={C.white} opacity="0.10" />
                    <rect x="50" y="30" width="24" height="24" rx="5" fill={C.cyan}  opacity="0.35" />
                    <circle cx="58" cy="16" r="10" fill={C.white} opacity="0.12" />
                    <line x1="32" y1="20" x2="50" y2="30" stroke={C.white} strokeWidth="1" opacity="0.20" />
                  </svg>
                </div>
              </div>

              {/* Brand personality tokens */}
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                {[
                  { label: "Structuré", ico: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><polygon points="6.5,1 11,3.5 11,9.5 6.5,12 2,9.5 2,3.5" fill="none" stroke={C.blue} strokeWidth="1.2"/></svg> },
                  { label: "Connecté",  ico: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="2" fill={C.cyan}/><circle cx="6.5" cy="1.5" r="1.5" fill={C.blue}/><circle cx="11" cy="4" r="1.5" fill={C.blue}/><circle cx="11" cy="9" r="1.5" fill={C.blue}/><circle cx="6.5" cy="11.5" r="1.5" fill={C.blue}/><circle cx="2" cy="9" r="1.5" fill={C.blue}/><circle cx="2" cy="4" r="1.5" fill={C.blue}/></svg> },
                  { label: "Précis",    ico: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="6.5" cy="6.5" r="2.5" fill="none" stroke={C.blue} strokeWidth="1.2"/><circle cx="6.5" cy="6.5" r="1" fill={C.cyan}/></svg> },
                  { label: "Fiable",    ico: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5 L11 3.5 L11 6.5 C11 9 8.5 11 6.5 12 C4.5 11 2 9 2 6.5 L2 3.5 Z" fill="none" stroke={C.blue} strokeWidth="1.2"/><polyline points="4.5,6.5 6,8 8.5,5" stroke={C.cyan} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                  { label: "Fluide",    ico: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 4.5 Q3.5 2 6.5 4.5 Q9.5 7 11.5 4.5" stroke={C.blue} strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M1.5 8.5 Q3.5 6 6.5 8.5 Q9.5 11 11.5 8.5" stroke={C.cyan} strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg> },
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: C.surface, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 5px" }}>
                      {item.ico}
                    </div>
                    <div style={font(7, 400, C.t3)}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── COL C: BRAND APPLICATIONS ── */}
          <div style={{ padding: "26px 22px", background: C.surface }}>
            <SectionLabel>Applications de marque</SectionLabel>

            {/* Hero web mockup */}
            <div style={{ marginBottom: 14 }}>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>HERO WEB</div>
              <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}` }}>
                <div style={{ background: C.t5, padding: "5px 10px", display: "flex", gap: 4, alignItems: "center" }}>
                  {(["#FF5F57","#FEBC2E","#28C840"] as string[]).map((c, i) => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                  ))}
                  <div style={{ flex: 1, marginLeft: 6, background: C.white, height: 11, borderRadius: 3, display: "flex", alignItems: "center", paddingLeft: 6 }}>
                    <div style={font(6, 400, C.t4)}>techfacilehub.fr</div>
                  </div>
                </div>
                <div style={{ background: C.blueXD, padding: "14px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    {(["Accueil","Outils","Guides","À propos"] as string[]).map((item, i) => (
                      <div key={i} style={font(6.5, i === 0 ? 600 : 400, i === 0 ? C.cyan : C.t4)}>{item}</div>
                    ))}
                    <div style={{ marginLeft: "auto", background: C.blue, borderRadius: 3, padding: "2px 6px" }}>
                      <div style={font(6.5, 600, C.white)}>Connexion</div>
                    </div>
                  </div>
                  <div style={display(14, 800, C.white, { marginBottom: 7, lineHeight: 1.2 })}>
                    La tech,<br />simplifiée<br /><span style={{ color: C.cyan }}>pour vous.</span>
                  </div>
                  <div style={font(7, 400, C.t4, { lineHeight: 1.6, marginBottom: 10 })}>
                    Trouvez les meilleurs outils<br />numériques en français.
                  </div>
                  <div style={{ display: "flex", gap: 5 }}>
                    <div style={{ background: C.blue, borderRadius: 4, padding: "5px 10px" }}>
                      <div style={font(7, 600, C.white)}>Explorer</div>
                    </div>
                    <div style={{ border: `1px solid rgba(255,255,255,0.2)`, borderRadius: 4, padding: "5px 10px" }}>
                      <div style={font(7, 400, C.t4)}>En savoir plus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile mockups */}
            <div style={{ marginBottom: 14 }}>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>INTERFACE MOBILE</div>
              <div style={{ display: "flex", gap: 6 }}>
                {/* Phone 1 */}
                <div style={{ flex: 1, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}`, background: C.white }}>
                  <div style={{ background: C.blue, padding: "8px 8px 7px" }}>
                    <div style={font(7, 700, C.white, { marginBottom: 5 })}>TechFacileHub</div>
                    <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 4, padding: "3px 6px", display: "flex", alignItems: "center", gap: 3 }}>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><circle cx="3" cy="3" r="2.5" stroke="white" strokeWidth="1" opacity="0.7"/><line x1="5" y1="5" x2="7" y2="7" stroke="white" strokeWidth="1" opacity="0.7"/></svg>
                      <div style={font(6, 400, "rgba(255,255,255,0.5)")}>Rechercher...</div>
                    </div>
                  </div>
                  <div style={{ padding: 6 }}>
                    {(["Dev Web","Design","IA & Data","Marketing"] as string[]).map((cat, i) => (
                      <div key={i} style={{ background: C.surface, borderRadius: 3, padding: "4px 6px", marginBottom: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={font(6.5, 500, C.t1)}>{cat}</div>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: i === 0 ? C.blue : C.t5 }} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Phone 2 */}
                <div style={{ flex: 1, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}`, background: C.white }}>
                  <div style={{ background: C.blueXD, padding: "8px 8px 12px" }}>
                    <div style={{ width: 22, height: 22, borderRadius: 5, background: C.cyan, marginBottom: 4 }} />
                    <div style={font(7, 700, C.white)}>Outil vedette</div>
                    <div style={font(6, 400, C.t4)}>Développement Web</div>
                  </div>
                  <div style={{ padding: 6 }}>
                    <div style={font(6.5, 400, C.t2, { lineHeight: 1.55, marginBottom: 6 })}>Un outil incontournable pour les développeurs francophones.</div>
                    <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="7" height="7" viewBox="0 0 7 7" fill={C.orange}><polygon points="3.5,0.5 4.5,2.5 6.5,3 4.7,4.7 5.1,7 3.5,6 1.9,7 2.3,4.7 0.5,3 2.5,2.5"/></svg>
                      ))}
                    </div>
                    <div style={{ background: C.blue, borderRadius: 3, padding: "3px", textAlign: "center" }}>
                      <div style={font(6.5, 600, C.white)}>Visiter</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business card */}
            <div style={{ marginBottom: 14 }}>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>CARTE DE VISITE</div>
              <div style={{ borderRadius: 8, background: C.blueXD, padding: "13px 14px", border: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ marginBottom: 8 }}><LogoLockup size={18} dark /></div>
                  <div style={font(8, 600, C.white)}>Andy Fiey</div>
                  <div style={font(7, 400, C.t4)}>Fondateur & Conseiller Numérique</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={font(6.5, 400, C.t4, { lineHeight: 1.8 })}>
                    contact@techfacilehub.fr<br />techfacilehub.fr
                  </div>
                </div>
              </div>
            </div>

            {/* Social posts */}
            <div>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>RÉSEAUX SOCIAUX</div>
              <div style={{ display: "flex", gap: 4 }}>
                {socialPosts.map((p, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: 6, padding: "9px 8px", background: p.bg, minHeight: 60 }}>
                    <div style={display(7, 700, p.accent, { lineHeight: 1.35, marginBottom: 8 })}>{p.text}</div>
                    <div style={font(6, 400, p.accent === C.white ? "rgba(255,255,255,0.5)" : "rgba(8,21,43,0.5)")}>TechFacileHub</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════ ROW 3: GRID | UI COMPONENTS | MORE APPS ════════════════ */}
        <div style={{ display: "grid", gridTemplateColumns: "210px 1fr 275px", borderTop: `1px solid ${C.border}` }}>

          {/* ── GRID SYSTEM ── */}
          <div style={{ padding: "24px 22px", background: C.white, borderRight: `1px solid ${C.border}` }}>
            <SectionLabel>Système de maquetation</SectionLabel>

            <div style={{ marginBottom: 14 }}>
              <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 })}>Système de grille</div>
              <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 36, background: C.blue, opacity: 0.07, borderRadius: 2 }} />
                ))}
              </div>
              <div style={font(7.5, 400, C.t3)}>Grille de 12 colonnes</div>
              <div style={font(7.5, 400, C.t3)}>Gouttière: 24 px</div>
              <div style={font(7.5, 400, C.t3)}>Marge: 32 px</div>
            </div>

            <div>
              <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>Échelle d'espacement</div>
              {([4, 8, 16, 24, 32, 48, 64, 80] as number[]).map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <div style={{ width: Math.min(s / 1.6, 44), height: 5, background: i % 2 === 0 ? C.blue : C.cyan, borderRadius: 2 }} />
                  <div style={font(7.5, 400, C.t3)}>{s}px</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── UI COMPONENTS ── */}
          <div style={{ padding: "24px 28px", background: C.white, borderRight: `1px solid ${C.border}` }}>
            <SectionLabel>Composantes UI</SectionLabel>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              {/* Left: buttons + controls */}
              <div>
                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>BOUTON PRIMAIRE</div>
                <div style={{ background: C.blue, borderRadius: 8, padding: "8px 16px", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 10, cursor: "pointer" }}>
                  <div style={font(9, 600, C.white)}>Explorer les outils</div>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="2" y1="5" x2="8" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><polyline points="5.5,2 8,5 5.5,8" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>

                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>BOUTON SECONDAIRE</div>
                <div style={{ border: `1.5px solid ${C.blue}`, borderRadius: 8, padding: "7px 16px", display: "inline-flex", marginBottom: 10 }}>
                  <div style={font(9, 600, C.blue)}>En savoir plus</div>
                </div>

                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>BOUTON CTA</div>
                <div style={{ background: C.orange, borderRadius: 8, padding: "8px 16px", display: "inline-flex", marginBottom: 12 }}>
                  <div style={font(9, 700, C.white)}>Commencer maintenant</div>
                </div>

                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>INTERRUPTEUR</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 18, borderRadius: 9, background: C.blue, display: "flex", alignItems: "center" }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.white, marginLeft: "auto", marginRight: 2 }} />
                  </div>
                  <div style={{ width: 32, height: 18, borderRadius: 9, background: C.t5, display: "flex", alignItems: "center" }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.white, marginLeft: 2 }} />
                  </div>
                </div>

                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>Case à cocher</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: C.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><polyline points="1,4 3,6 7,2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div style={font(8, 400, C.t2)}>J'accepte les conditions</div>
                </div>
              </div>

              {/* Right: card + field + tags */}
              <div>
                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>CARTE OUTIL</div>
                <div style={{ border: `1px solid ${C.border}`, borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
                  <div style={{ background: C.blue, height: 38, display: "flex", alignItems: "center", padding: "0 12px" }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(255,255,255,0.18)", marginRight: 8 }} />
                    <div>
                      <div style={font(7.5, 600, C.white)}>Outil recommandé</div>
                      <div style={font(6, 400, "rgba(255,255,255,0.6)")}>Développement Web</div>
                    </div>
                  </div>
                  <div style={{ padding: "8px 12px" }}>
                    <div style={font(7, 400, C.t2, { lineHeight: 1.6, marginBottom: 6 })}>Un outil indispensable pour les développeurs et équipes tech francophones.</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={font(7.5, 600, C.blue)}>Voir l'outil</div>
                      <div style={{ display: "flex", gap: 1.5 }}>
                        {[1,2,3,4,5].map(s => (
                          <svg key={s} width="7" height="7" viewBox="0 0 7 7" fill={C.orange}><polygon points="3.5,0.5 4.5,2.5 6.5,3 4.7,4.7 5.1,7 3.5,6 1.9,7 2.3,4.7 0.5,3 2.5,2.5"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>CHAMP DE RECHERCHE</div>
                <div style={{ border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 12px", display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="4" cy="4" r="3" stroke={C.t3} strokeWidth="1.2"/><line x1="6.5" y1="6.5" x2="9" y2="9" stroke={C.t3} strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <div style={font(8, 400, C.t4)}>Rechercher un outil...</div>
                </div>

                <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 })}>ÉTIQUETTES</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {(["IA","Dev","Design","Marketing","SEO","Cloud"] as string[]).map((tag, i) => (
                    <div key={i} style={{ borderRadius: 20, padding: "3px 9px", background: i === 0 ? C.blue : C.surfaceAlt, border: `1px solid ${i === 0 ? C.blue : C.border}` }}>
                      <div style={font(7, i === 0 ? 600 : 400, i === 0 ? C.white : C.t2)}>{tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Layout wireframes */}
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${C.borderL}` }}>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 })}>Exemples de maquetation</div>
              <div style={{ display: "flex", gap: 8 }}>
                {layoutMockups.map((layout, i) => (
                  <div key={i} style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ borderRadius: 4, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 4, height: 52, display: "flex", flexDirection: "column" }}>
                      {layout.rows.map(([flex, bg], j) => (
                        <div key={j} style={{ flex, background: bg }} />
                      ))}
                    </div>
                    <div style={font(6.5, 400, C.t3)}>{layout.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MORE APPLICATIONS ── */}
          <div style={{ padding: "24px 22px", background: C.surface }}>
            <SectionLabel>Suite applications</SectionLabel>

            {/* Billboard */}
            <div style={{ marginBottom: 14 }}>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>AFFICHE / PUBLICITÉ</div>
              <div style={{ borderRadius: 8, background: C.blueXD, padding: "16px", border: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div style={font(7.5, 800, C.white, { letterSpacing: "0.08em" })}>TECHFACILEHUB</div>
                  <HubSVG size={20} primary={C.blueXD} accent={C.cyan} node={C.white} line={C.white} />
                </div>
                <div style={display(16, 800, C.white, { marginBottom: 8 })}>
                  La tech,<br />accessible<br /><span style={{ color: C.cyan }}>à tous.</span>
                </div>
                <div style={font(7, 400, C.t4)}>techfacilehub.fr</div>
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ marginBottom: 14 }}>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>NEWSLETTER</div>
              <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}`, background: C.white }}>
                <div style={{ background: C.blue, padding: "9px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                  <HubSVG size={16} primary={C.blue} accent={C.cyan} node={C.white} line={C.white} />
                  <div style={font(9, 700, C.white)}>TechFacileHub Weekly</div>
                </div>
                <div style={{ padding: "10px 14px" }}>
                  <div style={display(11.5, 700, C.t1, { marginBottom: 4 })}>Les meilleurs outils<br />de la semaine.</div>
                  <div style={{ height: 1, background: C.borderL, marginBottom: 7 }} />
                  <div style={font(7.5, 400, C.t3, { lineHeight: 1.65, marginBottom: 9 })}>
                    Chaque semaine, notre sélection des outils tech incontournables pour les pros francophones.
                  </div>
                  <div style={{ background: C.blue, borderRadius: 5, padding: "5px", textAlign: "center" }}>
                    <div style={font(7.5, 600, C.white)}>S'abonner gratuitement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo on backgrounds */}
            <div>
              <div style={font(7.5, 600, C.t3, { textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 })}>LOGO SUR FONDS</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                {logoBgVariants.map(({ bg, border, dark }, i) => (
                  <div key={i} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 7, padding: "10px 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <HubSVG size={22} primary={dark ? C.blueXD : C.blue} accent={C.cyan} node={dark ? C.white : C.blue} line={dark ? C.white : C.blue} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════ ROW 4: ICONS | PATTERNS | MICRO-DETAILS ════════════════ */}
        <div style={{ display: "grid", gridTemplateColumns: "210px 1fr 275px", borderTop: `1px solid ${C.border}` }}>

          {/* ── ICONS ── */}
          <div style={{ padding: "22px 22px", background: C.white, borderRight: `1px solid ${C.border}` }}>
            <SectionLabel>Iconographie</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginBottom: 10 }}>
              {icons.map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: 30, height: 30, borderRadius: 6, background: C.surface, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 3px" }}>
                    {item.ico}
                  </div>
                  <div style={font(6, 400, C.t3)}>{item.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PATTERNS ── */}
          <div style={{ padding: "22px 28px", background: C.white, borderRight: `1px solid ${C.border}` }}>
            <SectionLabel>Patrons et éléments</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 14 }}>

              {/* Pattern 1: Network */}
              <div style={{ textAlign: "center" }}>
                <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 4 }}>
                  <svg viewBox="0 0 100 80" width="100%" fill="none">
                    <rect width="100" height="80" fill={C.blueXD} />
                    {netNodes.map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill={C.cyan} opacity="0.55" />
                    ))}
                    {netEdges.map(([x1, y1, x2, y2], i) => (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i < 4 ? C.cyan : C.blue} strokeWidth="0.9" opacity="0.55" />
                    ))}
                  </svg>
                </div>
                <div style={font(7, 400, C.t3)}>Patron réseau</div>
              </div>

              {/* Pattern 2: Concentric circles */}
              <div style={{ textAlign: "center" }}>
                <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 4 }}>
                  <svg viewBox="0 0 100 80" width="100%" fill="none">
                    <rect width="100" height="80" fill={C.surface} />
                    {([18, 24, 30, 38, 48] as number[]).map((r, i) => (
                      <circle key={i} cx="20" cy="20" r={r} fill="none" stroke={C.blue} strokeWidth="0.8" opacity={0.4 - i * 0.06} />
                    ))}
                    {([14, 20, 28, 36] as number[]).map((r, i) => (
                      <circle key={i} cx="78" cy="60" r={r} fill="none" stroke={C.cyan} strokeWidth="0.8" opacity={0.5 - i * 0.08} />
                    ))}
                    <circle cx="50" cy="40" r="5" fill={C.blue} opacity="0.3" />
                  </svg>
                </div>
                <div style={font(7, 400, C.t3)}>Patron cercles</div>
              </div>

              {/* Pattern 3: Dot grid */}
              <div style={{ textAlign: "center" }}>
                <div style={{ borderRadius: 8, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 4 }}>
                  <svg viewBox="0 0 100 80" width="100%" fill="none">
                    <rect width="100" height="80" fill={C.white} />
                    {Array.from({ length: 9 }).map((_, row) =>
                      Array.from({ length: 11 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={col * 10 + 5} cy={row * 9 + 5} r={1.4} fill={C.blue} opacity={0.08 + (col + row) * 0.015} />
                      ))
                    )}
                    <circle cx="50" cy="40" r="18" fill={C.blue} opacity="0.06" />
                    <circle cx="50" cy="40" r="10" fill={C.blue} opacity="0.10" />
                    <circle cx="50" cy="40" r="4"  fill={C.blue} opacity="0.40" />
                  </svg>
                </div>
                <div style={font(7, 400, C.t3)}>Patron points</div>
              </div>
            </div>

            {/* Brand shapes */}
            <div style={{ borderTop: `1px solid ${C.borderL}`, paddingTop: 14 }}>
              <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 })}>Formes de marque</div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {([
                  <svg key="s1" width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="15" stroke={C.blue} strokeWidth="2"/><circle cx="17" cy="17" r="8" stroke={C.cyan} strokeWidth="1.2" opacity="0.5"/></svg>,
                  <svg key="s2" width="34" height="34" viewBox="0 0 34 34" fill="none"><polygon points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5" fill="none" stroke={C.blue} strokeWidth="2"/></svg>,
                  <svg key="s3" width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="17" r="15" fill={C.blue} opacity="0.08"/><circle cx="17" cy="17" r="9" fill={C.blue} opacity="0.18"/><circle cx="17" cy="17" r="4" fill={C.blue}/></svg>,
                  <svg key="s4" width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="2" y="2" width="30" height="30" rx="7" fill={C.blue} opacity="0.1"/><rect x="8" y="8" width="18" height="18" rx="4" fill={C.blue} opacity="0.3"/></svg>,
                  <svg key="s5" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M17 3 L29 11 L25 27 L9 27 L5 11 Z" fill="none" stroke={C.cyan} strokeWidth="2"/><circle cx="17" cy="17" r="5" fill={C.cyan} opacity="0.5"/></svg>,
                ] as React.ReactElement[]).map((shape, i) => (
                  <div key={i}>{shape}</div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MICRO-DETAILS ── */}
          <div style={{ padding: "22px 22px", background: C.surface }}>
            <SectionLabel>Micro-détails</SectionLabel>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 14 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ background: C.white, borderRadius: 8, padding: "10px 8px", boxShadow: `0 4px 20px rgba(26,79,214,0.15)`, marginBottom: 4 }}>
                  <div style={font(7.5, 500, C.t2)}>Ombre bleue</div>
                </div>
                <div style={font(7, 400, C.t3)}>Ombres</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ background: C.white, borderRadius: 8, padding: "10px 8px", border: `2px solid ${C.blue}`, marginBottom: 4 }}>
                  <div style={font(7.5, 500, C.t2)}>Bordure</div>
                </div>
                <div style={font(7, 400, C.t3)}>Contours</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ borderRadius: 8, padding: "10px 8px", background: `linear-gradient(135deg,${C.blue} 0%,${C.cyan} 100%)`, marginBottom: 4 }}>
                  <div style={font(7.5, 600, C.white)}>Dégradé</div>
                </div>
                <div style={font(7, 400, C.t3)}>Dégradés</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ borderRadius: 8, padding: "10px 8px", background: "rgba(26,79,214,0.07)", border: `1px solid rgba(26,79,214,0.18)`, marginBottom: 4 }}>
                  <div style={font(7.5, 600, C.blue)}>Effet verre</div>
                </div>
                <div style={font(7, 400, C.t3)}>Glassmorphisme</div>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 13 }}>
              <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 9 })}>Rayons de coin</div>
              <div style={{ display: "flex", gap: 7, alignItems: "flex-end" }}>
                {([{ r: 2, l: "2" }, { r: 5, l: "4" }, { r: 8, l: "8" }, { r: 12, l: "12" }, { r: 22, l: "999" }] as { r: number; l: string }[]).map(({ r, l }, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ width: 30, height: 30, background: C.blue, borderRadius: r, marginBottom: 4 }} />
                    <div style={font(6.5, 400, C.t3)}>{l}px</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 13, marginTop: 13 }}>
              <div style={font(7.5, 600, C.t2, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 9 })}>Tons de marque</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {toneBars.map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={font(7.5, 500, C.t2, { width: 60, flexShrink: 0 })}>{t.label}</div>
                    <div style={{ flex: 1, height: 5, borderRadius: 3, background: C.border }}>
                      <div style={{ width: `${t.bar * 100}%`, height: "100%", borderRadius: 3, background: t.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════ FOOTER ════════════════ */}
        <div style={{ background: C.blueXD, padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <LogoLockup size={20} dark />
          <div style={font(7.5, 400, C.t4, { letterSpacing: "0.04em" })}>
            Système d'identité visuelle · Version 1.0 · 2025
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {(["techfacilehub.fr","contact@techfacilehub.fr"] as string[]).map((txt, i) => (
              <div key={i} style={font(7, 400, C.t4)}>{txt}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}