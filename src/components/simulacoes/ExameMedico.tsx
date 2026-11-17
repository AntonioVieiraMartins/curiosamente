import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Exemplo didático (números inventados, não de um exame real):
// o exame acerta 99% dos doentes e dá "falso positivo" em 1% dos saudáveis.
const POPULACAO = 10_000
const ACERTA_DOENTE = 0.99
const FALSO_POSITIVO = 0.01
const raridades = [0.001, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5] // fração da população com a doença

const inteiro = (n: number) => Math.round(n).toLocaleString('pt-BR')
const pct = (n: number) => (n * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '%'

// Mostra por que um exame "99% certo" pode errar muito quando a doença é rara
export default function ExameMedico() {
  const [indice, setIndice] = useState(2) // começa em 1%
  const id = useId()
  const raridade = raridades[indice]

  const doentes = POPULACAO * raridade
  const saudaveis = POPULACAO - doentes
  const positivosDoentes = doentes * ACERTA_DOENTE
  const positivosSaudaveis = saudaveis * FALSO_POSITIVO
  const chance = positivosDoentes / (positivosDoentes + positivosSaudaveis)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Simulador · exame "99% certo"</p>

      <label htmlFor={id} className="mt-3 block font-semibold">
        Quantas pessoas têm a doença? <span className="text-azul-texto">{pct(raridade)}</span>
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={raridades.length - 1}
        value={indice}
        onChange={(e) => setIndice(Number(e.target.value))}
        aria-valuetext={pct(raridade)}
        className="mt-3 h-11 w-full cursor-pointer accent-[var(--color-azul)]"
      />
      <div aria-hidden="true" className="flex justify-between text-xs text-suave">
        <span>rara</span><span>comum</span>
      </div>

      <div aria-live="polite" className="mt-4 space-y-3 text-[16px]">
        <p>
          De <strong>{inteiro(POPULACAO)}</strong> pessoas, <strong>{inteiro(doentes)}</strong> estão doentes e{' '}
          <strong>{inteiro(saudaveis)}</strong> não.
        </p>
        <p>
          Dão positivo: <strong className="text-coral">{inteiro(positivosDoentes)} doentes</strong> e{' '}
          <strong className="text-suave">{inteiro(positivosSaudaveis)} saudáveis</strong> (os falsos positivos).
        </p>

        <div aria-hidden="true">
          <p className="text-xs text-suave">Todos os positivos:</p>
          <div className="mt-1 flex h-4 overflow-hidden rounded-full bg-borda">
            <div className="h-full bg-coral transition-[width] duration-300" style={{ width: `${chance * 100}%` }} />
          </div>
          <div className="mt-1 flex justify-between text-xs">
            <span className="font-semibold text-coral">doentes</span>
            <span className="text-suave">saudáveis (alarme falso)</span>
          </div>
        </div>

        <div className="rounded-2xl bg-fundo p-4">
          <p className="text-sm text-suave">Deu positivo. Chance de estar mesmo doente:</p>
          <p className="mt-1 font-serif text-4xl font-medium">{pct(chance)}</p>
        </div>
      </div>
    </div>
  )
}
