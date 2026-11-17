import type { Linha } from '../../conteudo/indice'

// Bolinha com a letra da linha, como nas placas de metrô
export default function SiglaLinha({ linha, tamanho = 'm' }: { linha: Linha; tamanho?: 'p' | 'm' }) {
  const medida = tamanho === 'p' ? 'size-5 text-[10px]' : 'size-10 text-base'
  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 place-items-center rounded-full font-bold text-white ${medida}`}
      style={{ background: linha.cor }}
    >
      {linha.sigla}
    </span>
  )
}
