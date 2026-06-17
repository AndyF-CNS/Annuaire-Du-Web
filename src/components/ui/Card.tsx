type Props = {
 children: React.ReactNode
 className?: string
}

export default function Card({
 children,
 className,
}: Props) {
 return (
  <div
   className={`
   bg-white
   border
   rounded-3xl
   p-6
   shadow-sm

   hover:shadow-xl
   hover:-translate-y-1

   transition

   ${className}
   `}
  >
   {children}
  </div>
 )
}