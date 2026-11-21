import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Nomes populares enganam. A classificação olha o parentesco, não o jeito de viver.
const itens = [
  { nome: 'Baleia', grupo: 'Mamífero', porque: 'Respira ar pelos pulmões, amamenta o filhote e tem pelos finos no focinho. Vive na água, mas é mamífero.' },
  { nome: 'Cavalo-marinho', grupo: 'Peixe', porque: 'Apesar do formato diferente, tem brânquias, nadadeiras e coluna vertebral. É um peixe.' },
  { nome: 'Morcego', grupo: 'Mamífero', porque: 'Tem pelos e amamenta. Voa, mas as asas são feitas de pele esticada entre dedos, e ele não tem penas.' },
  { nome: 'Estrela-do-mar', grupo: 'Invertebrado', porque: 'Não tem coluna vertebral nem brânquias de peixe. Pertence a um grupo próprio de invertebrados marinhos.' },
  { nome: 'Salamandra', grupo: 'Anfíbio', porque: 'Parece um lagarto, mas tem pele úmida e lisa, e a larva vive na água. É parente dos sapos.' },
  { nome: 'Pinguim', grupo: 'Ave', porque: 'Não voa e nada, mas tem penas e põe ovos com casca. É ave.' },
]
const opcoes = ['Peixe', 'Anfíbio', 'Réptil', 'Ave', 'Mamífero', 'Invertebrado']

export default function NomesQueEnganam() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const it = itens[i]
  const proximo = () => { setI((i + 1) % itens.length); setResp(null) }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Nomes que enganam</p>
      <p className="mt-3 text-lg font-semibold">{it.nome}: a que grupo pertence?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Grupo">
        {opcoes.map((o) => (
          <button key={o} type="button" disabled={resp !== null} onClick={() => setResp(o)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${resp === o ? (o === it.grupo ? 'border-verde bg-verde/20' : 'border-coral bg-coral/20') : 'border-borda bg-superficie'}`}>{o}</button>
        ))}
      </div>
      {resp !== null && (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          {resp === it.grupo ? 'Certo! ' : `Quase: é ${it.grupo.toLowerCase()}. `}{it.porque}
          <button type="button" onClick={proximo} className="ml-2 mt-2 min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Próximo ({i + 1}/{itens.length})</button>
        </p>
      )}
    </div>
  )
}
