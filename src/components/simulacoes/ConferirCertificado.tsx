import { useState } from 'react'
import { cartao } from '../ui/estilos'

// O navegador confere, em ordem: nome, validade e quem assinou. Falhou um, aparece o aviso.
export default function ConferirCertificado() {
  const [nomeCerto, setNomeCerto] = useState(true)
  const [naValidade, setNaValidade] = useState(true)
  const [emissorConfiavel, setEmissorConfiavel] = useState(true)

  const resultado = !nomeCerto ? 'O certificado é de outro site. Aviso: o nome não confere.'
    : !naValidade ? 'O certificado venceu (passou da data "Not After"). Aviso: certificado expirado.'
    : !emissorConfiavel ? 'Quem assinou não está na lista de confiança do navegador. Aviso: emissor desconhecido.'
    : 'Tudo certo: o cadeado aparece e a conversa é criptografada.'
  const ok = nomeCerto && naValidade && emissorConfiavel

  const linha = (rotulo: string, valor: boolean, set: (v: boolean) => void, sim: string, nao: string) => (
    <button type="button" aria-pressed={valor} onClick={() => set(!valor)}
      className={`flex min-h-11 w-full items-center justify-between gap-2 rounded-xl border-2 px-3 py-1 text-left text-[15px] ${valor ? 'border-borda' : 'border-coral'}`}>
      <span><strong>{rotulo}:</strong> {valor ? sim : nao}</span><span aria-hidden="true">{valor ? '✓' : '✗'}</span>
    </button>
  )

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O certificado de exemplo.com</p>
      <p className="mt-1 text-[15px] text-suave">Toque numa linha para estragar ou consertar o certificado.</p>
      <div className="mt-2 space-y-2">
        {linha('Para quem', nomeCerto, setNomeCerto, 'exemplo.com (o site visitado)', 'outro-site.com (diferente do visitado)')}
        {linha('Validade', naValidade, setNaValidade, 'ainda dentro do prazo', 'prazo vencido')}
        {linha('Assinado por', emissorConfiavel, setEmissorConfiavel, 'uma autoridade de confiança', 'ninguém conhecido (auto-assinado)')}
      </div>
      <p aria-live="polite" className={`mt-3 rounded-2xl p-4 text-[15px] ${ok ? 'bg-verde text-white' : 'bg-amarelo'}`}>{resultado}</p>
    </div>
  )
}
