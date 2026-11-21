import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// k vizinhos mais próximos: o novo ponto copia a "opinião" dos k exemplos mais perto dele (dados inventados)
type Ex = { x: number; y: number; classe: 0 | 1 }
const exemplos: Ex[] = [
  { x: 1, y: 1, classe: 0 }, { x: 1.5, y: 2, classe: 0 }, { x: 2, y: 1.2, classe: 0 }, { x: 2.5, y: 2.5, classe: 0 },
  { x: 1, y: 3, classe: 0 }, { x: 3, y: 1.5, classe: 0 }, { x: 3.5, y: 3, classe: 0 }, { x: 4.5, y: 4.2, classe: 0 },
  { x: 6, y: 6, classe: 1 }, { x: 7, y: 5, classe: 1 }, { x: 8, y: 7.5, classe: 1 }, { x: 6.5, y: 8, classe: 1 },
  { x: 5, y: 5.5, classe: 1 }, { x: 9, y: 6, classe: 1 }, { x: 7.5, y: 9, classe: 1 }, { x: 4, y: 5, classe: 1 },
]
const nomes = ['gato', 'cachorro']
const cor = ['var(--color-coral)', 'var(--color-azul)']
const X = (x: number) => 20 + x * 20
const Y = (y: number) => 130 - y * 12

export default function VizinhosMaisProximos() {
  const [px, setPx] = useState(4)
  const [py, setPy] = useState(4)
  const [k, setK] = useState(3)
  const vizinhos = [...exemplos]
    .map((e) => ({ e, d: Math.hypot(e.x - px, e.y - py) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, k)
  const votos = [0, 0]
  vizinhos.forEach((v) => { votos[v.e.classe]++ })
  const resposta = votos[1] > votos[0] ? 1 : 0
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Vizinhos mais próximos (dados inventados)</p>
      <svg viewBox="0 0 220 140" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Com ${k} vizinhos, o novo animal é classificado como ${nomes[resposta]}`}>
        <line x1="20" y1="130" x2="215" y2="130" stroke="var(--color-borda)" />
        <line x1="20" y1="8" x2="20" y2="130" stroke="var(--color-borda)" />
        <text x="215" y="138" textAnchor="end" fontSize="7" fill="var(--color-suave)">peso</text>
        <text x="24" y="14" fontSize="7" fill="var(--color-suave)">tamanho do focinho</text>
        {vizinhos.map((v) => <line key={`l${v.e.x}${v.e.y}`} x1={X(px)} y1={Y(py)} x2={X(v.e.x)} y2={Y(v.e.y)} stroke="var(--color-texto)" strokeOpacity="0.5" strokeDasharray="2 2" />)}
        {exemplos.map((e) => <circle key={`${e.x}${e.y}`} cx={X(e.x)} cy={Y(e.y)} r="4" fill={cor[e.classe]} />)}
        <rect x={X(px) - 5} y={Y(py) - 5} width="10" height="10" fill={cor[resposta]} stroke="var(--color-texto)" strokeWidth="2" />
      </svg>
      <p className="mt-2 text-sm text-suave">Coral: gatos. Azul: cachorros. O quadrado é o animal novo, ainda sem nome.</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <Deslizante rotulo="Peso" valor={px} min={0} max={10} passo={0.5} aoMudar={setPx} />
        <Deslizante rotulo="Focinho" valor={py} min={0} max={10} passo={0.5} aoMudar={setPy} />
        <Deslizante rotulo="Vizinhos (k)" valor={k} min={1} max={7} passo={2} aoMudar={setK} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Entre os {k} mais próximos: {votos[0]} {votos[0] === 1 ? 'gato' : 'gatos'} e {votos[1]} {votos[1] === 1 ? 'cachorro' : 'cachorros'}. Palpite do modelo: <strong>{nomes[resposta]}</strong>.
      </p>
    </div>
  )
}
