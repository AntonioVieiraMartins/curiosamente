import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Seu computador e o GitHub guardam cópias do histórico. Enviar (push) e trazer (pull) mantêm as duas em dia.
export default function LocalEGithub() {
  const [naFrente, setNaFrente] = useState(0) // commits seus que o GitHub ainda não tem
  const [atras, setAtras] = useState(0) // commits no GitHub que você ainda não tem
  const [msg, setMsg] = useState('Tudo em dia: seu computador e o GitHub têm o mesmo histórico.')

  const commitar = () => { setNaFrente(naFrente + 1); setMsg('Você fez um commit. Só o seu computador tem ele por enquanto.') }
  const colega = () => { setAtras(atras + 1); setMsg('Uma colega enviou um commit para o GitHub. Você ainda não o tem.') }
  const push = () => {
    if (atras > 0) { setMsg('Push recusado: o GitHub tem commits que você não tem. Faça git pull primeiro para trazê-los.'); return }
    if (naFrente === 0) { setMsg('Nada para enviar.'); return }
    setNaFrente(0); setMsg('Push feito: o GitHub agora tem os seus commits.')
  }
  const pull = () => {
    if (atras === 0) { setMsg('Nada novo no GitHub.'); return }
    setAtras(0); setMsg('Pull feito: os commits da colega chegaram ao seu computador.')
  }
  const btn = 'min-h-11 rounded-full border-2 px-4 text-[15px] font-semibold'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Seu computador e o GitHub</p>
      <div className="mt-2 grid grid-cols-2 gap-2 text-center text-[15px]">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="font-semibold">Seu computador</p><p>{naFrente} commit{naFrente === 1 ? '' : 's'} a enviar</p></div>
        <div className="rounded-2xl border-2 border-verde p-3"><p className="font-semibold">GitHub</p><p>{atras} commit{atras === 1 ? '' : 's'} a trazer</p></div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={commitar} className={`${btn} border-borda`}>Fazer commit</button>
        <button type="button" onClick={colega} className={`${btn} border-borda`}>Colega envia commit</button>
        <button type="button" onClick={push} className={`${btn} border-azul font-mono`}>git push</button>
        <button type="button" onClick={pull} className={`${btn} border-verde font-mono`}>git pull</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{msg}</p>
    </div>
  )
}
