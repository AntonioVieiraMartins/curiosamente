import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rotulo from '../ui/Rotulo'
import { botaoPrimario, botaoSecundario, cartao } from '../ui/estilos'
import { enigmas } from '../../conteudo/enigmas'
import { numeroDoDia } from '../../lib/datas'

// Enigma do topo da página inicial: palpite primeiro, explicação depois, e um caminho para a cápsula
export default function EnigmaDoDia() {
  const [posicao, setPosicao] = useState(() => numeroDoDia() % enigmas.length)
  const [escolha, setEscolha] = useState<number | null>(null)
  const enigma = enigmas[posicao]
  const acertou = escolha === enigma.correta

  function outro() {
    setPosicao((p) => (p + 1) % enigmas.length)
    setEscolha(null)
  }

  return (
    <section className="mx-auto max-w-3xl px-4 pt-8 sm:pt-14">
      <div className={`${cartao} p-5 text-center sm:p-10`}>
        <Rotulo>Enigma de hoje · {enigma.tema}</Rotulo>
        <h1 className="mt-4 font-serif text-[1.7rem] font-medium leading-[1.2] tracking-tight sm:text-[2.2rem]">
          {enigma.pergunta}
        </h1>
        <p className="mt-3 text-suave">Faça seu palpite antes de ver a resposta.</p>

        <div className="mt-6 flex flex-col gap-3" role="group" aria-label="Escolha uma resposta">
          {enigma.opcoes.map((texto, i) => {
            const respondido = escolha !== null
            const estilo = !respondido
              ? 'border-borda hover:border-azul'
              : i === enigma.correta
                ? 'border-verde bg-verde/10'
                : i === escolha
                  ? 'border-coral bg-coral/10'
                  : 'border-borda opacity-60'
            return (
              <button
                key={texto}
                type="button"
                disabled={respondido}
                onClick={() => setEscolha(i)}
                className={`min-h-12 rounded-2xl border-2 px-4 py-3 text-left text-[17px] font-semibold transition ${estilo}`}
              >
                {texto}
              </button>
            )
          })}
        </div>

        <div aria-live="polite">
          {escolha !== null && (
            <div className="mt-6 rounded-2xl bg-fundo p-4 text-left sm:p-5">
              <p className="font-semibold">{acertou ? 'Acertou!' : 'Quase ninguém acerta de primeira.'}</p>
              <p className="mt-1">{enigma.explicacao}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to={`/capsula/${enigma.capsulaId}`} className={botaoPrimario}>Entender por quê</Link>
                <button type="button" onClick={outro} className={botaoSecundario}>Outro enigma</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
