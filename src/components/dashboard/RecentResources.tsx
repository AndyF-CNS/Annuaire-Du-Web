import { fichesData } from "../../data/fiches"

export default function RecentResources() {

 return (
  <div
   className="
   bg-white
   rounded-3xl
   border
   p-6
   "
  >
   <h2
    className="
    text-xl
    font-bold
    mb-4
    "
   >
    Ressources récentes
   </h2>

   <div className="space-y-3">

    {fichesData.slice(0, 5).map(
     (fiche) => (
      <div
       key={fiche.id}
       className="
       border-b
       pb-2
       "
      >
       {fiche.titre}
      </div>
     )
    )}

   </div>
  </div>
 )
}