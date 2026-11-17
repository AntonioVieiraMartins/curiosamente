type Props = { cor: string; baldeacao?: boolean; proxima?: boolean; concluida?: boolean }

// Bolinha de estação. Baldeação (liga duas linhas) ganha um anel extra, como nos mapas de metrô.
// Estação concluída fica preenchida com a cor da linha.
export default function Estacao({ cor, baldeacao = false, proxima = false, concluida = false }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`relative z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-[5px] text-[11px] font-bold text-white ${
        baldeacao ? 'outline-2 outline-offset-2 outline-texto/60' : ''
      }`}
      style={{ borderColor: cor, background: concluida ? cor : 'var(--color-superficie)' }}
    >
      {concluida ? '✓' : proxima && <span className="size-1.5 rounded-full bg-texto" />}
    </span>
  )
}
