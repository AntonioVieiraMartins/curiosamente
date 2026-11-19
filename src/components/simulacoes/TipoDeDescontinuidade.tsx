import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Caso = { nome: string; formula: string; f: (x: number) => number; fa: string; veredito: string }

const casos: Caso[] = [
  { nome: 'Contínua', formula: 'f(x) = x + 1', f: (x) => x + 1, fa: '2', veredito: 'Os dois lados chegam a 2 e f(1) = 2. Limite e valor coincidem: é contínua em x = 1.' },
  { nome: 'Buraco', formula: 'f(x) = (x² − 1) ÷ (x − 1)', f: (x) => (x * x - 1) / (x - 1), fa: 'não existe', veredito: 'Os dois lados chegam a 2, mas f(1) não existe. O limite existe e a função tem um buraco: descontinuidade removável.' },
  { nome: 'Degrau', formula: 'f(x) = 1 se x < 1; 3 se x ≥ 1', f: (x) => (x < 1 ? 1 : 3), fa: '3', veredito: 'Pela esquerda chega a 1 e pela direita a 3. Os lados discordam, então o limite não existe: é um salto.' },
  { nome: 'Explode', formula: 'f(x) = 1 ÷ (x − 1)', f: (x) => 1 / (x - 1), fa: 'não existe', veredito: 'Os valores crescem sem parar (para um lado, negativos; para o outro, positivos). Não há limite finito.' },
]
const dist = [1, 0.1, 0.01, 0.001, 0.0001]
const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 4 })

// Quatro funções perto de x = 1: continua, buraco, degrau e explosão
export default function TipoDeDescontinuidade() {
  const [i, setI] = useState(0)
  const [k, setK] = useState(2)
  const c = casos[i]
  const d = dist[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O que acontece perto de x = 1?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Função">
        {casos.map((x, j) => (
          <button key={x.nome} type="button" aria-pressed={i === j} onClick={() => setI(j)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${i === j ? 'border-azul bg-fundo' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <p className="mt-3 font-semibold">{c.formula}</p>
      <label className="mt-3 block text-[15px]">Distância até x = 1: <strong>{fmt(d)}</strong>
        <input type="range" min={0} max={dist.length - 1} value={k} onChange={(e) => setK(Number(e.target.value))} className="mt-1 block w-full" aria-label="Distância até 1" />
      </label>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Esquerda</p><p className="text-xl font-bold">{fmt(c.f(1 - d))}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Direita</p><p className="text-xl font-bold">{fmt(c.f(1 + d))}</p></div>
        <div className="rounded-2xl border-2 border-borda p-3"><p className="text-[14px] font-semibold">f(1)</p><p className="text-xl font-bold">{c.fa}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{c.veredito}</p>
    </div>
  )
}
