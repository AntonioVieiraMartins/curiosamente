import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Cubo de lado L cm: volume em cm³ = mL. O cubo de 10 cm é exatamente 1 litro
export default function CuboDeUmLitro() {
  const [lado, setLado] = useState(5)
  const id = useId()
  const cm3 = lado ** 3
  const litros = cm3 / 1000
  const tam = 40 + lado * 7
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O cubo e o litro</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Lado do cubo: <b>{lado} cm</b>
        <input id={id} type="range" min={1} max={20} value={lado} onChange={(e) => setLado(Number(e.target.value))} className="h-11 w-full" />
      </label>
      <div className="mt-2 flex h-[200px] items-end justify-center rounded-2xl bg-fundo">
        <svg viewBox="0 0 200 200" role="img" aria-label={`Cubo de ${lado} centímetros de lado`} className="h-[200px] w-[200px]">
          <rect x={100 - tam / 2} y={190 - tam} width={tam} height={tam} rx={4}
            fill={lado === 10 ? 'var(--color-amarelo)' : 'var(--color-azul-claro)'} stroke={lado === 10 ? 'var(--color-amarelo-escuro)' : 'var(--color-azul)'} strokeWidth={2} />
          <text x={100} y={190 - tam / 2} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 14, fontWeight: 600, fill: 'var(--color-texto)' }}>{lado} cm</text>
        </svg>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Volume: {lado} × {lado} × {lado} = <b>{cm3.toLocaleString('pt-BR')} cm³</b>, ou seja, <b>{cm3.toLocaleString('pt-BR')} mL</b> = <b>{String(Number(litros.toFixed(3))).replace('.', ',')} L</b>.
        {lado === 10 ? ' É o cubo de 10 cm: exatamente 1 litro! E 1 litro de água tem cerca de 1 kg.' : ' Chegue em 10 cm para ver o litro.'}
      </p>
    </div>
  )
}
