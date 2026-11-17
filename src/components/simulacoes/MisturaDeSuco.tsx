import { useState } from 'react'
import Passo from './Passo'
import { cartao } from '../ui/estilos'

type Jarra = { suco: number; agua: number }

const MAX = 9
const porcento = (j: Jarra) => (j.suco + j.agua === 0 ? 0 : j.suco / (j.suco + j.agua))
const pct = (v: number) => `${(v * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`

// A cor da jarra depende da RAZÃO entre suco e total, não da quantidade de suco
function DesenhoJarra({ j, nome }: { j: Jarra; nome: string }) {
  const total = j.suco + j.agua
  const altura = (total / (2 * MAX)) * 92
  return (
    <svg viewBox="0 0 80 110" className="mx-auto h-32 w-auto" role="img" aria-label={`Jarra ${nome}: ${j.suco} de suco e ${j.agua} de água`}>
      <path d="M12 6 H68 V100 a6 6 0 0 1 -6 6 H18 a6 6 0 0 1 -6 -6 Z" fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth="2" />
      <rect x="14" y={104 - altura} width="52" height={altura} rx="4" fill="var(--color-coral)" fillOpacity={Math.min(1, 0.05 + porcento(j) * 1.4)} style={{ transition: 'all 250ms' }} />
    </svg>
  )
}

function Lado({ j, mudar, nome }: { j: Jarra; mudar: (j: Jarra) => void; nome: string }) {
  return (
    <div className="space-y-3 text-center">
      <p className="font-semibold">Jarra {nome}</p>
      <DesenhoJarra j={j} nome={nome} />
      <p className="text-[15px]">
        {j.suco} : {j.agua} · <strong>{pct(porcento(j))}</strong> é suco
      </p>
      <Passo rotulo="Copos de suco" valor={j.suco} min={0} max={MAX} mudar={(v) => mudar({ ...j, suco: v })} />
      <Passo rotulo="Copos de água" valor={j.agua} min={0} max={MAX} mudar={(v) => mudar({ ...j, agua: v })} />
    </div>
  )
}

// Duas jarras de suco concentrado com água: qual fica mais forte?
export default function MisturaDeSuco() {
  const [a, setA] = useState<Jarra>({ suco: 2, agua: 3 })
  const [b, setB] = useState<Jarra>({ suco: 3, agua: 5 })

  const pa = porcento(a)
  const pb = porcento(b)
  // Produto cruzado: compara sem arredondar (2/5 contra 3/8 vira 2 × 8 contra 3 × 5)
  const ladoA = a.suco * (b.suco + b.agua)
  const ladoB = b.suco * (a.suco + a.agua)
  const vazia = a.suco + a.agua === 0 || b.suco + b.agua === 0

  let veredito = 'Coloque alguma coisa nas duas jarras.'
  if (!vazia) {
    veredito = ladoA === ladoB
      ? 'Mesmo sabor! As duas estão na mesma proporção.'
      : `A jarra ${ladoA > ladoB ? 'A' : 'B'} está mais forte (${pct(Math.max(pa, pb))} contra ${pct(Math.min(pa, pb))} de suco).`
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Misturador de suco</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-6">
        <Lado j={a} mudar={setA} nome="A" />
        <Lado j={b} mudar={setB} nome="B" />
      </div>
      <p aria-live="polite" className="mt-5 rounded-2xl bg-fundo p-4 font-semibold">{veredito}</p>
    </div>
  )
}
