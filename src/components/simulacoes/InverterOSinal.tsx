import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// −2x < 6. Dividindo por −2 o certo é x > −3 (o sinal vira). Quem mantém o "<" erra. Teste e confira.
export default function InverterOSinal() {
  const [x, setX] = useState(0)
  const id = useId()
  const original = -2 * x < 6
  const certo = x > -3
  const errado = x < -3
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Dividir por número negativo vira o sinal</p>
      <p className="mt-2 text-[15px]">Original: <strong>−2x &lt; 6</strong>. Dividindo os dois lados por −2, qual resposta vale?</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Teste x = <span className="text-coral">{x}</span></label>
      <input id={id} type="range" min={-8} max={4} value={x} onChange={(e) => setX(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <ul className="mt-2 space-y-2 text-[15px]" aria-hidden="true">
        <li className={`rounded-2xl p-3 ${original ? 'bg-verde text-white' : 'bg-fundo'}`}>−2 × ({x}) &lt; 6 → {-2 * x} &lt; 6 é <strong>{original ? 'verdadeira' : 'falsa'}</strong></li>
        <li className={`rounded-2xl p-3 ${certo === original ? 'bg-verde text-white' : 'bg-amarelo'}`}>Virando o sinal: x &gt; −3. Para x = {x} é <strong>{certo ? 'verdadeira' : 'falsa'}</strong> {certo === original ? '(concorda com o original)' : '(discorda!)'}</li>
        <li className={`rounded-2xl p-3 ${errado === original ? 'bg-verde text-white' : 'bg-amarelo'}`}>Sem virar: x &lt; −3. Para x = {x} é <strong>{errado ? 'verdadeira' : 'falsa'}</strong> {errado === original ? '(concorda com o original)' : '(discorda!)'}</li>
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Passeie o x: a resposta "virando o sinal" concorda com o original em quase todo lugar (só no −3 todas ficam falsas, porque ele é a borda). A de manter o sinal quase sempre discorda.
      </p>
    </div>
  )
}
