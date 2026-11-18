import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Razão e proporção (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma razão e o que importa nela?', verso: 'Uma comparação por divisão. O que importa é a relação, não o tamanho: uma TV 16 : 9 tem esse formato em qualquer tamanho.' },
  { tipo: 'definição', frente: 'O que é uma proporção e como conferi-la?', verso: 'Uma igualdade de razões. Confere-se pelo produto cruzado: a/b = c/d quando a × d = b × c (3/4 = 15/20: 3 × 20 = 4 × 15).' },
  { tipo: 'conta', frente: '3/4 = x/20. Quanto vale x?', verso: '15. Do 4 para o 20 multiplicou por 5, então 3 × 5 = 15.' },
  { tipo: 'definição', frente: 'O que é uma taxa? Dê exemplos.', verso: 'Uma razão com unidade: km/h (240 km em 3 h = 80 km/h), reais por litro, pessoas por km², km por litro.' },
  { tipo: 'problema', frente: '2 L de suco por R$ 9 ou 3 L por R$ 12: qual compensa?', verso: 'A de 3 L: R$ 4,00 por litro contra R$ 4,50. Custa mais no total, mas é mais barata por litro.' },
  { tipo: 'regra', frente: 'Como funciona a regra de três?', verso: 'Descubra quanto vale 1 e multiplique. 3 kg de farinha fazem 60 pães: 1 kg faz 20, então 5 kg fazem 100. (Ou 3/60 = 5/x → x = 100.)' },
  { tipo: 'regra', frente: 'Como distinguir grandezas diretas e inversas?', verso: 'Direta: uma dobra, a outra dobra (mais quilos, mais caro). Inversa: uma dobra, a outra cai pela metade (mais pintores, menos dias).' },
  { tipo: 'conta', frente: '6 pintores pintam a casa em 10 dias. Em quantos dias 4 pintores?', verso: '15 dias. Inversa: o trabalho total é 6 × 10 = 60 dias de pintor; 60 ÷ 4 = 15.' },
  { tipo: 'conta', frente: '4 pintores, 2 paredes, 6 h. Quanto tempo para 8 pintores e 6 paredes?', verso: '9 horas. Regra de três composta: 6 × (6/2) × (4/8) = 9. Paredes triplicam o tempo (18 h) e pintores dobrados o dividem por 2.' },
  { tipo: 'conta', frente: 'Divida R$ 1.000 de lucro entre Ana (R$ 3.000 investidos) e Bruno (R$ 2.000).', verso: 'Razão 3 : 2, 5 partes de R$ 200. Ana R$ 600 e Bruno R$ 400 (soma 1.000).' },
  { tipo: 'regra', frente: 'Como dividir algo em partes proporcionais?', verso: 'Some as partes, ache o valor de cada uma e distribua conforme a razão.' },
  { tipo: 'regra', frente: 'O que acontece com área e volume ao multiplicar as medidas por k?', verso: 'A área é multiplicada por k² e o volume por k³. Por isso a escala de uma pizza ou de uma maquete engana.' },
  { tipo: 'pegadinha', frente: 'Tudo na vida é proporcional?', verso: 'Não. Muita coisa não é direta nem inversa; antes de aplicar a regra de três, confira o tipo de relação.' },
  { tipo: 'problema', frente: 'Como se calcula a dose de um remédio infantil?', verso: 'Costuma ser por peso, em miligramas por quilo (uma taxa). Sempre siga a orientação médica.' },
  { tipo: 'história', frente: 'O que se conta sobre Tales e Eratóstenes?', verso: 'Tales mediu a altura de uma pirâmide pela sombra (c. 600 a.C.). Eratóstenes calculou o tamanho da Terra com uma proporção entre um ângulo e uma distância (c. 230 a.C.).' },
  { tipo: 'história', frente: 'Quem organizou a teoria das proporções e de onde vem a regra de três?', verso: 'Euclides, no livro V dos Elementos (c. 300 a.C.), atribuída a Eudoxo. A regra de três já era usada na China antes do século II e virou a "regra de ouro" dos comerciantes europeus.' },
]

export default cartoes
