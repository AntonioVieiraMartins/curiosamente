import { useState } from 'react'
import { cartao } from '../ui/estilos'

const sorteia = () => {
  const casas = 2 + Math.floor(Math.random() * 4)
  const base = 10 ** (casas - 1)
  const a = base + Math.floor(Math.random() * 9 * base)
  // Metade das vezes o segundo número tem o mesmo começo, para treinar olhar casa por casa
  const b = Math.random() < 0.5 ? a - (a % 10) + Math.floor(Math.random() * 10) : base + Math.floor(Math.random() * 9 * base)
  return [a, b] as const
}

export default function ComparaNumeros() {
  const [[a, b], setPar] = useState<readonly [number, number]>([4735, 4753])
  const [resp, setResp] = useState<string | null>(null)
  const certa = a > b ? '>' : a < b ? '<' : '='
  const sa = String(a), sb = String(b)
  const dif = sa.length === sb.length ? [...sa].findIndex((x, k) => x !== sb[k]) : -1
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual é maior?</p>
      <p className="mt-3 text-center text-3xl font-bold">{a.toLocaleString('pt-BR')} <span className="text-suave">?</span> {b.toLocaleString('pt-BR')}</p>
      <div className="mt-3 flex justify-center gap-2">
        {['<', '=', '>'].map((s) => (
          <button key={s} type="button" onClick={() => setResp(s)} className="min-h-12 min-w-14 rounded-xl border-2 border-azul text-2xl font-bold">{s}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Compare começando pela casa da esquerda.' : resp === certa
          ? `Certo! ${sa.length !== sb.length ? 'Quem tem mais algarismos é maior.' : dif >= 0 ? `Os números só diferem a partir da ${dif + 1}ª casa (da esquerda): ${sa[dif]} contra ${sb[dif]}.` : 'São iguais.'}`
          : `Ainda não. ${sa.length !== sb.length ? 'Veja quantos algarismos cada um tem.' : 'Olhe o primeiro algarismo diferente, da esquerda para a direita.'}`}
      </p>
      <button type="button" onClick={() => { setPar(sorteia()); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Outro par</button>
    </div>
  )
}
