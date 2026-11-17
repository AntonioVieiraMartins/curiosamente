import { Link } from 'react-router-dom'
import { useConta } from '../../lib/conta'
import { supabaseConfigurado } from '../../lib/supabase'
import { useXpLocal } from '../../lib/xpLocal'
import { calcularNivel } from '../../lib/xp'
import Avatar from './Avatar'

// Canto direito do cabeçalho: quem está estudando, nível e XP
export default function ChipConta() {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()

  if (usuario) {
    return (
      <Link to="/perfil" className="ml-2 flex items-center gap-2 rounded-full border border-borda py-1 pl-1 pr-4 text-sm hover:border-texto/30">
        <Avatar id={perfil?.avatar} tamanho={30} />
        <span className="font-semibold">{perfil?.nome ?? 'Você'}</span>
        <span className="hidden text-suave md:inline"> · nível {perfil?.nivel ?? 1} · {perfil?.xp_total ?? 0} XP</span>
      </Link>
    )
  }

  return (
    <span className="ml-2 flex items-center gap-2">
      <span className="hidden text-sm text-suave md:inline">Visitante · nível {calcularNivel(xpVisitante)} · {xpVisitante} XP</span>
      {supabaseConfigurado && (
        <Link to="/entrar" className="rounded-full bg-texto px-4 py-2 text-sm font-semibold text-white">Entrar</Link>
      )}
    </span>
  )
}
