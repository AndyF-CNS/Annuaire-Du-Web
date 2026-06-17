type Props = {
  value: string
  onChange: (value: string) => void
}

export default function FicheSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      placeholder="🔍 Rechercher une fiche..."
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="
      w-full
      rounded-2xl
      border
      border-slate-300
      p-4
      mb-6
      "
    />
  )
}