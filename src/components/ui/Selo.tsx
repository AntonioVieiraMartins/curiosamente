type Props = { nome: string; descricao: string; obtida: boolean }

// Conquista em formato de medalha redonda. Bloqueada fica tracejada e apagada.
export default function Selo({ nome, descricao, obtida }: Props) {
  return (
    <li className="flex flex-col items-center text-center">
      <span
        className={`grid size-20 place-items-center rounded-full p-2 ${
          obtida ? 'bg-amarelo text-texto' : 'border-2 border-dashed border-borda bg-fundo text-suave'
        }`}
      >
        <span className="text-[13px] font-semibold leading-tight">{nome}</span>
      </span>
      <span className="mt-2 text-xs leading-snug text-suave">{descricao}</span>
    </li>
  )
}
