import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Com 3 lados, dá para saber se o ângulo maior é reto, agudo ou obtuso comparando c² com a² + b².
export default function EsquadroDeTresLados() {
  const [l, setL] = useState([3, 4, 5])
  const base = useId()
  const [x, y, z] = [...l].sort((m, n) => m - n)
  const existe = x + y > z
  const soma = x * x + y * y
  const tipo = !existe ? '' : soma === z * z ? 'reto' : soma > z * z ? 'agudo' : 'obtuso'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Será que é um esquadro?</p>
      {l.map((v, i) => (
        <div key={i}>
          <label htmlFor={`${base}${i}`} className="mt-2 block font-semibold">Lado {i + 1}: <span className="text-coral">{v}</span></label>
          <input id={`${base}${i}`} type="range" min={1} max={20} value={v}
            onChange={(e) => setL(l.map((q, j) => (j === i ? Number(e.target.value) : q)))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
      ))}
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        {!existe
          ? `Esses lados não fecham um triângulo: ${x} + ${y} precisa ser maior que ${z}.`
          : <>Maiores lados: {x}² + {y}² = <strong>{soma}</strong> e {z}² = <strong>{z * z}</strong>.{' '}
              {tipo === 'reto' ? <strong className="text-verde">São iguais: o maior ângulo é reto (90°)!</strong> : tipo === 'agudo' ? 'A soma é maior: todos os ângulos são agudos (menores que 90°).' : 'A soma é menor: o maior ângulo é obtuso (maior que 90°).'}</>}
      </p>
    </div>
  )
}
