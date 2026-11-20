import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Anemia falciforme: uma troca de A por T no DNA vira GAG por GUG no RNA, e glutamato vira valina na hemoglobina
export default function UmaLetraMuda() {
  const [falcemia, setFalcemia] = useState(false)
  const cor = falcemia ? 'var(--color-coral)' : 'var(--color-azul)'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma letra, uma doença</p>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={falcemia ? 'Hemácias em forma de foice' : 'Hemácias redondas'}>
        <text x="110" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-texto)">Gene da hemoglobina (6º códon): {falcemia ? 'GUG = Valina' : 'GAG = Glutamato'}</text>
        {falcemia
          ? [30, 80, 130, 180].map((x, k) => <path key={x} d={`M${x - 16} ${70 + (k % 2) * 8} Q${x} ${42 + (k % 2) * 8} ${x + 16} ${70 + (k % 2) * 8} Q${x} ${58 + (k % 2) * 8} ${x - 16} ${70 + (k % 2) * 8} Z`} fill={cor} fillOpacity="0.75" stroke={cor} />)
          : [30, 80, 130, 180].map((x, k) => <ellipse key={x} cx={x} cy={62 + (k % 2) * 8} rx="17" ry="17" fill={cor} fillOpacity="0.55" stroke={cor} />)}
        <text x="110" y="102" textAnchor="middle" fontSize="9" fill="var(--color-suave)">{falcemia ? 'Hemácias em foice: travam nos vasos e carregam menos oxigênio' : 'Hemácias em disco: passam fácil pelos vasos'}</text>
      </svg>
      <button type="button" onClick={() => setFalcemia((f) => !f)} aria-pressed={falcemia} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{falcemia ? 'Voltar ao gene normal' : 'Trocar uma letra: A por U'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {falcemia
          ? 'Só uma letra mudou, em uma cadeia de cerca de 146 aminoácidos. A hemoglobina nova se gruda em fibras quando falta oxigênio e entorta a hemácia. Quem herda a mutação dos dois pais (aa) tem anemia falciforme.'
          : 'A hemoglobina normal carrega oxigênio e mantém a hemácia redonda e flexível. Aperte o botão para trocar uma única letra do gene.'}
      </p>
    </div>
  )
}
