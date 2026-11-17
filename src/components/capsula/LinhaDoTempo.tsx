import { useCapsula } from './ContextoCapsula'

type Marco = { ano: string; texto: string }

// Linha do tempo curta da etapa "História"
export default function LinhaDoTempo({ marcos }: { marcos: Marco[] }) {
  const { cor } = useCapsula()
  return (
    <ol className="relative space-y-5 pl-8">
      <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-borda" />
      {marcos.map((m) => (
        <li key={m.ano + m.texto} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-8 top-1.5 size-4 rounded-full border-4 bg-superficie"
            style={{ borderColor: cor }}
          />
          <p className="font-serif text-xl font-medium">{m.ano}</p>
          <p className="mt-0.5 text-suave">{m.texto}</p>
        </li>
      ))}
    </ol>
  )
}
