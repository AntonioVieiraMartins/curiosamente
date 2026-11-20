import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Tamanhos aproximados dos grãos, em milímetros
const GRAOS = [
  { nome: 'Pedra', mm: 8, cor: '#6b6f75' },
  { nome: 'Cascalho', mm: 3, cor: '#8a8f96' },
  { nome: 'Areia grossa', mm: 1, cor: '#c9a15a' },
  { nome: 'Areia fina', mm: 0.3, cor: '#e0c07a' },
  { nome: 'Farinha', mm: 0.1, cor: '#f2ead3' },
]
const br = (n: number) => n.toLocaleString('pt-BR')

// Peneira: passa o que é menor que o furo, fica o que é maior
export default function PeneiraDeTamanhos() {
  const [furo, setFuro] = useState(1.5)
  const passam = GRAOS.filter((g) => g.mm < furo)
  const ficam = GRAOS.filter((g) => g.mm >= furo)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Peneira com furos de {br(furo)} mm</p>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${passam.length} tipos passam e ${ficam.length} ficam na peneira`}>
        <line x1={20} y1={50} x2={180} y2={50} stroke="var(--color-texto)" strokeWidth="2" strokeDasharray="6 3" />
        {ficam.map((g, i) => <circle key={g.nome} cx={35 + i * 32} cy={42} r={Math.max(2, g.mm * 1.4)} fill={g.cor} stroke="var(--color-texto)" strokeWidth="0.6" />)}
        {passam.map((g, i) => <circle key={g.nome} cx={35 + i * 32} cy={85} r={Math.max(2, g.mm * 1.4)} fill={g.cor} stroke="var(--color-texto)" strokeWidth="0.6" />)}
        <text x={8} y={16} fontSize="8" fill="var(--color-texto)">Ficam na peneira</text>
        <text x={8} y={103} fontSize="8" fill="var(--color-texto)">Passam para baixo</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Tamanho dos furos (mm)" valor={furo} min={0.2} max={10} passo={0.1} aoMudar={setFuro} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Passam: <strong>{passam.length ? passam.map((g) => g.nome).join(', ') : 'nenhum'}</strong>. Ficam: <strong>{ficam.length ? ficam.map((g) => g.nome).join(', ') : 'nenhum'}</strong>. Com furos de {br(furo)} mm, passa quem tem menos de {br(furo)} mm.
      </p>
    </div>
  )
}
