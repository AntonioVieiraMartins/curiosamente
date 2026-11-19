import { useState } from 'react'
import { cartao } from '../ui/estilos'

// 2 < x ≤ 5: duas condições ao mesmo tempo. A borda de baixo e a de cima podem entrar ou não.
export default function IntervaloDuplo() {
  const [baixo, setBaixo] = useState(2)
  const [alto, setAlto] = useState(5)
  const [incBaixo, setIncBaixo] = useState(false)
  const [incAlto, setIncAlto] = useState(true)
  const inteiros: number[] = []
  for (let v = -2; v <= 10; v++) {
    const okBaixo = incBaixo ? v >= baixo : v > baixo
    const okAlto = incAlto ? v <= alto : v < alto
    if (okBaixo && okAlto) inteiros.push(v)
  }
  const escrita = `${baixo} ${incBaixo ? '≤' : '<'} x ${incAlto ? '≤' : '<'} ${alto}`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte um intervalo</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block font-semibold">Início: {baixo}
            <input type="range" min={-2} max={9} value={baixo} onChange={(e) => setBaixo(Math.min(Number(e.target.value), alto))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
          </label>
          <button type="button" aria-pressed={incBaixo} onClick={() => setIncBaixo(!incBaixo)} className="min-h-11 rounded-full border-2 border-borda px-3 text-sm font-semibold">
            {incBaixo ? 'Entra (≤)' : 'Não entra (<)'}
          </button>
        </div>
        <div>
          <label className="block font-semibold">Fim: {alto}
            <input type="range" min={-1} max={10} value={alto} onChange={(e) => setAlto(Math.max(Number(e.target.value), baixo))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
          </label>
          <button type="button" aria-pressed={incAlto} onClick={() => setIncAlto(!incAlto)} className="min-h-11 rounded-full border-2 border-borda px-3 text-sm font-semibold">
            {incAlto ? 'Entra (≤)' : 'Não entra (<)'}
          </button>
        </div>
      </div>
      <p className="mt-3 rounded-2xl bg-fundo p-3 text-center text-xl font-semibold" aria-hidden="true">{escrita}</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Números inteiros que servem: <strong>{inteiros.length ? inteiros.join(', ') : 'nenhum'}</strong> ({inteiros.length} {inteiros.length === 1 ? 'número' : 'números'}).
      </p>
    </div>
  )
}
