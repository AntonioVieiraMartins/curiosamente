import type { ReactNode } from 'react'

// Bloco de fórmula centralizado. Se não couber no celular, rola só dentro do bloco.
export function Formula({ children }: { children: ReactNode }) {
  return (
    <div data-sem-narracao className="overflow-x-auto rounded-2xl bg-fundo px-4 py-5">
      <div className="flex flex-col items-center gap-3 text-center font-serif text-[18px] leading-relaxed sm:text-[20px]">
        {children}
      </div>
    </div>
  )
}

// Uma linha dentro da <Formula>, com os itens alinhados no meio (para as frações)
export function Linha({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">{children}</div>
}

// Fração "de pé" (número em cima, traço, número embaixo), mais fácil de ler que 1/3
export function Fracao({ cima, baixo }: { cima: ReactNode; baixo: ReactNode }) {
  return (
    <span className="inline-flex flex-col items-center px-0.5 align-middle leading-tight">
      <span className="border-b-[1.5px] border-current px-1 pb-0.5">{cima}</span>
      <span className="px-1 pt-0.5">{baixo}</span>
    </span>
  )
}
