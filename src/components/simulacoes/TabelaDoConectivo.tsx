import { useState } from 'react'
import { cartao } from '../ui/estilos'

const CONECTIVOS = [
  { id: 'e', simbolo: '∧', nome: 'e', f: (p: boolean, q: boolean) => p && q },
  { id: 'ou', simbolo: '∨', nome: 'ou', f: (p: boolean, q: boolean) => p || q },
  { id: 'se', simbolo: '→', nome: 'se... então', f: (p: boolean, q: boolean) => !p || q },
  { id: 'sse', simbolo: '↔', nome: 'se, e somente se', f: (p: boolean, q: boolean) => p === q },
]
const LINHAS: [boolean, boolean][] = [[true, true], [true, false], [false, true], [false, false]]
const v = (x: boolean) => (x ? 'V' : 'F')

// Prever antes de ver: o aluno chuta o resultado de cada linha e confere
export default function TabelaDoConectivo() {
  const [id, setId] = useState('e')
  const [chute, setChute] = useState<(boolean | null)[]>([null, null, null, null])
  const [conferido, setConferido] = useState(false)
  const c = CONECTIVOS.find((x) => x.id === id)!
  const acertos = LINHAS.filter(([p, q], i) => chute[i] === c.f(p, q)).length

  function trocar(novo: string) {
    setId(novo)
    setChute([null, null, null, null])
    setConferido(false)
  }
  function alternar(i: number) {
    if (conferido) return
    setChute(chute.map((x, j) => (j === i ? (x === null ? true : x ? false : null) : x)))
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte a tabela-verdade</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o conectivo">
        {CONECTIVOS.map((x) => (
          <button key={x.id} type="button" aria-pressed={x.id === id} onClick={() => trocar(x.id)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${x.id === id ? 'border-azul bg-azul text-white' : 'border-borda'}`}>P {x.simbolo} Q ({x.nome})</button>
        ))}
      </div>
      <p className="mt-3 text-sm text-suave">Toque na coluna do resultado para chutar V ou F em cada linha. Depois, confira.</p>
      <table className="mx-auto mt-2 text-center text-[16px]">
        <thead><tr><th className="px-4">P</th><th className="px-4">Q</th><th className="px-4">P {c.simbolo} Q</th></tr></thead>
        <tbody>
          {LINHAS.map(([p, q], i) => {
            const certo = c.f(p, q)
            return (
              <tr key={i}>
                <td className="px-4 py-1">{v(p)}</td><td className="px-4">{v(q)}</td>
                <td className="px-4">
                  <button type="button" onClick={() => alternar(i)} aria-label={`Resultado da linha ${i + 1}`}
                    className={`min-h-11 min-w-14 rounded-xl border-2 font-semibold ${conferido ? (chute[i] === certo ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>
                    {conferido ? `${chute[i] === null ? '–' : v(chute[i] as boolean)} → ${v(certo)}` : chute[i] === null ? '?' : v(chute[i] as boolean)}
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" disabled={conferido || chute.includes(null)} onClick={() => setConferido(true)} className="min-h-11 rounded-full bg-azul px-5 text-sm font-semibold text-white disabled:opacity-40">Conferir</button>
        <p aria-live="polite" className="text-sm font-semibold">{conferido ? `Acertos: ${acertos} de 4. O que está à esquerda da seta é o seu chute.` : 'Preencha as 4 linhas para conferir.'}</p>
      </div>
    </div>
  )
}
