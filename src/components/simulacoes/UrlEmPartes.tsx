import { useState } from 'react'
import { cartao } from '../ui/estilos'

const exemplos = [
  { url: 'http://localhost:5180/capsula/binario', protocolo: 'http', host: 'localhost', porta: '5180', caminho: '/capsula/binario', nota: 'Seu próprio computador, na porta 5180 do servidor de desenvolvimento.' },
  { url: 'https://curiosamente-seven.vercel.app/mapa', protocolo: 'https', host: 'curiosamente-seven.vercel.app', porta: '', caminho: '/mapa', nota: 'Sem porta escrita: https usa 443 sozinho.' },
  { url: 'http://192.168.0.12:8080/painel', protocolo: 'http', host: '192.168.0.12', porta: '8080', caminho: '/painel', nota: 'Um aparelho da rede local, na porta 8080.' },
]

const cores = ['bg-azul text-white', 'bg-verde text-white', 'bg-amarelo', 'bg-coral text-white']
const nomes = ['protocolo', 'host (quem)', 'porta (qual serviço)', 'caminho (o que pedir)']

// Um endereço de site é uma frase: como falar, com quem, em qual porta e o que pedir.
export default function UrlEmPartes() {
  const [i, setI] = useState(0)
  const [sel, setSel] = useState(1)
  const e = exemplos[i]
  const partes = [`${e.protocolo}://`, e.host, e.porta ? `:${e.porta}` : '', e.caminho]
  const explica = [
    `${e.protocolo}: o jeito de conversar (${e.protocolo === 'https' ? 'com cadeado' : 'sem cadeado'}).`,
    `${e.host}: com quem falar.${e.host === 'localhost' ? ' É o próprio computador (127.0.0.1).' : ''}`,
    e.porta ? `${e.porta}: o "apartamento" do serviço.` : 'Sem porta escrita: o padrão do protocolo é usado (80 para http, 443 para https).',
    `${e.caminho}: qual página ou recurso pedir.`,
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um endereço de site por dentro</p>
      <div className="mt-2 flex flex-col gap-2">
        {exemplos.map((x, k) => (
          <button key={x.url} type="button" aria-pressed={k === i} onClick={() => { setI(k); setSel(1) }}
            className={`min-h-11 break-all rounded-xl border-2 px-3 py-1 text-left font-mono text-sm ${k === i ? 'border-azul' : 'border-borda'}`}>{x.url}</button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap font-mono text-base sm:text-lg">
        {partes.map((t, k) => t && (
          <button key={k} type="button" aria-pressed={sel === k} onClick={() => setSel(k)}
            className={`min-h-11 break-all px-1 ${cores[k]} ${sel === k ? 'ring-2 ring-texto' : 'opacity-80'}`}>{t}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{nomes[sel]}.</strong> {explica[sel]}
        <span className="mt-1 block text-suave">{e.nota}</span>
      </p>
    </div>
  )
}
