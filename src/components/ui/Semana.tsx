const dias = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom']

// Os 7 dias da semana; dia estudado fica verde com um "visto". Hoje ganha um contorno.
export default function Semana({ estudados, hoje = -1 }: { estudados: boolean[]; hoje?: number }) {
  return (
    <ol className="grid grid-cols-7 gap-1.5 sm:gap-2">
      {dias.map((dia, i) => (
        <li key={dia} className="text-center">
          <span
            className={`grid aspect-square place-items-center rounded-xl text-lg font-bold ${
              estudados[i] ? 'bg-verde text-white' : 'bg-fundo text-transparent'
            } ${i === hoje ? 'ring-2 ring-texto/40 ring-offset-2' : ''}`}
          >
            ✓
          </span>
          <span className={`mt-1.5 block text-xs ${i === hoje ? 'font-semibold text-texto' : 'text-suave'}`}>
            {dia}
            <span className="sr-only">{i === hoje ? ' (hoje)' : ''}{estudados[i] ? ': estudou' : ': não estudou'}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
