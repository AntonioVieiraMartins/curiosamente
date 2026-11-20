// Bolinha com quantos cartões esperam revisão hoje
export default function Pendentes({ n, flutuante = false }: { n: number; flutuante?: boolean }) {
  if (n === 0) return null
  return (
    <span
      className={`grid place-items-center rounded-full bg-coral text-xs font-bold text-white ${
        flutuante ? 'absolute right-3.5 top-0 h-[18px] min-w-[18px] px-1 text-[11px]' : 'h-[22px] min-w-[22px] px-1.5'
      }`}
    >
      <span className="sr-only">{n} para revisar hoje: </span>
      <span aria-hidden="true">{n}</span>
    </span>
  )
}

