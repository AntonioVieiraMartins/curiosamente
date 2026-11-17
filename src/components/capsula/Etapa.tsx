import type { ReactNode } from 'react'
import type { IdEtapa } from '../../conteudo/etapas'
import { useCapsula } from './ContextoCapsula'

// Cada bloco <Etapa id="..."> do MDX só aparece quando é a etapa atual
export default function Etapa({ id, children }: { id: IdEtapa; children: ReactNode }) {
  const { etapaAtual } = useCapsula()
  if (id !== etapaAtual) return null
  return <div className="space-y-5">{children}</div>
}
