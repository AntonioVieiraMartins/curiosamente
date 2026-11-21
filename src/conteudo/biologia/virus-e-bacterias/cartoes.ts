import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Vírus e bactérias (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma bactéria?', verso: 'Ser vivo de uma célula só, sem núcleo (procarionte), com parede celular. Se reproduz por divisão.' },
  { tipo: 'definição', frente: 'O que é um vírus?', verso: 'Partícula com material genético (DNA ou RNA) dentro de uma capa de proteína. Não é célula e só se multiplica dentro de uma célula hospedeira.' },
  { tipo: 'pegadinha', frente: 'Vírus é um ser vivo?', verso: 'Os cientistas discutem. Ele tem genes e evolui, mas não tem metabolismo próprio nem se reproduz fora de uma célula.' },
  { tipo: 'regra', frente: 'Qual o tamanho típico de bactérias e vírus?', verso: 'Bactérias: cerca de 1 a 5 micrômetros. Vírus: dezenas a centenas de nanômetros, cerca de 10 a 100 vezes menores.' },
  { tipo: 'conta', frente: 'Quanto vale 1 micrômetro em nanômetros?', verso: '1 micrômetro = 1.000 nanômetros.' },
  { tipo: 'regra', frente: 'Como as bactérias se multiplicam?', verso: 'Por divisão binária: uma vira duas, e o número dobra a cada geração (até 20 minutos em boas condições).' },
  { tipo: 'regra', frente: 'Que doenças são causadas por bactérias? E por vírus?', verso: 'Bactérias: tuberculose, tétano, cólera. Vírus: gripe, resfriado, dengue, sarampo, Covid-19, HIV.' },
  { tipo: 'regra', frente: 'Antibiótico serve para gripe?', verso: 'Não. Antibióticos só agem em bactérias.' },
  { tipo: 'regra', frente: 'Como é o ciclo lítico?', verso: 'Encaixe, injeção, cópia, montagem e lise: a célula estoura e libera novos vírus.' },
  { tipo: 'regra', frente: 'Como é o ciclo lisogênico?', verso: 'O DNA do vírus se esconde no da célula e é copiado junto com ela. Mais tarde pode acordar e virar lítico.' },
  { tipo: 'por quê', frente: 'Por que há bactérias úteis?', verso: 'Decompõem restos, fixam nitrogênio, ajudam na digestão, fazem iogurte e queijo e fabricam remédios, como a insulina.' },
  { tipo: 'conta', frente: 'O que o R0 mede?', verso: 'Quantas pessoas, em média, um doente contagia numa população sem imunidade.' },
  { tipo: 'conta', frente: 'Como se calcula o limite da imunidade coletiva?', verso: '1 menos 1/R0. Com R0 = 4, são 75% de imunes.' },
  { tipo: 'história', frente: 'O que fez Semmelweis em 1847?', verso: 'Mostrou que médicos lavando as mãos antes dos partos reduziam muito as mortes por febre puerperal.' },
  { tipo: 'história', frente: 'Como a varíola foi eliminada?', verso: 'Com vacinação em massa. Jenner criou a vacina em 1796, e a OMS declarou a doença erradicada em 1980.' },
]

export default cartoes
