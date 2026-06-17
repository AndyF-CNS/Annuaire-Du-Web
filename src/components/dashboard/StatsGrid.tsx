import { Globe, BookOpen, Sparkles, Star } from "lucide-react"

export default function StatsGrid() {
  const stats = [
    {
      title: "Sites",
      value: 125,
      icon: Globe,
    },
    {
      title: "Fiches",
      value: 42,
      icon: BookOpen,
    },
    {
      title: "IA",
      value: 18,
      icon: Sparkles,
    },
    {
      title: "Favoris",
      value: 15,
      icon: Star,
    },
  ]

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <div
            key={stat.title}
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            "
          >
            <Icon size={28} />

            <h3 className="text-3xl font-bold mt-4">
              {stat.value}
            </h3>

            <p>{stat.title}</p>
          </div>
        )
      })}
    </div>
  )
}