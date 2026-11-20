import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Os 18 primeiros elementos, na posição certa da tabela periódica (período = linha, grupo = coluna)
type El = { z: number; s: string; nome: string; g: number; p: number; tipo: 'metal' | 'nao-metal' | 'semimetal' | 'nobre' }
const els: El[] = [
  { z: 1, s: 'H', nome: 'Hidrogênio', g: 1, p: 1, tipo: 'nao-metal' }, { z: 2, s: 'He', nome: 'Hélio', g: 18, p: 1, tipo: 'nobre' },
  { z: 3, s: 'Li', nome: 'Lítio', g: 1, p: 2, tipo: 'metal' }, { z: 4, s: 'Be', nome: 'Berílio', g: 2, p: 2, tipo: 'metal' },
  { z: 5, s: 'B', nome: 'Boro', g: 13, p: 2, tipo: 'semimetal' }, { z: 6, s: 'C', nome: 'Carbono', g: 14, p: 2, tipo: 'nao-metal' },
  { z: 7, s: 'N', nome: 'Nitrogênio', g: 15, p: 2, tipo: 'nao-metal' }, { z: 8, s: 'O', nome: 'Oxigênio', g: 16, p: 2, tipo: 'nao-metal' },
  { z: 9, s: 'F', nome: 'Flúor', g: 17, p: 2, tipo: 'nao-metal' }, { z: 10, s: 'Ne', nome: 'Neônio', g: 18, p: 2, tipo: 'nobre' },
  { z: 11, s: 'Na', nome: 'Sódio', g: 1, p: 3, tipo: 'metal' }, { z: 12, s: 'Mg', nome: 'Magnésio', g: 2, p: 3, tipo: 'metal' },
  { z: 13, s: 'Al', nome: 'Alumínio', g: 13, p: 3, tipo: 'metal' }, { z: 14, s: 'Si', nome: 'Silício', g: 14, p: 3, tipo: 'semimetal' },
  { z: 15, s: 'P', nome: 'Fósforo', g: 15, p: 3, tipo: 'nao-metal' }, { z: 16, s: 'S', nome: 'Enxofre', g: 16, p: 3, tipo: 'nao-metal' },
  { z: 17, s: 'Cl', nome: 'Cloro', g: 17, p: 3, tipo: 'nao-metal' }, { z: 18, s: 'Ar', nome: 'Argônio', g: 18, p: 3, tipo: 'nobre' },
]
const cor: Record<El['tipo'], string> = { metal: 'var(--color-azul)', 'nao-metal': 'var(--color-verde)', semimetal: 'var(--color-amarelo)', nobre: 'var(--color-coral)' }
const nomeTipo: Record<El['tipo'], string> = { metal: 'metal', 'nao-metal': 'não metal', semimetal: 'semimetal', nobre: 'gás nobre' }

function camadas(e: number) {
  const r: number[] = []
  const cap = [2, 8, 8]
  let resto = e
  for (const c of cap) { if (resto <= 0) break; r.push(Math.min(c, resto)); resto -= c }
  return r
}

export default function TabelaDosDezoito() {
  const [z, setZ] = useState(11)
  const el = els.find((x) => x.z === z)!
  const cam = camadas(el.z)
  const valencia = el.s === 'He' ? 2 : cam[cam.length - 1]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os 18 primeiros elementos (toque em um)</p>
      <div className="mt-3 overflow-x-auto">
        <div className="grid min-w-[560px] gap-1" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gridTemplateRows: 'repeat(3, 34px)' }} role="group" aria-label="Tabela periódica, até o argônio">
          {els.map((x) => (
            <button
              key={x.z}
              type="button"
              aria-pressed={x.z === z}
              aria-label={`${x.nome}, número atômico ${x.z}`}
              onClick={() => setZ(x.z)}
              style={{ gridColumn: x.g, gridRow: x.p, borderColor: cor[x.tipo], background: x.z === z ? cor[x.tipo] : 'transparent', color: x.z === z ? 'white' : 'var(--color-texto)' }}
              className="rounded-lg border-2 text-[13px] font-bold"
            >
              {x.s}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-suave">Cores: azul = metal · verde = não metal · amarelo = semimetal · vermelho = gás nobre. Linhas = períodos, colunas = grupos.</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{el.nome} ({el.s})</strong>: Z = {el.z}, {nomeTipo[el.tipo]}. Está no <strong>período {el.p}</strong> (tem {cam.length} camada{cam.length > 1 ? 's' : ''}: {cam.join(', ')}) e no <strong>grupo {el.g}</strong> ({valencia} elétron{valencia > 1 ? 's' : ''} de valência).
      </p>
    </div>
  )
}
