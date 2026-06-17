import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 antialiased">
      {/* Sidebar fixe à gauche */}
      <Sidebar />

      {/* Zone de contenu décalée de la largeur de la sidebar (ml-72) */}
      <div className="flex-1 ml-52 flex flex-col min-w-0">
        <Topbar /> 

        {/* Conteneur principal centré et fluide */}
        <main className="flex-1 p-6 md:p-8 max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}