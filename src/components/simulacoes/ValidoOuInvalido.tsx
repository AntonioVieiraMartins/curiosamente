import { useState } from 'react'
import { cartao } from '../ui/estilos'

const casos = [
  { codigo: '{ "nome": "Ana", "idade": 30 }', ok: true, porque: 'Aspas duplas, vírgula entre os pares, sem nada sobrando.' },
  { codigo: "{ 'nome': 'Ana' }", ok: false, porque: 'JSON só aceita aspas duplas. Aspas simples são inválidas.' },
  { codigo: '{ "nome": "Ana", "idade": 30, }', ok: false, porque: 'Vírgula sobrando no final (vírgula pendurada) não é permitida.' },
  { codigo: '{ nome: "Ana" }', ok: false, porque: 'A chave também precisa estar entre aspas duplas.' },
  { codigo: '{ "notas": [8, 9.5], "ativa": true, "apelido": null }', ok: true, porque: 'Lista, booleano e null estão escritos certo.' },
  { codigo: '{ "nome": "Ana" } // comentário', ok: false, porque: 'JSON não permite comentários.' },
]

// Treino de olho: o JSON do pedido está válido? Um erro pequeno faz o servidor recusar tudo.
export default function ValidoOuInvalido() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<boolean | null>(null)
  const [acertos, setAcertos] = useState(0)
  const fim = i >= casos.length
  const c = casos[i]

  if (fim) {
    return (
      <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
        <p className="font-semibold">Você acertou {acertos} de {casos.length}.</p>
        <button type="button" onClick={() => { setI(0); setAcertos(0); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Jogar de novo</button>
      </div>
    )
  }
  const escolher = (v: boolean) => { if (resp === null) { setResp(v); if (v === c.ok) setAcertos((n) => n + 1) } }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Texto {i + 1} de {casos.length}: é um JSON válido?</p>
      <pre className="mt-2 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{c.codigo}</code></pre>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => escolher(true)} className="min-h-11 rounded-xl border-2 border-verde px-3 font-semibold">Válido</button>
        <button type="button" onClick={() => escolher(false)} className="min-h-11 rounded-xl border-2 border-coral px-3 font-semibold">Inválido</button>
      </div>
      {resp !== null && (
        <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          <p className="font-semibold">{resp === c.ok ? 'Certo!' : 'Não foi dessa vez.'} Esse texto é {c.ok ? 'válido' : 'inválido'}.</p>
          <p className="mt-1">{c.porque}</p>
          <button type="button" onClick={() => { setResp(null); setI(i + 1) }} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">{i === casos.length - 1 ? 'Ver resultado' : 'Próximo'}</button>
        </div>
      )}
    </div>
  )
}
