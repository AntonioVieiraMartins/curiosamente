import { useState } from 'react'
import { cartao } from '../ui/estilos'

const problemas = [
  { t: 'Ana tinha 35 figurinhas e ganhou 18. Com quantas ficou?', c: 'somar', e: 'Ganhar é juntar: 35 + 18 = 53.' },
  { t: 'Um ônibus levava 48 pessoas e 19 desceram. Quantas ficaram?', c: 'subtrair', e: 'Descer é tirar: 48 - 19 = 29.' },
  { t: 'Pedro tem 52 bolinhas e Lia tem 37. Quantas Pedro tem a mais?', c: 'subtrair', e: 'Comparar é subtrair: 52 - 37 = 15.' },
  { t: 'Faltam 24 páginas para acabar um livro de 90. Quantas já foram lidas?', c: 'subtrair', e: 'O todo é 90 e falta 24: 90 - 24 = 66 páginas lidas.' },
  { t: 'Numa sala há 14 meninos e 17 meninas. Quantos alunos há no total?', c: 'somar', e: 'Total de duas partes: 14 + 17 = 31.' },
  { t: 'Você pagou R$ 50 por algo de R$ 32. Qual é o troco?', c: 'subtrair', e: 'Troco é o que sobra: 50 - 32 = 18.' },
]

export default function EscolhaAConta() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const [pontos, setPontos] = useState(0)
  const p = problemas[i]
  const fim = i >= problemas.length
  function escolher(c: string) { if (resp) return; setResp(c); if (c === p.c) setPontos(pontos + 1) }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Soma ou subtração?</p>
      {fim ? (
        <>
          <p className="mt-3 text-lg font-semibold">Você acertou {pontos} de {problemas.length}.</p>
          <button type="button" onClick={() => { setI(0); setPontos(0); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Jogar de novo</button>
        </>
      ) : (
        <>
          <p className="mt-3 text-[17px]">{p.t}</p>
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={() => escolher('somar')} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Somar</button>
            <button type="button" onClick={() => escolher('subtrair')} className="min-h-11 rounded-full border-2 border-coral px-5 font-semibold">Subtrair</button>
          </div>
          <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
            {resp === null ? 'Pense: o problema junta ou tira?' : `${resp === p.c ? 'Certo!' : 'Quase.'} ${p.e}`}
          </p>
          {resp && <button type="button" onClick={() => { setI(i + 1); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">{i + 1 < problemas.length ? 'Próximo' : 'Ver resultado'}</button>}
        </>
      )}
    </div>
  )
}
