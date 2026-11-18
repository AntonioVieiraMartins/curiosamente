import { useState } from 'react'
import { cartao } from '../ui/estilos'

const problemas = [
  { t: 'Comprei 3 camisas de R$ 25 cada e 1 boné de R$ 10. Quanto gastei?', o: ['3 × 25 + 10', '(3 + 25) × 10', '3 + 25 × 10'], c: 0, e: '3 × 25 = 75 e 75 + 10 = 85. A multiplicação vem antes da soma, sem precisar de parênteses.' },
  { t: 'Tenho R$ 100 e gasto R$ 20 em cada um de 3 lanches. Quanto sobra?', o: ['100 - 20 × 3', '(100 - 20) × 3', '100 - 20 + 3'], c: 0, e: '20 × 3 = 60 e 100 - 60 = 40.' },
  { t: 'Quatro amigos somam suas moedas: cada um tem 5 de R$ 1 e mais 2 moedas de R$ 1 dadas pela mãe. Quantas moedas ao todo?', o: ['4 × 5 + 2', '4 × (5 + 2)', '4 + 5 × 2'], c: 1, e: 'Cada um tem 5 + 2 = 7, e são 4 amigos: 4 × (5 + 2) = 28. Os parênteses mandam somar antes.' },
  { t: 'Dividi 60 figurinhas igualmente entre 4 amigos e cada um ganhou mais 3. Quantas figurinhas cada um tem?', o: ['60 ÷ 4 + 3', '60 ÷ (4 + 3)', '(60 + 3) ÷ 4'], c: 0, e: '60 ÷ 4 = 15 e 15 + 3 = 18.' },
]

export default function TraduzOProblema() {
  const [i, setI] = useState(0)
  const [esc, setEsc] = useState<number | null>(null)
  const [pontos, setPontos] = useState(0)
  const fim = i >= problemas.length
  const p = problemas[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual expressão resolve o problema?</p>
      {fim ? (
        <>
          <p className="mt-3 text-lg font-semibold">Você acertou {pontos} de {problemas.length}.</p>
          <button type="button" onClick={() => { setI(0); setPontos(0); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Jogar de novo</button>
        </>
      ) : (
        <>
          <p className="mt-3 text-[17px]">{p.t}</p>
          <div className="mt-3 grid gap-2">
            {p.o.map((x, k) => (
              <button key={k} type="button" onClick={() => { if (esc === null) { setEsc(k); if (k === p.c) setPontos(pontos + 1) } }} className={`min-h-11 rounded-2xl border-2 px-4 py-2 text-left font-mono font-semibold ${esc === k ? (k === p.c ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{x}</button>
            ))}
          </div>
          <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
            {esc === null ? 'Escolha a expressão que representa a história.' : `${esc === p.c ? 'Certo!' : 'Quase.'} ${p.e}`}
          </p>
          {esc !== null && <button type="button" onClick={() => { setI(i + 1); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">{i + 1 < problemas.length ? 'Próximo' : 'Ver resultado'}</button>}
        </>
      )}
    </div>
  )
}
