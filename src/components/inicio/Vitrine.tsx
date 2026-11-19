import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rotulo from '../ui/Rotulo'
import { botaoSecundario, cartao } from '../ui/estilos'
import { buscarLinha, capsulas, numeroDaCapsula } from '../../conteudo/indice'
import { numeroDoDia } from '../../lib/datas'

const prontas = capsulas.filter((c) => c.estado === 'pronta')
const POR_VEZ = 3

// Três cápsulas prontas, com a pergunta de abertura de cada uma. Muda todo dia e no botão "Outras".
export default function Vitrine() {
  const [volta, setVolta] = useState(0)
  const inicio = (numeroDoDia() * POR_VEZ + volta * POR_VEZ) % prontas.length
  const mostradas = Array.from({ length: Math.min(POR_VEZ, prontas.length) }, (_, k) => prontas[(inicio + k) % prontas.length])

  return (
    <section className="mx-auto mt-16 max-w-5xl px-4 sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Rotulo>Por onde começar hoje</Rotulo>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-[2.6rem]">Qual dessas perguntas te intriga?</h2>
        </div>
        <button type="button" onClick={() => setVolta((v) => v + 1)} className={`${botaoSecundario} min-h-11`}>
          Mostrar outras
        </button>
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {mostradas.map((cap) => {
          const linha = buscarLinha(cap)
          return (
            <li key={cap.id}>
              <Link
                to={`/capsula/${cap.id}`}
                className={`${cartao} flex h-full min-h-44 flex-col p-5 transition hover:-translate-y-0.5`}
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-suave">
                  <span aria-hidden="true" className="size-2.5 rounded-full" style={{ background: linha.cor }} />
                  {linha.nome}
                </span>
                <span className="mt-3 font-serif text-xl leading-snug">{cap.gancho}</span>
                <span className="mt-auto pt-4 text-sm font-semibold text-azul-texto">
                  {cap.titulo} · {cap.duracaoMin ?? 40} min · nº {numeroDaCapsula(cap.id)} →
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
