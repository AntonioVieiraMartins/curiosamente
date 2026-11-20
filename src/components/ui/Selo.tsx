type Props = { nome: string; descricao: string; obtidaEm?: string }

const formatar = (iso: string) => new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })

// Conquista em formato de medalha redonda. Bloqueada fica tracejada e apagada.
export default function Selo({ nome, descricao, obtidaEm }: Props) {
  const obtida = Boolean(obtidaEm)
  return (
    <li className="flex flex-col items-center text-center max-sm:w-28 max-sm:shrink-0 max-sm:snap-start">
      <span
        className={`grid size-20 place-items-center rounded-full p-2 ${
          obtida ? 'bg-amarelo text-texto shadow-cartao' : 'border-2 border-dashed border-borda bg-fundo text-suave'
        }`}
      >
        <span className="text-[13px] font-semibold leading-tight">{nome}</span>
      </span>
      <span className="mt-2 text-xs leading-snug text-suave">{descricao}</span>
      <span className="mt-1 text-xs font-semibold">
        {obtidaEm ? `Ganhou em ${formatar(obtidaEm)}` : <span className="sr-only">Ainda bloqueada</span>}
      </span>
    </li>
  )
}
