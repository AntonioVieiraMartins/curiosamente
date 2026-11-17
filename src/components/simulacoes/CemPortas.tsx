import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Fase = 'escolher' | 'apresentador' | 'decidir' | 'fim'

const TOTAL = 100
const sortear = (n: number) => Math.floor(Math.random() * n)

// Exagero proposital: com 100 portas fica fácil sentir por que trocar é melhor
export default function CemPortas() {
  const [carro, setCarro] = useState(() => sortear(TOTAL))
  const [escolha, setEscolha] = useState<number | null>(null)
  const [outra, setOutra] = useState<number | null>(null) // a única porta que o apresentador deixa fechada
  const [fase, setFase] = useState<Fase>('escolher')
  const [trocou, setTrocou] = useState(false)

  function escolher(porta: number) {
    setEscolha(porta)
    setFase('apresentador')
  }

  function abrirNoventaEOito() {
    if (escolha === null) return
    // Se você errou, a porta que sobra é o carro. Se acertou (1 vez em 100), sobra uma qualquer.
    let sobra = carro
    if (escolha === carro) {
      sobra = sortear(TOTAL - 1)
      if (sobra >= escolha) sobra++
    }
    setOutra(sobra)
    setFase('decidir')
  }

  function decidir(trocar: boolean) {
    setTrocou(trocar)
    setFase('fim')
  }

  function recomecar() {
    setCarro(sortear(TOTAL))
    setEscolha(null)
    setOutra(null)
    setFase('escolher')
  }

  const final = trocou ? outra : escolha
  const ganhou = final === carro

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Experimente com 100 portas</p>

      <div className="mt-4 grid grid-cols-10 gap-1 sm:gap-1.5">
        {Array.from({ length: TOTAL }, (_, i) => {
          const fechada = fase === 'escolher' || fase === 'apresentador' || i === escolha || i === outra
          const revelada = fase === 'fim' && i === carro
          const cor = revelada
            ? 'bg-verde'
            : i === escolha
              ? 'bg-azul'
              : fechada
                ? i === outra ? 'bg-amarelo ring-2 ring-texto' : 'bg-amarelo'
                : 'bg-borda'
          return (
            <button
              key={i}
              type="button"
              disabled={fase !== 'escolher'}
              onClick={() => escolher(i)}
              aria-label={`Porta ${i + 1}${i === escolha ? ', sua escolha' : ''}${!fechada ? ', aberta: cabra' : ''}`}
              className={`aspect-[3/4] rounded-t-full transition-colors duration-300 enabled:hover:brightness-95 ${cor}`}
            />
          )
        })}
      </div>

      <div aria-live="polite" className="mt-4 min-h-[6.5rem] text-[16px]">
        {fase === 'escolher' && <p>Só uma das 100 portas tem o carro. <strong>Toque em qualquer uma.</strong></p>}
        {fase === 'apresentador' && escolha !== null && (
          <>
            <p>Você escolheu a porta {escolha + 1}. Agora o apresentador, que sabe onde está o carro, vai abrir 98 portas com cabra.</p>
            <button type="button" onClick={abrirNoventaEOito} className="mt-3 min-h-11 rounded-full bg-texto px-5 font-semibold text-white">
              Abrir as 98 portas
            </button>
          </>
        )}
        {fase === 'decidir' && outra !== null && (
          <>
            <p>Sobraram a sua porta e a porta {outra + 1}. <strong>Qual das duas você acha que tem o carro?</strong></p>
            <div className="mt-3 flex gap-3">
              <button type="button" onClick={() => decidir(false)} className="min-h-11 flex-1 rounded-xl border-2 border-borda font-semibold hover:border-azul">Ficar</button>
              <button type="button" onClick={() => decidir(true)} className="min-h-11 flex-1 rounded-xl border-2 border-borda font-semibold hover:border-azul">Trocar</button>
            </div>
          </>
        )}
        {fase === 'fim' && (
          <>
            <p>
              <strong className={ganhou ? 'text-verde' : 'text-coral'}>{ganhou ? 'Carro!' : 'Cabra.'}</strong>{' '}
              O carro estava na porta {carro + 1}. Trocando aqui, você só perde se tiver acertado de primeira: 1 chance em 100.
            </p>
            <button type="button" onClick={recomecar} className="mt-2 min-h-11 font-semibold text-suave hover:text-texto">
              Jogar de novo
            </button>
          </>
        )}
      </div>
    </div>
  )
}
