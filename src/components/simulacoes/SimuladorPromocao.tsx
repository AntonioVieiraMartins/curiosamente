import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const pct = (v: number) => `${v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`

type Props = { preco?: number; inicial1?: number; inicial2?: number }

// Dois descontos seguidos: o segundo é calculado sobre o preço JÁ reduzido, por isso não se somam
export default function SimuladorPromocao({ preco = 200, inicial1 = 50, inicial2 = 20 }: Props) {
  const [d1, setD1] = useState(inicial1)
  const [d2, setD2] = useState(inicial2)
  const id = useId()

  const depois1 = preco * (1 - d1 / 100)
  const depois2 = depois1 * (1 - d2 / 100)
  const real = (1 - depois2 / preco) * 100
  const soma = d1 + d2

  const barras = [
    { rotulo: 'Preço na etiqueta', valor: preco, cor: 'bg-borda' },
    { rotulo: `Depois de ${d1}% de desconto`, valor: depois1, cor: 'bg-amarelo' },
    { rotulo: `Depois de mais ${d2}% no caixa`, valor: depois2, cor: 'bg-verde' },
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Simulador de promoção</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[
          { valor: d1, mudar: setD1, texto: '1º desconto (na vitrine)', sufixo: '1' },
          { valor: d2, mudar: setD2, texto: '2º desconto (no caixa)', sufixo: '2' },
        ].map((c) => (
          <div key={c.sufixo}>
            <label htmlFor={id + c.sufixo} className="block font-semibold">
              {c.texto}: <span className="text-azul-texto">{c.valor}%</span>
            </label>
            <input
              id={id + c.sufixo}
              type="range"
              min={0}
              max={90}
              step={5}
              value={c.valor}
              onChange={(e) => c.mudar(Number(e.target.value))}
              className="h-11 w-full cursor-pointer accent-[var(--color-azul)]"
            />
          </div>
        ))}
      </div>

      <div className="mt-2 space-y-3">
        {barras.map((b) => (
          <div key={b.rotulo}>
            <div className="flex justify-between gap-3 text-[15px]">
              <span>{b.rotulo}</span>
              <strong>{reais(b.valor)}</strong>
            </div>
            <div className="mt-1 h-4 overflow-hidden rounded-full bg-fundo">
              <div className={`h-full rounded-full ${b.cor} transition-[width] duration-300`} style={{ width: `${(b.valor / preco) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div aria-live="polite" className="mt-5 grid gap-3 sm:grid-cols-2">
        <p className="rounded-2xl bg-coral/10 p-4">
          <span className="block text-sm text-suave">Somando os anúncios</span>
          <span className="font-serif text-3xl font-medium text-coral line-through decoration-2">{pct(soma)}</span>
        </p>
        <p className="rounded-2xl bg-verde/10 p-4">
          <span className="block text-sm text-suave">Desconto de verdade</span>
          <span className="font-serif text-3xl font-medium text-verde">{pct(real)}</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="button"
          onClick={() => { setD1(d2); setD2(d1) }}
          className="min-h-11 rounded-full border border-borda px-5 font-semibold hover:border-texto/30"
        >
          Inverter a ordem
        </button>
        <span className="text-[15px] text-suave">
          {d1 === 0 || d2 === 0 ? 'Com um dos descontos em zero, aí sim a soma bate.' : `A diferença (${pct(soma - real)}) é o "desconto sobre o desconto" que não acontece.`}
        </span>
      </div>
    </div>
  )
}
