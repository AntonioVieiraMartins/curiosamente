import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Lado = 'front' | 'back'

const itens: { texto: string; lado: Lado; porque: string }[] = [
  { texto: 'A cor do botão "Comprar"', lado: 'front', porque: 'Aparência é apresentação: é o front-end.' },
  { texto: 'Conferir se a senha digitada está certa', lado: 'back', porque: 'Quem decide é o servidor, que consulta o que está guardado. O navegador não é confiável para isso.' },
  { texto: 'O menu que abre com um toque', lado: 'front', porque: 'É interação na tela, feita no navegador.' },
  { texto: 'Guardar o pedido para sempre', lado: 'back', porque: 'Guardar dados é com o back-end e o banco de dados.' },
  { texto: 'Calcular o frete pelo CEP', lado: 'back', porque: 'Regra de negócio e tabelas de preço ficam no servidor.' },
  { texto: 'A animação do carrinho ao adicionar um item', lado: 'front', porque: 'Movimento na tela é front-end.' },
  { texto: 'Baixar o estoque depois da compra', lado: 'back', porque: 'O estoque é um dado compartilhado por todos, então só o servidor mexe nele.' },
  { texto: 'Mostrar uma mensagem de "campo obrigatório"', lado: 'front', porque: 'Aviso rápido na tela é front-end. (O back-end confere de novo, por segurança.)' },
]

// Quiz de toque: cada item pertence ao salão (front-end) ou à cozinha (back-end).
export default function ClassificaLado() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<Lado | null>(null)
  const [acertos, setAcertos] = useState(0)
  const fim = i >= itens.length
  const it = itens[i]

  const escolher = (l: Lado) => {
    if (resp) return
    setResp(l)
    if (l === it.lado) setAcertos((n) => n + 1)
  }
  const proximo = () => { setResp(null); setI((n) => n + 1) }

  if (fim) {
    return (
      <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
        <p className="font-semibold">Você acertou {acertos} de {itens.length}.</p>
        <button type="button" onClick={() => { setI(0); setAcertos(0); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Jogar de novo</button>
      </div>
    )
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Item {i + 1} de {itens.length}</p>
      <p className="mt-2 text-lg font-semibold">{it.texto}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => escolher('front')} className="min-h-11 rounded-xl border-2 border-azul px-3 font-semibold">Salão (front-end)</button>
        <button type="button" onClick={() => escolher('back')} className="min-h-11 rounded-xl border-2 border-verde px-3 font-semibold">Cozinha (back-end)</button>
      </div>
      {resp && (
        <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          <p className="font-semibold">{resp === it.lado ? 'Certo!' : `Quase: o certo é ${it.lado === 'front' ? 'salão (front-end)' : 'cozinha (back-end)'}.`}</p>
          <p className="mt-1">{it.porque}</p>
          <button type="button" onClick={proximo} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">{i === itens.length - 1 ? 'Ver resultado' : 'Próximo'}</button>
        </div>
      )}
    </div>
  )
}
