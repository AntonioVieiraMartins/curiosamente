import { useState } from 'react'
import { cartao } from '../ui/estilos'

const epsilons = [2, 1, 0.5, 0.1]
const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 3 })

// O "jogo do limite": para f(x) = 2x + 1 perto de x = 3 (limite 7), alguém escolhe a tolerância ε
// e você responde com um δ. Serve quando 2·δ ≤ ε, porque |f(x) − 7| = 2·|x − 3|.
export default function EpsilonEDelta() {
  const [ei, setEi] = useState(1)
  const [delta, setDelta] = useState(1)
  const eps = epsilons[ei]
  const piorErro = 2 * delta // maior |f(x) − 7| quando |x − 3| < δ
  const serve = piorErro <= eps
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Jogo do limite: f(x) = 2x + 1 perto de x = 3 (limite 7)</p>
      <p className="mt-3 text-[15px]">1. O desafiante escolhe a tolerância ε (o erro que aceita em f):</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Tolerância">
        {epsilons.map((e, j) => (
          <button key={e} type="button" aria-pressed={ei === j} onClick={() => setEi(j)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${ei === j ? 'border-azul bg-fundo' : 'border-borda'}`}>ε = {fmt(e)}</button>
        ))}
      </div>
      <label className="mt-3 block text-[15px]">2. Você responde com um δ (o quanto x pode se afastar de 3): <strong>{fmt(delta)}</strong>
        <input type="range" min={0.05} max={2} step={0.05} value={delta} onChange={(e) => setDelta(Number(e.target.value))} className="mt-1 block w-full" aria-label="Valor de delta" />
      </label>
      <p className="mt-3 text-[15px]">Com x entre {fmt(3 - delta)} e {fmt(3 + delta)}, f(x) fica entre {fmt(7 - piorErro)} e {fmt(7 + piorErro)}. A faixa aceita é de {fmt(7 - eps)} a {fmt(7 + eps)}.</p>
      <p aria-live="polite" className={`mt-3 rounded-2xl p-4 text-[15px] ${serve ? 'bg-verde/10' : 'bg-coral/10'}`}>
        {serve
          ? `Esse δ serve: todo f(x) ficou dentro da faixa. Qualquer δ até ${fmt(eps / 2)} também serve.`
          : `Esse δ é grande demais: nas pontas, f(x) sai da faixa. Tente um δ de no máximo ${fmt(eps / 2)}.`}
      </p>
    </div>
  )
}
