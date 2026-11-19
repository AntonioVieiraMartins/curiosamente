import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Estado = { x: number; y: number; rot: number; flip: boolean }
const F = '-12,-24 -12,24 -2,24 -2,6 10,6 10,-4 -2,-4 -2,-14 14,-14 14,-24'
const C = 36
const INICIO: Estado = { x: 0, y: 0, rot: 0, flip: false }
const ALVOS: Estado[] = [
  { x: 2, y: 0, rot: 0, flip: false },
  { x: 0, y: -1, rot: 1, flip: false },
  { x: -2, y: 1, rot: 2, flip: false },
  { x: 1, y: 1, rot: 0, flip: true },
  { x: -1, y: -1, rot: 3, flip: true },
]
const igual = (a: Estado, b: Estado) => a.x === b.x && a.y === b.y && a.rot === b.rot && a.flip === b.flip
const limite = (n: number) => Math.max(-2, Math.min(2, n))
const transf = (e: Estado) => `translate(${90 + e.x * C} ${90 - e.y * C}) rotate(${e.rot * 90}) scale(${e.flip ? -0.7 : 0.7} 0.7)`
const botao = 'min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul'

// Jogo: use deslizar, girar e espelhar para encaixar o F na sombra
export default function LeveOFAteAlvo() {
  const [nivel, setNivel] = useState(0)
  const [e, setE] = useState<Estado>(INICIO)
  const [jogadas, setJogadas] = useState(0)
  const alvo = ALVOS[nivel]
  const venceu = igual(e, alvo)

  const mexer = (f: (s: Estado) => Estado) => { setE(f); setJogadas((j) => j + 1) }
  const proximo = () => { setNivel((n) => (n + 1) % ALVOS.length); setE(INICIO); setJogadas(0) }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Desafio {nivel + 1} de {ALVOS.length}: encaixe o F na sombra</p>
      <svg viewBox="0 0 180 180" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label="Grade com uma figura F e a sombra onde ela deve chegar">
        {[0, 1, 2, 3, 4, 5].map((i) => <g key={i}><line x1={i * C} y1={0} x2={i * C} y2={180} stroke="var(--color-borda)" /><line x1={0} y1={i * C} x2={180} y2={i * C} stroke="var(--color-borda)" /></g>)}
        <polygon points={F} transform={transf(alvo)} fill="var(--color-suave)" fillOpacity="0.35" stroke="var(--color-suave)" strokeDasharray="3 2" />
        <polygon points={F} transform={transf(e)} fill={venceu ? 'var(--color-verde)' : 'var(--color-azul)'} fillOpacity="0.5" stroke={venceu ? 'var(--color-verde)' : 'var(--color-azul)'} strokeWidth="2" />
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button type="button" className={botao} onClick={() => mexer((s) => ({ ...s, x: limite(s.x - 1) }))}>← esquerda</button>
        <button type="button" className={botao} onClick={() => mexer((s) => ({ ...s, x: limite(s.x + 1) }))}>direita →</button>
        <button type="button" className={botao} onClick={() => mexer((s) => ({ ...s, y: limite(s.y + 1) }))}>↑ cima</button>
        <button type="button" className={botao} onClick={() => mexer((s) => ({ ...s, y: limite(s.y - 1) }))}>↓ baixo</button>
        <button type="button" className={`${botao} sm:col-span-2`} onClick={() => mexer((s) => ({ ...s, rot: (s.rot + 1) % 4 }))}>Girar 90° ↻</button>
        <button type="button" className={`${botao} sm:col-span-2`} onClick={() => mexer((s) => ({ ...s, flip: !s.flip, rot: (4 - s.rot) % 4 }))}>Espelhar ⇋</button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold" onClick={() => { setE(INICIO); setJogadas(0) }}>Recomeçar</button>
        {venceu && <button type="button" className="min-h-11 rounded-full bg-verde px-4 text-sm font-semibold text-white" onClick={proximo}>Próximo desafio</button>}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {venceu ? `Encaixou em ${jogadas} jogada${jogadas === 1 ? '' : 's'}! Dá para chegar de vários caminhos.` : `Jogadas: ${jogadas}. Deslizar e girar não mudam o formato; só o espelho “vira do avesso” (veja o F ficar com o braço para o outro lado).`}
      </p>
    </div>
  )
}
