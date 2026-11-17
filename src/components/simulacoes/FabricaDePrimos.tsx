import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const ehPrimo = (n: number) => {
  if (n < 2) return false
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false
  return true
}
const primos = Array.from({ length: 1000 }, (_, i) => i + 2).filter(ehPrimo)

// Multiplicar dois primos é uma conta só. Descobrir quais primos geraram o resultado exige muitas tentativas.
export default function FabricaDePrimos() {
  const [i, setI] = useState(10)
  const [j, setJ] = useState(25)
  const idA = useId()
  const idB = useId()
  const p = primos[i]
  const q = primos[j]
  const n = p * q
  const menor = Math.min(p, q)
  const tentativas = menor - 1 // testar 2, 3, 4... até achar o menor primo

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Fácil de montar, difícil de desmontar</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={idA} className="block font-semibold">Primo 1: <span className="text-coral">{p}</span></label>
          <input id={idA} type="range" min={0} max={primos.length - 1} value={i} onChange={(e) => setI(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
        <div>
          <label htmlFor={idB} className="block font-semibold">Primo 2: <span className="text-azul-texto">{q}</span></label>
          <input id={idB} type="range" min={0} max={primos.length - 1} value={j} onChange={(e) => setJ(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
        </div>
      </div>

      <div aria-live="polite" className="mt-3 space-y-2">
        <p className="rounded-2xl bg-verde/10 p-4"><strong className="text-verde">Montar:</strong> {p} × {q} = <strong>{n.toLocaleString('pt-BR')}</strong>. Uma conta só.</p>
        <p className="rounded-2xl bg-coral/10 p-4">
          <strong className="text-coral">Desmontar:</strong> só com o número {n.toLocaleString('pt-BR')} na mão, um detetive que testa 2, 3, 4... faz até <strong>{tentativas.toLocaleString('pt-BR')}</strong> divisões para achar o primeiro fator.
        </p>
      </div>
      <p className="mt-3 text-[15px] text-suave">Com primos de 3 algarismos já são centenas de tentativas. Com primos de 300 algarismos, nem o computador mais rápido dá conta pelo caminho simples.</p>
    </div>
  )
}
