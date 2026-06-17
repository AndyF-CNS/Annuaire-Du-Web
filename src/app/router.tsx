import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Annuaire from "../pages/Annuaire";
import Fiches from "../pages/Fiches"; // Attention au 's' si ton fichier s'appelle Fiches.tsx
import IA from "../pages/IA";
import Favoris from "../pages/Favoris";
import TechFacile from "../pages/TechFacile";
import Ateliers from "../pages/Ateliers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // C'est le parent qui contient le design global
    children: [
      {
        index: true, // Uniquement pour la racine (/)
        element: <Home />,
      },
      {
        path: "annuaire",
        element: <Annuaire />,
      },
      {
        path: "fiches",
        element: <Fiches />,
      },
      {
        path: "ia",
        element: <IA />,
      },
      {
        path: "favoris",
        element: <Favoris />,
      },
      {
        path: "tech-facile",
        element: <TechFacile />,
      },
      {
        path:"ateliers",
        element: <Ateliers />
      }
    ],
  },
]);