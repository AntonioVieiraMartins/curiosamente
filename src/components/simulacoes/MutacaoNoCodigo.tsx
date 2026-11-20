import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { nomesAminoacidos, traduzCodon } from '../../lib/codigoGenetico'

const original = 'AUGGCUAAAUUCGGCUAA'.split('')
const proxima: Record<string, string> = { A: 'U', U: 'C', C: 'G', G: 'A' }

function classifica(rna: string[]) {
  const mudou = rna.map((b, i) => (b === original[i] ? -1 : Math.floor(i / 3))).filter((x) => x >= 0)
  if (mudou.length === 0) return null
  const i = mudou[0]
  const antes = traduzCodon(original.slice(i * 3, i * 3 + 3).join(''))
  const depois = traduzCodon(rna.slice(i * 3, i * 3 + 3).join(''))
  if (antes === depois) return { tipo: 'silenciosa', texto: `O códon mudou, mas continua sendo ${nomesAminoacidos[antes]}. A proteína fica igual.` }
  if (depois === '*') return { tipo: 'sem sentido', texto: 'Surgiu um sinal de PARE no meio do caminho: a proteína sai curta e, em geral, não funciona.' }
  if (antes === '*') return { tipo: 'perda do PARE', texto: 'O sinal de PARE sumiu: a proteína continua sendo lida e fica comprida demais.' }
  return { tipo: 'de troca (missense)', texto: `Um aminoácido foi trocado: ${nomesAminoacidos[antes]} virou ${nomesAminoacidos[depois]}. O efeito depende do lugar.` }
}

// Clique numa letra do RNA para mudá-la e veja o que acontece com a proteína
export default function MutacaoNoCodigo() {
  const [rna, setRna] = useState<string[]>(original)
  const codons = [0, 3, 6, 9, 12, 15].map((i) => rna.slice(i, i + 3).join(''))
  const prot: string[] = []
  let parou = false
  for (const c of codons) {
    const a = traduzCodon(c)
    if (a === '*') { parou = true; break }
    prot.push(a)
  }
  const info = classifica(rna)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mude uma letra do código</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {codons.map((c, k) => (
          <div key={k} className="flex gap-1 rounded-2xl bg-fundo p-1">
            {c.split('').map((b, j) => (
              <button key={j} type="button" aria-label={`Mudar a letra ${b} do códon ${k + 1}`} onClick={() => setRna((r) => r.map((x, i) => (i === k * 3 + j ? proxima[x] : x)))} className={`min-h-11 min-w-9 rounded-xl border text-[15px] font-bold ${b !== original[k * 3 + j] ? 'border-coral bg-coral/20' : 'border-borda bg-superficie'}`}>{b}</button>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[15px]"><strong>Proteína:</strong> {prot.length ? prot.join(' - ') : '(vazia)'}{parou ? ' - PARE' : ''}</p>
      <button type="button" onClick={() => setRna(original)} className="mt-3 min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Voltar ao original</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {info ? <><strong>Mutação {info.tipo}.</strong> {info.texto}</> : 'Sem mutação. Esta fita faz a proteína M - A - K - F - G (Met, Ala, Lis, Fen, Gli). Clique em uma letra para mudá-la.'}
      </p>
    </div>
  )
}
