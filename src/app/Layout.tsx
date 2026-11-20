import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import AvisoConquista from '../components/ui/AvisoConquista'
import { useCartoesDeHoje } from '../hooks/useCartoes'
import MenuLateral from './MenuLateral'
import { CabecalhoCelular, MenuDeBaixo } from './NavegacaoCelular'

export default function Layout() {
  const pendentes = useCartoesDeHoje().length
  // Dentro de uma cápsula o menu lateral vira só ícones (modo foco)
  const foco = useLocation().pathname.startsWith('/capsula/')

  return (
    <div className="flex min-h-dvh flex-col sm:flex-row">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-texto focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <MenuLateral pendentes={pendentes} foco={foco} />
      <CabecalhoCelular />

      <div className="flex min-w-0 flex-1 flex-col">
        <main id="conteudo" className="flex-1 pb-28 sm:pb-20">
          <Outlet />
        </main>

        <footer className="hidden sm:block">
          <div className="mx-auto flex max-w-5xl justify-between border-t border-borda px-4 py-8 text-sm text-suave">
            <span>Curiosamente</span>
            <span>Toda cápsula cita suas fontes.</span>
          </div>
        </footer>
      </div>

      <MenuDeBaixo pendentes={pendentes} />
      <AvisoConquista />
      <ScrollRestoration />
    </div>
  )
}
