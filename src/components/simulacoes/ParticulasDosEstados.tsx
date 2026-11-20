import { useEffect, useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const N = 20
// Posições-base fixas: grade para o sólido, parte de baixo para o líquido, espalhadas para o gás
const base = (i: number, estado: 'solido' | 'liquido' | 'gas') => {
  const c = i % 5
  const l = Math.floor(i / 5)
  if (estado === 'solido') return { x: 55 + c * 20, y: 40 + l * 20 }
  if (estado === 'liquido') return { x: 45 + c * 22 + (l % 2) * 8, y: 72 + l * 12 }
  return { x: 25 + ((i * 37) % 150), y: 15 + ((i * 53) % 80) }
}

// Modelo de partículas da água: sólido vibra, líquido escorrega, gás voa solto
export default function ParticulasDosEstados() {
  const [temp, setTemp] = useState(-10)
  const [t, setT] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 60)
    return () => clearInterval(id)
  }, [])
  const estado = temp < 0 ? 'solido' : temp < 100 ? 'liquido' : 'gas'
  const amp = estado === 'solido' ? 1.2 : estado === 'liquido' ? 2.5 + temp / 40 : 12 + (temp - 100) / 4
  const nome = { solido: 'Gelo (sólido)', liquido: 'Água (líquido)', gas: 'Vapor (gás)' }[estado]
  const texto = {
    solido: 'As partículas ficam presas em posições fixas e só vibram. Por isso o sólido tem forma e volume próprios.',
    liquido: 'As partículas continuam juntas, mas escorregam umas sobre as outras. O líquido tem volume próprio e toma a forma do recipiente.',
    gas: 'As partículas estão bem separadas e voam em todas as direções. O gás ocupa todo o espaço disponível.',
  }[estado]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Partículas da água</p>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Partículas de ${nome}`}>
        <rect x={10} y={6} width={180} height={98} fill="none" stroke="var(--color-texto)" strokeWidth="1.5" />
        {Array.from({ length: N }, (_, i) => {
          const b = base(i, estado)
          const x = b.x + amp * Math.sin(t * (0.3 + (i % 5) * 0.07) + i)
          const y = b.y + amp * Math.cos(t * (0.27 + (i % 4) * 0.06) + i * 1.7)
          return <circle key={i} cx={Math.min(186, Math.max(14, x))} cy={Math.min(100, Math.max(10, y))} r="5" fill={estado === 'solido' ? 'var(--color-azul)' : estado === 'liquido' ? 'var(--color-verde)' : 'var(--color-coral)'} />
        })}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Temperatura (°C)" valor={temp} min={-20} max={120} passo={5} aoMudar={setTemp} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{nome} a {temp} °C.</strong> {texto}</p>
    </div>
  )
}
