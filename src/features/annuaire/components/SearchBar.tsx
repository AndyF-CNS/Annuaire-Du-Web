import {
 Search,
} from "lucide-react"

type Props = {
 value: string

 onChange:
 (value: string) => void
}

export default function SearchBar({
 value,
 onChange,
}: Props) {

 return (
  <div
   className="
   relative
   mb-8
   "
  >

   <Search
    size={20}
    className="
    absolute
    left-4
    top-4
    text-slate-400
    "
   />

   <input
    value={value}
    onChange={(e) =>
     onChange(e.target.value)
    }
    placeholder="
    Rechercher un site, une démarche, un service...
    "
    className="
    w-full
    bg-white
    border
    rounded-2xl
    py-4
    pl-12
    pr-4
    "
   />

  </div>
 )
}