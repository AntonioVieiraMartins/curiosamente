import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Relógio de 24 horas (0 a 23) contra o de 12 horas (manhã, tarde, noite)
function periodo(h: number) {
  if (h === 0) return 'meia-noite'
  if (h < 6) return 'madrugada'
  if (h < 12) return 'manhã'
  if (h === 12) return 'meio-dia'
  if (h < 18) return 'tarde'
  return 'noite'
}

export default function RelogioDe24Horas() {
  const [h, setH] = useState(15)
  const id = useId()
  const h12 = h % 12 === 0 ? 12 : h % 12
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">12 horas e 24 horas</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Hora no relógio de 24 horas: <b>{String(h).padStart(2, '0')}h</b>
        <input id={id} type="range" min={0} max={23} value={h} onChange={(e) => setH(Number(e.target.value))} className="h-11 w-full" />
      </label>
      <div className="mt-2 grid grid-cols-6 gap-1" aria-hidden="true">
        {Array.from({ length: 24 }, (_, k) => (
          <span key={k} className={`grid h-8 place-items-center rounded-lg text-xs font-bold ${k === h ? 'bg-amarelo text-texto' : k < 12 ? 'bg-azul-claro' : 'bg-fundo'}`}>{k}</span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {String(h).padStart(2, '0')}h é <b>{h12} {h < 12 ? 'da manhã (ou madrugada)' : 'da tarde ou da noite'}</b>, no relógio de 12 horas ({periodo(h)}).
        {h >= 13 ? ` Para passar de 24 para 12 horas, subtraia 12: ${h} − 12 = ${h - 12}.` : ''}
      </p>
    </div>
  )
}
