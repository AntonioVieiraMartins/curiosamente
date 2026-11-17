import { useState } from 'react'
import { cartao } from '../ui/estilos'

const camadas = [
  { nome: 'Programas (apps)', texto: 'Navegador, jogo, editor. Pedem coisas ao sistema, sem mexer direto na máquina.' },
  { nome: 'Sistema operacional', texto: 'O gerente. Reparte CPU e memória, organiza arquivos e decide quem pode usar o quê. O núcleo dele se chama kernel.' },
  { nome: 'Drivers', texto: 'Tradutores. Cada dispositivo (impressora, placa de vídeo) tem o seu, e assim o sistema fala com todos do mesmo jeito.' },
  { nome: 'Hardware', texto: 'As peças de verdade: CPU, RAM, disco, tela, teclado.' },
]

// Cada camada só conversa com a vizinha: o app nunca toca o hardware direto.
export default function CamadasDoSistema() {
  const [sel, setSel] = useState(1)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">As camadas do computador</p>
      <div className="mt-3 space-y-1.5">
        {camadas.map((c, i) => (
          <button key={c.nome} type="button" aria-pressed={sel === i} onClick={() => setSel(i)}
            className={`min-h-11 w-full rounded-xl border-2 px-3 py-2 text-left font-semibold ${sel === i ? 'border-azul bg-azul text-white' : 'border-borda bg-fundo'}`}>
            {c.nome}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{camadas[sel].texto}</p>
    </div>
  )
}
