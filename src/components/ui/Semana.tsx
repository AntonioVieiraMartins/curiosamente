const dias = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom']

// Os 7 dias da semana; dia estudado fica verde com um "visto"
export default function Semana({ estudados }: { estudados: boolean[] }) {
  return (
    <ol className="grid grid-cols-7 gap-1.5 sm:gap-2">
      {dias.map((dia, i) => (
        <li key={dia} className="text-center">
          <span
            className={`grid aspect-square place-items-center rounded-xl text-lg font-bold ${
              estudados[i] ? 'bg-verde text-white' : 'bg-fundo text-transparent'
            }`}
          >
            ✓
          </span>
          <span className="mt-1.5 block text-xs text-suave">
            {dia}
            <span className="sr-only">{estudados[i] ? ': estudou' : ': não estudou'}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
