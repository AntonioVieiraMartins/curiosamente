// Tabela do código genético (RNA), na ordem U, C, A, G para a 1ª, 2ª e 3ª letras. '*' = parada.
const ordem = 'UCAG'
const aa = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG'

export const nomesAminoacidos: Record<string, string> = {
  F: 'Fenilalanina', L: 'Leucina', S: 'Serina', Y: 'Tirosina', C: 'Cisteína', W: 'Triptofano', P: 'Prolina', H: 'Histidina', Q: 'Glutamina', R: 'Arginina',
  I: 'Isoleucina', M: 'Metionina', T: 'Treonina', N: 'Asparagina', K: 'Lisina', V: 'Valina', A: 'Alanina', D: 'Aspartato', E: 'Glutamato', G: 'Glicina', '*': 'PARE',
}

// Traduz um códon de RNA (ex.: 'AUG') na letra do aminoácido
export function traduzCodon(codon: string): string {
  const i = ordem.indexOf(codon[0]) * 16 + ordem.indexOf(codon[1]) * 4 + ordem.indexOf(codon[2])
  return aa[i] ?? '?'
}

// Lê um RNA do primeiro AUG até o primeiro PARE (ou até o fim)
export function traduzRna(rna: string): string[] {
  const inicio = rna.indexOf('AUG')
  if (inicio < 0) return []
  const lista: string[] = []
  for (let i = inicio; i + 3 <= rna.length; i += 3) {
    const a = traduzCodon(rna.slice(i, i + 3))
    if (a === '*') break
    lista.push(a)
  }
  return lista
}
