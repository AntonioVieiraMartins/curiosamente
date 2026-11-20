import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Alcance × ângulo: R = v²·sen(2θ) ÷ g. O máximo é em 45°, e ângulos complementares dão o mesmo alcance.
export default function AnguloIdeal() {
  const [ang, setAng] = useState(30)
  const v = 20
  const g = 9.8
  const alcance = (a: number) => (v * v * Math.sin((2 * a * Math.PI) / 180)) / g
  const RM = alcance(45)
  const gx = (a: number) => 30 + (a / 90) * 180
  const gy = (r: number) => 104 - (r / RM) * 90
  const pts = Array.from({ length: 46 }, (_, i) => `${gx(i * 2)},${gy(alcance(i * 2))}`).join(' ')
  const comp = 90 - ang

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Alcance × ângulo (v = 20 m/s)</p>
      <svg viewBox="0 0 230 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Gráfico do alcance em função do ângulo de lançamento">
        <line x1={30} y1={104} x2={215} y2={104} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={30} y1={10} x2={30} y2={104} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <line x1={gx(45)} y1={gy(RM)} x2={gx(45)} y2={104} stroke="var(--color-verde)" strokeDasharray="3 3" />
        <circle cx={gx(ang)} cy={gy(alcance(ang))} r={5} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <circle cx={gx(comp)} cy={gy(alcance(comp))} r={4} fill="var(--color-amarelo)" stroke="var(--color-texto)" strokeOpacity="0.5" />
        <text x={30} y={116} fontSize="8" textAnchor="middle" fill="var(--color-suave)">0°</text>
        <text x={gx(45)} y={116} fontSize="8" textAnchor="middle" fill="var(--color-verde)">45°</text>
        <text x={210} y={116} fontSize="8" textAnchor="end" fill="var(--color-suave)">90°</text>
      </svg>
      <label className="mt-3 block text-sm font-semibold">Ângulo: {ang}°<input type="range" min={5} max={85} step={5} value={ang} onChange={(e) => setAng(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {ang}°, o alcance é <strong>{alcance(ang).toFixed(1).replace('.', ',')} m</strong>. Com o ângulo complementar, {comp}° (ponto amarelo), é <strong>{alcance(comp).toFixed(1).replace('.', ',')} m</strong>: o mesmo. O máximo, {RM.toFixed(1).replace('.', ',')} m, vem com 45°. Sem ar, é assim.
      </p>
    </div>
  )
}
