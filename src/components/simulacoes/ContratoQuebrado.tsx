import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Mudanca = 'nenhuma' | 'adiciona' | 'renomeia'

const respostas: Record<Mudanca, string> = {
  nenhuma: '{ "nome": "Boné", "preco": 40 }',
  adiciona: '{ "nome": "Boné", "preco": 40, "cor": "azul" }',
  renomeia: '{ "titulo": "Boné", "preco": 40 }',
}

// A API é um contrato: o aplicativo espera o campo "nome". Mudar o contrato pode quebrar quem usa.
export default function ContratoQuebrado() {
  const [m, setM] = useState<Mudanca>('nenhuma')
  const nome = m === 'renomeia' ? undefined : 'Boné'
  const opcoes: { id: Mudanca; rotulo: string }[] = [
    { id: 'nenhuma', rotulo: 'Servidor não mudou nada' },
    { id: 'adiciona', rotulo: 'Servidor adicionou um campo ("cor")' },
    { id: 'renomeia', rotulo: 'Servidor renomeou "nome" para "titulo"' },
  ]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O aplicativo espera o campo "nome"</p>
      <div className="mt-2 space-y-2">
        {opcoes.map((o) => (
          <button key={o.id} type="button" aria-pressed={m === o.id} onClick={() => setM(o.id)}
            className={`min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${m === o.id ? 'border-azul bg-fundo font-semibold' : 'border-borda'}`}>{o.rotulo}</button>
        ))}
      </div>
      <pre className="mt-3 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{respostas[m]}</code></pre>
      <p aria-live="polite" className={`mt-2 rounded-2xl p-4 text-[15px] ${nome ? 'bg-fundo' : 'bg-amarelo'}`}>
        {nome ? `Na tela do aplicativo: "${nome}". Tudo funciona.${m === 'adiciona' ? ' O campo novo é ignorado, e nada quebra.' : ''}` : 'Na tela do aplicativo: "undefined" (vazio). O aplicativo quebrou, porque o contrato mudou sem aviso.'}
      </p>
    </div>
  )
}
