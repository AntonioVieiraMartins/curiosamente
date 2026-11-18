import { useState } from 'react'
import { cartao } from '../ui/estilos'

const cenarios = [
  { nome: 'Abrir a página inicial', metodo: 'GET', caminho: '/', status: '200 OK', corpo: '<html> …a página… </html>', nota: 'Deu certo: o servidor devolve a página.' },
  { nome: 'Abrir uma página que não existe', metodo: 'GET', caminho: '/pagina-fantasma', status: '404 Not Found', corpo: 'Página não encontrada', nota: 'O servidor está bem, mas não achou o que você pediu.' },
  { nome: 'Endereço antigo que mudou', metodo: 'GET', caminho: '/velho', status: '301 Moved Permanently', corpo: '(sem corpo) Location: /novo', nota: 'O servidor avisa: "mudou de lugar, vá para /novo". O navegador vai sozinho.' },
  { nome: 'Enviar um formulário', metodo: 'POST', caminho: '/contato', status: '200 OK', corpo: 'Mensagem recebida!', nota: 'POST manda dados para o servidor processar.' },
  { nome: 'O servidor quebrou', metodo: 'GET', caminho: '/relatorio', status: '500 Internal Server Error', corpo: 'Erro interno', nota: 'O problema é do servidor, não do seu pedido.' },
]

// Todo contato web é uma pergunta (pedido) e uma resposta, em texto simples.
export default function PedidoEResposta() {
  const [i, setI] = useState(0)
  const c = cenarios[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Pedido e resposta</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {cenarios.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2" aria-live="polite">
        <pre className="overflow-x-auto rounded-2xl bg-fundo p-3 font-mono text-sm"><strong className="font-sans text-xs uppercase text-suave">Pedido</strong>{`\n${c.metodo} ${c.caminho} HTTP/1.1\nHost: exemplo.com`}</pre>
        <pre className="overflow-x-auto rounded-2xl bg-amarelo p-3 font-mono text-sm"><strong className="font-sans text-xs uppercase">Resposta</strong>{`\nHTTP/1.1 ${c.status}\n\n${c.corpo}`}</pre>
      </div>
      <p className="mt-2 text-[15px]">{c.nota}</p>
    </div>
  )
}
