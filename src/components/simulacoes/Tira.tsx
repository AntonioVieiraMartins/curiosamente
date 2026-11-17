type Props = {
  partes: number // em quantos pedaços cada inteiro é cortado
  pintadas: number // quantos pedaços pintar (pode passar de um inteiro)
  cor: string
  inteiros?: number // quantas barras desenhar
  rotulo?: string
}

// Barra de chocolate cortada em pedaços iguais; serve para desenhar frações lado a lado
export default function Tira({ partes, pintadas, cor, inteiros = 1, rotulo }: Props) {
  return (
    <div className="space-y-1" aria-hidden="true">
      {rotulo && <p className="text-sm text-suave">{rotulo}</p>}
      <div className="flex gap-2">
        {Array.from({ length: inteiros }, (_, barra) => (
          <div key={barra} className="flex h-8 flex-1 overflow-hidden rounded-lg border border-borda">
            {Array.from({ length: partes }, (_, i) => {
              const indice = barra * partes + i
              return (
                <span
                  key={i}
                  className="flex-1 border-r border-superficie transition-colors last:border-r-0"
                  style={{ background: indice < pintadas ? cor : 'var(--color-fundo)' }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
