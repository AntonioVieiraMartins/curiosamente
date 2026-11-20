import { useEffect, useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const N = 60
const L = 300
const A = 130

// Ponto de partida (junto da parede esquerda) e ponto onde a partícula "quer" ir no copo todo
const inicio = (i: number) => ({ x: 8 + ((i * 29) % 40), y: 8 + ((i * 47) % (A - 16)) })
const fim = (i: number) => ({ x: 8 + ((i * 131) % (L - 16)), y: 8 + ((i * 71) % (A - 16)) })

// Gota de corante na água: as partículas se espalham sozinhas, mais rápido com calor
export default function DifusaoDeCorante() {
  const [temp, setTemp] = useState(5)
  const [prog, setProg] = useState(0)
  const [t, setT] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setT((x) => x + 1)
      setProg((p) => Math.min(1, p + temp * 0.0016))
    }, 60)
    return () => clearInterval(id)
  }, [temp])

  const pontos = Array.from({ length: N }, (_, i) => {
    const a = inicio(i)
    const b = fim(i)
    const tremor = 2 + temp * 0.5
    return {
      x: a.x + (b.x - a.x) * prog + tremor * Math.sin(t * 0.5 + i),
      y: a.y + (b.y - a.y) * prog + tremor * Math.cos(t * 0.4 + i * 1.3),
    }
  })
  const direita = pontos.filter((p) => p.x > L / 2).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Gota de corante na água</p>
      <svg viewBox={`0 0 ${L} ${A}`} className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Partículas de corante se espalhando num copo de água">
        <line x1={L / 2} y1={0} x2={L / 2} y2={A} stroke="var(--color-borda)" strokeDasharray="4 4" />
        {pontos.map((p, i) => (
          <circle key={i} cx={Math.min(L - 5, Math.max(5, p.x))} cy={Math.min(A - 5, Math.max(5, p.y))} r={4} fill="var(--color-coral)" fillOpacity="0.8" />
        ))}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Calor da água" valor={temp} min={1} max={10} passo={1} aoMudar={setTemp} /></div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setProg(0)} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Soltar outra gota</button>
        <p aria-live="polite" className="text-[15px]"><strong>{direita}</strong> de {N} partículas já passaram da linha do meio.</p>
      </div>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">Ninguém empurra o corante. Ele se espalha porque as partículas se mexem ao acaso, e há mais caminhos para sair do aperto do que para ficar nele. No fim, fica o mesmo tanto dos dois lados.</p>
    </div>
  )
}
