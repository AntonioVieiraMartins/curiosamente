import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ARGS = [
  { p1: 'Se chove, a rua molha.', p2: 'Choveu.', c: 'Logo, a rua molhou.', valido: true, porque: 'Válido (modus ponens): afirmou a causa e concluiu o efeito.' },
  { p1: 'Se chove, a rua molha.', p2: 'A rua molhou.', c: 'Logo, choveu.', valido: false, porque: 'Inválido (afirmar o consequente). A rua pode ter molhado por um caminhão-pipa ou uma mangueira.' },
  { p1: 'Se chove, a rua molha.', p2: 'A rua não molhou.', c: 'Logo, não choveu.', valido: true, porque: 'Válido (modus tollens): se tivesse chovido, a rua teria molhado.' },
  { p1: 'Se chove, a rua molha.', p2: 'Não choveu.', c: 'Logo, a rua não molhou.', valido: false, porque: 'Inválido (negar o antecedente). A rua pode molhar de outro jeito.' },
  { p1: 'Todo gato é mamífero.', p2: 'Mimi é um gato.', c: 'Logo, Mimi é mamífero.', valido: true, porque: 'Válido (silogismo): Mimi está dentro do grupo dos gatos, que está dentro dos mamíferos.' },
  { p1: 'Todo gato é mamífero.', p2: 'Rex é mamífero.', c: 'Logo, Rex é gato.', valido: false, porque: 'Inválido. Rex pode ser um cachorro, outro mamífero que não é gato.' },
]

// Argumento válido: se as premissas forem verdadeiras, a conclusão tem de ser verdadeira
export default function ArgumentoValidoOuNao() {
  const [resp, setResp] = useState<(boolean | null)[]>(ARGS.map(() => null))
  const acertos = resp.filter((r, i) => r === ARGS[i].valido).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Argumento válido ou furado?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {ARGS.map((a, i) => {
          const r = resp[i]
          return (
            <li key={a.p2 + a.c} className="rounded-2xl bg-fundo p-3 text-[15px]">
              <p>{a.p1} {a.p2}</p>
              <p className="font-semibold">{a.c}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[true, false].map((x) => (
                  <button key={String(x)} type="button" disabled={r !== null} onClick={() => setResp(resp.map((y, j) => (j === i ? x : y)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === x ? (x === a.valido ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>{x ? 'Válido' : 'Furado'}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2">{r === a.valido ? 'Certo. ' : 'Quase. '}{a.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {ARGS.length}</p>
        <button type="button" onClick={() => setResp(ARGS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
