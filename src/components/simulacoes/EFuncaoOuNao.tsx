import { useState } from 'react'
import { cartao } from '../ui/estilos'

const casos = [
  { t: 'Aluno → idade', pares: 'Ana → 10, Bia → 11, Caio → 10', ok: true, e: 'Cada aluno tem uma única idade. Duas pessoas podem ter a mesma idade (Ana e Caio): não há problema, o que não pode é uma pessoa ter duas idades.' },
  { t: 'Número → seu dobro', pares: '1 → 2, 2 → 4, 3 → 6', ok: true, e: 'Cada entrada tem uma única saída.' },
  { t: 'Idade → aluno', pares: '10 → Ana, 11 → Bia, 10 → Caio', ok: false, e: 'A entrada 10 aponta para dois alunos diferentes (Ana e Caio). Uma entrada com duas saídas quebra a regra.' },
  { t: 'Número → número cujo quadrado é ele', pares: '4 → 2, 4 → -2, 9 → 3', ok: false, e: 'A entrada 4 tem duas saídas (2 e -2). Por isso, “o número cujo quadrado é x” não é uma função.' },
  { t: 'Pessoa → CPF', pares: 'Ana → 111, Bia → 222, Caio → 333', ok: true, e: 'Cada pessoa tem um único CPF. Aqui, além disso, não se repete nenhum CPF.' },
]

// Teste da função: cada entrada pode ter só uma saída
export default function EFuncaoOuNao() {
  const [i, setI] = useState(0)
  const [esc, setEsc] = useState<boolean | null>(null)
  const [pontos, setPontos] = useState(0)
  const fim = i >= casos.length
  const c = casos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">É função ou não?</p>
      {fim ? (
        <>
          <p className="mt-3 text-lg font-semibold">Você acertou {pontos} de {casos.length}.</p>
          <button type="button" onClick={() => { setI(0); setPontos(0); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Jogar de novo</button>
        </>
      ) : (
        <>
          <p className="mt-3 font-semibold">{c.t}</p>
          <p className="mt-1 rounded-2xl bg-fundo p-3 font-mono text-[15px]">{c.pares}</p>
          <div className="mt-3 flex gap-2">
            {[true, false].map((v) => (
              <button key={String(v)} type="button" onClick={() => { if (esc === null) { setEsc(v); if (v === c.ok) setPontos(pontos + 1) } }} className={`min-h-11 rounded-full border-2 px-5 font-semibold ${esc === v ? (v === c.ok ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{v ? 'É função' : 'Não é função'}</button>
            ))}
          </div>
          <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{esc === null ? 'Procure alguma entrada com duas saídas.' : `${esc === c.ok ? 'Certo!' : 'Quase.'} ${c.e}`}</p>
          {esc !== null && <button type="button" onClick={() => { setI(i + 1); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">{i + 1 < casos.length ? 'Próximo' : 'Ver resultado'}</button>}
        </>
      )}
    </div>
  )
}
