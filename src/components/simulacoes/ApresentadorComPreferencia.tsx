import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Quando o carro está na sua porta (a 1), o apresentador pode abrir a 2 ou a 3.
// "q" é a chance de ele preferir a 3. A chance de o carro estar na 2, dado que ele abriu a 3, é 1/(1+q).
export default function ApresentadorComPreferencia() {
  const [q, setQ] = useState(50) // em porcentagem
  const id = useId()
  const chance = 100 / (1 + q / 100)

  const leitura =
    q === 100
      ? 'Ele sempre abre a 3 quando pode. Ver a 3 aberta quase não diz nada: fica 50% a 50%. Mesmo assim, trocar não perde.'
      : q === 0
        ? 'Ele nunca abre a 3 por vontade própria. Se abriu, foi obrigado: o carro está na 2, com certeza.'
        : q === 50
          ? 'Esse é o jogo clássico: ele sorteia entre a 2 e a 3. Trocar dá 2/3.'
          : 'Quanto menos ele gosta da porta 3, mais a porta 3 aberta entrega o carro na 2.'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <label htmlFor={id} className="block font-semibold">
        Quando o carro está na sua porta, ele abre a porta 3 em <span className="text-azul-texto">{q}%</span> das vezes
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={5}
        value={q}
        onChange={(e) => setQ(Number(e.target.value))}
        className="mt-4 h-11 w-full cursor-pointer accent-[var(--color-azul)]"
      />
      <div aria-hidden="true" className="flex justify-between text-xs text-suave">
        <span>nunca</span><span>sorteia</span><span>sempre</span>
      </div>

      <div aria-live="polite" className="mt-5 rounded-2xl bg-fundo p-4">
        <p className="text-sm text-suave">Chance de ganhar trocando, depois de ver a porta 3 aberta</p>
        <p className="mt-1 font-serif text-4xl font-medium">
          {chance.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%
        </p>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-borda">
          <div className="h-full rounded-full bg-azul transition-[width] duration-300" style={{ width: `${chance}%` }} />
        </div>
        <p className="mt-3 text-[15px]">{leitura}</p>
      </div>
    </div>
  )
}
