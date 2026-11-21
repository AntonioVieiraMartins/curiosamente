import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Deriva genética: sem nenhuma vantagem, o acaso sozinho muda as frequências. Em população pequena, muda muito.
const cores = ['var(--color-azul)', 'var(--color-coral)', 'var(--color-verde)', 'var(--color-amarelo)', 'var(--color-texto)', 'var(--color-suave)']
const X = (g: number, G: number) => 15 + (g / G) * 195
const Y = (p: number) => 105 - p * 95

export default function DerivaGenetica() {
  const [N, setN] = useState(20)
  const [linhas, setLinhas] = useState<number[][]>([])
  const G = 40
  // O sorteio fica no clique, nunca na hora de desenhar a tela
  const rodar = () => {
    const novas = cores.map(() => {
      const serie = [0.5]
      for (let g = 1; g <= G; g++) {
        const p = serie[g - 1]
        let c = 0
        for (let i = 0; i < N; i++) if (Math.random() < p) c++
        serie.push(c / N)
      }
      return serie
    })
    setLinhas(novas)
  }
  const fixou = linhas.filter((s) => s[G] === 0 || s[G] === 1).length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Deriva genética: o acaso sozinho</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`${fixou} de 6 populações perderam ou fixaram a variante`}>
        <line x1="15" y1="105" x2="212" y2="105" stroke="var(--color-borda)" />
        <line x1="15" y1="10" x2="212" y2="10" stroke="var(--color-borda)" strokeDasharray="2 3" />
        <line x1="15" y1="57" x2="212" y2="57" stroke="var(--color-borda)" strokeDasharray="2 3" />
        <text x="17" y="9" fontSize="6" fill="var(--color-suave)">100%</text>
        <text x="17" y="56" fontSize="6" fill="var(--color-suave)">50% (início)</text>
        <text x="17" y="116" fontSize="6" fill="var(--color-suave)">0%  ·  40 gerações →</text>
        {linhas.map((s, k) => <polyline key={k} fill="none" stroke={cores[k]} strokeWidth="1.8" points={s.map((v, g) => `${X(g, G)},${Y(v)}`).join(' ')} />)}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Tamanho da população" valor={N} min={10} max={500} passo={10} aoMudar={setN} /></div>
      <button type="button" onClick={rodar} className="mt-3 min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Rodar 6 populações</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {linhas.length === 0 ? 'Todas começam com 50% da variante e nenhuma vantagem. Aperte o botão.' : <>Depois de 40 gerações, <strong>{fixou}</strong> das 6 populações já perderam a variante ou ficaram só com ela. {N <= 30 ? 'Em população pequena o acaso manda.' : N >= 300 ? 'Em população grande o acaso quase não mexe.' : 'Tente uma população bem pequena e depois uma bem grande.'}</>}
      </p>
    </div>
  )
}
