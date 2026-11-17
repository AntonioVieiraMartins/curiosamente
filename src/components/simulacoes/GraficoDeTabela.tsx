import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Contador from './Contador'

const LIM = 6
const CASA = 24
const T = (2 * LIM + 1) * CASA
const X = (x: number) => T / 2 + x * CASA
const Y = (y: number) => T / 2 - y * CASA
const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const xs = [-3, -2, -1, 0, 1, 2, 3]

// Uma regra (y = a·x + b) vira uma tabela de pares, e a tabela vira uma reta no plano
export default function GraficoDeTabela() {
  const [a, setA] = useState(2)
  const [b, setB] = useState(1)
  const y = (x: number) => a * x + b
  const regra = `y = ${a === 0 ? '' : a === 1 ? 'x' : a === -1 ? '−x' : `${sinal(a)}x`}${a === 0 ? sinal(b) : b === 0 ? '' : b > 0 ? ` + ${b}` : ` − ${-b}`}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Da regra à reta</p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Contador grupo="Regra" rotulo="Multiplica o x por" valor={a} min={-3} max={3} mudar={setA} />
        <Contador grupo="Regra" rotulo="Soma no final" valor={b} min={-4} max={4} mudar={setB} />
      </div>
      <p className="mt-3 text-center font-serif text-2xl text-coral">{regra}</p>

      <svg viewBox={`0 0 ${T} ${T}`} className="mx-auto mt-2 w-full max-w-xs" aria-hidden="true">
        {Array.from({ length: 2 * LIM + 1 }, (_, i) => i - LIM).map((n) => (
          <g key={n}>
            <line x1={X(n)} x2={X(n)} y1={0} y2={T} stroke="var(--color-borda)" />
            <line y1={Y(n)} y2={Y(n)} x1={0} x2={T} stroke="var(--color-borda)" />
          </g>
        ))}
        <line x1={0} x2={T} y1={T / 2} y2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <line y1={0} y2={T} x1={T / 2} x2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <line x1={X(-LIM)} y1={Y(y(-LIM))} x2={X(LIM)} y2={Y(y(LIM))} stroke="var(--color-azul)" strokeWidth="2" />
        {xs.filter((x) => Math.abs(y(x)) <= LIM).map((x) => <circle key={x} cx={X(x)} cy={Y(y(x))} r="5" fill="var(--color-coral)" />)}
      </svg>

      <div className="mt-2 overflow-x-auto" aria-live="polite">
        <table className="w-full text-center text-sm">
          <tbody>
            <tr><th scope="row" className="text-left text-suave">x</th>{xs.map((x) => <td key={x}>{sinal(x)}</td>)}</tr>
            <tr><th scope="row" className="text-left text-suave">y</th>{xs.map((x) => <td key={x} className="font-semibold">{sinal(y(x))}</td>)}</tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
