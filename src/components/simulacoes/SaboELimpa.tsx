import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Moléculas de sabão: cabeça polar (gosta de água) e cauda apolar (gosta de gordura)
export default function SaboELimpa() {
  const [sabao, setSabao] = useState(false)
  const caudas = Array.from({ length: 10 }, (_, i) => (i / 10) * Math.PI * 2)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O que o sabão faz com a gordura</p>
      <svg viewBox="0 0 220 130" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={sabao ? 'Gota de gordura cercada por moléculas de sabão' : 'Gota de gordura grudada num prato'}>
        <rect x={0} y={0} width={220} height={130} fill="var(--color-azul)" fillOpacity="0.1" />
        {!sabao && <rect x={0} y={108} width={220} height={22} fill="var(--color-borda)" />}
        <ellipse cx={110} cy={sabao ? 62 : 100} rx={sabao ? 22 : 40} ry={sabao ? 22 : 12} fill="var(--color-amarelo)" fillOpacity="0.7" stroke="var(--color-amarelo)" />
        {sabao && caudas.map((a, i) => {
          const x1 = 110 + Math.cos(a) * 24
          const y1 = 62 + Math.sin(a) * 24
          const x2 = 110 + Math.cos(a) * 44
          const y2 = 62 + Math.sin(a) * 44
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-texto)" strokeWidth="2" />
              <circle cx={x2} cy={y2} r={4.5} fill="var(--color-azul)" />
            </g>
          )
        })}
        <text x={110} y={sabao ? 66 : 104} textAnchor="middle" fontSize="10" fill="var(--color-texto)">gordura</text>
      </svg>
      <button type="button" onClick={() => setSabao((s) => !s)} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{sabao ? 'Tirar o sabão' : 'Pôr sabão'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {sabao
          ? 'A cauda do sabão (apolar, uma linha) se enfia na gordura. A cabeça (polar, bolinha azul) fica para fora, na água. A gota vira uma bolinha cercada de cabeças, chamada micela, que a água consegue carregar embora.'
          : 'A água sozinha não leva a gordura: a água é polar e a gordura é apolar, e elas não se misturam. A gota fica grudada no prato.'}
      </p>
    </div>
  )
}
