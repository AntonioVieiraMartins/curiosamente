import { useState } from 'react'
import Contador from './Contador'
import Tira from './Tira'
import { cartao } from '../ui/estilos'
import { escrever, mmc } from '../../lib/fracoes'

type Fracao = { cima: number; baixo: number }
const MAX = 8

function Escolha({ f, mudar, nome }: { f: Fracao; mudar: (f: Fracao) => void; nome: string }) {
  return (
    <div className="space-y-2">
      <p className="text-center font-serif text-2xl font-medium">{f.cima}/{f.baixo}</p>
      <Contador grupo={nome} rotulo="Em cima" valor={f.cima} min={0} max={f.baixo} mudar={(v) => mudar({ ...f, cima: v })} />
      <Contador grupo={nome} rotulo="Embaixo" valor={f.baixo} min={1} max={MAX} mudar={(v) => mudar({ baixo: v, cima: Math.min(f.cima, v) })} />
    </div>
  )
}

// Somar e subtrair frações: só dá para juntar pedaços depois de cortar tudo no mesmo tamanho
export default function SomaDeFracoes() {
  const [a, setA] = useState<Fracao>({ cima: 1, baixo: 2 })
  const [b, setB] = useState<Fracao>({ cima: 1, baixo: 3 })
  const [sinal, setSinal] = useState<'+' | '−'>('+')
  const [cortar, setCortar] = useState(false)

  const m = mmc(a.baixo, b.baixo)
  const na = a.cima * (m / a.baixo)
  const nb = b.cima * (m / b.baixo)
  const resultado = sinal === '+' ? na + nb : na - nb
  const errado = `${sinal === '+' ? a.cima + b.cima : a.cima - b.cima}/${a.baixo + b.baixo}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Juntando pedaços</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Escolha f={a} mudar={setA} nome="1ª fração" />
        <Escolha f={b} mudar={setB} nome="2ª fração" />
      </div>
      <div className="mt-3 flex justify-center gap-2" role="group" aria-label="Operação">
        {(['+', '−'] as const).map((s) => (
          <button key={s} type="button" aria-pressed={sinal === s} aria-label={s === '+' ? 'Somar' : 'Subtrair'} onClick={() => setSinal(s)}
            className={`size-11 rounded-full border-2 text-xl font-semibold ${sinal === s ? 'border-azul bg-azul-claro text-azul-texto' : 'border-borda'}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        <Tira partes={cortar ? m : a.baixo} pintadas={cortar ? na : a.cima} cor="var(--color-coral)" rotulo={cortar ? `${a.cima}/${a.baixo} = ${na}/${m}` : `${a.cima}/${a.baixo}`} />
        <Tira partes={cortar ? m : b.baixo} pintadas={cortar ? nb : b.cima} cor="var(--color-azul)" rotulo={cortar ? `${b.cima}/${b.baixo} = ${nb}/${m}` : `${b.cima}/${b.baixo}`} />
      </div>

      <button type="button" onClick={() => setCortar((c) => !c)} aria-pressed={cortar}
        className="mt-4 min-h-11 rounded-full border border-borda px-5 font-semibold hover:border-texto/30">
        {cortar ? 'Voltar aos pedaços originais' : `Cortar tudo em ${m} pedaços iguais`}
      </button>

      <div aria-live="polite" className="mt-4 space-y-3 rounded-2xl bg-fundo p-4">
        {!cortar ? (
          <p>Os pedaços têm tamanhos diferentes, então ainda não dá para juntar. Corte tudo no mesmo tamanho.</p>
        ) : resultado < 0 ? (
          <p>A segunda é maior que a primeira: o resultado fica negativo ({na}/{m} − {nb}/{m} = −{nb - na}/{m}). Os negativos têm uma cápsula própria.</p>
        ) : (
          <>
            {resultado > 0 && <Tira partes={m} pintadas={resultado} inteiros={Math.max(1, Math.ceil(resultado / m))} cor="var(--color-verde)" rotulo="Resultado" />}
            <p>
              {na}/{m} {sinal} {nb}/{m} = <strong>{resultado}/{m}</strong>
              {escrever(resultado, m, true) !== `${resultado}/${m}` && <> = <strong className="text-verde">{escrever(resultado, m, true)}</strong></>}
            </p>
          </>
        )}
        <p className="text-[15px] text-suave">
          O erro comum seria fazer em cima com em cima e embaixo com embaixo: <span className="line-through">{errado}</span>.
        </p>
      </div>
    </div>
  )
}
