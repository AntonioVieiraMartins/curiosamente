import { useState } from 'react'
import { useCapsula } from './ContextoCapsula'

type Pergunta = { enunciado: string; opcoes: string[]; correta: number; explicacao: string }

// Desafio do fim da cápsula: resposta na hora e sempre com o porquê. Errar não tira pontos.
export default function Quiz({ perguntas }: { perguntas: Pergunta[] }) {
  const { registrarPontuacao } = useCapsula()
  const [respostas, setRespostas] = useState<(number | null)[]>(() => perguntas.map(() => null))

  function responder(indicePergunta: number, opcao: number) {
    const novas = respostas.map((r, i) => (i === indicePergunta ? opcao : r))
    setRespostas(novas)
    if (novas.every((r) => r !== null)) {
      registrarPontuacao(novas.filter((r, i) => r === perguntas[i].correta).length)
    }
  }

  const terminou = respostas.every((r) => r !== null)
  const acertos = respostas.filter((r, i) => r === perguntas[i].correta).length

  return (
    <div className="space-y-8">
      {perguntas.map((p, i) => {
        const resposta = respostas[i]
        return (
          <fieldset key={p.enunciado}>
            <legend className="font-semibold">
              <span className="mr-2 text-suave">{i + 1}.</span>
              {p.enunciado}
            </legend>
            <div className="mt-3 grid gap-2">
              {p.opcoes.map((opcao, j) => {
                const marcada = resposta === j
                const cor =
                  resposta === null
                    ? 'border-borda enabled:hover:border-azul'
                    : j === p.correta
                      ? 'border-verde bg-verde/10'
                      : marcada
                        ? 'border-coral bg-coral/10'
                        : 'border-borda opacity-60'
                return (
                  <button
                    key={opcao}
                    type="button"
                    disabled={resposta !== null}
                    onClick={() => responder(i, j)}
                    aria-pressed={marcada}
                    className={`min-h-11 rounded-xl border-2 bg-superficie px-4 py-3 text-left transition disabled:cursor-default ${cor}`}
                  >
                    {opcao}
                  </button>
                )
              })}
            </div>
            {resposta !== null && (
              <p aria-live="polite" className="mt-3 text-[16px]">
                <strong className={resposta === p.correta ? 'text-verde' : 'text-coral'}>
                  {resposta === p.correta ? 'Isso! ' : 'Quase. '}
                </strong>
                {p.explicacao}
              </p>
            )}
          </fieldset>
        )
      })}

      {terminou && (
        <p className="rounded-2xl bg-fundo p-5 font-semibold">
          Você acertou {acertos} de {perguntas.length}. {acertos === perguntas.length ? 'Mandou bem!' : 'Os erros também ensinaram algo.'}
        </p>
      )}
    </div>
  )
}
