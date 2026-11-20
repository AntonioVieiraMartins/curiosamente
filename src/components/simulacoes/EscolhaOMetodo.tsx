import { useState } from 'react'
import { cartao } from '../ui/estilos'

const METODOS = ['Catação', 'Peneiração', 'Separação magnética', 'Filtração', 'Decantação', 'Evaporação', 'Destilação']
const CASOS = [
  { mistura: 'Feijão misturado com pedrinhas', certo: 0, porque: 'Catação: você escolhe à mão os pedaços que não servem.' },
  { mistura: 'Areia fina e pedras grandes', certo: 1, porque: 'Peneiração: a peneira deixa passar o que é menor que os furos.' },
  { mistura: 'Limalha de ferro misturada com areia', certo: 2, porque: 'Separação magnética: o ímã atrai só o ferro.' },
  { mistura: 'Água barrenta (água com terra)', certo: 3, porque: 'Filtração: o filtro retém a terra e deixa a água passar. A decantação também ajuda, deixando a terra assentar antes.' },
  { mistura: 'Água e óleo num frasco', certo: 4, porque: 'Decantação: com a mistura parada, o óleo (menos denso) sobe, e um funil de separação deixa a água sair por baixo.' },
  { mistura: 'Sal dissolvido na água, se você quer só o sal', certo: 5, porque: 'Evaporação: a água vai embora como vapor e o sal fica no fundo.' },
  { mistura: 'Sal dissolvido na água, se você quer só a água', certo: 6, porque: 'Destilação: a água evapora, passa por um condensador e é recolhida limpa.' },
]

export default function EscolhaOMetodo() {
  const [resp, setResp] = useState<(number | null)[]>(CASOS.map(() => null))
  const acertos = resp.filter((r, i) => r === CASOS[i].certo).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual método separa?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {CASOS.map((c, i) => {
          const r = resp[i]
          return (
            <li key={c.mistura} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{c.mistura}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {METODOS.map((m, k) => (
                  <button key={m} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? k : x)))}
                    className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${r === k ? (k === c.certo ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : r !== null && k === c.certo ? 'border-verde' : 'border-borda'}`}>{m}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === c.certo ? 'Certo. ' : 'Quase. '}{c.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {CASOS.length}</p>
        <button type="button" onClick={() => setResp(CASOS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
