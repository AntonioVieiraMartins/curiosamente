import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tabela do código genético na ordem U, C, A, G para a 1ª, 2ª e 3ª letras ('*' = parada)
const ordem = 'UCAG'
const aa = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG'
const nomes: Record<string, string> = {
  F: 'Fenilalanina', L: 'Leucina', S: 'Serina', Y: 'Tirosina', C: 'Cisteína', W: 'Triptofano', P: 'Prolina', H: 'Histidina', Q: 'Glutamina', R: 'Arginina',
  I: 'Isoleucina', M: 'Metionina (início)', T: 'Treonina', N: 'Asparagina', K: 'Lisina', V: 'Valina', A: 'Alanina', D: 'Aspartato', E: 'Glutamato', G: 'Glicina', '*': 'PARE',
}
const rna: Record<string, string> = { A: 'U', T: 'A', C: 'G', G: 'C' }
const proxima: Record<string, string> = { A: 'T', T: 'C', C: 'G', G: 'A' }

function traduz(codon: string) {
  const i = ordem.indexOf(codon[0]) * 16 + ordem.indexOf(codon[1]) * 4 + ordem.indexOf(codon[2])
  return aa[i]
}

// Do DNA ao RNA e do RNA à proteína: clique numa base do DNA para mudá-la
export default function TranscreveETraduz() {
  const [dna, setDna] = useState('TACGAAAAATTT'.split(''))
  const codons = [0, 3, 6, 9].map((i) => dna.slice(i, i + 3).map((b) => rna[b]).join(''))
  const prot = codons.map(traduz)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Do DNA à proteína</p>
      <p className="mt-2 text-[15px]">Toque numa base do DNA para trocá-la (A, T, C, G) e veja o que muda.</p>
      <p className="mt-3 text-xs font-semibold text-suave">DNA (fita molde)</p>
      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
        {[0, 3, 6, 9].map((g) => (
          <div key={g} className="flex gap-1">
            {dna.slice(g, g + 3).map((b, j) => (
              <button key={j} type="button" onClick={() => setDna((d) => d.map((x, i) => (i === g + j ? proxima[x] : x)))} aria-label={`Base ${g + j + 1}: ${b}. Tocar para mudar`} className="min-h-11 min-w-11 rounded-xl border border-borda bg-superficie text-[16px] font-bold">{b}</button>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs font-semibold text-suave">RNA mensageiro (cópia, com U no lugar de T)</p>
      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[16px] font-bold">
        {codons.map((c, i) => <span key={i} className="rounded-xl bg-fundo px-3 py-2">{c}</span>)}
      </div>
      <p className="mt-3 text-xs font-semibold text-suave">Proteína (um aminoácido por trio)</p>
      <div className="mt-1 flex flex-wrap gap-2 text-[14px]">
        {prot.map((p, i) => <span key={i} className={`rounded-xl px-3 py-2 font-semibold ${p === '*' ? 'bg-coral/20' : 'bg-verde/20'}`}>{nomes[p]}</span>)}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {prot.includes('*')
          ? 'Um dos trios virou PARE: a proteína acaba mais cedo. É como pôr um ponto final no meio da frase.'
          : prot[0] !== 'M'
            ? 'A proteína começa sempre com AUG (metionina), que vem do TAC no DNA. Sem esse início, a fábrica nem começa.'
            : 'Troque uma base e veja: às vezes o aminoácido muda, e às vezes não (vários trios dão o mesmo aminoácido).'}
      </p>
    </div>
  )
}
