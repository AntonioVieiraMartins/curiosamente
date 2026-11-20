import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ITENS = [
  { nome: 'Bactéria', euc: false, porque: 'Procarionte: o DNA fica solto no citoplasma, sem núcleo com membrana.' },
  { nome: 'Levedura (o fermento de pão)', euc: true, porque: 'Eucarionte: é um fungo unicelular, com núcleo e organelas.' },
  { nome: 'Célula do fígado humano', euc: true, porque: 'Eucarionte: tem núcleo e muitas organelas, como todas as células de animais.' },
  { nome: 'Cianobactéria', euc: false, porque: 'Procarionte: faz fotossíntese, mas não tem cloroplasto nem núcleo organizado.' },
  { nome: 'Ameba', euc: true, porque: 'Eucarionte: é um protista unicelular, com núcleo.' },
  { nome: 'Célula de folha de alface', euc: true, porque: 'Eucarionte: núcleo, cloroplastos, parede celular e vacúolo.' },
]

export default function ProcariontesOuEucariontes() {
  const [resp, setResp] = useState<(boolean | null)[]>(ITENS.map(() => null))
  const acertos = resp.filter((r, i) => r === ITENS[i].euc).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tem núcleo com membrana?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {ITENS.map((it, i) => {
          const r = resp[i]
          return (
            <li key={it.nome} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{it.nome}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[false, true].map((v) => (
                  <button key={String(v)} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? v : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === v ? (v === it.euc ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>{v ? 'Eucarionte' : 'Procarionte'}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === it.euc ? 'Certo. ' : 'Quase. '}{it.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {ITENS.length}</p>
        <button type="button" onClick={() => setResp(ITENS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
