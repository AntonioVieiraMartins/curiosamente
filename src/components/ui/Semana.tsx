const dias = [
  { letra: 'S', nome: 'segunda' }, { letra: 'T', nome: 'terça' }, { letra: 'Q', nome: 'quarta' },
  { letra: 'Q', nome: 'quinta' }, { letra: 'S', nome: 'sexta' }, { letra: 'S', nome: 'sábado' }, { letra: 'D', nome: 'domingo' },
]

// Os 7 dias da semana: dia estudado = bolinha verde cheia; hoje = anel verde; os outros = anel cinza
export default function Semana({ estudados, hoje = -1 }: { estudados: boolean[]; hoje?: number }) {
  return (
    <ol className="flex justify-between">
      {dias.map((dia, i) => (
        <li key={dia.nome} className="flex flex-col items-center gap-1.5">
          <span
            className={`size-7 rounded-full ${
              estudados[i] ? 'bg-verde' : `border-2 bg-superficie ${i === hoje ? 'border-verde' : 'border-borda'}`
            }`}
          />
          <span className={`text-xs ${i === hoje ? 'font-semibold text-texto' : 'text-suave'}`} aria-hidden="true">{dia.letra}</span>
          <span className="sr-only">{dia.nome}{i === hoje ? ' (hoje)' : ''}{estudados[i] ? ': estudou' : ': não estudou'}</span>
        </li>
      ))}
    </ol>
  )
}
