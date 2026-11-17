// Cliente do Supabase (login e banco de dados).
// Usa só a chave PÚBLICA (anon / publishable). A chave service_role NUNCA vem para cá.
// Sem as variáveis no .env.local, o app continua funcionando no modo visitante.
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const chavePublica = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const supabase: SupabaseClient | null = url && chavePublica ? createClient(url, chavePublica) : null

export const supabaseConfigurado = supabase !== null
