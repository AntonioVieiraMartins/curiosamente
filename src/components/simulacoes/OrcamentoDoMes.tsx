import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const RENDA = 2000
const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

const itens = [
  { nome: 'Moradia', max: 1200, cor: 'bg-azul' },
  { nome: 'Comida', max: 800, cor: 'bg-coral' },
  { nome: 'Transporte', max: 400, cor: 'bg-verde' },
  { nome: 'Lazer', max: 600, cor: 'bg-amarelo' },
  { nome: 'Guardar', max: 800, cor: 'bg-suave' },
]

// Monta o orçamento do mês: tudo o que entra precisa ter um destino.
export default function OrcamentoDoMes() {
  const [v, setV] = useState([700, 500, 200, 300, 200])
  const id = useId()
  const total = v.reduce((a, b) => a + b, 0)
  const sobra = RENDA - total
  const base = Math.max(RENDA, total)
  const pctGuardar = Math.round((v[4] / RENDA) * 100)
  let msg = `Fechou certinho: tudo o que entrou tem um destino. Você guarda ${pctGuardar}% da renda.`
  if (sobra < 0) msg = `Faltam ${brl(-sobra)}: os gastos passaram da renda. Algo precisa diminuir.`
  else if (sobra > 0) msg = `Sobram ${brl(sobra)} sem destino. Dinheiro sem plano costuma sumir: que tal guardar ou reservar para um objetivo? Você guarda ${pctGuardar}% da renda.`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Orçamento do mês · renda {brl(RENDA)}</p>
      <div className="mt-3 flex h-6 w-full overflow-hidden rounded-full bg-fundo" aria-hidden="true">
        {itens.map((it, k) => (
          <div key={it.nome} className={it.cor} style={{ width: `${(v[k] / base) * 100}%` }} />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {itens.map((it, k) => (
          <div key={it.nome}>
            <label htmlFor={`${id}-${k}`} className="flex items-center gap-2 text-sm font-semibold">
              <span className={`inline-block size-3 rounded-full ${it.cor}`} aria-hidden="true" />
              {it.nome}: <span className="text-coral">{brl(v[k])}</span>
            </label>
            <input id={`${id}-${k}`} type="range" min={0} max={it.max} step={50} value={v[k]}
              onChange={(e) => setV(v.map((x, j) => (j === k ? Number(e.target.value) : x)))}
              className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
          </div>
        ))}
      </div>
      <p aria-live="polite" className={`mt-3 rounded-2xl p-4 text-[15px] ${sobra < 0 ? 'bg-amarelo' : 'bg-fundo'}`}>
        Total dos gastos: <strong>{brl(total)}</strong>. {msg}
      </p>
    </div>
  )
}
