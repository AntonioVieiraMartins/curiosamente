import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  // O MDX precisa rodar antes do React para transformar os arquivos .mdx em componentes
  plugins: [{ enforce: 'pre', ...mdx() }, react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }), tailwindcss()],
  // Porta fixa: a 5173 já é usada por outro programa do dono, e o Supabase precisa saber o endereço exato
  server: { port: 5180, strictPort: true },
  preview: { port: 5180, strictPort: true },
})
