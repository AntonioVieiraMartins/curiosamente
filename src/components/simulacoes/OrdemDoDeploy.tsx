import { useState } from 'react'
import { cartao } from '../ui/estilos'

const certa = ['Escrever a mudança', 'Commit', 'Push para o GitHub', 'Build e testes automáticos', 'Publicar em produção']
const embaralhada = [3, 0, 4, 2, 1]

// Toque nos passos na ordem em que acontecem
export default function OrdemDoDeploy() {
  const [escolhidos, setEscolhidos] = useState<number[]>([])
  const [erro, setErro] = useState('')
  const proximo = escolhidos.length
  function tocar(i: number) {
    if (escolhidos.includes(i)) return
    if (i === proximo) { setEscolhidos([...escolhidos, i]); setErro('') }
    else setErro('Esse ainda não é o próximo passo. Pense no que precisa existir antes dele.')
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Toque nos passos na ordem certa</p>
      <div className="mt-3 grid gap-2">
        {embaralhada.map((i) => {
          const pos = escolhidos.indexOf(i)
          return (
            <button key={i} type="button" onClick={() => tocar(i)} className={`min-h-11 rounded-2xl border-2 px-4 py-2 text-left font-semibold ${pos >= 0 ? 'border-verde bg-fundo' : 'border-borda'}`}>
              {pos >= 0 ? `${pos + 1}. ` : ''}{certa[i]}
            </button>
          )
        })}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {escolhidos.length === certa.length ? 'Ordem certa! É o caminho de quase todo deploy.' : erro || 'Qual vem primeiro?'}
      </p>
      <button type="button" onClick={() => { setEscolhidos([]); setErro('') }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
    </div>
  )
}
