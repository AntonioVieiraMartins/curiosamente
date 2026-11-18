import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Monte um valor com notas e moedas do real. Trabalha em centavos para não errar nas casas decimais
const pecas = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5]
const rot = (c: number) => (c >= 200 ? `R$ ${c / 100}` : c === 100 ? 'R$ 1' : `${c} c`)
const reais = (c: number) => (c / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const alvos = [3790, 8525, 14340, 1635, 6005]

export default function NotasEMoedas() {
  const [alvoI, setAlvoI] = useState(0)
  const [cont, setCont] = useState<Record<number, number>>({})
  const alvo = alvos[alvoI]
  const total = pecas.reduce((s, p) => s + p * (cont[p] ?? 0), 0)
  const mexe = (p: number, d: number) => setCont({ ...cont, [p]: Math.max(0, (cont[p] ?? 0) + d) })
  const n = pecas.reduce((s, p) => s + (cont[p] ?? 0), 0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte o valor</p>
      <p className="mt-2 text-lg font-semibold">Forme <b>{reais(alvo)}</b></p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {pecas.map((p) => (
          <div key={p} className="flex items-center justify-between gap-1 rounded-2xl border border-borda p-2">
            <span className="text-[15px] font-bold">{rot(p)}</span>
            <span className="flex items-center gap-1">
              <button type="button" aria-label={`Tirar ${rot(p)}`} onClick={() => mexe(p, -1)} className="grid size-11 place-items-center rounded-full border border-borda text-lg">−</button>
              <span className="w-5 text-center font-bold">{cont[p] ?? 0}</span>
              <button type="button" aria-label={`Pôr ${rot(p)}`} onClick={() => mexe(p, 1)} className="grid size-11 place-items-center rounded-full border border-borda text-lg">+</button>
            </span>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Você juntou <b>{reais(total)}</b> com {n} peça{n === 1 ? '' : 's'}.{' '}
        {total === alvo ? 'Fechou o valor exato!' : total < alvo ? `Faltam ${reais(alvo - total)}.` : `Passou ${reais(total - alvo)}.`}
        {total === alvo && n > 0 ? ' Dica: dá para formar com menos peças, usando as de maior valor primeiro.' : ''}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => setCont({})} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Zerar</button>
        <button type="button" onClick={() => { setCont({}); setAlvoI((alvoI + 1) % alvos.length) }} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Outro valor</button>
      </div>
    </div>
  )
}
