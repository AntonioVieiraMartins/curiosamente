import { useState } from 'react'
import Pizza from './Pizza'
import { cartao } from '../ui/estilos'

type Fracao = { cima: number; baixo: number }

const mdc = (a: number, b: number): number => (b === 0 ? a : mdc(b, a % b))
const mmc = (a: number, b: number) => (a * b) / mdc(a, b)

const MAX = 10
const botaoPasso = 'grid size-11 shrink-0 place-items-center rounded-full border border-borda text-xl font-semibold enabled:hover:border-texto/30 disabled:opacity-30'

function Passo({ rotulo, valor, min, max, mudar }: { rotulo: string; valor: number; min: number; max: number; mudar: (v: number) => void }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-center text-sm text-suave">{rotulo}</span>
      <div className="flex items-center gap-2">
        <button type="button" aria-label={`${rotulo}: menos`} className={botaoPasso} disabled={valor <= min} onClick={() => mudar(valor - 1)}>−</button>
        <span className="w-6 text-center font-semibold">{valor}</span>
        <button type="button" aria-label={`${rotulo}: mais`} className={botaoPasso} disabled={valor >= max} onClick={() => mudar(valor + 1)}>+</button>
      </div>
    </div>
  )
}

function Lado({ f, mudar, cor }: { f: Fracao; mudar: (f: Fracao) => void; cor: string }) {
  return (
    <div className="space-y-3">
      <Pizza cima={f.cima} baixo={f.baixo} cor={cor} tamanho={110} />
      <Passo rotulo="Pedaços pegos" valor={f.cima} min={0} max={f.baixo} mudar={(v) => mudar({ ...f, cima: v })} />
      <Passo rotulo="Cortes (partes)" valor={f.baixo} min={1} max={MAX} mudar={(v) => mudar({ baixo: v, cima: Math.min(f.cima, v) })} />
    </div>
  )
}

// Compara duas frações como pizzas e, depois, recorta as duas no mesmo tamanho de pedaço
export default function ComparadorFracoes() {
  const [a, setA] = useState<Fracao>({ cima: 2, baixo: 3 })
  const [b, setB] = useState<Fracao>({ cima: 3, baixo: 5 })
  const [recortar, setRecortar] = useState(false)

  const comum = mmc(a.baixo, b.baixo)
  const na = a.cima * (comum / a.baixo)
  const nb = b.cima * (comum / b.baixo)
  const veredito = na === nb ? 'As duas são do mesmo tamanho.' : `${na > nb ? `${a.cima}/${a.baixo}` : `${b.cima}/${b.baixo}`} é maior.`

  const tira = (n: number, cor: string) => (
    <div className="flex h-8 overflow-hidden rounded-lg border border-borda" aria-hidden="true">
      {Array.from({ length: comum }, (_, i) => (
        <span key={i} className="flex-1 border-r border-superficie last:border-r-0" style={{ background: i < n ? cor : 'var(--color-fundo)' }} />
      ))}
    </div>
  )

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Comparador de pizzas</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-6">
        <Lado f={a} mudar={setA} cor="var(--color-coral)" />
        <Lado f={b} mudar={setB} cor="var(--color-azul)" />
      </div>

      <button
        type="button"
        onClick={() => setRecortar((r) => !r)}
        aria-pressed={recortar}
        className="mt-6 min-h-11 rounded-full border border-borda px-5 font-semibold hover:border-texto/30"
      >
        {recortar ? 'Esconder o recorte' : 'Cortar as duas em pedaços iguais'}
      </button>

      <div aria-live="polite" className="mt-4 space-y-3">
        {recortar && (
          <div className="space-y-2 rounded-2xl bg-fundo p-4">
            <p className="text-[15px]">
              Cortando as duas em <strong>{comum}</strong> pedaços: <strong className="text-coral">{a.cima}/{a.baixo} = {na}/{comum}</strong> e{' '}
              <strong className="text-azul-texto">{b.cima}/{b.baixo} = {nb}/{comum}</strong>.
            </p>
            {tira(na, 'var(--color-coral)')}
            {tira(nb, 'var(--color-azul)')}
          </div>
        )}
        <p className="font-semibold">{veredito}</p>
      </div>
    </div>
  )
}
