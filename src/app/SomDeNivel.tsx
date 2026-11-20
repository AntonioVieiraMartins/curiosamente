import { useEffect, useRef } from 'react'
import { useConta } from '../lib/conta'
import { tocar } from '../lib/sons'
import { calcularNivel } from '../lib/xp'
import { useXpLocal } from '../lib/xpLocal'

// Toca um som quando o nível sobe. Não toca ao carregar a página nem ao entrar na conta,
// só quando o nível aumenta enquanto a pessoa está usando o app.
export default function SomDeNivel() {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()
  const nivel = usuario ? perfil?.nivel : calcularNivel(xpVisitante)
  const antes = useRef<{ dono: string; nivel: number } | null>(null)
  const dono = usuario ? usuario.id : 'visitante'

  useEffect(() => {
    if (nivel === undefined) return // perfil ainda carregando
    const a = antes.current
    if (a && a.dono === dono && nivel > a.nivel) tocar('nivel')
    antes.current = { dono, nivel }
  }, [nivel, dono])

  return null
}
