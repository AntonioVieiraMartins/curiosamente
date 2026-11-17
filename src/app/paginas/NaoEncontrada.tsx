import { Link } from 'react-router-dom'
import Rotulo from '../../components/ui/Rotulo'
import { botaoPrimario } from '../../components/ui/estilos'

export default function NaoEncontrada() {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-20 text-center">
      <Rotulo>Erro 404</Rotulo>
      <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">Esta estação não existe.</h1>
      <p className="mt-4 text-lg text-suave">Talvez o endereço tenha um erro de digitação. Que tal voltar para o mapa?</p>
      <Link to="/mapa" className={`${botaoPrimario} mt-8`}>Abrir o mapa</Link>
    </section>
  )
}
