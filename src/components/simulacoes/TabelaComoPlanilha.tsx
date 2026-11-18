import { useState } from 'react'
import { cartao } from '../ui/estilos'

const colunas = ['id', 'nome', 'cidade']
const linhas = [
  [1, 'Ana', 'Recife'],
  [2, 'Bruno', 'Natal'],
  [3, 'Carla', 'Recife'],
]

const papel = (r: number, c: number | null) => {
  if (c === 0) return 'Coluna "id": é a chave primária. Cada linha tem um número único, que a identifica sem confusão.'
  if (c !== null) return `Coluna "${colunas[c]}": um campo (atributo). Todas as linhas têm um valor para ele.`
  return `Linha ${r + 1}: um registro, ou seja, um cliente completo (${linhas[r].join(', ')}).`
}

// Uma tabela de banco de dados parece uma planilha: colunas são campos, linhas são registros.
export default function TabelaComoPlanilha() {
  const [sel, setSel] = useState<{ r: number; c: number | null }>({ r: 0, c: null })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tabela "clientes": toque num título ou numa linha</p>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full border-collapse text-[15px]">
          <thead>
            <tr>
              {colunas.map((c, i) => (
                <th key={c} className="p-0">
                  <button type="button" onClick={() => setSel({ r: sel.r, c: i })}
                    className={`min-h-11 w-full border-2 px-2 text-left font-semibold ${sel.c === i ? 'border-coral bg-fundo' : 'border-borda'}`}>{c}</button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {linhas.map((l, r) => (
              <tr key={l[0]}>
                {l.map((v, c) => (
                  <td key={colunas[c]} className="p-0">
                    <button type="button" onClick={() => setSel({ r, c: null })}
                      className={`min-h-11 w-full border-2 px-2 text-left ${sel.c === null && sel.r === r ? 'border-azul bg-fundo' : 'border-borda'}`}>{v}</button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{papel(sel.r, sel.c)}</p>
    </div>
  )
}
