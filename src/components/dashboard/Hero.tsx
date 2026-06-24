import { TFH } from "../../themes/tfh-themes"

export default function Hero() {
  return (
    <section
       style={{
          background: TFH.c.gradientCyan, color: TFH.c.white, padding: TFH.spacing.md, borderRadius: TFH.radius.lg, marginBottom: TFH.spacing.xl, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "start", boxShadow: TFH.shadow.sm,}}>
      
      <h1 className="text-3xl font-bold tracking-tight">
        Tech Facile Hub
      </h1>

      <p className="mt-2 text-base text-white/90 max-w-xl">
        Portail numérique et ressources digitales
      </p>
    </section>
  )
}