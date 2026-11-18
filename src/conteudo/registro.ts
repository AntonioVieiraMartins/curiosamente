// Encontra sozinho todas as cápsulas escritas (pastas com meta.ts + capsula.mdx).
// Para criar uma cápsula nova basta copiar uma pasta; não é preciso mexer aqui.
import { lazy, type ComponentType, type LazyExoticComponent } from 'react'
import type { MDXContent, MDXModule } from 'mdx/types'
import type { CartaoPronto, MetaCapsula } from './tipos'

const metas = import.meta.glob<MetaCapsula>('./**/meta.ts', { eager: true, import: 'default' })
const textos = import.meta.glob<MDXModule>('./**/capsula.mdx')
// Revisão final (opcional): infográfico desenhado à mão e baralho de cartões prontos
const infograficos = import.meta.glob<{ default: ComponentType }>('./**/Infografico.tsx')
const baralhos = import.meta.glob<{ default: CartaoPronto[] }>('./**/cartoes.ts')

export type ConteudoCapsula = {
  meta: MetaCapsula
  // O texto só é baixado quando a pessoa abre a cápsula, para o app continuar leve
  Texto: LazyExoticComponent<MDXContent>
  Infografico?: LazyExoticComponent<ComponentType>
  carregarCartoes?: () => Promise<{ default: CartaoPronto[] }>
}

const conteudos: Record<string, ConteudoCapsula> = {}

for (const [caminho, meta] of Object.entries(metas)) {
  const carregarTexto = textos[caminho.replace('meta.ts', 'capsula.mdx')]
  if (!carregarTexto) {
    console.warn(`A cápsula "${meta.id}" tem meta.ts mas não tem capsula.mdx`)
    continue
  }
  const info = infograficos[caminho.replace('meta.ts', 'Infografico.tsx')]
  conteudos[meta.id] = {
    meta,
    Texto: lazy(carregarTexto),
    Infografico: info ? lazy(info) : undefined,
    carregarCartoes: baralhos[caminho.replace('meta.ts', 'cartoes.ts')],
  }
}

export function idsComInfografico(): string[] {
  return Object.values(conteudos).filter((c) => c.Infografico).map((c) => c.meta.id)
}

export function buscarConteudo(id: string | undefined): ConteudoCapsula | undefined {
  return id ? conteudos[id] : undefined
}
