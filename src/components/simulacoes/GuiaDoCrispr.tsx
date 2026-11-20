import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Alvo de 20 letras no DNA e um PAM (NGG) logo depois. O RNA-guia só leva a Cas9 se combinar com o alvo.
const alvo = 'GACCTGAAGTCCGATTACGA'
const pam = 'TGG'
const guias = [
  { nome: 'Guia 1', seq: 'GACCUGAAGUCCGAUUACGA' },
  { nome: 'Guia 2', seq: 'GACCUGAAGUCCGAUUACCA' },
  { nome: 'Guia 3', seq: 'CUGAACGUUAGCCAUGGAUC' },
]
const dnaParaRna = (s: string) => s.replace(/T/g, 'U')

export default function GuiaDoCrispr() {
  const [g, setG] = useState(0)
  const guia = guias[g].seq
  const alvoRna = dnaParaRna(alvo)
  const trocas = guia.split('').filter((b, i) => b !== alvoRna[i]).length
  const resultado = trocas === 0 ? 'corta' : trocas <= 2 ? 'quase' : 'nao'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">CRISPR: o guia encontra o endereço</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o guia">
        {guias.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => setG(k)} aria-pressed={g === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${g === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3 overflow-x-auto rounded-2xl bg-fundo p-3 font-mono text-[13px] leading-6">
        <div>DNA alvo : {alvo.split('').map((b, i) => <span key={i}>{b}</span>)}<span className="font-bold text-coral"> {pam}</span></div>
        <div>RNA-guia : {guia.split('').map((b, i) => <span key={i} className={b !== alvoRna[i] ? 'rounded bg-coral/30 font-bold' : ''}>{b}</span>)}</div>
      </div>
      <p className="mt-2 text-sm text-suave">Em coral, o PAM (NGG): um sinal que a Cas9 precisa achar ao lado do alvo.</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resultado === 'corta' && `${guias[g].nome}: combina nas 20 letras e o PAM está ali. A Cas9 corta o DNA três letras antes do PAM.`}
        {resultado === 'quase' && `${guias[g].nome}: ${trocas} ${trocas === 1 ? 'letra não combina' : 'letras não combinam'}. Corte menos eficiente ou errado: cortes fora do alvo são um dos riscos do CRISPR.`}
        {resultado === 'nao' && `${guias[g].nome}: quase nada combina (${trocas} letras diferentes). A Cas9 não encontra o endereço e não corta aqui.`}
      </p>
    </div>
  )
}
