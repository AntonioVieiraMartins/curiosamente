// Encontra sozinho todas as cápsulas escritas (pastas com meta.ts + capsula.mdx).
// Para criar uma cápsula nova basta copiar uma pasta; não é preciso mexer aqui.
import { lazy, type LazyExoticComponent } from 'react'
import type { MDXContent, MDXModule } from 'mdx/types'
import type { MetaCapsula } from './tipos'

const metas = import.meta.glob<MetaCapsula>('./**/meta.ts', { eager: true, import: 'default' })
const textos = import.meta.glob<MDXModule>('./**/capsula.mdx')

export type ConteudoCapsula = {
  meta: MetaCapsula
  // O texto só é baixado quando a pessoa abre a cápsula, para o app continuar leve
  Texto: LazyExoticComponent<MDXContent>
}

const conteudos: Record<string, ConteudoCapsula> = {}

for (const [caminho, meta] of Object.entries(metas)) {
  const carregarTexto = textos[caminho.replace('meta.ts', 'capsula.mdx')]
  if (!carregarTexto) {
    console.warn(`A cápsula "${meta.id}" tem meta.ts mas não tem capsula.mdx`)
    continue
  }
  conteudos[meta.id] = { meta, Texto: lazy(carregarTexto) }
}

export function buscarConteudo(id: string | undefined): ConteudoCapsula | undefined {
  return id ? conteudos[id] : undefined
}
