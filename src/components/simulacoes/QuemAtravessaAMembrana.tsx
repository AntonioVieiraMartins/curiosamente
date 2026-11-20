import { useState } from 'react'
import { cartao } from '../ui/estilos'

const vias = ['Direto pela gordura', 'Por uma proteína-portão', 'Bomba com gasto de ATP']

const itens = [
  { nome: 'Oxigênio (O₂) entrando', via: 0, porque: 'É uma molécula pequena e sem carga. Passa entre as gorduras da membrana sem ajuda (difusão simples).' },
  { nome: 'Testosterona (um hormônio de gordura)', via: 0, porque: 'É feita de gordura, então atravessa a camada de gordura da membrana com facilidade.' },
  { nome: 'Glicose entrando na hemácia', via: 1, porque: 'A glicose é grande e tem muitas ligações com água. Precisa de uma proteína transportadora, a favor da concentração e sem gastar ATP (difusão facilitada).' },
  { nome: 'Água entrando na hemácia, bem rápido', via: 1, porque: 'Um pouco de água atravessa direto, mas a maior parte passa por proteínas-canal chamadas aquaporinas.' },
  { nome: 'Sódio (Na⁺) saindo da célula', via: 2, porque: 'Há mais sódio fora do que dentro. Tirar mais sódio é ir contra a concentração, e isso exige uma bomba que gasta ATP.' },
  { nome: 'Potássio (K⁺) entrando, contra a corrente', via: 2, porque: 'O potássio já é mais concentrado dentro. Colocar mais é ir contra a concentração, e só a bomba de sódio e potássio, com ATP, consegue.' },
]

// Para cada substância, o jogador escolhe por qual "porta" ela atravessa a membrana
export default function QuemAtravessaAMembrana() {
  const [i, setI] = useState(0)
  const [escolha, setEscolha] = useState<number | null>(null)
  const [acertos, setAcertos] = useState(0)
  const fim = i >= itens.length
  const item = itens[Math.min(i, itens.length - 1)]

  function escolher(v: number) {
    if (escolha !== null) return
    setEscolha(v)
    if (v === item.via) setAcertos((a) => a + 1)
  }
  function proximo() {
    setEscolha(null)
    setI((x) => x + 1)
  }
  function recomecar() {
    setI(0)
    setEscolha(null)
    setAcertos(0)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Por onde atravessa?</p>
      {fim ? (
        <div className="mt-3">
          <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>Você acertou {acertos} de {itens.length}.</strong> A regra é: pequeno e de gordura passa direto; grande ou com carga precisa de proteína; contra a corrente exige bomba e ATP.</p>
          <button type="button" onClick={recomecar} className="mt-3 min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Jogar de novo</button>
        </div>
      ) : (
        <>
          <p className="mt-3 text-[16px] font-semibold">{i + 1}. {item.nome}</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row" role="group" aria-label="Via de transporte">
            {vias.map((v, k) => {
              const certa = escolha !== null && k === item.via
              const errada = escolha === k && k !== item.via
              return (
                <button key={v} type="button" onClick={() => escolher(k)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${certa ? 'border-verde bg-verde/15' : errada ? 'border-coral bg-coral/15' : 'border-borda bg-superficie'}`}>{v}</button>
              )
            })}
          </div>
          {escolha !== null && (
            <div aria-live="polite" className="mt-3">
              <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>{escolha === item.via ? 'Isso!' : 'Quase.'}</strong> {item.porque}</p>
              <button type="button" onClick={proximo} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{i + 1 < itens.length ? 'Próxima' : 'Ver resultado'}</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
