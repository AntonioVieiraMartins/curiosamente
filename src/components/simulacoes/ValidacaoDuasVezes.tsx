import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// A regra é conferida no salão (rápido, para ajudar) e na cozinha (obrigatório, para proteger).
export default function ValidacaoDuasVezes() {
  const [idade, setIdade] = useState('150')
  const [pulou, setPulou] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const id = useId()
  const n = Number(idade)
  const valida = idade.trim() !== '' && Number.isInteger(n) && n >= 1 && n <= 120

  const aviso = valida ? 'Idade válida.' : 'Digite um número inteiro de 1 a 120.'
  const resultado = valida
    ? 'Os dois lados aceitam. O cadastro é gravado.'
    : pulou
      ? 'O salão foi driblado (alguém mexeu no pedido), mas a cozinha conferiu de novo e recusou. Nada foi gravado.'
      : 'O salão avisou antes de enviar. O pedido nem saiu do navegador.'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cadastro com campo "idade"</p>
      <label htmlFor={id} className="mt-2 block font-semibold">Idade (de 1 a 120)</label>
      <input id={id} inputMode="numeric" value={idade} onChange={(e) => { setIdade(e.target.value); setEnviado(false) }}
        className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda px-3 text-base" />
      <p aria-live="polite" className={`mt-1 text-[15px] ${valida ? 'text-verde' : 'text-coral'}`}>Salão: {aviso}</p>
      <button type="button" aria-pressed={pulou} onClick={() => { setPulou(!pulou); setEnviado(false) }}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${pulou ? 'border-coral' : 'border-borda'}`}>
        {pulou ? 'Alguém está driblando o salão (ligado)' : 'Alguém está driblando o salão (desligado)'}
      </button>
      <button type="button" onClick={() => setEnviado(true)} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Enviar cadastro</button>
      {enviado && <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{resultado}</p>}
    </div>
  )
}
