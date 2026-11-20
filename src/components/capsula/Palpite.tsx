import { useCapsula } from './ContextoCapsula'
import { tocar } from '../../lib/sons'

type PropsPalpite = { chave: string; pergunta: string; opcoes: string[] }

// Registra o que a pessoa acha ANTES de aprender. Fica salvo junto com o progresso.
export function Palpite({ chave, pergunta, opcoes }: PropsPalpite) {
  const { palpites, registrarPalpite } = useCapsula()
  const escolhida = palpites[chave]

  return (
    <div className="rounded-2xl bg-azul-claro p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-azul-texto">Seu primeiro palpite</p>
      <p className="mt-2 font-semibold">{pergunta}</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {opcoes.map((opcao, i) => (
          <button
            key={opcao}
            type="button"
            onClick={() => { registrarPalpite(chave, i); tocar('clique') }}
            aria-pressed={escolhida === i}
            className={`min-h-11 rounded-xl border-2 bg-superficie px-4 py-3 font-semibold transition ${
              escolhida === i ? 'border-azul text-azul-texto' : 'border-transparent hover:border-azul'
            }`}
          >
            {opcao}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 text-sm text-suave">
        {escolhida === undefined ? 'Não existe resposta errada aqui. É só para comparar depois.' : 'Anotado! Vamos voltar a isso mais adiante.'}
      </p>
    </div>
  )
}

type PropsLembrar = { chave: string; opcoes: string[]; correta: number; seAcertou: string; seErrou: string }

// Mais adiante na cápsula, lembra o palpite e compara com o que a pessoa acabou de ver
export function LembrarPalpite({ chave, opcoes, correta, seAcertou, seErrou }: PropsLembrar) {
  const { palpites } = useCapsula()
  const escolhida = palpites[chave]
  if (escolhida === undefined) return null

  const acertou = escolhida === correta
  return (
    <div className={`rounded-2xl border-l-4 p-5 ${acertou ? 'border-verde bg-verde/10' : 'border-amarelo bg-amarelo/15'}`}>
      <p className="text-sm text-suave">Lá no começo, você respondeu:</p>
      <p className="mt-1 font-semibold">"{opcoes[escolhida]}"</p>
      <p className="mt-2">{acertou ? seAcertou : seErrou}</p>
    </div>
  )
}
