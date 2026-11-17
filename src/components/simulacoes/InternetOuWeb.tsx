import { useState } from 'react'
import { cartao } from '../ui/estilos'

// A internet é a rede; a Web (sites) é só um dos serviços que andam nela.
const itens = [
  { nome: 'Abrir um site no navegador', web: true, porque: 'Sites são a Web: documentos ligados por links e acessados por endereços (URLs).' },
  { nome: 'Enviar um e-mail', web: false, porque: 'E-mail é outro serviço que usa a internet, com regras próprias. Não precisa de site (embora muita gente leia por um).' },
  { nome: 'Jogar online com amigos', web: false, porque: 'Muitos jogos falam direto pela internet, sem passar por páginas da Web.' },
  { nome: 'Ler uma notícia num portal', web: true, porque: 'Portal de notícias é um site: é Web.' },
  { nome: 'Chamada de vídeo por aplicativo', web: false, porque: 'O aplicativo usa a internet para mandar pacotes de som e imagem, sem precisar de uma página.' },
]

export default function InternetOuWeb() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<boolean | null>(null)
  const it = itens[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">É a Web ou só internet?</p>
      <p className="mt-3 text-lg font-semibold">{it.nome}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[true, false].map((v) => (
          <button key={String(v)} type="button" disabled={resp !== null} onClick={() => setResp(v)}
            className={`min-h-11 rounded-full border-2 px-3 font-semibold ${resp === null ? 'border-borda' : v === it.web ? 'border-verde bg-verde text-white' : resp === v ? 'border-coral' : 'border-borda opacity-50'}`}>
            {v ? 'É a Web' : 'Internet, sem Web'}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Escolha uma opção.' : `${resp === it.web ? 'Certo! ' : 'Quase. '}${it.porque}`}
      </p>
      {resp !== null && (
        <button type="button" className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white" onClick={() => { setResp(null); setI((i + 1) % itens.length) }}>Próximo</button>
      )}
    </div>
  )
}
