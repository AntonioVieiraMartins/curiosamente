import { calcularNivel, xpDoNivel } from '../../lib/xp'

// Barra de progresso até o próximo nível
export default function ReguaXp({ xpTotal }: { xpTotal: number }) {
  const nivel = calcularNivel(xpTotal)
  const inicio = xpDoNivel(nivel)
  const fim = xpDoNivel(nivel + 1)
  const porcento = Math.round(((xpTotal - inicio) / (fim - inicio)) * 100)

  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-semibold">Nível {nivel}</span>
        <span className="text-suave">faltam {fim - xpTotal} XP para o nível {nivel + 1}</span>
      </div>
      <div
        role="progressbar"
        aria-label="XP até o próximo nível"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={porcento}
        className="mt-3 h-3 overflow-hidden rounded-full bg-fundo"
      >
        <div className="h-full rounded-full bg-azul" style={{ width: `${Math.max(porcento, 2)}%` }} />
      </div>
      <div aria-hidden="true" className="mt-2 flex justify-between text-xs text-suave">
        <span>{inicio} XP</span>
        <span>{fim} XP</span>
      </div>
    </div>
  )
}
