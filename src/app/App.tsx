import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Inicio from './paginas/Inicio'
import Mapa from './paginas/Mapa'
import Capsula from './paginas/Capsula'
import Perfil from './paginas/Perfil'
import NaoEncontrada from './paginas/NaoEncontrada'
import Entrar from './paginas/Entrar'
import Caderno from './paginas/Caderno'

const rotas = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/mapa', element: <Mapa /> },
      { path: '/capsula/:id', element: <Capsula /> },
      { path: '/caderno', element: <Caderno /> },
      { path: '/perfil', element: <Perfil /> },
      { path: '/entrar', element: <Entrar /> },
      { path: '*', element: <NaoEncontrada /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={rotas} />
}
