import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Blue-green: duas cópias do sistema; o tráfego troca de uma para a outra
export default function AzulEVerde() {
  const [noAr, setNoAr] = useState<'azul' | 'verde'>('azul')
  const [msg, setMsg] = useState('A versão 1 (azul) atende os visitantes. A versão 2 (verde) está pronta, mas escondida.')
  const trocar = () => {
    const novo = noAr === 'azul' ? 'verde' : 'azul'
    setNoAr(novo)
    setMsg(novo === 'verde' ? 'Troca feita: agora a versão 2 (verde) atende. Se algo der errado, é só voltar.' : 'Voltamos para a versão 1 (azul) em um clique: esse é o "rollback".')
  }
  const caixa = (cor: 'azul' | 'verde', nome: string) => (
    <div className={`rounded-2xl border-2 p-3 text-center ${noAr === cor ? (cor === 'azul' ? 'border-azul bg-fundo' : 'border-verde bg-fundo') : 'border-borda opacity-60'}`}>
      <p className="font-semibold">{nome}</p>
      <p className="text-sm text-suave">{noAr === cor ? 'No ar: recebe visitantes' : 'Escondida'}</p>
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Azul e verde</p>
      <div className="mt-3 grid grid-cols-2 gap-2">{caixa('azul', 'Versão 1 (azul)')}{caixa('verde', 'Versão 2 (verde)')}</div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{msg}</p>
      <button type="button" onClick={trocar} className="mt-3 min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Trocar o tráfego</button>
    </div>
  )
}
