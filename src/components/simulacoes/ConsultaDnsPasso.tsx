import { useState } from 'react'
import { cartao } from '../ui/estilos'

const passos = [
  { quem: 'Seu navegador', texto: 'Você digita www.exemplo.com. Ele primeiro olha na própria memória (cache): não achou.' },
  { quem: 'Resolvedor recursivo', texto: 'Seu pedido vai para o resolvedor (muitas vezes, o do provedor). Ele não sabe de cor, mas sabe por onde começar a perguntar.' },
  { quem: 'Servidor raiz', texto: 'Pergunta: "Quem cuida do .com?" A raiz responde com os servidores do .com. Ela só indica o próximo passo.' },
  { quem: 'Servidor do .com', texto: 'Pergunta: "Quem cuida do exemplo.com?" O servidor do .com indica os servidores oficiais desse domínio.' },
  { quem: 'Servidor oficial do domínio', texto: 'Pergunta: "Qual o IP de www.exemplo.com?" É a fonte de verdade: responde 203.0.113.10 (exemplo).' },
  { quem: 'De volta ao navegador', texto: 'O resolvedor guarda a resposta no cache por um tempo e entrega o IP ao navegador, que enfim manda o pedido para ele.' },
]

// A pergunta desce a árvore: raiz → .com → domínio. A resposta sobe de volta.
export default function ConsultaDnsPasso() {
  const [i, setI] = useState(0)
  const p = passos[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma consulta de DNS, passo a passo</p>
      <ol className="mt-3 flex flex-wrap gap-1.5" aria-hidden="true">
        {passos.map((_, k) => <li key={k} className={`h-2 flex-1 rounded-full ${k <= i ? 'bg-azul' : 'bg-fundo'}`} />)}
      </ol>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-amarelo p-4 text-[15px]">
        <strong>{i + 1}. {p.quem}.</strong> {p.texto}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-6 font-semibold text-white disabled:opacity-40" disabled={i >= passos.length - 1} onClick={() => setI(i + 1)}>Próximo passo</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setI(0)}>Recomeçar</button>
      </div>
    </div>
  )
}
