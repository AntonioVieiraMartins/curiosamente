import { Link } from 'react-router-dom'
import SiglaLinha from '../ui/SiglaLinha'
import { capsulas, linhaDaCapsula, linhas } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'

// Lista curta de linhas com progresso (só no celular; no computador o menu lateral e o Mapa cumprem esse papel)
export default function SuasLinhas() {
  const progresso = useTodoProgresso()
  const itens = linhas
    .map((l) => {
      const prontas = capsulas.filter((c) => c.estado === 'pronta' && linhaDaCapsula(c) === l.id)
      const feitas = prontas.filter((c) => progresso[c.id]?.concluida).length
      return { linha: l, total: prontas.length, feitas }
    })
    .filter((i) => i.total > 0)
    .sort((a, b) => b.feitas - a.feitas)

  return (
    <section aria-label="Suas linhas" className="flex flex-col gap-2 lg:hidden">
      <h2 className="font-serif text-xl font-medium">Suas linhas</h2>
      {itens.map(({ linha, total, feitas }) => (
        <Link key={linha.id} to={`/mapa?linha=${linha.id}`} className="flex min-h-[52px] items-center gap-3 rounded-[14px] bg-superficie px-3 py-2">
          <SiglaLinha linha={linha} tamanho="n" />
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-[15px] font-semibold">{linha.nome.replace('Matemática · ', '')}</span>
            <span className="block h-[5px] overflow-hidden rounded-full bg-ativo" aria-hidden="true">
              <span className="block h-full" style={{ width: `${(feitas / total) * 100}%`, background: linha.cor }} />
            </span>
          </span>
          <span className="text-[13px] text-suave">{feitas}/{total}</span>
        </Link>
      ))}
    </section>
  )
}
