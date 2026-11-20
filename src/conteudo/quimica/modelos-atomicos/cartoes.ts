import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Modelos atômicos
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um modelo científico?', verso: 'Uma representação simplificada que explica o que se observa e prevê o que ainda não foi medido. Não é a realidade em si.' },
  { tipo: 'regra', frente: 'Modelo de Dalton (1808)?', verso: 'Átomo como esfera maciça e indivisível, uma por elemento. Reações só reorganizam átomos.' },
  { tipo: 'regra', frente: 'Modelo de Thomson?', verso: 'Esfera positiva com elétrons dentro: o "pudim de passas". Veio depois da descoberta do elétron (1897).' },
  { tipo: 'regra', frente: 'O que mostrou o experimento da folha de ouro (1909)?', verso: 'A maioria das alfa passa, algumas desviam e cerca de 1 em 8.000 volta: o átomo tem um núcleo pequeno, denso e positivo.' },
  { tipo: 'regra', frente: 'Modelo de Rutherford (1911)?', verso: 'Núcleo minúsculo e positivo no centro, elétrons em volta. Átomo quase todo vazio.' },
  { tipo: 'por quê', frente: 'Qual problema tinha o modelo de Rutherford?', verso: 'Pela física clássica o elétron perderia energia e cairia no núcleo; também não explicava as cores emitidas.' },
  { tipo: 'regra', frente: 'Modelo de Bohr (1913)?', verso: 'Elétrons em níveis (órbitas) de energia fixa. A luz sai quando o elétron pula para um nível mais baixo.' },
  { tipo: 'conta', frente: 'Energia do nível n do hidrogênio?', verso: 'E(n) = −13,6 eV ÷ n².' },
  { tipo: 'conta', frente: 'Energia do fóton num salto do elétron?', verso: 'ΔE = diferença entre os dois níveis. E λ (nm) ≈ 1.240 ÷ ΔE (eV).' },
  { tipo: 'regra', frente: 'Quantos elétrons cabem na camada n?', verso: 'No máximo 2n²: 2, 8, 18, 32...' },
  { tipo: 'definição', frente: 'O que é um orbital?', verso: 'Região onde é muito provável encontrar um elétron (modelo quântico, 1926). Cabe no máximo 2 elétrons.' },
  { tipo: 'por quê', frente: 'Por que cada elemento tem uma cor de chama?', verso: 'Cada elemento tem seus níveis de energia, e a luz emitida nos saltos tem cores próprias.' },
  { tipo: 'história', frente: 'Quem descobriu o elétron e quem descobriu o nêutron?', verso: 'Thomson (1897) o elétron; Chadwick (1932) o nêutron.' },
  { tipo: 'história', frente: 'Quem fez o experimento da folha de ouro?', verso: 'Geiger e Marsden (1909), no laboratório de Rutherford, que interpretou o resultado em 1911.' },
  { tipo: 'regra', frente: 'Por que a ciência troca de modelo?', verso: 'Quando surge um fato que o modelo antigo não explica. O novo modelo mantém o que o antigo explicava.' },
]

export default cartoes
