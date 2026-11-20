import { useState } from 'react'
import { cartao } from '../ui/estilos'

const passos = [
  { titulo: 'Achar o gene', texto: 'Os cientistas obtêm o gene da insulina humana (hoje, feito em laboratório a partir da sequência conhecida).' },
  { titulo: 'Abrir o plasmídeo', texto: 'Um plasmídeo é um pequeno anel de DNA de bactéria. Uma enzima de restrição corta o anel num só ponto.' },
  { titulo: 'Colar o gene', texto: 'Outra enzima (a ligase) cola o gene da insulina dentro do anel. Agora é um DNA recombinante.' },
  { titulo: 'Colocar na bactéria', texto: 'O plasmídeo novo entra numa bactéria (como a Escherichia coli) por um choque de calor ou por eletricidade.' },
  { titulo: 'Multiplicar e produzir', texto: 'A bactéria se divide a cada cerca de 20 minutos. Cada filha tem o plasmídeo e fabrica insulina, que é depois purificada.' },
]

export default function InsulinaEmBacteria() {
  const [i, setI] = useState(0)
  const azul = 'var(--color-azul)'
  const coral = 'var(--color-coral)'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Insulina feita por bactérias</p>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={passos[i].titulo}>
        {i === 0 && <rect x="70" y="42" width="80" height="24" rx="6" fill={coral} fillOpacity="0.7" />}
        {i === 1 && <path d="M110 22 A32 32 0 1 0 142 54" fill="none" stroke={azul} strokeWidth="6" />}
        {i === 2 && <g><circle cx="110" cy="54" r="32" fill="none" stroke={azul} strokeWidth="6" /><rect x="94" y="18" width="32" height="12" rx="4" fill={coral} /></g>}
        {i === 3 && <g><ellipse cx="110" cy="54" rx="70" ry="38" fill={azul} fillOpacity="0.15" stroke={azul} /><circle cx="110" cy="54" r="16" fill="none" stroke={azul} strokeWidth="4" /><rect x="102" y="36" width="16" height="7" rx="3" fill={coral} /></g>}
        {i === 4 && [40, 110, 180].map((x) => <g key={x}><ellipse cx={x} cy="40" rx="26" ry="16" fill={azul} fillOpacity="0.15" stroke={azul} />{[-8, 0, 8].map((d) => <circle key={d} cx={x + d} cy="72" r="3" fill={coral} />)}</g>)}
        <text x="110" y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-texto)">{i + 1}. {passos[i].titulo}</text>
      </svg>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold disabled:opacity-40">Anterior</button>
        <button type="button" onClick={() => setI((x) => Math.min(passos.length - 1, x + 1))} disabled={i === passos.length - 1} className="min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white disabled:opacity-40">Próximo passo</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{passos[i].texto}</p>
    </div>
  )
}
