import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// O preço subiu x%. Para achar o preço antigo, NÃO basta tirar x% do preço novo:
// os x% foram calculados sobre o preço antigo, que é menor.
export default function DesfazerAumento({ antigo = 250 }: { antigo?: number }) {
  const [x, setX] = useState(20)
  const id = useId()
  const novo = antigo * (1 + x / 100)
  const errado = novo * (1 - x / 100)
  const certo = novo / (1 + x / 100)
  const maior = antigo * 2

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <label htmlFor={id} className="block font-semibold">
        O preço subiu <span className="text-azul-texto">{x}%</span> e agora é <span className="text-azul-texto">{reais(novo)}</span>
      </label>
      <input id={id} type="range" min={5} max={100} step={5} value={x} onChange={(e) => setX(Number(e.target.value))}
        className="mt-3 h-11 w-full cursor-pointer accent-[var(--color-azul)]" />

      <div className="mt-3 space-y-1" aria-hidden="true">
        <p className="text-sm text-suave">Preço novo = preço antigo (100%) + aumento ({x}% do antigo)</p>
        <div className="flex h-9 overflow-hidden rounded-lg">
          <span className="bg-borda" style={{ width: `${(antigo / maior) * 100}%` }} />
          <span className="bg-azul transition-[width] duration-300" style={{ width: `${((novo - antigo) / maior) * 100}%` }} />
        </div>
      </div>

      <div aria-live="polite" className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-coral/10 p-4">
          <p className="text-sm text-suave">Tirando {x}% do preço novo</p>
          <p className="font-serif text-2xl font-medium text-coral line-through decoration-2">{reais(errado)}</p>
          <p className="mt-1 text-[15px]">Errado: os {x}% de {reais(novo)} são mais que o aumento de verdade.</p>
        </div>
        <div className="rounded-2xl bg-verde/10 p-4">
          <p className="text-sm text-suave">Dividindo por {(1 + x / 100).toLocaleString('pt-BR')}</p>
          <p className="font-serif text-2xl font-medium text-verde">{reais(certo)}</p>
          <p className="mt-1 text-[15px]">Certo: o preço novo é {(100 + x)}% do antigo.</p>
        </div>
      </div>
    </div>
  )
}
