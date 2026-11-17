const botaoPasso =
  'grid size-11 shrink-0 place-items-center rounded-full border border-borda text-xl font-semibold enabled:hover:border-texto/30 disabled:opacity-30'

type Props = {
  rotulo: string
  valor: number
  min: number
  max: number
  mudar: (v: number) => void
  grupo?: string // para leitores de tela, quando há dois contadores com o mesmo rótulo (ex.: "1ª fração")
}

// Contador com botões − e +, grandes o bastante para o dedo no celular
export default function Contador({ rotulo, valor, min, max, mudar, grupo }: Props) {
  const nome = grupo ? `${grupo}, ${rotulo}` : rotulo
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-center text-sm text-suave">{rotulo}</span>
      <div className="flex items-center gap-2">
        <button type="button" aria-label={`${nome}: menos`} className={botaoPasso} disabled={valor <= min} onClick={() => mudar(valor - 1)}>−</button>
        <span className="w-6 text-center font-semibold">{valor}</span>
        <button type="button" aria-label={`${nome}: mais`} className={botaoPasso} disabled={valor >= max} onClick={() => mudar(valor + 1)}>+</button>
      </div>
    </div>
  )
}
