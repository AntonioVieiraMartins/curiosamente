import { useState } from 'react'
import { cartao } from '../ui/estilos'

const tarefas = ['Processos', 'Memória', 'Arquivos', 'Dispositivos'] as const

const pedidos = [
  { texto: 'Abrir dois programas ao mesmo tempo', certa: 0, porque: 'Dividir a CPU entre programas é gerenciar processos (o escalonador).' },
  { texto: 'Dar a cada programa seu pedaço da RAM', certa: 1, porque: 'Reservar e liberar RAM é gerenciar a memória.' },
  { texto: 'Salvar "trabalho.docx" na pasta Documentos', certa: 2, porque: 'Nomes, pastas e onde cada arquivo fica no disco: sistema de arquivos.' },
  { texto: 'Imprimir uma página', certa: 3, porque: 'Falar com a impressora é papel do driver, parte do gerenciamento de dispositivos.' },
  { texto: 'Impedir que um jogo apague a memória do navegador', certa: 1, porque: 'Isolar a memória de cada programa é gerência de memória.' },
]

// Quatro serviços do sistema operacional. Quem cuida de cada pedido?
export default function QuemFazOQue() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<number | null>(null)
  const p = pedidos[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem cuida disso?</p>
      <p className="mt-3 text-lg font-semibold">{p.texto}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {tarefas.map((t, k) => (
          <button key={t} type="button" disabled={resp !== null} onClick={() => setResp(k)}
            className={`min-h-11 rounded-full border-2 px-3 font-semibold ${resp === null ? 'border-borda' : k === p.certa ? 'border-verde bg-verde text-white' : resp === k ? 'border-coral' : 'border-borda opacity-50'}`}>{t}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Escolha o serviço do sistema operacional.' : `${resp === p.certa ? 'Isso! ' : 'Quase. '}${p.porque}`}
      </p>
      {resp !== null && (
        <button type="button" className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white"
          onClick={() => { setResp(null); setI((i + 1) % pedidos.length) }}>Próximo pedido</button>
      )}
    </div>
  )
}
