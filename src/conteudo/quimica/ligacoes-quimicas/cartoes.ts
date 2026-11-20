import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Ligações químicas (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'regra', frente: 'O que é a regra do octeto?', verso: 'Os átomos tendem a ficar com 8 elétrons na última camada (2 para o hidrogênio), como os gases nobres.' },
  { tipo: 'regra', frente: 'Que ligação forma metal + ametal?', verso: 'Iônica: o metal doa elétrons, o ametal recebe, e os íons se atraem.' },
  { tipo: 'regra', frente: 'Que ligação forma ametal + ametal?', verso: 'Covalente: compartilhamento de pares de elétrons.' },
  { tipo: 'regra', frente: 'Que ligação forma metal + metal?', verso: 'Metálica: átomos num mar de elétrons livres.' },
  { tipo: 'conta', frente: 'Quantas ligações fazem H, O, N e C?', verso: 'H: 1. O: 2. N: 3. C: 4.' },
  { tipo: 'regra', frente: 'Como achar a fórmula de um composto iônico?', verso: 'As cargas somam zero. Ex.: Mg²⁺ + 2 Cl⁻ = MgCl₂; Al³⁺ e O²⁻ = Al₂O₃.' },
  { tipo: 'regra', frente: 'Propriedades dos compostos iônicos?', verso: 'Ponto de fusão alto, duros e quebradiços, conduzem só fundidos ou dissolvidos.' },
  { tipo: 'regra', frente: 'Propriedades dos compostos covalentes moleculares?', verso: 'Pontos de fusão e ebulição baixos, em geral não conduzem eletricidade.' },
  { tipo: 'regra', frente: 'Propriedades dos metais?', verso: 'Conduzem eletricidade e calor, são maleáveis e dúcteis e têm brilho.' },
  { tipo: 'definição', frente: 'O que é eletronegatividade?', verso: 'A tendência de um átomo de puxar os elétrons de uma ligação (escala de Pauling).' },
  { tipo: 'conta', frente: 'Como usar a diferença de eletronegatividade?', verso: 'Menos de 0,4: apolar. De 0,4 a 1,7: polar. A partir de 1,7: iônica (regra prática).' },
  { tipo: 'por quê', frente: 'Por que o sal sólido não conduz e dissolvido conduz?', verso: 'No sólido, os íons estão presos. Dissolvidos, ficam livres para se mover.' },
  { tipo: 'por quê', frente: 'Por que o metal dobra e o sal quebra?', verso: 'No metal, as camadas deslizam no mar de elétrons. No sal, íons iguais se aproximam e se repelem.' },
  { tipo: 'pegadinha', frente: 'Diamante e grafite são de elementos diferentes?', verso: 'Não, os dois são só carbono. Mudam as ligações: rede 3D rígida no diamante e folhas planas no grafite.' },
  { tipo: 'história', frente: 'Quem propôs a ligação por pares de elétrons?', verso: 'Gilbert Lewis, em 1916. Kossel propôs a transferência no mesmo ano.' },
  { tipo: 'história', frente: 'Quem criou a escala de eletronegatividade?', verso: 'Linus Pauling, em 1932 (Nobel de Química de 1954).' },
]

export default cartoes
