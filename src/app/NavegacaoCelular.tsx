import { NavLink } from 'react-router-dom'
import Marca from '../components/ui/Marca'
import { useConta } from '../lib/conta'
import { diaEmBrasilia, somarDias, sequenciaAtual } from '../lib/datas'
import { useDiasDeEstudo } from '../hooks/useDiasDeEstudo'
import { useXpLocal } from '../lib/xpLocal'
import { calcularNivel } from '../lib/xp'
import { itensDoMenu } from './navegacao'
import Pendentes from './Pendentes'

// Mini cabeçalho do celular: marca + dias seguidos e nível (dados reais, de conta ou visitante)
export function CabecalhoCelular() {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()
  const dias = useDiasDeEstudo()
  const hoje = diaEmBrasilia()
  const seq = usuario
    ? perfil?.ultimo_dia_estudo && perfil.ultimo_dia_estudo >= somarDias(hoje, -1) ? perfil.sequencia_atual : 0
    : sequenciaAtual(dias)
  const nivel = usuario ? perfil?.nivel ?? 1 : calcularNivel(xpVisitante)
  const chip = 'flex h-8 items-center gap-1 rounded-2xl border border-borda bg-superficie px-2.5 text-[13px] font-semibold'

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-fundo px-4 pb-2.5 pt-3.5 sm:hidden">
      <NavLink to="/" aria-label="Curiosamente, página inicial"><Marca pequena /></NavLink>
      <div className="flex gap-1.5">
        <span className={chip}>
          <span aria-hidden="true" className="size-2 rounded-full bg-verde" />
          {seq} {seq === 1 ? 'dia' : 'dias'}
        </span>
        <span className={chip}>Nv {nivel}</span>
      </div>
    </header>
  )
}

// Menu de baixo do celular: ícone em cima do texto, ativo em verde claro
export function MenuDeBaixo({ pendentes }: { pendentes: number }) {
  return (
    <nav
      aria-label="Principal (celular)"
      className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-borda bg-superficie pb-[env(safe-area-inset-bottom)] pt-1.5 sm:hidden"
    >
      {itensDoMenu.map((item) => (
        <NavLink key={item.para} to={item.para} end className="relative flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs">
          {({ isActive }) => (
            <>
              <span className={`grid h-[30px] w-[52px] place-items-center rounded-full ${isActive ? 'bg-verde-claro text-verde-escuro' : 'text-suave'}`}>
                {item.icone}
              </span>
              <span className={isActive ? 'font-bold text-verde-escuro' : 'font-medium text-suave'}>{item.rotulo}</span>
              {item.para === '/revisar' && <Pendentes n={pendentes} flutuante />}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
