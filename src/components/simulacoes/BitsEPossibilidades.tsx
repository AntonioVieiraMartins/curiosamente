import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { sobrescrito } from '../../lib/numeros'

const exemplos: Record<number, string> = {
  1: 'ligado ou desligado, sim ou não',
  2: 'as 4 direções: cima, baixo, esquerda e direita',
  3: 'os 7 dias da semana (e sobra 1)',
  4: 'um dígito hexadecimal (0 a F)',
  5: 'as 26 letras do alfabeto (e sobram 6)',
  7: 'a tabela ASCII, com 128 caracteres',
  8: 'um byte: letras, números e símbolos básicos',
  10: 'o "quilo" do computador (1.024)',
  16: 'cerca de 65 mil valores, como cada amostra do som de um CD',
  24: 'todas as cores de tela (3 bytes)',
  32: 'mais de 4 bilhões de endereços na internet antiga',
}

// Cada bit a mais dobra o número de combinações: 2 elevado ao número de bits
export default function BitsEPossibilidades() {
  const [bits, setBits] = useState(8)
  const id = useId()
  const combos = 2 ** bits
  const dica = exemplos[bits] ?? Object.entries(exemplos).filter(([k]) => Number(k) <= bits).pop()?.[1]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas combinações cabem?</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Bits: <span className="text-coral">{bits}</span></label>
      <input id={id} type="range" min={1} max={32} value={bits} onChange={(e) => setBits(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4">
        2{sobrescrito(bits)} = <strong className="break-all text-coral">{combos.toLocaleString('pt-BR')}</strong> combinações.
        <span className="mt-1 block text-[15px] text-suave">{exemplos[bits] ? `É o suficiente para: ${dica}.` : `Parecido com: ${dica}.`}</span>
      </p>
    </div>
  )
}
