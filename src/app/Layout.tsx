import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router-dom'
import Marca from '../components/ui/Marca'
import ChipConta from '../components/ui/ChipConta'
import AvisoConquista from '../components/ui/AvisoConquista'

const links = [
  { para: '/', rotulo: 'Início' },
  { para: '/mapa', rotulo: 'Mapa' },
  { para: '/perfil', rotulo: 'Perfil' },
]

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-texto focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      {/* Cabeçalho em pílula, flutuando sobre a página */}
      <header className="sticky top-0 z-20 bg-fundo/85 px-4 pb-2 pt-3 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full bg-superficie pl-5 pr-2 shadow-cartao">
          <Link to="/" aria-label="Curiosamente, página inicial">
            <Marca />
          </Link>
          <nav aria-label="Principal" className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <NavLink
                key={l.para}
                to={l.para}
                end
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[15px] transition-colors ${
                    isActive ? 'bg-fundo font-semibold text-texto' : 'text-suave hover:text-texto'
                  }`
                }
              >
                {l.rotulo}
              </NavLink>
            ))}
            <ChipConta />
          </nav>
        </div>
      </header>

      <main id="conteudo" className="flex-1 pb-28 sm:pb-20">
        <Outlet />
      </main>

      <footer className="hidden sm:block">
        <div className="mx-auto flex max-w-5xl justify-between border-t border-borda px-4 py-8 text-sm text-suave">
          <span>Curiosamente</span>
          <span>Toda cápsula cita suas fontes.</span>
        </div>
      </footer>

      {/* No celular a navegação fica embaixo, ao alcance do polegar */}
      <nav
        aria-label="Principal (celular)"
        className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-3 border-t border-borda bg-superficie pb-[env(safe-area-inset-bottom)] sm:hidden"
      >
        {links.map((l) => (
          <NavLink
            key={l.para}
            to={l.para}
            end
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 py-3 text-sm ${isActive ? 'font-semibold text-azul-texto' : 'text-suave'}`
            }
          >
            {({ isActive }) => (
              <>
                <span aria-hidden="true" className={`size-1.5 rounded-full ${isActive ? 'bg-azul' : 'bg-transparent'}`} />
                {l.rotulo}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <AvisoConquista />
      <ScrollRestoration />
    </div>
  )
}
