import { useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const casos = [
  { a: 2, b: 1, op: ['f(x) = 2x + 1', 'f(x) = x + 2', 'f(x) = -2x + 1'] },
  { a: -1, b: 3, op: ['f(x) = x + 3', 'f(x) = -x + 3', 'f(x) = -3x + 1'] },
  { a: 0.5, b: -2, op: ['f(x) = 0,5x - 2', 'f(x) = 2x - 0,5', 'f(x) = 0,5x + 2'] },
  { a: 3, b: -3, op: ['f(x) = 3x + 3', 'f(x) = -3x - 3', 'f(x) = 3x - 3'] },
]
const certa = ['f(x) = 2x + 1', 'f(x) = -x + 3', 'f(x) = 0,5x - 2', 'f(x) = 3x - 3']

export default function QualEAFuncao() {
  const [i, setI] = useState(0)
  const [esc, setEsc] = useState<string | null>(null)
  const [pontos, setPontos] = useState(0)
  const fim = i >= casos.length
  const c = casos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual é a função deste gráfico?</p>
      {fim ? (
        <>
          <p className="mt-3 text-lg font-semibold">Você acertou {pontos} de {casos.length}.</p>
          <button type="button" onClick={() => { setI(0); setPontos(0); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Jogar de novo</button>
        </>
      ) : (
        <>
          <PlanoFuncao curvas={[{ f: (x) => c.a * x + c.b, cor: 'var(--color-azul)' }]} xmin={-5} xmax={5} ymin={-6} ymax={6} rotuloAlt="Gráfico de uma reta" />
          <div className="mt-3 grid gap-2">
            {c.op.map((o) => (
              <button key={o} type="button" onClick={() => { if (esc === null) { setEsc(o); if (o === certa[i]) setPontos(pontos + 1) } }} className={`min-h-11 rounded-2xl border-2 px-4 py-2 text-left font-mono font-semibold ${esc === o ? (o === certa[i] ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{o}</button>
            ))}
          </div>
          <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
            {esc === null ? 'Dica: onde a reta cruza o eixo y? Ela sobe ou desce?' : esc === certa[i] ? `Certo! Cruza o eixo y em ${c.b.toLocaleString('pt-BR')} (isso é o b) e ${c.a > 0 ? 'sobe' : 'desce'} (o a é ${c.a > 0 ? 'positivo' : 'negativo'}).` : `Ainda não. A resposta é ${certa[i]}: o b é ${c.b.toLocaleString('pt-BR')} e o a é ${c.a.toLocaleString('pt-BR')}.`}
          </p>
          {esc !== null && <button type="button" onClick={() => { setI(i + 1); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">{i + 1 < casos.length ? 'Próximo' : 'Ver resultado'}</button>}
        </>
      )}
    </div>
  )
}
