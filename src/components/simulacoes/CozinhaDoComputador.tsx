import { useState } from 'react'
import { cartao } from '../ui/estilos'

const papeis = [
  { peca: 'Disco', cozinha: 'Despensa', texto: 'guarda tudo, mesmo com o computador desligado. É grande, mas buscar algo lá demora.' },
  { peca: 'Memória RAM', cozinha: 'Bancada', texto: 'guarda só o que está em uso agora. É rápida, mas é pequena e esvazia quando desliga.' },
  { peca: 'CPU', cozinha: 'Cozinheiro', texto: 'faz as contas e as decisões, uma instrução depois da outra, bilhões de vezes por segundo.' },
]

const passos = [
  { de: 0, texto: 'Você clica no jogo. O programa está guardado no disco (a despensa).' },
  { de: 1, texto: 'O sistema copia o que precisa para a RAM (a bancada), para ficar ao alcance.' },
  { de: 2, texto: 'A CPU (o cozinheiro) pega as instruções na RAM e executa.' },
  { de: 1, texto: 'O resultado volta para a RAM, e a tela mostra o jogo.' },
  { de: 0, texto: 'Ao salvar, a RAM manda o que importa de volta para o disco.' },
]

// Mostra o caminho de um programa: disco → RAM → CPU → RAM → disco, passo a passo.
export default function CozinhaDoComputador() {
  const [i, setI] = useState(0)
  const atual = passos[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A cozinha do computador</p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {papeis.map((p, k) => (
          <div key={p.peca} className={`rounded-2xl border-2 p-2 sm:p-3 ${atual.de === k ? 'border-amarelo-escuro bg-amarelo' : 'border-borda bg-fundo text-suave'}`}>
            <strong className="block text-sm sm:text-base">{p.cozinha}</strong>
            <span className="text-xs sm:text-sm">{p.peca}</span>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>Passo {i + 1} de {passos.length}.</strong> {atual.texto}
      </p>
      <p className="mt-2 text-[15px] text-suave"><strong>{papeis[atual.de].cozinha}:</strong> {papeis[atual.de].texto}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-6 font-semibold text-white disabled:opacity-40" disabled={i >= passos.length - 1} onClick={() => setI(i + 1)}>Próximo passo</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setI(0)}>Recomeçar</button>
      </div>
    </div>
  )
}
