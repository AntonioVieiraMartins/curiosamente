import CadernoDaCapsula from './CadernoDaCapsula'
import { cartao } from '../ui/estilos'
import { etapas } from '../../conteudo/etapas'
import { useCartoes } from '../../hooks/useCartoes'
import { useConta } from '../../lib/conta'
import { eventosLocais, useXpLocal } from '../../lib/xpLocal'
import type { ProgressoCapsula } from '../../lib/progressoLocal'

// Coluna de apoio da cápsula (computador): caderno sempre aberto, cartões guardados e um resumo
export default function ApoioDaCapsula({ capsulaId, progresso }: { capsulaId: string; progresso: ProgressoCapsula }) {
  const { usuario } = useConta()
  useXpLocal() // redesenha quando o visitante ganha XP
  const guardados = useCartoes().filter((c) => c.capsulaId === capsulaId).length
  // O XP exato por cápsula só existe no navegador (visitante); com conta, o total fica no Perfil
  const xpAqui = usuario ? null : eventosLocais().filter((e) => e.capsulaId === capsulaId).reduce((s, e) => s + e.xp, 0)

  const linhas = [
    { rotulo: 'Etapas concluídas', valor: `${progresso.concluidas.length} de ${etapas.length}` },
    { rotulo: 'Aprofundar', valor: progresso.camadaMax >= 3 ? 'já abriu' : 'ainda não abriu' },
    ...(xpAqui === null ? [] : [{ rotulo: 'XP ganho aqui', valor: `${xpAqui} XP` }]),
  ]

  return (
    <aside aria-label="Apoio da cápsula" className="flex flex-col gap-4">
      <div className={`${cartao} p-5`}><CadernoDaCapsula capsulaId={capsulaId} /></div>
      <div className={`${cartao} flex items-center justify-between gap-3 p-5`}>
        <span className="font-semibold">Cartões guardados</span>
        <span className="font-serif text-2xl font-medium">{guardados}</span>
      </div>
      <div className="flex flex-col gap-2 rounded-[20px] bg-ativo p-5">
        <h2 className="font-semibold">Resumo desta cápsula</h2>
        <dl className="flex flex-col gap-1.5 text-sm">
          {linhas.map((l) => (
            <div key={l.rotulo} className="flex justify-between gap-3">
              <dt className="text-suave">{l.rotulo}</dt>
              <dd className="font-semibold">{l.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  )
}
