import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { buscarConquista } from '../../conteudo/conquistas'
import { dispensarConquista, useNovaConquista } from '../../lib/conquistasLocal'

// Aviso discreto no alto da tela quando uma medalha nova é ganha; some sozinho depois de alguns segundos
export default function AvisoConquista() {
  const id = useNovaConquista()
  const conquista = id ? buscarConquista(id) : undefined

  useEffect(() => {
    if (!id) return
    const t = window.setTimeout(dispensarConquista, 5000)
    return () => window.clearTimeout(t)
  }, [id])

  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-20 z-30 flex justify-center px-4">
      {conquista && (
        <Link
          key={id}
          to="/perfil"
          onClick={dispensarConquista}
          className="pointer-events-auto flex items-center gap-3 rounded-full bg-superficie py-2 pl-2 pr-5 shadow-cartao ring-1 ring-borda"
        >
          <span className="grid size-10 place-items-center rounded-full bg-amarelo text-lg font-bold" aria-hidden="true">★</span>
          <span className="leading-tight">
            <span className="block text-xs text-suave">Conquista desbloqueada</span>
            <span className="font-semibold">{conquista.nome}</span>
          </span>
        </Link>
      )}
    </div>
  )
}
