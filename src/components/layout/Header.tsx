type HeaderProps = {
  logo?: string
}

export default function Header({
  logo = "/logo-tcv.png",
}: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-violet-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">

        <img
          src={logo}
          alt="Logo"
          className="mx-auto h-40 object-contain mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold">
          🌐 Annuaire du Web
        </h1>

        <p className="mt-4 text-slate-200">
          Simplifiez votre quotidien numérique
        </p>

      </div>
    </header>
  )
}