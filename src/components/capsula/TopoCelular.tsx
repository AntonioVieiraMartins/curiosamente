import { Link } from 'react-router-dom'
import { etapas, type IdEtapa } from '../../conteudo/etapas'

// Topo da cápsula no celular: fechar, uma barra com as 7 etapas e "Etapa X de 7 · nome"
export default function TopoCelular({ atual, concluidas, cor, linhaId }: { atual: number; concluidas: IdEtapa[]; cor: string; linhaId: string }) {
  return (
    <div className="sticky top-0 z-20 -mx-4 bg-fundo px-4 pb-2 pt-3 lg:hidden">
      <div className="flex items-center gap-3">
        <Link to={`/mapa?linha=${linhaId}`} aria-label="Fechar a cápsula e voltar ao mapa" className="grid size-11 shrink-0 place-items-center rounded-full border border-borda bg-superficie">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </Link>
        <div className="grid flex-1 grid-cols-7 gap-1.5" aria-hidden="true">
          {etapas.map((e, i) => (
            <span key={e.id} className="h-1.5 rounded-full" style={{ background: concluidas.includes(e.id) || i === atual ? cor : 'var(--color-borda)' }} />
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-suave">
        Etapa {atual + 1} de {etapas.length} · <span className="font-semibold text-texto">{etapas[atual].nome}</span>
      </p>
    </div>
  )
}
