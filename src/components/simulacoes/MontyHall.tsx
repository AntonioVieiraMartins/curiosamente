import { useEffect, useRef, useState } from 'react'
import { jogarRodadas, placarZerado, porcentagem, type Placar } from '../../lib/montyHall'
import GraficoConvergencia, { type Ponto } from './GraficoConvergencia'
import { cartao } from '../ui/estilos'

const LIMITE_PONTOS = 240 // mantém o gráfico leve mesmo com muitas rodadas
const pacotes = [1, 100, 10_000]

const formatar = (n: number) => n.toLocaleString('pt-BR')
const pct = (v: number, total: number) => porcentagem(v, total).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '%'

function paraPonto(p: Placar): Ponto {
  return {
    rodada: p.rodadas,
    ficando: porcentagem(p.vitoriasFicando, p.rodadas),
    trocando: porcentagem(p.vitoriasTrocando, p.rodadas),
    moeda: porcentagem(p.vitoriasMoeda, p.rodadas),
  }
}

// Se a lista ficar grande, guarda um ponto sim, outro não (o desenho continua igual)
function enxugar(pontos: Ponto[]) {
  return pontos.length > LIMITE_PONTOS ? pontos.filter((_, i) => i % 2 === 0 || i === pontos.length - 1) : pontos
}

// O computador joga milhares de rodadas e compara as três estratégias ao vivo
export default function MontyHall() {
  const [placar, setPlacar] = useState<Placar>(placarZerado)
  const [pontos, setPontos] = useState<Ponto[]>([])
  const [rodando, setRodando] = useState(false)
  const atual = useRef<Placar>(placarZerado)
  const quadro = useRef<number | null>(null)

  // Para a animação se a pessoa sair da etapa no meio
  useEffect(() => () => { if (quadro.current) clearTimeout(quadro.current) }, [])

  function jogar(total: number) {
    // Quem prefere menos movimento vê o resultado de uma vez, sem animação
    const semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const passo = semAnimacao ? total : Math.max(1, Math.ceil(total / 60))
    let restante = total
    setRodando(true)

    const avancar = () => {
      const agora = Math.min(passo, restante)
      atual.current = jogarRodadas(atual.current, agora)
      restante -= agora
      setPlacar(atual.current)
      setPontos((p) => enxugar([...p, paraPonto(atual.current)]))
      // ~60 passos por segundo; setTimeout continua mesmo se a aba não estiver sendo desenhada
      if (restante > 0) quadro.current = window.setTimeout(avancar, 16)
      else setRodando(false)
    }
    avancar()
  }

  function zerar() {
    atual.current = placarZerado
    setPlacar(placarZerado)
    setPontos([])
  }

  const estrategias = [
    { nome: 'Sempre ficar', cor: 'var(--color-coral)', vitorias: placar.vitoriasFicando },
    { nome: 'Sempre trocar', cor: 'var(--color-azul)', vitorias: placar.vitoriasTrocando },
    { nome: 'Cara ou coroa', cor: 'var(--color-amarelo-escuro)', vitorias: placar.vitoriasMoeda },
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Simulador · o computador joga por você</p>

      {/* No celular, cada estratégia é uma linha; no computador, três cartões lado a lado */}
      <div className="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-3" aria-live="polite">
        {estrategias.map((e) => (
          <div key={e.nome} className="flex items-center justify-between gap-3 rounded-2xl bg-fundo px-4 py-3 sm:block sm:p-4">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full" style={{ background: e.cor }} />
              {e.nome}
            </p>
            <div className="text-right sm:text-left">
              <p className="font-serif text-2xl font-medium sm:mt-1 sm:text-4xl">{pct(e.vitorias, placar.rodadas)}</p>
              <p className="text-xs text-suave sm:text-sm">{formatar(e.vitorias)} de {formatar(placar.rodadas)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5"><GraficoConvergencia pontos={pontos} /></div>

      <p className="mt-4 text-sm text-suave">Jogar mais:</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {pacotes.map((n) => (
          <button
            key={n}
            type="button"
            disabled={rodando}
            onClick={() => jogar(n)}
            aria-label={`Jogar mais ${formatar(n)} ${n === 1 ? 'rodada' : 'rodadas'}`}
            className="min-h-11 whitespace-nowrap rounded-full bg-azul-texto px-2 font-semibold text-white transition hover:brightness-110 disabled:opacity-50"
          >
            +{formatar(n)}
          </button>
        ))}
      </div>
      <button
        type="button"
        disabled={rodando || placar.rodadas === 0}
        onClick={zerar}
        className="mt-2 min-h-11 w-full rounded-full font-semibold text-suave transition hover:text-texto disabled:opacity-40"
      >
        Zerar e começar de novo
      </button>
    </div>
  )
}
