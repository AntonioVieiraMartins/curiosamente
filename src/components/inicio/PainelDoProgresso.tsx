import ReguaXp from '../ui/ReguaXp'
import Semana from '../ui/Semana'
import { cartao } from '../ui/estilos'
import { conquistas } from '../../conteudo/conquistas'
import { semanaAtual } from '../../lib/datas'
import { useConquistas } from '../../lib/conquistasLocal'
import { useResumoDoEstudo } from '../../hooks/useResumoDoEstudo'

const combinado = [
  { titulo: 'Errar não tira ponto.', texto: 'Quando você erra, a cápsula mostra o porquê.' },
  { titulo: 'Palpite antes de ver.', texto: 'Toda simulação começa com uma aposta sua.' },
  { titulo: 'Fato é fato.', texto: 'E quando é mito, a gente chama de mito.' },
]

// Coluna da direita (só no computador): nível, semana, próxima medalha e "O combinado"
export default function PainelDoProgresso() {
  const { xp, seq, dias, hoje } = useResumoDoEstudo()
  const obtidas = useConquistas()
  const semana = semanaAtual(hoje)
  const proxima = conquistas.find((c) => !obtidas[c.id])
  // Só a medalha de sete dias tem um número para mostrar; as outras mostram a descrição
  const detalhe = proxima?.id === 'sete-dias' ? `Faltam ${Math.max(0, 7 - seq)} dias de estudo` : proxima?.descricao

  return (
    <aside aria-label="Seu progresso" className="hidden flex-col gap-4 lg:flex">
      <div className={`${cartao} p-5`}><ReguaXp xpTotal={xp} /></div>

      <div className={`${cartao} flex flex-col gap-3 p-5`}>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Esta semana</h2>
          <span className="text-[13px] text-suave">{seq} {seq === 1 ? 'dia seguido' : 'dias seguidos'}</span>
        </div>
        <Semana estudados={semana.map((d) => dias.has(d))} hoje={semana.indexOf(hoje)} />
      </div>

      {proxima && (
        <div className={`${cartao} flex flex-col gap-2.5 p-5`}>
          <h2 className="font-semibold">Próxima medalha</h2>
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-amarelo/25" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-amarelo-escuro)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="9" r="6" /><path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7" />
              </svg>
            </span>
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold">{proxima.nome}</span>
              <span className="text-[13px] text-suave">{detalhe}</span>
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2.5 rounded-[20px] bg-ativo p-5">
        <h2 className="font-semibold">O combinado</h2>
        {combinado.map((c) => (
          <p key={c.titulo} className="text-sm leading-snug"><strong>{c.titulo}</strong> <span className="text-suave">{c.texto}</span></p>
        ))}
      </div>
    </aside>
  )
}
