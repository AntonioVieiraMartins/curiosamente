import { useState } from 'react'
import { cartao } from '../ui/estilos'

type R = 'vivo' | 'nao' | 'debate'
const OPCOES: { id: R; nome: string }[] = [
  { id: 'vivo', nome: 'Vivo' },
  { id: 'nao', nome: 'Não vivo' },
  { id: 'debate', nome: 'Os cientistas discutem' },
]
const ITENS: { nome: string; certa: R; porque: string }[] = [
  { nome: 'Pedra', certa: 'nao', porque: 'Não tem células, não faz metabolismo, não cresce por conta própria nem se reproduz.' },
  { nome: 'Cogumelo', certa: 'vivo', porque: 'É um fungo: tem células, se alimenta, cresce e se reproduz por esporos.' },
  { nome: 'Semente seca', certa: 'vivo', porque: 'Dentro dela há um embrião vivo, com o metabolismo quase parado. Com água e calor, ele germina.' },
  { nome: 'Fogo', certa: 'nao', porque: 'Consome combustível e se espalha, mas não tem células, nem herança, nem regula o próprio interior.' },
  { nome: 'Bactéria', certa: 'vivo', porque: 'Uma célula completa: metabolismo, crescimento, reprodução e evolução.' },
  { nome: 'Vírus', certa: 'debate', porque: 'Não tem células nem metabolismo próprio e só se reproduz dentro de uma célula. Por isso há quem o chame de "no limite da vida".' },
  { nome: 'Robô aspirador', certa: 'nao', porque: 'Reage ao ambiente e usa energia, mas não tem células, não cresce nem se reproduz sozinho.' },
  { nome: 'Mula', certa: 'vivo', porque: 'É um animal vivo. Ela é estéril, mas a reprodução é uma característica da espécie, e não de cada indivíduo.' },
  { nome: 'Cristal de sal', certa: 'nao', porque: 'Cresce, mas só ganhando camadas de fora. Não tem metabolismo nem reprodução.' },
]

// Classificar casos difíceis mostra que "estar vivo" é um conjunto de características, e não uma só
export default function VivoOuNao() {
  const [resp, setResp] = useState<(R | null)[]>(ITENS.map(() => null))
  const acertos = resp.filter((r, i) => r === ITENS[i].certa).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Vivo ou não vivo?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {ITENS.map((it, i) => {
          const r = resp[i]
          return (
            <li key={it.nome} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{it.nome}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {OPCOES.map((o) => (
                  <button key={o.id} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? o.id : x)))}
                    className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${r === o.id ? (o.id === it.certa ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>{o.nome}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === it.certa ? 'Certo. ' : 'Quase. '}{it.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {ITENS.length}</p>
        <button type="button" onClick={() => setResp(ITENS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
