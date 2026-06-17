type Props = {
  title: string
  value: string
  
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      p-6
      shadow-sm
      "
    >
      <p className="text-slate-500">
        {title}
      </p>

      <h2
        className="
        text-4xl
        font-bold
        mt-2
        "
      >
        {value}
      </h2>
    </div>
  )
}