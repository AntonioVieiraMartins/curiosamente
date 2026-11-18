import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Fator = 'sabe' | 'tem' | 'e'

const itens: { texto: string; fator: Fator }[] = [
  { texto: 'A senha que você digita', fator: 'sabe' },
  { texto: 'O celular que recebe um código', fator: 'tem' },
  { texto: 'A sua impressão digital', fator: 'e' },
  { texto: 'O PIN do cartão', fator: 'sabe' },
  { texto: 'Uma chave de segurança (um pequeno aparelho USB)', fator: 'tem' },
  { texto: 'O reconhecimento do seu rosto', fator: 'e' },
]
const nomes: Record<Fator, string> = { sabe: 'algo que você sabe', tem: 'algo que você tem', e: 'algo que você é' }

// Os três tipos de prova de identidade. Autenticação em dois fatores usa tipos diferentes.
export default function FatoresDeLogin() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<Fator | null>(null)
  const [ac, setAc] = useState(0)
  if (i >= itens.length) {
    return (
      <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
        <p className="font-semibold">Você acertou {ac} de {itens.length}.</p>
        <button type="button" onClick={() => { setI(0); setAc(0); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Jogar de novo</button>
      </div>
    )
  }
  const it = itens[i]
  const escolher = (f: Fator) => { if (resp === null) { setResp(f); if (f === it.fator) setAc((n) => n + 1) } }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Item {i + 1} de {itens.length}: que tipo de prova é?</p>
      <p className="mt-2 text-lg font-semibold">{it.texto}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {(Object.keys(nomes) as Fator[]).map((f) => (
          <button key={f} type="button" onClick={() => escolher(f)} className="min-h-11 rounded-xl border-2 border-azul px-3 text-[15px] font-semibold">{nomes[f]}</button>
        ))}
      </div>
      {resp !== null && (
        <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          <p className="font-semibold">{resp === it.fator ? 'Certo!' : `Não: é ${nomes[it.fator]}.`}</p>
          <button type="button" onClick={() => { setResp(null); setI(i + 1) }} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">{i === itens.length - 1 ? 'Ver resultado' : 'Próximo'}</button>
        </div>
      )}
    </div>
  )
}
