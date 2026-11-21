import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import { melhorReta, type Ponto } from '../../lib/ajuste'

// Altura de uma criança: valores aproximados, só para ilustrar. A reta serve de 2 a 12 anos e falha depois.
const dados: Ponto[] = [{ x: 2, y: 87 }, { x: 4, y: 102 }, { x: 6, y: 115 }, { x: 8, y: 128 }, { x: 10, y: 138 }, { x: 12, y: 149 }]
const tabela: Ponto[] = [...dados, { x: 14, y: 162 }, { x: 16, y: 169 }, { x: 18, y: 172 }]
const real = (idade: number) => {
  if (idade >= 18) return 172
  for (let i = 0; i < tabela.length - 1; i++) {
    const p = tabela[i]
    const q = tabela[i + 1]
    if (idade <= q.x) return p.y + ((q.y - p.y) * (idade - p.x)) / (q.x - p.x)
  }
  return 172
}
const X = (x: number) => 20 + (x / 32) * 210
const Y = (y: number) => 135 - ((y - 60) / 220) * 125

export default function ExtrapolacaoPerigosa() {
  const { a, b } = melhorReta(dados)
  const [idade, setIdade] = useState(12)
  const prev = a * idade + b
  const verd = real(idade)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Extrapolar é perigoso (valores aproximados)</p>
      <svg viewBox="0 0 240 150" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Aos ${idade} anos, a reta prevê ${Math.round(prev)} cm e o valor real é cerca de ${Math.round(verd)} cm`}>
        <line x1="20" y1="135" x2="232" y2="135" stroke="var(--color-borda)" />
        <line x1="20" y1="10" x2="20" y2="135" stroke="var(--color-borda)" />
        <text x="232" y="146" textAnchor="end" fontSize="7" fill="var(--color-suave)">idade (anos)</text>
        <text x="24" y="14" fontSize="7" fill="var(--color-suave)">altura (cm)</text>
        <polyline fill="none" stroke="var(--color-verde)" strokeWidth="2" points={Array.from({ length: 33 }, (_, k) => `${X(k)},${Y(real(k < 2 ? 2 : k))}`).join(' ')} />
        <line x1={X(2)} y1={Y(a * 2 + b)} x2={X(32)} y2={Y(Math.min(280, a * 32 + b))} stroke="var(--color-azul)" strokeWidth="2" strokeDasharray="4 3" />
        {dados.map((p) => <circle key={p.x} cx={X(p.x)} cy={Y(p.y)} r="3" fill="var(--color-texto)" />)}
        <line x1={X(idade)} y1="10" x2={X(idade)} y2="135" stroke="var(--color-coral)" strokeDasharray="3 3" />
      </svg>
      <p className="mt-2 text-sm text-suave">Azul: a reta ajustada aos dados de 2 a 12 anos. Verde: o que acontece de verdade. Pontos: os dados que a reta viu.</p>
      <div className="mt-3"><Deslizante rotulo="Idade (anos)" valor={idade} min={2} max={32} passo={1} aoMudar={setIdade} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Aos {idade} anos, a reta prevê <strong>{Math.round(prev)} cm</strong> e a altura real é de cerca de <strong>{Math.round(verd)} cm</strong>.
        {idade > 12 ? ` Erro de ${Math.round(Math.abs(prev - verd))} cm: a reta só conhecia crianças de até 12 anos e não sabe que o crescimento para.` : ' Dentro dos dados que ela viu, a reta acerta bem.'}
      </p>
    </div>
  )
}
