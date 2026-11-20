import { useEffect, useRef, useState } from 'react'
import {
  coletarFrases, destacar, limparDestaque, narracaoSuportada, prepararParaFala, vozesPortugues, type Frase,
} from '../lib/narracao'

export type EstadoNarracao = 'parado' | 'tocando' | 'pausado'
export const VELOCIDADES = [0.8, 1, 1.25, 1.5]

const CHAVE_VELOCIDADE = 'curiosamente:velocidade-narracao'
const CHAVE_VOZ = 'curiosamente:voz-narracao'
const FRASE_DE_TESTE = 'Olá! Eu sou a voz que vai ler as cápsulas para você. Gostou de mim?'

// Preferências guardadas no navegador (com try/catch: o armazenamento pode estar bloqueado)
function ler(chave: string) {
  try {
    return localStorage.getItem(chave)
  } catch {
    return null
  }
}
function salvar(chave: string, valor: string) {
  try {
    localStorage.setItem(chave, valor)
  } catch {
    // sem armazenamento: a escolha vale só nesta visita
  }
}
function velocidadeSalva() {
  const v = Number(ler(CHAVE_VELOCIDADE))
  return VELOCIDADES.includes(v) ? v : 1
}

// Controla a leitura em voz alta de um bloco de texto, frase por frase.
// Cada frase é uma fala separada: assim dá para destacar a frase atual
// e evitar o travamento que alguns navegadores têm com falas longas.
export function useNarracao() {
  const [vozes, setVozes] = useState<SpeechSynthesisVoice[]>(vozesPortugues)
  const [nomeVoz, setNomeVoz] = useState<string | null>(() => ler(CHAVE_VOZ))
  const [estado, setEstado] = useState<EstadoNarracao>('parado')
  const [velocidade, setVelocidade] = useState(velocidadeSalva)
  const [posicao, setPosicao] = useState({ atual: 0, total: 0 })
  const frases = useRef<Frase[]>([])
  const indice = useRef(0)
  const sessao = useRef(0) // muda a cada parada, para ignorar avisos de falas antigas

  // A voz escolhida pela pessoa; se ela não existir neste aparelho, a melhor disponível
  const voz = vozes.find((v) => v.name === nomeVoz) ?? vozes[0] ?? null

  // As vozes chegam em momentos diferentes em cada navegador: às vezes antes, às vezes
  // depois de a página abrir, e nem todos avisam. Por isso conferimos agora, quando o
  // navegador avisar e mais duas vezes logo em seguida.
  useEffect(() => {
    if (!narracaoSuportada()) return
    const atualizar = () => setVozes((atuais) => {
      const novas = vozesPortugues()
      return novas.length === atuais.length ? atuais : novas
    })
    window.speechSynthesis.addEventListener('voiceschanged', atualizar)
    const tentativas = [0, 300, 1500].map((ms) => window.setTimeout(atualizar, ms))
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', atualizar)
      tentativas.forEach(clearTimeout)
    }
  }, [])

  // Ao sair da etapa (o componente some), a voz para e o destaque some
  useEffect(() => () => {
    sessao.current++
    if (narracaoSuportada()) window.speechSynthesis.cancel()
    limparDestaque()
  }, [])

  function novaFala(texto: string, v: SpeechSynthesisVoice, vel: number) {
    const fala = new SpeechSynthesisUtterance(prepararParaFala(texto))
    fala.voice = v
    fala.lang = v.lang
    fala.rate = vel
    return fala
  }

  function falarAPartir(inicio: number, vel: number, v: SpeechSynthesisVoice | null = voz) {
    if (!v) return
    const minhaSessao = ++sessao.current
    window.speechSynthesis.cancel()

    const falar = (i: number) => {
      if (minhaSessao !== sessao.current) return
      if (i >= frases.current.length) {
        parar()
        return
      }
      indice.current = i
      setPosicao({ atual: i + 1, total: frases.current.length })
      destacar(frases.current[i])
      const fala = novaFala(frases.current[i].texto, v, vel)
      fala.onend = () => falar(i + 1)
      fala.onerror = (e) => {
        if (e.error !== 'interrupted' && e.error !== 'canceled') falar(i + 1)
      }
      window.speechSynthesis.speak(fala)
    }
    // Pequena pausa: alguns navegadores ignoram a fala logo depois de um cancel()
    window.setTimeout(() => falar(inicio), 60)
  }

  function tocar(raiz: HTMLElement | null) {
    if (!raiz) return
    frases.current = coletarFrases(raiz)
    if (frases.current.length === 0) return
    setEstado('tocando')
    falarAPartir(0, velocidade)
  }

  function pausar() {
    // Em vez do pause() do navegador (instável no celular), paramos e guardamos a frase atual
    sessao.current++
    window.speechSynthesis.cancel()
    setEstado('pausado')
  }

  function continuar() {
    setEstado('tocando')
    falarAPartir(indice.current, velocidade)
  }

  function parar() {
    sessao.current++
    window.speechSynthesis.cancel()
    limparDestaque()
    indice.current = 0
    setEstado('parado')
    setPosicao({ atual: 0, total: 0 })
  }

  // Pula para a frase anterior (-1) ou seguinte (+1), tocando ou pausado
  function pular(passo: number) {
    const total = frases.current.length
    if (total === 0) return
    const novo = Math.min(total - 1, Math.max(0, indice.current + passo))
    indice.current = novo
    setPosicao({ atual: novo + 1, total })
    if (estado === 'tocando') falarAPartir(novo, velocidade)
    else destacar(frases.current[novo])
  }

  function mudarVelocidade(nova: number) {
    setVelocidade(nova)
    salvar(CHAVE_VELOCIDADE, String(nova))
    // Recomeça a frase atual já na velocidade nova
    if (estado === 'tocando') falarAPartir(indice.current, nova)
  }

  function mudarVoz(nome: string) {
    setNomeVoz(nome)
    salvar(CHAVE_VOZ, nome)
    const nova = vozes.find((v) => v.name === nome) ?? null
    if (estado === 'tocando') falarAPartir(indice.current, velocidade, nova)
  }

  // Fala uma frase curta para a pessoa ouvir a voz antes de escolher
  function testarVoz() {
    if (!voz || estado !== 'parado') return
    window.speechSynthesis.cancel()
    window.setTimeout(() => window.speechSynthesis.speak(novaFala(FRASE_DE_TESTE, voz, velocidade)), 60)
  }

  return {
    disponivel: voz !== null, vozes, voz, estado, velocidade, posicao,
    tocar, pausar, continuar, parar, pular, mudarVelocidade, mudarVoz, testarVoz,
  }
}
