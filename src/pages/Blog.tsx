import { useState } from "react";
import { blogArticles } from "../data/blogData";
import type { Article } from "../data/blogData";
import { Calendar, Clock, ChevronRight, ArrowLeft, ArrowRight, Lightbulb, AlertTriangle } from "lucide-react";
import { TFH } from "../theme/tfh-themes";

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [activeToc, setActiveToc] = useState<string>("");

  const categories = ["Tous", "IA", "Sécurité", "Smartphones", "Internet", "Conseils"];
  const featuredArticle = blogArticles.find((a) => a.isFeatured);
  const gridArticles = blogArticles.filter((a) => !a.isFeatured);
  const filteredGrid = gridArticles.filter(
    (a) => activeCategory === "Tous" || a.category === activeCategory
  );
  // ✅ Correction : Vérification explicite que featuredArticle existe
  const showFeatured = featuredArticle && (activeCategory === "Tous" || featuredArticle.category === activeCategory);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    if (article.toc?.length) setActiveToc(article.toc[0]);
  };

  const InteractiveModule = selectedArticle?.component;

  return (
    <div style={TFH.styles.container}>
      {/* EN-TÊTE */}
      <div style={TFH.styles.sectionHeader}>
        <div style={TFH.styles.headerIcon}>
          <Calendar size={24} color={TFH.c.blue} />
        </div>
        <div>
          <h1 style={TFH.styles.sectionTitle}>La tech expliquée simplement</h1>
          <p style={TFH.styles.sectionSubtitle}>
            Des articles clairs sur l'IA, la sécurité, les smartphones et tout ce qui façonne notre quotidien numérique.
          </p>
        </div>
      </div>

      {/* VUE LISTING */}
      {!selectedArticle ? (
        <div style={{ opacity: 1, animation: "fadeIn 0.3s ease-in" }}>
          {/* FILTRES PAR CATÉGORIE */}
          <div style={{ display: "flex", gap: TFH.spacing.sm, flexWrap: "wrap", marginBottom: TFH.spacing.xl }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...TFH.styles.btn,
                  borderRadius: TFH.radius.full,
                  border: `1px solid ${activeCategory === cat ? TFH.c.blue : TFH.c.border}`,
                  background: activeCategory === cat ? TFH.c.blue : TFH.c.white,
                  color: activeCategory === cat ? TFH.c.white : TFH.c.t2,
                  boxShadow: activeCategory === cat ? TFH.shadow.sm : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ✅ Correction : Vérification explicite de featuredArticle */}
          {showFeatured && featuredArticle && (
            <div
              onClick={() => handleSelectArticle(featuredArticle)}
              style={{
                ...TFH.styles.card,
                display: "flex",
                flexDirection: "column",
                minHeight: "210px",
                cursor: "pointer",
                marginBottom: TFH.spacing.xl,
              }}
            >
              <div
                style={{
                  background: featuredArticle.colorClass || TFH.c.blue,
                  width: "100%",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: TFH.c.white,
                  gap: "8px",
                }}
              >
                {/* ✅ Correction : Utilisation correcte de l'icône */}
                {featuredArticle.icon && (
                  <featuredArticle.icon size={40} />
                )}
                <span style={{ fontSize: "11px", opacity: 0.7, letterSpacing: "0.1em" }}>
                  Article à la une
                </span>
              </div>
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      marginBottom: "10px",
                      fontSize: "11px",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: TFH.c.blue, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {featuredArticle.category}
                    </span>
                    <span style={{ color: TFH.c.t4 }}>·</span>
                    <span style={{ ...TFH.styles.badge, background: `${TFH.c.blue}10`, border: `1px solid ${TFH.c.blue}20`, color: TFH.c.blue }}>
                      {featuredArticle.badge.text}
                    </span>
                    <span style={{ color: TFH.c.t4 }}>·</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", color: TFH.c.t3 }}>
                      <Clock size={12} /> {featuredArticle.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: TFH.font.title,
                      fontSize: "20px",
                      fontWeight: 800,
                      color: TFH.c.t1,
                      marginBottom: "8px",
                    }}
                  >
                    {featuredArticle.title}
                  </h3>
                  <p style={{ color: TFH.c.t3, fontSize: "14px", lineHeight: 1.6 }}>
                    {featuredArticle.summary}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: `1px solid ${TFH.c.borderL}`,
                    fontSize: "12px",
                    color: TFH.c.t4,
                  }}
                >
                  <span>{featuredArticle.date}</span>
                  <span
                    style={{
                      color: TFH.c.orange,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Lire l'article <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* GRILLE D'ARTICLES */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {filteredGrid.map((article) => (
              <div
                key={article.id}
                onClick={() => handleSelectArticle(article)}
                style={{ ...TFH.styles.card, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div
                    style={{
                      height: "128px",
                      background: article.colorClass || TFH.c.blue,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: TFH.c.white,
                    }}
                  >
                    {/* ✅ Correction : Vérification de l'icône */}
                    {article.icon && <article.icon size={32} />}
                  </div>
                  <div style={{ padding: "16px" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: TFH.c.t3,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {article.category}
                      </span>
                      <span
                        style={{
                          ...TFH.styles.badge,
                          background: article.badge.type === "deb" ? `${TFH.c.cyan}10` : `${TFH.c.blue}10`,
                          border: `1px solid ${article.badge.type === "deb" ? TFH.c.cyan + "30" : TFH.c.blue + "30"}`,
                          color: article.badge.type === "deb" ? TFH.c.cyan : TFH.c.blue,
                        }}
                      >
                        {article.badge.text}
                      </span>
                    </div>
                    <h4
                      style={{
                        fontFamily: TFH.font.title,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: TFH.c.t1,
                        marginBottom: "6px",
                      }}
                    >
                      {article.title}
                    </h4>
                    <p style={{ color: TFH.c.t3, fontSize: "13px", lineHeight: 1.6 }}>{article.summary}</p>
                  </div>
                </div>
                <div
                  style={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: TFH.c.t3,
                    borderTop: `1px solid ${TFH.c.borderL}`,
                  }}
                >
                  <span>{article.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // === VUE ARTICLE ===
        <div style={{ opacity: 1, animation: "fadeIn 0.3s ease-in" }}>
          {/* BARRE DE PROGRESSION */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                height: "4px",
                background: TFH.c.border,
                borderRadius: TFH.radius.full,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "45%",
                  background: TFH.c.cyan,
                  borderRadius: TFH.radius.full,
                }}
              />
            </div>
          </div>

          {/* FIL D'ARIANE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "16px",
              fontSize: "12px",
              color: TFH.c.t3,
            }}
          >
            <span onClick={() => setSelectedArticle(null)} style={{ cursor: "pointer", color: TFH.c.t2 }}>
              Blog
            </span>
            <ChevronRight size={12} />
            <span style={{ color: TFH.c.blue, fontWeight: 600, textTransform: "uppercase" }}>
              {selectedArticle.category}
            </span>
            <ChevronRight size={12} />
            <span style={{ color: TFH.c.t2 }}>{selectedArticle.title}</span>
          </div>

          {/* TITRE */}
          <h1
            style={{
              fontFamily: TFH.font.title,
              fontSize: "28px",
              fontWeight: 800,
              color: TFH.c.t1,
              marginBottom: "20px",
            }}
          >
            {selectedArticle.title}
          </h1>

          {/* MÉTA (Auteur + Date) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 0",
              borderBottom: `1px solid ${TFH.c.border}`,
              marginBottom: "24px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: TFH.c.surface,
                border: `1px solid ${TFH.c.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: TFH.c.t2,
                fontSize: "11px",
              }}
            >
              AF
            </div>
            <div>
              <span style={{ fontWeight: 600, color: TFH.c.t1 }}>Andy Fiey</span>
              <span style={{ fontSize: "11px", color: TFH.c.t3, marginLeft: "12px" }}>
                {selectedArticle.date} · {selectedArticle.readTime} de lecture
              </span>
            </div>
          </div>

          {/* BANNIÈRE VISUELLE */}
          <div
            style={{
              height: "192px",
              borderRadius: "14px",
              background: selectedArticle.colorClass || TFH.c.blue,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: TFH.c.white,
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            {/* ✅ Correction : Vérification de l'icône */}
            {selectedArticle.icon && <selectedArticle.icon size={48} />}
          </div>

          {/* CONTENU PRINCIPAL (2 colonnes) */}
          <div style={{ display: "flex", gap: "32px" }}>
            {/* SOMMAIRE (Sticky) */}
            <div style={{ width: "176px", position: "sticky", top: "24px", height: "fit-content" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: TFH.c.t3,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                Dans cet article
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {selectedArticle.toc.map((heading) => (
                  <button
                    key={heading}
                    onClick={() => setActiveToc(heading)}
                    style={{
                      padding: "6px 10px",
                      fontSize: "12px",
                      textAlign: "left",
                      borderLeft: `2px solid ${activeToc === heading ? TFH.c.blue : "transparent"}`,
                      background: activeToc === heading ? `${TFH.c.blue}10` : "transparent",
                      color: activeToc === heading ? TFH.c.blue : TFH.c.t3,
                      fontWeight: activeToc === heading ? 700 : 400,
                      borderRadius: "0 6px 6px 0",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {heading}
                  </button>
                ))}
              </div>
            </div>

            {/* CONTENU DE L'ARTICLE */}
            <div
              style={{
                flex: 1,
                fontSize: "14px",
                lineHeight: 1.7,
                color: TFH.c.t2,
              }}
            >
              {selectedArticle.contentBlocks.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return <p key={index} style={{ marginBottom: "16px" }}>{block.text}</p>;
                  case "heading":
                    return (
                      <h3
                        key={index}
                        style={{
                          fontFamily: TFH.font.title,
                          fontSize: "16px",
                          fontWeight: 700,
                          color: TFH.c.t1,
                          paddingTop: "12px",
                          marginBottom: "12px",
                          borderBottom: `1px solid ${TFH.c.borderL}`,
                        }}
                      >
                        {block.text}
                      </h3>
                    );
                  case "tip":
                    return (
                      <div
                        key={index}
                        style={{
                          borderLeft: `4px solid ${TFH.c.cyan}`,
                          background: `${TFH.c.cyan}10`,
                          padding: "16px",
                          borderRadius: "0 12px 12px 0",
                          margin: "16px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: TFH.c.cyan,
                            marginBottom: "8px",
                          }}
                        >
                          <Lightbulb size={14} color={TFH.c.cyan} /> {block.title || "Astuce"}
                        </div>
                        <p style={{ fontSize: "13px", color: TFH.c.t3 }}>{block.text}</p>
                      </div>
                    );
                  case "warning":
                    return (
                      <div
                        key={index}
                        style={{
                          borderLeft: `4px solid ${TFH.c.orange}`,
                          background: `${TFH.c.orange}10`,
                          padding: "16px",
                          borderRadius: "0 12px 12px 0",
                          margin: "16px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: TFH.c.orange,
                            marginBottom: "8px",
                          }}
                        >
                          <AlertTriangle size={14} color={TFH.c.orange} /> {block.title || "Attention"}
                        </div>
                        <p style={{ fontSize: "13px", color: TFH.c.t3 }}>{block.text}</p>
                      </div>
                    );
                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        style={{
                          borderLeft: `4px solid ${TFH.c.blue}`,
                          background: TFH.c.surface,
                          padding: "16px",
                          borderRadius: "0 12px 12px 0",
                          margin: "20px 0",
                          fontStyle: "italic",
                          color: TFH.c.t2,
                          fontSize: "14px",
                        }}
                      >
                        &ldquo;{block.text}&rdquo;
                      </blockquote>
                    );
                  default:
                    return null;
                }
              })}

              {/* MODULE INTERACTIF (si présent) */}
              {InteractiveModule && (
                <div
                  style={{
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: `1px dashed ${TFH.c.border}`,
                  }}
                >
                  <InteractiveModule />
                </div>
              )}

              {/* TAGS */}
              <div
                style={{
                  paddingTop: "24px",
                  marginTop: "32px",
                  borderTop: `1px solid ${TFH.c.border}`,
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: TFH.c.t3,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "12px",
                  }}
                >
                  Mots-clés
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} style={{ ...TFH.styles.tag }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOUTON RETOUR */}
          <div
            style={{
              textAlign: "center",
              paddingTop: "32px",
              marginTop: "48px",
              borderTop: `1px solid ${TFH.c.border}`,
            }}
          >
            <button onClick={() => setSelectedArticle(null)} style={{ ...TFH.styles.btn, ...TFH.styles.btnSecondary }}>
              <ArrowLeft size={14} /> Retour au blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
}