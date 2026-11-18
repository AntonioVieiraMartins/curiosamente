import { useState } from 'react'
import { cartao } from '../ui/estilos'

const nomes = ['Milhar', 'Centena', 'Dezena', 'Unidade']
const pesos = [1000, 100, 10, 1]

// Quatro caixas de valor. Passar de 9 numa caixa "troca" por 1 na caixa da esquerda.
export default function CaixasDeValor() {
  const [d, setD] = useState([0, 0, 0, 0])
  const [msg, setMsg] = useState('Aperte o + de uma caixa para colocar uma peça nela.')
  const total = d.reduce((s, v, i) => s + v * pesos[i], 0)

  function mais(i: number) {
    const novo = [...d]
    if (novo[i] < 9) { novo[i]++; setMsg(`Mais 1 ${nomes[i].toLowerCase()}.`) }
    else if (i === 0) { setMsg('Chegamos ao limite desta brincadeira: 9 milhares.'); return }
    else {
      novo[i] = 0; novo[i - 1] = Math.min(9, novo[i - 1] + 1)
      setMsg(`10 ${nomes[i].toLowerCase()}s viraram 1 ${nomes[i - 1].toLowerCase()}! É a troca de 10 em 10.`)
    }
    setD(novo)
  }
  function menos(i: number) {
    if (d[i] === 0) { setMsg('Essa caixa já está vazia.'); return }
    const novo = [...d]; novo[i]--; setD(novo); setMsg(`Menos 1 ${nomes[i].toLowerCase()}.`)
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Caixas de valor</p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {nomes.map((n, i) => (
          <div key={n} className="rounded-2xl border-2 border-borda p-2 text-center">
            <p className="text-[13px] font-semibold">{n}</p>
            <p className="text-3xl font-bold">{d[i]}</p>
            <div className="mt-1 flex justify-center gap-1">
              <button type="button" aria-label={`Menos uma ${n}`} onClick={() => menos(i)} className="min-h-11 min-w-11 rounded-full border-2 border-borda font-bold">−</button>
              <button type="button" aria-label={`Mais uma ${n}`} onClick={() => mais(i)} className="min-h-11 min-w-11 rounded-full border-2 border-azul font-bold">+</button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-2xl font-bold">{total.toLocaleString('pt-BR')}</p>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">{msg}</p>
    </div>
  )
}
