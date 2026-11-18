import { useState } from 'react'
import { cartao } from '../ui/estilos'

const campos = [
  { chave: 'nome', texto: '"Ana"', tipo: 'texto (string)', caminho: 'nome', obs: 'Texto sempre entre aspas duplas.' },
  { chave: 'idade', texto: '30', tipo: 'número', caminho: 'idade', obs: 'Número sem aspas.' },
  { chave: 'ativa', texto: 'true', tipo: 'booleano', caminho: 'ativa', obs: 'Só pode ser true ou false (sem aspas).' },
  { chave: 'apelido', texto: 'null', tipo: 'nulo', caminho: 'apelido', obs: 'Significa "sem valor", diferente de zero ou de texto vazio.' },
  { chave: 'notas', texto: '[8, 9.5]', tipo: 'lista (array)', caminho: 'notas', obs: 'Valores em ordem, entre colchetes.' },
  { chave: 'endereco', texto: '{ "cidade": "Recife" }', tipo: 'objeto', caminho: 'endereco', obs: 'Um objeto dentro de outro: pares nome-valor entre chaves.' },
]

// Toque num valor para ver o tipo dele e como chegar até ele.
export default function TiposDeJson() {
  const [i, setI] = useState(0)
  const c = campos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Toque numa linha do JSON</p>
      <div className="mt-2 space-y-1.5 rounded-2xl bg-fundo p-3 font-mono text-[14px]">
        <p>{'{'}</p>
        {campos.map((x, k) => (
          <button key={x.chave} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`block min-h-11 w-full rounded-lg border-2 px-2 text-left ${k === i ? 'border-coral bg-superficie' : 'border-transparent'}`}>
            &nbsp;&nbsp;"{x.chave}": {x.texto}{k < campos.length - 1 ? ',' : ''}
          </button>
        ))}
        <p>{'}'}</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl border border-borda p-3 text-[15px]">
        <strong>Chave:</strong> "{c.chave}". <strong>Tipo:</strong> {c.tipo}. {c.obs}
      </p>
    </div>
  )
}
