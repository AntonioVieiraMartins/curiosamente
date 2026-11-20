import { etapas } from '../../conteudo/etapas'
import { XP } from '../../lib/xp'
import { botaoPrimario, botaoSecundario } from '../ui/estilos'

type Props = {
  atual: number
  concluida: boolean
  aoVoltar: () => void
  aoConcluir: () => void
}

// Botões do pé da etapa (computador). No celular quem faz esse papel é o RodapeCelular.
export default function NavegacaoEtapas({ atual, concluida, aoVoltar, aoConcluir }: Props) {
  const ultima = atual === etapas.length - 1
  const fim = ultima && concluida

  return (
    <div className="mt-10 hidden items-center justify-between gap-3 border-t border-borda pt-6 lg:flex">
      <button type="button" onClick={aoVoltar} disabled={atual === 0} className={`${botaoSecundario} disabled:invisible`}>
        ← Etapa anterior
      </button>
      <button type="button" onClick={aoConcluir} disabled={fim} className={botaoPrimario}>
        {fim ? 'Cápsula concluída ✓' : ultima ? 'Concluir a cápsula' : `Concluir etapa · +${XP.etapa} XP`}
      </button>
    </div>
  )
}
