import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Chave dicotômica: perguntas de sim ou não que levam a um grupo
const nos: Record<string, { q: string; sim: string; nao: string }> = {
  vert: { q: 'Tem coluna vertebral?', sim: 'pelo', nao: 'inseto' },
  pelo: { q: 'Tem pelos ou amamenta os filhotes?', sim: 'Mamífero', nao: 'pena' },
  pena: { q: 'Tem penas?', sim: 'Ave', nao: 'escama' },
  escama: { q: 'Tem escamas secas e põe ovos com casca?', sim: 'Réptil', nao: 'branquia' },
  branquia: { q: 'Tem brânquias e nadadeiras a vida toda?', sim: 'Peixe', nao: 'Anfíbio' },
  inseto: { q: 'Tem 6 patas e o corpo em 3 partes?', sim: 'Inseto', nao: 'aranha' },
  aranha: { q: 'Tem 8 patas?', sim: 'Aracnídeo', nao: 'Outro invertebrado' },
}
const animais = [
  { nome: 'Baleia-jubarte', grupo: 'Mamífero', traco: 'Vive no mar, tem coluna vertebral, respira ar, tem nadadeiras, amamenta o filhote e tem alguns pelos finos no focinho.' },
  { nome: 'Sapo', grupo: 'Anfíbio', traco: 'Tem coluna vertebral, pele úmida e lisa, põe ovos na água e o filhote (girino) respira por brânquias.' },
  { nome: 'Jacaré', grupo: 'Réptil', traco: 'Tem coluna vertebral, escamas secas, respira ar e põe ovos com casca em ninho.' },
  { nome: 'Pinguim', grupo: 'Ave', traco: 'Tem coluna vertebral, penas, não voa, põe ovos com casca e não tem pelos.' },
  { nome: 'Tubarão', grupo: 'Peixe', traco: 'Tem coluna vertebral, respira por brânquias a vida toda, nadadeiras, sem pelos nem penas.' },
  { nome: 'Abelha', grupo: 'Inseto', traco: 'Sem coluna vertebral, 6 patas, 2 pares de asas e corpo dividido em cabeça, tórax e abdômen.' },
  { nome: 'Aranha', grupo: 'Aracnídeo', traco: 'Sem coluna vertebral, 8 patas e corpo em 2 partes.' },
  { nome: 'Minhoca', grupo: 'Outro invertebrado', traco: 'Sem coluna vertebral, corpo mole e dividido em anéis, sem patas.' },
]

export default function ChaveDeClassificacao() {
  const [a, setA] = useState(0)
  const [no, setNo] = useState('vert')
  const [trilha, setTrilha] = useState<string[]>([])
  const animal = animais[a]
  const folha = !(no in nos)
  const responde = (sim: boolean) => {
    const atual = nos[no]
    setTrilha([...trilha, `${atual.q} ${sim ? 'Sim' : 'Não'}`])
    setNo(sim ? atual.sim : atual.nao)
  }
  const reinicia = (k: number) => { setA(k); setNo('vert'); setTrilha([]) }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Chave de classificação</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o animal">
        {animais.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => reinicia(k)} aria-pressed={a === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${a === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{animal.nome}:</strong> {animal.traco}</p>
      {trilha.length > 0 && <ol className="mt-3 list-decimal space-y-1 pl-5 text-[14px] text-suave">{trilha.map((t, k) => <li key={k}>{t}</li>)}</ol>}
      {!folha ? (
        <div className="mt-3">
          <p className="font-semibold">{nos[no].q}</p>
          <div className="mt-2 flex gap-2">
            <button type="button" onClick={() => responde(true)} className="min-h-11 rounded-full bg-texto px-5 text-[14px] font-semibold text-white">Sim</button>
            <button type="button" onClick={() => responde(false)} className="min-h-11 rounded-full border border-borda bg-superficie px-5 text-[14px] font-semibold">Não</button>
          </div>
        </div>
      ) : (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          Resultado da chave: <strong>{no}</strong>. {no === animal.grupo ? 'Certo! Bate com o grupo do animal.' : `Hmm, o grupo certo do animal é ${animal.grupo}. Alguma resposta não combinou com as características: tente de novo.`}
          <button type="button" onClick={() => reinicia(a)} className="ml-2 min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Refazer</button>
        </p>
      )}
    </div>
  )
}
