import { useState } from 'react'
import { cartao } from '../ui/estilos'

const TOTAL = 16
const apps = [
  { nome: 'Navegador', tam: 5, cor: 'bg-azul' },
  { nome: 'Jogo', tam: 6, cor: 'bg-coral' },
  { nome: 'Música', tam: 2, cor: 'bg-verde' },
  { nome: 'Editor', tam: 4, cor: 'bg-amarelo-escuro' },
]

// A memória é uma fila de 16 blocos. O sistema reserva uma faixa para cada programa e libera quando ele fecha.
export default function MapaDaMemoria() {
  const [abertos, setAbertos] = useState<string[]>([])
  const [aviso, setAviso] = useState('Abra programas e veja a memória ser repartida.')

  const mapa: (number | null)[] = Array(TOTAL).fill(null)
  let pos = 0
  abertos.forEach((nome) => {
    const k = apps.findIndex((a) => a.nome === nome)
    for (let b = 0; b < apps[k].tam; b++) mapa[pos++] = k
  })

  function alternar(nome: string, tam: number) {
    if (abertos.includes(nome)) {
      setAbertos(abertos.filter((n) => n !== nome))
      setAviso(`${nome} fechou: o sistema recuperou os blocos dele.`)
      return
    }
    const usado = abertos.reduce((s, n) => s + (apps.find((a) => a.nome === n)?.tam ?? 0), 0)
    if (usado + tam > TOTAL) { setAviso(`Sem espaço para ${nome}: faltam blocos. Feche algo primeiro.`); return }
    setAbertos([...abertos, nome])
    setAviso(`${nome} abriu e recebeu ${tam} blocos só dele. Os outros programas não podem mexer neles.`)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem usa a memória?</p>
      <div className="mt-3 grid grid-cols-8 gap-1" aria-hidden="true">
        {mapa.map((k, i) => (
          <span key={i} className={`h-9 rounded ${k === null ? 'bg-fundo' : apps[k].cor}`} />
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{aviso}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {apps.map((a) => (
          <button key={a.nome} type="button" aria-pressed={abertos.includes(a.nome)} onClick={() => alternar(a.nome, a.tam)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${abertos.includes(a.nome) ? 'border-azul bg-azul text-white' : 'border-borda'}`}>
            {a.nome} ({a.tam})
          </button>
        ))}
      </div>
    </div>
  )
}
