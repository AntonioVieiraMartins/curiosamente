import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Estado = 'Esperando' | 'Rodando' | 'Bloqueado' | 'Terminado'

const info: Record<Estado, string> = {
  Esperando: 'Está na RAM, pronto, só aguardando o escalonador dar a vez.',
  Rodando: 'Está usando a CPU neste momento.',
  Bloqueado: 'Parou para esperar algo lento: teclado, arquivo, rede.',
  Terminado: 'Acabou, ou o sistema o encerrou. A memória dele é liberada.',
}

const saidas: Record<Estado, { texto: string; para: Estado }[]> = {
  Esperando: [{ texto: 'O escalonador dá a vez', para: 'Rodando' }],
  Rodando: [
    { texto: 'A fatia de tempo acabou', para: 'Esperando' },
    { texto: 'Pediu um arquivo ou tecla', para: 'Bloqueado' },
    { texto: 'Terminou o trabalho', para: 'Terminado' },
  ],
  Bloqueado: [{ texto: 'O que esperava chegou', para: 'Esperando' }],
  Terminado: [],
}

// Ciclo de vida de um processo: nasce esperando, roda, às vezes bloqueia, e termina.
export default function EstadosDoProcesso() {
  const [estado, setEstado] = useState<Estado>('Esperando')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A vida de um processo</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-amarelo p-4">
        Estado agora: <strong>{estado}</strong>
        <span className="mt-1 block text-[15px]">{info[estado]}</span>
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {saidas[estado].map((s) => (
          <button key={s.texto} type="button" className="min-h-11 rounded-full border-2 border-azul px-4 text-left font-semibold" onClick={() => setEstado(s.para)}>
            {s.texto} → {s.para}
          </button>
        ))}
        {estado === 'Terminado' && (
          <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setEstado('Esperando')}>Abrir o programa de novo</button>
        )}
      </div>
    </div>
  )
}
