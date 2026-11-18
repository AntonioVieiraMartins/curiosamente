import { useState } from 'react'
import { cartao } from '../ui/estilos'

const passos = [
  { quem: 'Salão (navegador)', texto: 'Você toca em "Comprar". O front-end junta o que precisa (o que está no carrinho) e monta um pedido.' },
  { quem: 'A caminho', texto: 'O pedido viaja pela internet até o servidor, num pedido HTTP (você viu isso na cápsula anterior).' },
  { quem: 'Cozinha (servidor)', texto: 'O back-end confere quem você é e se o pedido faz sentido (o item existe? tem estoque?).' },
  { quem: 'Despensa (banco de dados)', texto: 'O servidor grava o pedido e diminui o estoque. Se algo falhar, nada é gravado pela metade.' },
  { quem: 'Cozinha (servidor)', texto: 'O servidor monta a resposta: "pedido 4821 criado" (ou uma mensagem de erro).' },
  { quem: 'Salão (navegador)', texto: 'O front-end recebe a resposta e muda a tela: "Compra feita!". O salão só mostra o que a cozinha decidiu.' },
]

// Passo a passo de um único clique, do botão até a tela mudar.
export default function CliqueEmEtapas() {
  const [n, setN] = useState(0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um clique em "Comprar": passo {n + 1} de {passos.length}</p>
      <ol className="mt-2 space-y-1.5">
        {passos.map((p, k) => (
          <li key={p.texto} className={`rounded-xl border-2 px-3 py-2 text-[15px] ${k === n ? 'border-azul bg-fundo' : 'border-borda'} ${k > n ? 'opacity-40' : ''}`}>
            <strong>{k + 1}. {p.quem}</strong>
            {k === n && <span className="mt-1 block">{p.texto}</span>}
          </li>
        ))}
      </ol>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={n === 0} onClick={() => setN(n - 1)} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold disabled:opacity-40">Voltar</button>
        <button type="button" disabled={n === passos.length - 1} onClick={() => setN(n + 1)} className="min-h-11 rounded-full border-2 border-azul px-4 font-semibold disabled:opacity-40">Próximo passo</button>
      </div>
    </div>
  )
}
