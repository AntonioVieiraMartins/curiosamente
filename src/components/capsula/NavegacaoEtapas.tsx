import { etapas } from '../../conteudo/etapas'
import { XP } from '../../lib/xp'
import { botaoPrimario, botaoSecundario } from '../ui/estilos'

type Props = {
  atual: number
  concluida: boolean
  aoVoltar: () => void
  aoConcluir: () => void
}

// Botões do pé da etapa. No celular ficam um embaixo do outro, com o principal por cima.
export default function NavegacaoEtapas({ atual, concluida, aoVoltar, aoConcluir }: Props) {
  const ultima = atual === etapas.length - 1
  const proxima = etapas[atual + 1]
  const xp = XP.etapa

  const textoPrincipal = ultima
    ? concluida ? 'Cápsula concluída ✓' : 'Concluir a cápsula'
    : `Próxima: ${proxima.nome} →`

  return (
    <div className="mt-10 border-t border-borda pt-6">
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={aoVoltar} disabled={atual === 0} className={`${botaoSecundario} disabled:invisible`}>
          ← Voltar
        </button>
        <button type="button" onClick={aoConcluir} disabled={ultima && concluida} className={botaoPrimario}>
          {textoPrincipal}
        </button>
      </div>
      {!(ultima && concluida) && (
        <p className="mt-4 text-center text-sm text-suave sm:text-right">+{xp} XP ao concluir esta etapa</p>
      )}
    </div>
  )
}
