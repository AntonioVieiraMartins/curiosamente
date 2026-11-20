import { calcularNivel, xpDoNivel } from '../../lib/xp'

// Barra de progresso até o próximo nível
export default function ReguaXp({ xpTotal }: { xpTotal: number }) {
  const nivel = calcularNivel(xpTotal)
  const inicio = xpDoNivel(nivel)
  const fim = xpDoNivel(nivel + 1)
  const porcento = Math.round(((xpTotal - inicio) / (fim - inicio)) * 100)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <span className="font-serif text-[26px] font-medium">Nível {nivel}</span>
        <span className="text-[13px] text-suave">{xpTotal.toLocaleString('pt-BR')} XP</span>
      </div>
      <div
        role="progressbar"
        aria-label="XP até o próximo nível"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={porcento}
        className="h-2.5 overflow-hidden rounded-full bg-fundo"
      >
        <div className="h-full rounded-full bg-verde" style={{ width: `${Math.max(porcento, 2)}%` }} />
      </div>
      <span className="text-[13px] text-suave">Faltam {fim - xpTotal} XP para o nível {nivel + 1}</span>
    </div>
  )
}
