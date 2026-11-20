import { useState } from 'react'
import { Link } from 'react-router-dom'
import { botaoSecundario, cartao } from '../ui/estilos'
import { buscarLinha, capsulas } from '../../conteudo/indice'
import { numeroDoDia } from '../../lib/datas'

const prontas = capsulas.filter((c) => c.estado === 'pronta')
const POR_VEZ = 3

// Três cápsulas prontas, com a pergunta de abertura de cada uma. Muda todo dia e no botão "Outras".
// No celular os cartões deslizam para o lado; a partir de md ficam em três colunas.
export default function Vitrine() {
  const [volta, setVolta] = useState(0)
  const inicio = (numeroDoDia() * POR_VEZ + volta * POR_VEZ) % prontas.length
  const mostradas = Array.from({ length: Math.min(POR_VEZ, prontas.length) }, (_, k) => prontas[(inicio + k) % prontas.length])

  return (
    <section aria-label="Por onde começar" className="flex flex-col gap-3.5">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-serif text-xl font-medium sm:text-[26px]">Qual dessas perguntas te <em>intriga?</em></h2>
        <button type="button" onClick={() => setVolta((v) => v + 1)} className={`${botaoSecundario} min-h-11 shrink-0 px-4 py-0 text-sm`}>
          Mostrar outras
        </button>
      </div>
      <ul className="-mx-4 flex scroll-px-4 snap-x snap-mandatory gap-2.5 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
        {mostradas.map((cap) => {
          const linha = buscarLinha(cap)
          return (
            <li key={cap.id} className="w-60 shrink-0 snap-start md:w-auto">
              <Link
                to={`/capsula/${cap.id}`}
                className={`${cartao} flex h-full min-h-[150px] flex-col gap-2 p-3.5 transition hover:-translate-y-0.5 md:min-h-44 md:gap-2.5 md:p-5`}
              >
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-suave md:text-xs">
                  <span aria-hidden="true" className="size-2 rounded-full md:size-2.5" style={{ background: linha.cor }} />
                  {linha.nome.replace('Matemática · ', '')}
                </span>
                <span className="font-serif text-[17px] leading-snug md:text-xl">{cap.gancho}</span>
                <span className="mt-auto text-[13px] font-semibold text-azul-texto md:text-sm">
                  {cap.titulo} · {cap.duracaoMin ?? 40} min
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
