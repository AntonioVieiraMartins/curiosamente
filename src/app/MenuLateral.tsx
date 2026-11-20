import { Link, NavLink } from 'react-router-dom'
import Marca from '../components/ui/Marca'
import Avatar from '../components/ui/Avatar'
import SiglaLinha from '../components/ui/SiglaLinha'
import { capsulas, linhaDaCapsula, linhas } from '../conteudo/indice'
import { useConta } from '../lib/conta'
import { supabaseConfigurado } from '../lib/supabase'
import { useXpLocal } from '../lib/xpLocal'
import { calcularNivel } from '../lib/xp'
import { itensDoMenu } from './navegacao'
import Pendentes from './Pendentes'

// Quantas cápsulas prontas cada linha tem (mostrado ao lado do nome)
const prontasPorLinha = new Map<string, number>()
for (const c of capsulas) {
  if (c.estado !== 'pronta') continue
  const id = linhaDaCapsula(c)
  prontasPorLinha.set(id, (prontasPorLinha.get(id) ?? 0) + 1)
}

function CartaoDaConta({ compacto }: { compacto: boolean }) {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()
  const nome = usuario ? perfil?.nome ?? 'Você' : 'Visitante'
  const nivel = usuario ? perfil?.nivel ?? 1 : calcularNivel(xpVisitante)
  const xp = usuario ? perfil?.xp_total ?? 0 : xpVisitante

  return (
    <div className="mt-auto flex flex-col gap-2">
      <Link
        to="/perfil"
        aria-label={`${nome}, nível ${nivel}, ${xp} XP. Abrir perfil`}
        className={`flex items-center justify-center gap-3 rounded-2xl bg-fundo p-2 hover:bg-ativo ${compacto ? '' : 'lg:justify-start lg:p-2.5 lg:pr-3'}`}
      >
        <Avatar id={usuario ? perfil?.avatar : 'lente'} tamanho={38} />
        {!compacto && (
          <span className="hidden min-w-0 flex-col lg:flex">
            <span className="truncate text-sm font-semibold">{nome}</span>
            <span className="text-xs text-suave">Nível {nivel} · {xp.toLocaleString('pt-BR')} XP</span>
          </span>
        )}
      </Link>
      {!usuario && supabaseConfigurado && !compacto && (
        <Link to="/entrar" className="hidden min-h-11 lg:block rounded-full bg-texto px-4 py-2.5 text-center text-sm font-semibold text-white">Entrar</Link>
      )}
    </div>
  )
}

// Menu lateral do computador. Em telas médias, e dentro de uma cápsula (modo foco), fica só com ícones.
export default function MenuLateral({ pendentes, foco }: { pendentes: number; foco: boolean }) {
  // "completo" = com textos e a lista de linhas; só a partir de lg e fora do modo foco
  const texto = foco ? 'hidden' : 'hidden lg:inline'
  const largura = foco ? 'w-[76px]' : 'w-[76px] lg:w-[248px]'

  return (
    <nav
      aria-label="Principal"
      className={`sticky top-0 hidden h-dvh shrink-0 flex-col gap-5 overflow-y-auto border-r border-borda bg-superficie px-3 py-6 sm:flex ${largura}`}
    >
      <Link to="/" aria-label="Curiosamente, página inicial" className={`px-2 ${foco ? 'mx-auto' : 'lg:mx-0 mx-auto'}`}>
        <span className={foco ? '' : 'lg:hidden'}><Marca somenteIcone /></span>
        {!foco && <span className="hidden lg:block"><Marca /></span>}
      </Link>

      <div className="flex flex-col gap-0.5">
        {itensDoMenu.map((item) => (
          <NavLink
            key={item.para}
            to={item.para}
            end
            aria-label={item.rotulo}
            className={({ isActive }) =>
              `relative flex min-h-11 items-center gap-3 rounded-full px-3 text-[15px] transition-colors ${
                foco ? 'mx-auto size-12 justify-center rounded-2xl px-0' : 'justify-center lg:justify-start max-lg:mx-auto max-lg:size-12 max-lg:rounded-2xl max-lg:px-0'
              } ${isActive ? 'bg-ativo font-semibold' : 'font-medium hover:bg-fundo'}`
            }
          >
            {item.icone}
            <span className={`flex-1 ${texto}`}>{item.rotulo}</span>
            {item.para === '/revisar' && (
              foco
                ? <span className="absolute right-0.5 top-0.5"><Pendentes n={pendentes} flutuante={false} /></span>
                : <span className="max-lg:absolute max-lg:right-0.5 max-lg:top-0.5"><Pendentes n={pendentes} /></span>
            )}
          </NavLink>
        ))}
      </div>

      {!foco && (
        <div className="hidden flex-col gap-0.5 lg:flex">
          <span className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-suave">Linhas</span>
          {linhas.map((l) => {
            const n = prontasPorLinha.get(l.id) ?? 0
            return (
              <Link
                key={l.id}
                to={`/mapa?linha=${l.id}`}
                className="flex min-h-9 items-center gap-2.5 rounded-[10px] px-3 text-sm hover:bg-fundo"
              >
                <SiglaLinha linha={l} tamanho="p" />
                <span className="flex-1">{l.nome.replace('Matemática · ', '')}</span>
                <span className="text-xs text-suave">{n > 0 ? n : 'em breve'}</span>
              </Link>
            )
          })}
        </div>
      )}

      <CartaoDaConta compacto={foco} />
    </nav>
  )
}
