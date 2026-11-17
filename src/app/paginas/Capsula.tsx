import { useParams } from 'react-router-dom'
import CapsulaInterativa from '../../components/capsula/CapsulaInterativa'
import CapsulaRascunho from '../../components/capsula/CapsulaRascunho'
import { buscarCapsula } from '../../conteudo/indice'
import { buscarConteudo } from '../../conteudo/registro'
import NaoEncontrada from './NaoEncontrada'

export default function Capsula() {
  const { id } = useParams()
  const conteudo = buscarConteudo(id)
  const resumo = buscarCapsula(id)

  // A "key" faz o React começar do zero ao trocar de uma cápsula para outra
  if (conteudo) return <CapsulaInterativa key={conteudo.meta.id} conteudo={conteudo} />
  if (resumo) return <CapsulaRascunho capsula={resumo} />
  return <NaoEncontrada />
}
