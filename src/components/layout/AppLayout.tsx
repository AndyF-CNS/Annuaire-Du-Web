import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* La Sidebar gère elle-même son affichage (fixed gauche ou bottom) */}
      <Sidebar />

      {/* Contenu : margin-left uniquement sur desktop (md) */}
      <div className="md:ml-52 flex flex-col min-h-screen pb-20 md:pb-0">
        <Topbar /> 
        <main className="flex-1 p-6 max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}