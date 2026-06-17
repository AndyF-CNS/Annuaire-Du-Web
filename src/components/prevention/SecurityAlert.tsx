import { ShieldAlert } from "lucide-react"

export default function SecurityAlert() {
  return (
    <section className="max-w-7xl mx-auto p-6">

      <div
        className="
        bg-red-50
        border-2
        border-red-500
        rounded-2xl
        p-6
      "
      >
        <div className="flex items-center gap-3 mb-4">

          <ShieldAlert
            size={30}
            className="text-red-700"
          />

          <h2 className="text-xl font-bold text-red-700">
            Prévention numérique
          </h2>

        </div>

        <ul className="list-disc pl-6 space-y-2 text-red-800">
          <li>Ne communiquez jamais vos mots de passe.</li>
          <li>Vérifiez toujours l'adresse du site.</li>
          <li>Méfiez-vous des e-mails urgents.</li>
          <li>Ne cliquez pas sur des liens suspects.</li>
        </ul>

      </div>

    </section>
  )
}