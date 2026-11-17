import type { MDXComponents } from 'mdx/types'
import Etapa from './Etapa'
import Previsao from './Previsao'
import Quiz from './Quiz'
import LinhaDoTempo from './LinhaDoTempo'
import Termo from './Termo'
import Conexoes from './Conexoes'
import { Formula, Fracao, Linha } from './Formula'
import { Palpite, LembrarPalpite } from './Palpite'
import Resumo from './Resumo'

// Componentes que todo capsula.mdx pode usar sem precisar de "import",
// e o visual dos elementos comuns do Markdown (parágrafo, lista, código...)
export const componentesMdx: MDXComponents = {
  Etapa,
  Previsao,
  Quiz,
  LinhaDoTempo,
  Termo,
  Conexoes,
  Formula,
  Linha,
  Fracao,
  Palpite,
  LembrarPalpite,
  Resumo,
  p: (props) => <p className="max-w-[65ch] text-[17px] leading-[1.7]" {...props} />,
  h2: (props) => <h2 className="pt-2 font-serif text-2xl font-medium" {...props} />,
  h3: (props) => <h3 className="pt-2 font-semibold" {...props} />,
  ul: (props) => <ul className="max-w-[65ch] list-disc space-y-2 pl-6 marker:text-suave" {...props} />,
  ol: (props) => <ol className="max-w-[65ch] list-decimal space-y-2 pl-6 marker:text-suave" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  a: (props) => <a className="text-azul-texto underline underline-offset-4" target="_blank" rel="noreferrer" {...props} />,
  blockquote: (props) => <blockquote className="max-w-[65ch] border-l-4 border-amarelo pl-4 italic text-suave" {...props} />,
  code: (props) => <code className="rounded-md bg-fundo px-1.5 py-0.5 text-[0.92em]" {...props} />,
  pre: (props) => <pre className="overflow-x-auto rounded-2xl bg-fundo p-4 text-[15px] leading-relaxed" {...props} />,
}
