import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Cristal de sal: camadas deslizam e cargas iguais se encontram, então racha. Metal: camadas deslizam no mar de elétrons.
export default function MarteladaNoSalENoFerro() {
  const [mat, setMat] = useState<'sal' | 'metal'>('sal')
  const [bateu, setBateu] = useState(false)
  const linhas = [0, 1, 2]
  const deslocar = bateu ? 14 : 0
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Martelada</p>
      <div className="mt-3 flex gap-2" role="group" aria-label="Material">
        {(['sal', 'metal'] as const).map((m) => (
          <button key={m} type="button" aria-pressed={mat === m} onClick={() => { setMat(m); setBateu(false) }} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${mat === m ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{m === 'sal' ? 'Cristal de sal' : 'Pedaço de ferro'}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={mat === 'sal' ? 'Cristal de sal com camadas de íons positivos e negativos' : 'Metal com átomos num mar de elétrons'}>
        {mat === 'metal' && <rect x={20} y={20} width={180} height={80} rx={8} fill="var(--color-amarelo)" fillOpacity="0.15" />}
        {linhas.map((l) => {
          const dx = l === 1 ? deslocar : 0
          const quebrou = mat === 'sal' && bateu && l === 1
          return Array.from({ length: 6 }, (_, c) => {
            const x = 40 + c * 28 + (quebrou ? 0 : dx)
            const y = 34 + l * 26
            const pos = (c + l) % 2 === 0
            return mat === 'sal'
              ? <circle key={`${l}-${c}`} cx={x + (quebrou ? 10 : 0)} cy={y + (quebrou ? 6 : 0)} r={9} fill={pos ? 'var(--color-azul)' : 'var(--color-coral)'} fillOpacity="0.75" />
              : <circle key={`${l}-${c}`} cx={x} cy={y} r={9} fill="var(--color-azul)" fillOpacity="0.55" stroke="var(--color-azul)" />
          })
        })}
        {mat === 'sal' && bateu && <path d="M20 60 L60 70 L90 56 L130 74 L170 58 L200 66" fill="none" stroke="var(--color-texto)" strokeWidth="1.5" strokeDasharray="3 2" />}
      </svg>
      <button type="button" onClick={() => setBateu((b) => !b)} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{bateu ? 'Voltar' : 'Dar uma martelada'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {!bateu
          ? 'Escolha o material e bata.'
          : mat === 'sal'
            ? 'No sal, ao deslizar uma camada, íons de mesma carga ficam lado a lado e se repelem. O cristal racha. Por isso o sal é duro, mas quebradiço.'
            : 'No metal, as camadas deslizam e os átomos continuam cercados pelo mar de elétrons, que mantém tudo unido. O metal deforma sem quebrar: é maleável.'}
      </p>
    </div>
  )
}
