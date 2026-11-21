import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import { casas, melhorReta, somaDosQuadrados } from '../../lib/ajuste'

// Mexa na inclinação e na altura da reta e veja o erro cair ou subir
const X = (x: number) => 20 + ((x - 20) / 110) * 210
const Y = (y: number) => 135 - (y / 420) * 125

export default function RetaDeTendencia() {
  const melhor = melhorReta(casas)
  const [a, setA] = useState(1)
  const [b, setB] = useState(100)
  const eqm = somaDosQuadrados(casas, a, b) / casas.length
  const eqmMelhor = somaDosQuadrados(casas, melhor.a, melhor.b) / casas.length
  const f = (x: number) => a * x + b
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Reta de tendência (dados inventados)</p>
      <svg viewBox="0 0 240 150" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Reta com inclinação ${a} e altura ${b}`}>
        <line x1="20" y1="135" x2="232" y2="135" stroke="var(--color-borda)" />
        <line x1="20" y1="10" x2="20" y2="135" stroke="var(--color-borda)" />
        <text x="232" y="146" textAnchor="end" fontSize="7" fill="var(--color-suave)">área (m²)</text>
        <text x="24" y="14" fontSize="7" fill="var(--color-suave)">preço (mil R$)</text>
        {casas.map((p) => (
          <line key={`e${p.x}`} x1={X(p.x)} y1={Y(p.y)} x2={X(p.x)} y2={Y(Math.max(0, Math.min(420, f(p.x))))} stroke="var(--color-coral)" strokeWidth="1.5" />
        ))}
        <line x1={X(20)} y1={Y(Math.max(0, Math.min(420, f(20))))} x2={X(130)} y2={Y(Math.max(0, Math.min(420, f(130))))} stroke="var(--color-azul)" strokeWidth="2" />
        {casas.map((p) => <circle key={p.x} cx={X(p.x)} cy={Y(p.y)} r="3" fill="var(--color-texto)" />)}
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Inclinação (mil R$ por m²)" valor={a} min={0} max={6} passo={0.1} aoMudar={setA} />
        <Deslizante rotulo="Altura inicial (mil R$)" valor={b} min={-100} max={200} passo={5} aoMudar={setB} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Os traços vermelhos são os erros. Erro médio quadrático da sua reta: <strong>{Math.round(eqm).toLocaleString('pt-BR')}</strong>. O menor possível é {Math.round(eqmMelhor).toLocaleString('pt-BR')}.
        {eqm <= eqmMelhor * 1.1 ? ' Quase lá: sua reta está perto da melhor.' : ' Tente baixar o número mexendo nos dois controles.'}
      </p>
      <button type="button" onClick={() => { setA(Math.round(melhor.a * 10) / 10); setB(Math.round(melhor.b / 5) * 5) }} className="mt-3 min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Usar uma reta quase ótima</button>
    </div>
  )
}
