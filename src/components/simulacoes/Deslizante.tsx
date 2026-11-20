import { useId } from 'react'

type Props = { rotulo: string; valor: number; min: number; max: number; passo?: number; aoMudar: (v: number) => void }

// Controle deslizante com rótulo, usado nas simulações de geometria analítica
export default function Deslizante({ rotulo, valor, min, max, passo = 1, aoMudar }: Props) {
  const id = useId()
  return (
    <label htmlFor={id} className="block text-sm font-semibold">
      {rotulo}: {valor.toLocaleString('pt-BR')}
      <input id={id} type="range" min={min} max={max} step={passo} value={valor} onChange={(e) => aoMudar(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
    </label>
  )
}
