import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Modelo de Bohr para o hidrogênio: E(n) = −13,6 eV ÷ n². Um salto emite ou absorve um fóton.
function corDaLuz(nm: number) {
  if (nm < 380 || nm > 750) return null
  if (nm < 450) return '#7a3cff'
  if (nm < 495) return '#2a6bff'
  if (nm < 570) return '#2fb344'
  if (nm < 590) return '#e8d52a'
  if (nm < 620) return '#f08a24'
  return '#e03a2f'
}

export default function SaltoDoEletron() {
  const [de, setDe] = useState(3)
  const [para, setPara] = useState(2)
  const E = (n: number) => -13.6 / (n * n)
  const dE = Math.abs(E(de) - E(para))
  const nm = de === para ? 0 : 1240 / dE
  const emite = de > para
  const cor = nm ? corDaLuz(nm) : null
  // Altura no desenho: o nível 1 fica embaixo e os de cima se juntam perto de zero (como a energia de verdade)
  const y = (n: number) => 100 - ((13.6 - Math.abs(E(n))) / 13.6) * 88

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Salto do elétron no hidrogênio</p>
      <svg viewBox="0 0 240 118" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Elétron pulando do nível ${de} para o nível ${para}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <g key={n}>
            <line x1={50} y1={y(n)} x2={190} y2={y(n)} stroke="var(--color-texto)" strokeOpacity="0.4" />
            <text x={44} y={y(n) + 3} fontSize="8" textAnchor="end" fill="var(--color-suave)">n={n}</text>
            <text x={196} y={y(n) + 3} fontSize="8" fill="var(--color-suave)">{E(n).toFixed(2).replace('.', ',')} eV</text>
          </g>
        ))}
        {de !== para && <line x1={120} y1={y(de)} x2={120} y2={y(para)} stroke={cor ?? 'var(--color-texto)'} strokeWidth="3" strokeDasharray="4 2" />}
        <circle cx={120} cy={y(para)} r={5} fill="var(--color-azul)" />
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Nível de partida: {de}<input type="range" min={1} max={5} step={1} value={de} onChange={(e) => setDe(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Nível de chegada: {para}<input type="range" min={1} max={5} step={1} value={para} onChange={(e) => setPara(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {de === para ? 'Mesmo nível: nenhum salto, nenhuma luz.' : (
          <>
            ΔE = |{E(de).toFixed(2).replace('.', ',')} − ({E(para).toFixed(2).replace('.', ',')})| = <strong>{dE.toFixed(2).replace('.', ',')} eV</strong>. O elétron {emite ? 'desce e EMITE' : 'sobe e ABSORVE'} um fóton de comprimento de onda ≈ 1.240 ÷ {dE.toFixed(2).replace('.', ',')} = <strong>{nm.toFixed(0)} nm</strong>
            {cor ? <> (luz visível: <span style={{ color: cor, fontWeight: 700 }}>esta cor</span>)</> : nm < 380 ? ' (ultravioleta, invisível)' : ' (infravermelho, invisível)'}. {emite ? 'Descer para n = 2 gera as cores visíveis do hidrogênio.' : 'Para subir, o elétron precisa receber exatamente essa energia.'}
          </>
        )}
      </p>
    </div>
  )
}
