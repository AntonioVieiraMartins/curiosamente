import { useState } from 'react'
import { Link } from 'react-router-dom'
import Porta from './Porta'
import { cartao } from '../ui/estilos'

type Fase = 'escolher' | 'decidir' | 'resultado'

const sortear = <T,>(lista: T[]) => lista[Math.floor(Math.random() * lista.length)]

const botaoOpcao =
  'flex-1 rounded-xl border-2 border-borda bg-superficie px-4 py-3 font-semibold transition hover:border-azul hover:bg-azul-claro hover:text-azul-texto'

// Uma única rodada do Monty Hall, para dar o gosto. A cápsula completa roda milhares.
// Dentro da própria cápsula, use dentroDaCapsula para esconder o link "Abrir a cápsula".
export default function PortasTeaser({ dentroDaCapsula = false }: { dentroDaCapsula?: boolean }) {
  const [carro, setCarro] = useState(() => Math.floor(Math.random() * 3))
  const [fase, setFase] = useState<Fase>('escolher')
  const [escolha, setEscolha] = useState<number | null>(null)
  const [abertaPeloApresentador, setAberta] = useState<number | null>(null)
  const [trocou, setTrocou] = useState(false)

  function escolher(porta: number) {
    setEscolha(porta)
    // O apresentador sabe onde está o carro e sempre abre uma porta com cabra
    setAberta(sortear([0, 1, 2].filter((p) => p !== porta && p !== carro)))
    setFase('decidir')
  }

  function decidir(trocar: boolean) {
    if (trocar && escolha !== null && abertaPeloApresentador !== null) {
      setEscolha(3 - escolha - abertaPeloApresentador)
    }
    setTrocou(trocar)
    setFase('resultado')
  }

  function recomecar() {
    setCarro(Math.floor(Math.random() * 3))
    setEscolha(null)
    setAberta(null)
    setFase('escolher')
  }

  const ganhou = escolha === carro

  return (
    <div data-sem-narracao className={`${cartao} p-5 sm:p-7`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Experimente · uma rodada</p>
      <div className="mt-4 grid grid-cols-3 gap-4 sm:gap-6">
        {[0, 1, 2].map((p) => (
          <Porta
            key={p}
            numero={p + 1}
            escolhida={escolha === p}
            aberta={fase === 'resultado' || abertaPeloApresentador === p}
            conteudo={p === carro ? 'carro' : 'cabra'}
            desabilitada={fase !== 'escolher'}
            aoClicar={() => escolher(p)}
          />
        ))}
      </div>

      <div aria-live="polite" className="mt-3 min-h-[8rem] text-[16px]">
        {fase === 'escolher' && (
          <p>Atrás de uma porta há um carro. Atrás das outras duas, cabras. <strong>Escolha uma.</strong></p>
        )}

        {fase === 'decidir' && escolha !== null && abertaPeloApresentador !== null && (
          <>
            <p>
              O apresentador, que sabe onde está o carro, abriu a porta {abertaPeloApresentador + 1}: cabra.{' '}
              <strong>Qual é o seu palpite?</strong>
            </p>
            <div className="mt-4 flex gap-3">
              <button type="button" onClick={() => decidir(false)} className={botaoOpcao}>Ficar</button>
              <button type="button" onClick={() => decidir(true)} className={botaoOpcao}>Trocar</button>
            </div>
          </>
        )}

        {fase === 'resultado' && (
          <>
            <p>
              <strong className={ganhou ? 'text-verde' : 'text-coral'}>{ganhou ? 'Carro!' : 'Cabra.'}</strong>{' '}
              Você {trocou ? 'trocou' : 'ficou'} e {ganhou ? 'ganhou' : 'perdeu'}. Só que uma rodada não prova nada.
              {dentroDaCapsula ? ' Jogue várias vezes e repare no padrão.' : ' Na cápsula você joga 10 mil de uma vez.'}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              {!dentroDaCapsula && (
                <Link to="/capsula/monty-hall" className="py-2 font-semibold text-azul-texto hover:underline">
                  Abrir a cápsula →
                </Link>
              )}
              <button type="button" onClick={recomecar} className="py-2 font-semibold text-suave hover:text-texto">
                Jogar outra rodada
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
