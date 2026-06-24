import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
// 1. Importation de Lenis
import { ReactLenis, useLenis } from "lenis/react"

// 2. Petit composant magique pour reset le scroll au changement de page
function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      // Remonte instantanément (immediate: true) au changement de route
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

  return null
}

export default function AppLayout() {
  return (
    // 3. On enveloppe l'application avec les options de souplesse (lerp / duration)
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <ScrollToTop />
      
      <div className="w-full max-w-full min-h-screen bg-slate-100 overflow-x-hidden">
        {/* La Sidebar gère elle-même son affichage */}
        <Sidebar />

        {/* Contenu principal */}
        <div className="md:ml-60 flex flex-col min-h-screen pb-20 md:pb-0 min-w-0 max-w-full overflow-x-hidden">
          <Topbar /> 
          <main className="flex-1 p-6 max-w-6xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ReactLenis>
  )
}