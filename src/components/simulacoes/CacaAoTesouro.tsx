import { useState } from 'react'
import { cartao } from '../ui/estilos'

const LADO = 8
const TESOUROS = 4

function sortear() {
  const achados = new Set<string>()
  while (achados.size < TESOUROS) achados.add(`${Math.floor(Math.random() * LADO)},${Math.floor(Math.random() * LADO)}`)
  return achados
}

// Como na batalha naval: cada casa é um par (x, y). O x vem primeiro: horizontal, depois vertical.
export default function CacaAoTesouro() {
  const [tesouros, setTesouros] = useState(sortear)
  const [tentativas, setTentativas] = useState<Set<string>>(new Set())
  const [ultima, setUltima] = useState<string | null>(null)

  const achados = [...tentativas].filter((t) => tesouros.has(t)).length

  function atirar(x: number, y: number) {
    const chave = `${x},${y}`
    if (tentativas.has(chave)) return
    setTentativas(new Set(tentativas).add(chave))
    setUltima(chave)
  }
  function recomecar() {
    setTesouros(sortear())
    setTentativas(new Set())
    setUltima(null)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Caça ao tesouro: {TESOUROS} tesouros escondidos</p>

      <div className="mt-3 grid grid-cols-[auto_1fr] gap-1">
        <div className="grid items-stretch gap-1 pt-0" style={{ gridTemplateRows: `repeat(${LADO}, 1fr)` }} aria-hidden="true">
          {Array.from({ length: LADO }, (_, i) => LADO - 1 - i).map((y) => (
            <span key={y} className="grid w-4 place-items-center text-xs text-suave">{y}</span>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: LADO * LADO }, (_, i) => ({ x: i % LADO, y: LADO - 1 - Math.floor(i / LADO) })).map(({ x, y }) => {
              const chave = `${x},${y}`
              const tentou = tentativas.has(chave)
              const acertou = tentou && tesouros.has(chave)
              return (
                <button key={chave} type="button" onClick={() => atirar(x, y)} aria-label={`Ponto ${x}, ${y}${tentou ? (acertou ? ': tesouro' : ': água') : ''}`}
                  className={`h-10 rounded-md text-xs font-semibold transition-colors ${acertou ? 'bg-amarelo text-texto' : tentou ? 'bg-azul-claro text-azul-texto' : 'bg-fundo ring-1 ring-borda'} ${chave === ultima ? 'ring-2 ring-coral' : ''}`}>
                  {acertou ? '★' : tentou ? '·' : ''}
                </button>
              )
            })}
          </div>
          <div className="mt-1 grid grid-cols-8 gap-1" aria-hidden="true">
            {Array.from({ length: LADO }, (_, x) => <span key={x} className="text-center text-xs text-suave">{x}</span>)}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {achados === TESOUROS
          ? <>Achou os {TESOUROS} tesouros em <strong className="text-verde">{tentativas.size} tentativas</strong>!</>
          : ultima
            ? <>Último tiro: ({ultima.replace(',', ', ')}): <strong>{tesouros.has(ultima) ? 'tesouro!' : 'água.'}</strong> Tesouros achados: {achados} de {TESOUROS}.</>
            : 'Toque numa casa para atirar. A régua de baixo é o x; a da esquerda é o y.'}
      </p>
      <button type="button" onClick={recomecar} className="mt-3 min-h-11 rounded-full border border-borda px-5 font-semibold">Novo jogo</button>
    </div>
  )
}
