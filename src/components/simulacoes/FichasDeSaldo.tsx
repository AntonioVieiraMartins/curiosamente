import { useState } from 'react'
import RetaNumerica from './RetaNumerica'
import { cartao } from '../ui/estilos'

// Fichas verdes valem +1 (crédito); fichas vermelhas valem −1 (dívida).
// Uma verde e uma vermelha juntas valem zero: é isso que deixa "tirar uma dívida" fazer sentido.
const LIMITE = 10

const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const entre = (n: number) => (n < 0 ? `(${sinal(n)})` : sinal(n))

type Acao = { texto: string; dPos: number; dNeg: number; conta: (s: number) => string }

export default function FichasDeSaldo({ inicialDividas = 5 }: { inicialDividas?: number }) {
  const [pos, setPos] = useState(0)
  const [neg, setNeg] = useState(inicialDividas)
  const [ultima, setUltima] = useState<string | null>(null)
  const saldo = pos - neg

  function fazer(a: Acao) {
    let p = pos
    let n = neg
    // Para tirar o que não tem, a pessoa troca "zero" por um par verde + vermelho
    const trocouZero = (a.dPos < 0 && p === 0) || (a.dNeg < 0 && n === 0)
    if (trocouZero) { p++; n++ }
    p += a.dPos
    n += a.dNeg
    if (p > LIMITE || n > LIMITE) return
    setPos(p)
    setNeg(n)
    setUltima(a.conta(saldo) + (trocouZero ? ' (não tinha ficha para tirar: trocamos um zero por um par + e −)' : ''))
  }

  const acoes: Acao[] = [
    { texto: 'Ganhar 1 crédito', dPos: 1, dNeg: 0, conta: (s) => `${sinal(s)} + 1 = ${sinal(s + 1)}` },
    { texto: 'Ganhar 1 dívida', dPos: 0, dNeg: 1, conta: (s) => `${sinal(s)} + (−1) = ${sinal(s - 1)}` },
    { texto: 'Tirar 1 crédito', dPos: -1, dNeg: 0, conta: (s) => `${sinal(s)} − 1 = ${sinal(s - 1)}` },
    { texto: 'Tirar 1 dívida', dPos: 0, dNeg: -1, conta: (s) => `${entre(s)} − (−1) = ${sinal(s + 1)}` },
  ]

  const ficha = (cor: string, sinalTexto: string, i: number) => (
    <span key={sinalTexto + i} className={`grid size-8 place-items-center rounded-full text-sm font-bold text-white ${cor}`}>{sinalTexto}</span>
  )

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Fichas de saldo</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="min-h-24 rounded-2xl bg-verde/10 p-3">
          <p className="text-sm text-suave">Créditos (+1)</p>
          <div className="mt-2 flex flex-wrap gap-1.5">{Array.from({ length: pos }, (_, i) => ficha('bg-verde', '+', i))}</div>
        </div>
        <div className="min-h-24 rounded-2xl bg-coral/10 p-3">
          <p className="text-sm text-suave">Dívidas (−1)</p>
          <div className="mt-2 flex flex-wrap gap-1.5">{Array.from({ length: neg }, (_, i) => ficha('bg-coral', '−', i))}</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {acoes.map((a) => (
          <button key={a.texto} type="button" onClick={() => fazer(a)} className="min-h-11 rounded-xl border-2 border-borda px-3 py-2 font-semibold hover:border-azul">
            {a.texto}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <RetaNumerica valor={saldo} cor={saldo < 0 ? 'var(--color-coral)' : 'var(--color-verde)'} />
      </div>

      <div aria-live="polite" className="mt-3 flex flex-wrap items-baseline justify-between gap-2 rounded-2xl bg-fundo p-4">
        <p>
          <span className="block text-sm text-suave">Saldo</span>
          <span className={`font-serif text-3xl font-medium ${saldo < 0 ? 'text-coral' : 'text-verde'}`}>{sinal(saldo)}</span>
        </p>
        {ultima && <p className="font-semibold">{ultima}</p>}
      </div>

      <button
        type="button"
        onClick={() => { setPos(0); setNeg(inicialDividas); setUltima(null) }}
        className="mt-3 min-h-11 py-2 font-semibold text-suave hover:text-texto"
      >
        Recomeçar
      </button>
    </div>
  )
}
