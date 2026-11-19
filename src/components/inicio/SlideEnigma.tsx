import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rotulo from '../ui/Rotulo'
import { botaoPrimario, botaoSecundario } from '../ui/estilos'
import type { Enigma } from '../../conteudo/enigmas'

type Props = { enigma: Enigma; aoResponder: () => void; aoPular: () => void }

// Enigma com palpite primeiro; ao responder, o carrossel para de girar (quem lê não é interrompido)
export default function SlideEnigma({ enigma, aoResponder, aoPular }: Props) {
  const [escolha, setEscolha] = useState<number | null>(null)
  const acertou = escolha === enigma.correta

  function responder(i: number) {
    setEscolha(i)
    aoResponder()
  }

  return (
    <div className="slide-entra">
      <Rotulo>Enigma · {enigma.tema}</Rotulo>
      <h1 className="mt-4 font-serif text-[1.6rem] font-medium leading-[1.2] tracking-tight sm:text-[2.1rem]">{enigma.pergunta}</h1>
      <p className="mt-3 text-suave">Faça seu palpite antes de ver a resposta.</p>

      <div className="mt-5 flex flex-col gap-3" role="group" aria-label="Escolha uma resposta">
        {enigma.opcoes.map((texto, i) => {
          const estilo = escolha === null
            ? 'border-borda hover:border-azul'
            : i === enigma.correta
              ? 'border-verde bg-verde/10'
              : i === escolha
                ? 'border-coral bg-coral/10'
                : 'border-borda opacity-60'
          return (
            <button key={texto} type="button" disabled={escolha !== null} onClick={() => responder(i)}
              className={`min-h-12 rounded-2xl border-2 px-4 py-3 text-left text-[17px] font-semibold transition ${estilo}`}>
              {texto}
            </button>
          )
        })}
      </div>

      <div aria-live="polite">
        {escolha !== null && (
          <div className="mt-5 rounded-2xl bg-fundo p-4 text-left sm:p-5">
            <p className="font-semibold">{acertou ? 'Acertou!' : 'Quase ninguém acerta de primeira.'}</p>
            <p className="mt-1">{enigma.explicacao}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to={`/capsula/${enigma.capsulaId}`} className={botaoPrimario}>Entender por quê</Link>
              <button type="button" onClick={aoPular} className={botaoSecundario}>Próximo</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
