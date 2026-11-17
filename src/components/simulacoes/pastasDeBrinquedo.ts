// Disco de brinquedo usado nas simulações de terminal e de caminhos. Cada item é um caminho completo, no estilo do Windows.
export type Item = { tipo: 'pasta' | 'arquivo'; texto?: string }

export const discoInicial: Record<string, Item> = {
  'C:\\Users': { tipo: 'pasta' },
  'C:\\Users\\voce': { tipo: 'pasta' },
  'C:\\Users\\voce\\Documentos': { tipo: 'pasta' },
  'C:\\Users\\voce\\Documentos\\relatorio.txt': { tipo: 'arquivo', texto: 'Relatório do mês: tudo certo.' },
  'C:\\Users\\voce\\Documentos\\notas.txt': { tipo: 'arquivo', texto: 'Comprar pão. Estudar binário.' },
  'C:\\Users\\voce\\Fotos': { tipo: 'pasta' },
  'C:\\Users\\voce\\Fotos\\praia.jpg': { tipo: 'arquivo', texto: '(uma foto: bits, não texto)' },
  'C:\\Users\\voce\\Downloads': { tipo: 'pasta' },
  'C:\\Programas': { tipo: 'pasta' },
}

export const separar = (caminho: string) => caminho.split('\\')
export const juntar = (partes: string[]) => (partes.length === 1 ? `${partes[0]}\\` : partes.join('\\'))
export const pai = (caminho: string) => separar(caminho).slice(0, -1).join('\\')
export const nomeDe = (caminho: string) => separar(caminho).slice(-1)[0]

// Filhos diretos de uma pasta ('C:' é a raiz do disco)
export function filhosDe(disco: Record<string, Item>, pasta: string) {
  return Object.keys(disco).filter((k) => pai(k) === pasta).sort((a, b) => nomeDe(a).localeCompare(nomeDe(b), 'pt-BR'))
}
