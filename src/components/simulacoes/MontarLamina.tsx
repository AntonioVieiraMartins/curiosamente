import { useState } from 'react'
import { cartao } from '../ui/estilos'

const PASSOS = [
  { certo: 'Retire uma película fina da parte interna de uma escama de cebola', erradas: ['Coloque uma fatia grossa de cebola direto na lâmina', 'Ligue o microscópio no maior aumento'], porque: 'A amostra precisa ser fina para a luz atravessar.' },
  { certo: 'Coloque a película na lâmina com uma gota de água ou de corante (iodo)', erradas: ['Coloque a lâmina seca, sem nada', 'Cubra com a lamínula antes de pôr a amostra'], porque: 'A água mantém a célula e o corante realça o núcleo.' },
  { certo: 'Cubra com a lamínula, descendo-a inclinada para não prender bolhas de ar', erradas: ['Aperte a lamínula com força', 'Deixe a amostra descoberta'], porque: 'A lamínula achata e protege, e a inclinação evita bolhas.' },
  { certo: 'Comece com a objetiva de menor aumento e ache a amostra', erradas: ['Comece com a de 100×', 'Abaixe a objetiva olhando só pela ocular'], porque: 'O menor aumento tem o maior campo de visão: é mais fácil achar a amostra.' },
  { certo: 'Ajuste o foco com o botão macrométrico e, depois, com o micrométrico', erradas: ['Use só o micrométrico desde o começo', 'Aproxime a objetiva até encostar na lâmina'], porque: 'O macrométrico faz o ajuste grosso, o micrométrico o fino. Encostar na lâmina quebra tudo.' },
  { certo: 'Só então troque para uma objetiva maior e refine o foco', erradas: ['Troque para a de 100× sem focalizar antes', 'Tire a lâmina e comece de novo'], porque: 'Com a imagem focada no pequeno aumento, o foco nas objetivas maiores é só um refinamento.' },
]
// A ordem das opções é fixa (certa nem sempre em primeiro) para não depender de sorteio
const ordem = (i: number) => (i % 3 === 0 ? [0, 1, 2] : i % 3 === 1 ? [1, 0, 2] : [2, 1, 0])

// Preparar uma lâmina e usar o microscópio, na ordem certa
export default function MontarLamina() {
  const [passo, setPasso] = useState(0)
  const [msg, setMsg] = useState('')
  const p = PASSOS[passo]
  const opcoes = [p.certo, ...p.erradas]
  const concluido = passo >= PASSOS.length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Prepare a lâmina de cebola</p>
      {concluido ? (
        <div className="mt-3 rounded-2xl bg-verde/10 p-4 text-[15px]" aria-live="polite">
          <p className="font-semibold">Pronto! Você vê as células da cebola, com o núcleo corado.</p>
          <button type="button" onClick={() => { setPasso(0); setMsg('') }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Fazer de novo</button>
        </div>
      ) : (
        <>
          <p className="mt-2 text-sm text-suave">Passo {passo + 1} de {PASSOS.length}: qual é a ação correta?</p>
          <div className="mt-2 flex flex-col gap-2">
            {ordem(passo).map((k) => (
              <button key={opcoes[k]} type="button"
                onClick={() => { if (k === 0) { setMsg(`Certo. ${p.porque}`); setPasso(passo + 1) } else setMsg('Ainda não. Pense no que a luz precisa para atravessar e no cuidado com o vidro.') }}
                className="min-h-11 rounded-2xl border-2 border-borda px-4 py-2 text-left text-[15px] font-semibold hover:border-azul">{opcoes[k]}</button>
            ))}
          </div>
          <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{msg || 'Escolha uma opção.'}</p>
        </>
      )}
    </div>
  )
}
