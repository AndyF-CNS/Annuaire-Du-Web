import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Landing from "../pages/Landing"; 
import Annuaire from "../pages/Annuaire";
import Fiches from "../pages/Fiches";
import IA from "../pages/IA";
import Favoris from "../pages/Favoris";
import TechFacile from "../pages/TechFacile";
import Ateliers from "../pages/Ateliers";
import Blog from "../pages/Blog";
import TFHBrandIdentity from "../pages/techfacilebrand";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  // 1. LA LANDING PAGE (Plein écran, racine du site)
  {
    path: "/",
    element: <Landing />,
  },
  
  // 2. L'APPLICATION (Englobée par le AppLayout avec la Sidebar)
  {
    element: <AppLayout />, // Notez qu'il n'y a plus de 'path' ici !
    children: [
      // Tous les liens de votre Sidebar arrivent ici
      { path: "/home", element: <Home /> },
      { path: "/annuaire", element: <Annuaire /> },
      { path: "/fiches", element: <Fiches /> },
      { path: "/ia", element: <IA /> },
      { path: "/favoris", element: <Favoris /> },
      { path: "/tech-facile", element: <TechFacile /> },
      { path: "/ateliers", element: <Ateliers /> },
      { path: "/blog", element: <Blog /> },
      { path: "/tfh-brand-identity", element: <TFHBrandIdentity /> }
    ],
  },
]);