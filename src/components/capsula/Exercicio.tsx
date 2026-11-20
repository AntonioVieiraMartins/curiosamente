import { useId, useState, type FormEvent } from 'react'
import { tocar } from '../../lib/sons'
import { lerNumero, mesmoNumero } from '../../lib/numeros'
import { codigoDe } from '../../lib/cartoes'
import { useCapsula } from './ContextoCapsula'
import BotaoGuardarCartao from './BotaoGuardarCartao'

type Props = {
  enunciado: string
  resposta: string // ex.: "3/8"; vale qualquer forma com o mesmo valor (0,375 também)
  dica?: string
  resolucao: string
  unidade?: string // aparece ao lado da caixa, ex.: "ovos"
}

type Estado = 'respondendo' | 'errou' | 'acertou'

// Exercício de treino com resposta digitada. Errar só mostra uma dica: não tira XP nem trava nada.
export default function Exercicio({ enunciado, resposta, dica, resolucao, unidade }: Props) {
  const [texto, setTexto] = useState('')
  const [estado, setEstado] = useState<Estado>('respondendo')
  const [verResolucao, setVerResolucao] = useState(false)
  const [naoEntendi, setNaoEntendi] = useState(false)
  const id = useId()
  const { meta } = useCapsula()
  const certa = lerNumero(resposta)

  function conferir(e: FormEvent) {
    e.preventDefault()
    const valor = lerNumero(texto)
    if (valor === null || certa === null) {
      setNaoEntendi(true)
      return
    }
    setNaoEntendi(false)
    const ok = mesmoNumero(valor, certa)
    tocar(ok ? 'acerto' : 'erro')
    setEstado(ok ? 'acertou' : 'errou')
  }

  const mostrarResolucao = estado === 'acertou' || verResolucao

  return (
    <div data-sem-narracao className="rounded-2xl border-2 border-borda bg-superficie p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Exercício</p>
      <form onSubmit={conferir} className="mt-2">
        <label htmlFor={id} className="block font-semibold">{enunciado}</label>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <input
            id={id}
            inputMode="text"
            autoComplete="off"
            value={texto}
            onChange={(e) => { setTexto(e.target.value); if (estado === 'errou') setEstado('respondendo') }}
            disabled={estado === 'acertou'}
            className="h-12 w-36 rounded-xl border-2 border-borda bg-fundo px-3 text-[17px] font-semibold focus:border-azul focus:outline-none"
            placeholder="sua resposta"
          />
          {unidade && <span className="text-suave">{unidade}</span>}
          {estado !== 'acertou' && (
            <button type="submit" className="h-12 rounded-full bg-texto px-5 font-semibold text-white">Conferir</button>
          )}
        </div>
      </form>

      <div aria-live="polite" className="mt-3 space-y-2">
        {naoEntendi && <p className="text-[15px] text-suave">Não entendi o número. Tente algo como 3/8, 0,5 ou 1 1/2.</p>}
        {estado === 'acertou' && <p className="font-semibold text-verde">Certo!</p>}
        {estado === 'errou' && (
          <p className="text-[15px]">
            <strong className="text-coral">Ainda não.</strong> {dica ?? 'Confira a conta e tente de novo.'}
          </p>
        )}
        {estado === 'errou' && !verResolucao && (
          <button type="button" onClick={() => setVerResolucao(true)} className="min-h-11 font-semibold text-azul-texto hover:underline">
            Ver a resolução
          </button>
        )}
        {mostrarResolucao && <p className="rounded-xl bg-fundo p-3 text-[15px]">{resolucao}</p>}
        {mostrarResolucao && (
          <BotaoGuardarCartao
            id={`${meta.id}:e:${codigoDe(enunciado)}`}
            capsulaId={meta.id}
            frente={enunciado}
            verso={`Resposta: ${resposta}${unidade ? ` ${unidade}` : ''}. ${resolucao}`}
          />
        )}
      </div>
    </div>
  )
}
