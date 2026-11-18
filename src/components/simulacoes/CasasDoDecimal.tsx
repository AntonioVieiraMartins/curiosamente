import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const antes = ['unidades', 'dezenas', 'centenas', 'unidades de milhar']
const depois = ['décimos', 'centésimos', 'milésimos']

type Dig = { c: string; lado: 'i' | 'f'; pos: number } // pos: distância até a vírgula

// Toque num algarismo para ver o nome da casa, à esquerda e à direita da vírgula
export default function CasasDoDecimal() {
  const [texto, setTexto] = useState('3,472')
  const [sel, setSel] = useState(0)
  const id = useId()
  const [inteira, frac = ''] = texto.split(',')
  const digs: Dig[] = [
    ...inteira.split('').map((c, k) => ({ c, lado: 'i' as const, pos: inteira.length - 1 - k })),
    ...frac.split('').map((c, k) => ({ c, lado: 'f' as const, pos: k })),
  ]
  const atual = digs[Math.min(sel, digs.length - 1)]
  const nome = atual.lado === 'i' ? antes[atual.pos] : depois[atual.pos]
  const valor = atual.lado === 'i'
    ? (Number(atual.c) * 10 ** atual.pos).toLocaleString('pt-BR')
    : (Number(atual.c) / 10 ** (atual.pos + 1)).toLocaleString('pt-BR', { maximumFractionDigits: 3 })

  function mudar(bruto: string) {
    const limpo = bruto.replace(/[^\d,]/g, '')
    const [i = '', ...resto] = limpo.split(',')
    const f = resto.join('')
    const novo = `${i.slice(0, 4)}${limpo.includes(',') ? ',' + f.slice(0, 3) : ''}`
    setTexto(novo || '0')
    setSel(0)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">As casas do número decimal</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Digite um decimal, como 3,472 (até 3 casas depois da vírgula)</label>
      <input id={id} inputMode="decimal" value={texto} onChange={(e) => mudar(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-fundo px-3 text-lg" />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {digs.map((d, k) => (
          <span key={k} className="flex items-center gap-2">
            {k === inteira.length && frac !== '' && <span className="text-3xl font-bold text-coral" aria-label="vírgula">,</span>}
            <button type="button" aria-pressed={atual === d} onClick={() => setSel(k)} className={`min-h-12 min-w-12 rounded-xl border-2 text-2xl font-bold ${atual === d ? 'border-azul bg-fundo' : 'border-borda'}`}>{d.c}</button>
          </span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O algarismo <b>{atual.c}</b> está na casa dos <b>{nome}</b>. Aqui ele vale <b>{valor}</b>.
      </p>
    </div>
  )
}
