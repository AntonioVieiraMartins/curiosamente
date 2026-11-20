import { useState, type ReactNode } from 'react'
import { tocar } from '../../lib/sons'
import { botaoSecundario } from '../ui/estilos'
import { useCapsula } from './ContextoCapsula'
import { ganharXp } from '../../lib/sincronizacao'

type Props = {
  pergunta: string
  opcoes: string[]
  correta: number
  explicacao: string
  children: ReactNode // a simulação, que só aparece depois do palpite
}

const estiloOpcao = 'min-h-11 w-full rounded-xl border-2 px-4 py-3 text-left font-semibold transition'

// "Prever antes de ver": a simulação fica escondida até a pessoa apostar
export default function Previsao({ pergunta, opcoes, correta, explicacao, children }: Props) {
  const [palpite, setPalpite] = useState<number | null>(null)
  const [conferido, setConferido] = useState(false)
  const { meta } = useCapsula()
  const acertou = palpite === correta

  // Acertar rende mais, mas errar e ir até o fim também rende (errar é parte do jogo)
  function conferir() {
    setConferido(true)
    tocar(acertou ? 'acerto' : 'erro')
    void ganharXp(acertou ? 'previsao_certa' : 'previsao_errada', `${meta.id}:previsao`, meta.id)
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-azul-claro p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-azul-texto">Seu palpite</p>
        <p className="mt-2 font-semibold">{pergunta}</p>
        <div className="mt-4 grid gap-2">
          {opcoes.map((opcao, i) => (
            <button
              key={opcao}
              type="button"
              disabled={palpite !== null}
              onClick={() => setPalpite(i)}
              aria-pressed={palpite === i}
              className={`${estiloOpcao} ${
                palpite === i ? 'border-azul bg-superficie text-azul-texto' : 'border-transparent bg-superficie enabled:hover:border-azul'
              } disabled:cursor-default`}
            >
              {opcao}
            </button>
          ))}
        </div>
        {palpite === null && <p className="mt-3 text-sm text-suave">A simulação aparece depois que você apostar.</p>}
      </div>

      {palpite !== null && (
        <>
          {children}
          {!conferido ? (
            <button type="button" onClick={conferir} className={botaoSecundario}>
              Conferir meu palpite
            </button>
          ) : (
            <div aria-live="polite" className={`rounded-2xl p-5 ${acertou ? 'bg-verde/10' : 'bg-coral/10'}`}>
              <p className={`font-semibold ${acertou ? 'text-verde' : 'text-coral'}`}>
                {acertou ? 'Você acertou!' : 'Não foi dessa vez, e tudo bem.'}
              </p>
              <p className="mt-1">{explicacao}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
