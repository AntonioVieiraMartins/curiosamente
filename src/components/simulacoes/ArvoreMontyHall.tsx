import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Todos os caminhos possíveis quando você escolhe a porta 1.
// "y" é a altura de cada ponto no desenho.
const ramos = [
  { carro: 1, y: 55, folhas: [
    { abre: 2, chance: '½', total: '1/6', y: 25, trocar: 'perde' },
    { abre: 3, chance: '½', total: '1/6', y: 85, trocar: 'perde' },
  ] },
  { carro: 2, y: 155, folhas: [{ abre: 3, chance: '1', total: '1/3', y: 155, trocar: 'ganha' }] },
  { carro: 3, y: 225, folhas: [{ abre: 2, chance: '1', total: '1/3', y: 225, trocar: 'ganha' }] },
]

const RAIZ = { x: 10, y: 140 }
const PILULA = { esq: 62, dir: 146, altura: 24 } // etiqueta "carro na N" no meio da árvore
const FOLHA_X = 194

// Árvore de probabilidades: o botão "filtra" só os caminhos em que ele abriu a porta 3
export default function ArvoreMontyHall() {
  const [filtrar, setFiltrar] = useState(false)
  const apagado = (abre: number) => (filtrar && abre !== 3 ? 0.18 : 1)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="mb-3 text-sm text-suave">O ponto preto é você escolhendo a porta 1. Siga cada caminho para a direita.</p>
      <svg viewBox="0 0 312 250" className="w-full" role="img"
        aria-label="Árvore: o carro está em cada porta com chance 1/3; o apresentador então abre uma porta com cabra.">
        <circle cx={RAIZ.x} cy={RAIZ.y} r="6" fill="var(--color-texto)" />

        {ramos.map((r) => {
          const ramoApagado = filtrar && r.folhas.every((f) => f.abre !== 3)
          return (
            <g key={r.carro} opacity={ramoApagado ? 0.18 : 1} className="transition-opacity duration-500">
              <line x1={RAIZ.x} y1={RAIZ.y} x2={PILULA.esq} y2={r.y} stroke="var(--color-borda)" strokeWidth="2" />
              <text x={(RAIZ.x + PILULA.esq) / 2} y={(RAIZ.y + r.y) / 2 - 5} fontSize="14" fill="var(--color-suave)">⅓</text>
              <rect
                x={PILULA.esq} y={r.y - PILULA.altura / 2} width={PILULA.dir - PILULA.esq} height={PILULA.altura}
                rx={PILULA.altura / 2} fill="var(--color-amarelo)"
              />
              <text x={(PILULA.esq + PILULA.dir) / 2} y={r.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--color-texto)">
                carro na {r.carro}
              </text>

              {r.folhas.map((f) => (
                <g key={f.abre} opacity={apagado(f.abre)} className="transition-opacity duration-500">
                  <line x1={PILULA.dir} y1={r.y} x2={FOLHA_X} y2={f.y} stroke="var(--color-borda)" strokeWidth="2" />
                  {f.y !== r.y && (
                    <text x={(PILULA.dir + FOLHA_X) / 2 - 4} y={(r.y + f.y) / 2 + (f.y < r.y ? -6 : 16)} fontSize="14" fill="var(--color-suave)">
                      {f.chance}
                    </text>
                  )}
                  <circle cx={FOLHA_X} cy={f.y} r="5" fill={f.trocar === 'ganha' ? 'var(--color-azul)' : 'var(--color-coral)'} />
                  <text x={FOLHA_X + 9} y={f.y - 2} fontSize="13" fontWeight="600" fill="var(--color-texto)">abre a {f.abre} · {f.total}</text>
                  <text x={FOLHA_X + 9} y={f.y + 14} fontSize="12.5" fill={f.trocar === 'ganha' ? 'var(--color-azul-texto)' : 'var(--color-coral)'}>
                    trocar {f.trocar}
                  </text>
                </g>
              ))}
            </g>
          )
        })}
      </svg>

      <button
        type="button"
        onClick={() => setFiltrar((f) => !f)}
        aria-pressed={filtrar}
        className="mt-4 min-h-11 w-full rounded-full border-2 border-azul px-4 font-semibold text-azul-texto transition hover:bg-azul-claro"
      >
        {filtrar ? 'Mostrar todos os caminhos' : 'Mostrar só: "ele abriu a porta 3"'}
      </button>

      <p aria-live="polite" className="mt-4 text-[16px]">
        {filtrar ? (
          <>
            Sobraram dois caminhos: <strong className="text-coral">1/6</strong> (trocar perde) e{' '}
            <strong className="text-azul-texto">1/3</strong> (trocar ganha). Juntos somam 1/2. A parte em que trocar ganha
            vale <strong>1/3 ÷ 1/2 = 2/3</strong> desse total.
          </>
        ) : (
          <>Cada caminho multiplica as chances pelo caminho. Exemplo: ⅓ × ½ = 1/6. Os quatro finais somam 1/6 + 1/6 + 1/3 + 1/3 = 1.</>
        )}
      </p>
    </div>
  )
}
