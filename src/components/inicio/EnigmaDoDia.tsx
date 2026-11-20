import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { enigmas } from '../../conteudo/enigmas'
import { curiosidades } from '../../conteudo/curiosidades'
import { numeroDoDia } from '../../lib/datas'
import SlideCuriosidade from './SlideCuriosidade'
import SlideEnigma from './SlideEnigma'

// Intercala curiosidade e enigma, para o topo nunca ficar igual
const slides = Array.from({ length: Math.max(curiosidades.length, enigmas.length) }, (_, i) => [
  { tipo: 'curiosidade' as const, c: curiosidades[i % curiosidades.length] },
  { tipo: 'enigma' as const, e: enigmas[i % enigmas.length] },
]).flat()

const SEGUNDOS = { curiosidade: 11, enigma: 20 }
const botaoPequeno = 'min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold hover:border-azul'

// Topo da página inicial: troca sozinho; para ao passar o mouse, focar, pausar ou responder um enigma
export default function EnigmaDoDia() {
  const [indice, setIndice] = useState(() => numeroDoDia() % slides.length)
  const [pausado, setPausado] = useState(false)
  const [sobre, setSobre] = useState(false)
  const [respondido, setRespondido] = useState(false)
  const slide = slides[indice]
  const rodando = !pausado && !sobre && !respondido

  function ir(passo: number) {
    setIndice((i) => (i + passo + slides.length) % slides.length)
    setRespondido(false)
  }

  return (
    <section aria-label="Curiosidades e enigmas">
      <div
        className={`${cartao} relative overflow-hidden p-5 pb-4 text-center sm:p-10 sm:pb-6`}
        onMouseEnter={() => setSobre(true)}
        onMouseLeave={() => setSobre(false)}
        onFocus={() => setSobre(true)}
        onBlur={() => setSobre(false)}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-borda" aria-hidden="true">
          <div
            key={indice}
            className="barra-enche h-full bg-azul"
            style={{ animationDuration: `${SEGUNDOS[slide.tipo]}s`, animationPlayState: rodando ? 'running' : 'paused' }}
            onAnimationEnd={() => ir(1)}
          />
        </div>

        {slide.tipo === 'curiosidade'
          ? <SlideCuriosidade key={indice} c={slide.c} posicao={indice} />
          : <SlideEnigma key={indice} enigma={slide.e} aoResponder={() => setRespondido(true)} aoPular={() => ir(1)} />}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2" data-sem-narracao>
          <button type="button" onClick={() => ir(-1)} className={botaoPequeno}>Anterior</button>
          <button type="button" onClick={() => setPausado((p) => !p)} aria-pressed={pausado} className={botaoPequeno}>
            {pausado ? 'Continuar' : 'Pausar'}
          </button>
          <button type="button" onClick={() => ir(1)} className={botaoPequeno}>Próximo</button>
        </div>
      </div>
    </section>
  )
}
