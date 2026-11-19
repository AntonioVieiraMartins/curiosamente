# Cobertura da Matemática: BNCC contra as cápsulas do app

Atualizado em 19/11/2026, comparando as 247 habilidades do Ensino Fundamental e as 43 do Ensino Médio ([matematica.md](matematica.md)) com `src/conteudo/indice.ts`.

**Legenda:** **Pronta** = há cápsula pronta que trata do assunto · **Parcial** = pronta cobre só uma parte, ou o assunto aparece dentro de outra cápsula · **Planejada** = está no `indice.ts` como "em breve" · **Sem plano** = a BNCC pede e o app não tem cápsula nem plano.

**Limite desta conferência:** foi feita por tema, olhando o título, o gancho e uma busca de palavras nos textos das cápsulas. Não foi feita habilidade por habilidade. Onde está escrito "conferir", leia a cápsula antes de dar o assunto como coberto.

## Resumo

| Linha do app | Prontas | Planejadas | Assuntos da BNCC sem plano |
|---|---|---|---|
| Básica (1º ao 5º) | 11 | 0 | 6 |
| Fundamental (6º ao 9º) | 11 | 17 | 7 |
| Médio | 6 | 13 | 7 |

## Básica (1º ao 5º ano)

| Assunto (habilidades) | Situação | Cápsula |
|---|---|---|
| Números naturais e sistema decimal (`EF01MA01`–`05`, `EF02MA01`–`04`, `EF03MA01`–`02`, `EF04MA01`–`02`, `EF05MA01`) | Pronta | sistema-decimal |
| Adição e subtração (`EF01MA06`–`08`, `EF02MA05`–`06`, `EF03MA05`–`06`, `EF04MA03`–`05`) | Pronta | adicao-e-subtracao |
| Multiplicação, divisão e tabuada (`EF02MA07`–`08`, `EF03MA07`–`09`, `EF04MA06`–`07`, `EF04MA12`–`13`, `EF05MA08`) | Pronta | multiplicacao, divisao |
| Igualdade, número desconhecido (`EF03MA11`, `EF04MA14`–`15`, `EF05MA10`–`11`) | Parcial | expressoes-numericas (conferir a ideia de incógnita) |
| Decimais e dinheiro (`EF04MA10`, `EF05MA02`, `EF05MA05`, `EF05MA07`–`08`, `EF01MA19`, `EF02MA20`, `EF03MA24`, `EF04MA25`) | Pronta | numeros-decimais, dinheiro-e-troco |
| Tempo, relógio, calendário (`EF01MA16`–`18`, `EF02MA18`–`19`, `EF03MA22`–`23`, `EF04MA22`) | Pronta | tempo-e-horas |
| Comprimento, massa, capacidade, perímetro e área (`EF02MA16`–`17`, `EF03MA17`–`21`, `EF04MA20`–`21`, `EF05MA19`–`20`) | Pronta | medidas |
| Temperatura e grau Celsius (`EF04MA23`–`24`) | Sem plano | medidas não trata de temperatura |
| Volume por empilhamento de cubinhos (`EF05MA21`) | Sem plano | só o litro aparece em medidas; "volume" é do 8º ano (planejada) |
| Formas planas e espaciais, simetria de reflexão (`EF01MA13`–`14`, `EF02MA14`–`15`, `EF03MA13`–`15`, `EF04MA17`, `EF04MA19`, `EF05MA16`–`17`) | Pronta | formas-geometricas |
| Figuras congruentes (`EF03MA16`) e ângulos retos (`EF04MA18`) | Parcial | congruência não aparece; ângulos ficam em angulos (6º ano) |
| Tabelas, gráficos e pesquisa (`EF01MA21`–`22`, `EF02MA22`–`23`, `EF03MA26`–`28`, `EF04MA24`, `EF04MA27`–`28`, `EF05MA24`–`25`) | Pronta | tabelas-e-graficos |
| Frações unitárias, equivalentes e porcentagens simples (`EF04MA09`, `EF05MA03`–`06`) | Parcial | só fracoes e porcentagem, que são do 6º ano; falta a versão do 4º e 5º ano |
| Proporcionalidade e partilha (`EF05MA12`–`13`) | Parcial | razao-e-proporcao (7º ano) |
| Padrões e sequências (`EF01MA10`, `EF02MA09`–`11`, `EF03MA10`, `EF04MA11`) | Sem plano | |
| Localização, malhas, roteiros e plantas (`EF01MA11`–`12`, `EF02MA12`–`13`, `EF03MA12`, `EF04MA16`, `EF05MA14`) | Sem plano | o plano cartesiano (`EF05MA15`) está em plano-cartesiano |
| Acaso e probabilidade (`EF01MA20`, `EF02MA21`, `EF03MA25`, `EF04MA26`, `EF05MA22`–`23`) | Sem plano na Básica | probabilidade-simples está planejada para o 7º ano |
| Problemas de contagem (`EF04MA08`, `EF05MA09`) | Sem plano na Básica | contagem está planejada para o 8º ano |

## Fundamental (6º ao 9º ano)

| Assunto (habilidades) | Situação | Cápsula |
|---|---|---|
| Números e cálculo com naturais (`EF06MA01`–`03`) | Pronta | cobertas na Básica |
| Múltiplos, divisores, primos, critérios de divisibilidade (`EF06MA05`–`06`, `EF07MA01`) | Pronta | multiplos-e-divisores, numeros-primos |
| Frações e operações (`EF06MA07`–`11`, `EF06MA15`, `EF07MA08`–`12`) | Pronta | fracoes |
| Estimativas e aproximação (`EF06MA12`) | Parcial | conferir |
| Porcentagem, acréscimos e decréscimos (`EF06MA13`, `EF07MA02`, `EF08MA04`) | Pronta | porcentagem |
| Percentuais sucessivos (`EF09MA05`) | Parcial | conferir se porcentagem trata de descontos em sequência |
| Plano cartesiano, ponto médio e distância (`EF06MA16`, `EF09MA16`) | Pronta | plano-cartesiano |
| Ângulos, transferidor, paralelas e transversal, bissetriz e mediatriz (`EF06MA25`–`27`, `EF07MA23`, `EF09MA10`, `EF08MA15`, `EF08MA17`) | Pronta | angulos |
| Números inteiros (`EF07MA03`–`04`) | Pronta | numeros-negativos |
| Razão, proporção, grandezas direta e inversamente proporcionais, regra de três, velocidade e densidade (`EF07MA09`, `EF07MA17`, `EF08MA12`–`13`, `EF09MA07`–`08`) | Pronta | razao-e-proporcao |
| Potências (`EF08MA01`) | Pronta | potencias |
| Equações do 1º grau (`EF06MA14`, `EF07MA18`) | Pronta | equacoes-1-grau |
| Teorema de Pitágoras (`EF09MA13`–`14`) | Pronta | pitagoras |
| Linguagem algébrica, variável, expressões, valor numérico (`EF07MA13`, `EF07MA15`–`16`, `EF08MA06`) | Planejada | expressoes-algebricas |
| Polígonos, triângulos, quadriláteros, ângulos internos (`EF06MA18`–`20`, `EF07MA24`–`28`) | Planejada | poligonos |
| Circunferência, pi, construções com compasso (`EF07MA22`, `EF07MA33`) | Planejada | circunferencia-e-pi |
| Simetria e transformações (`EF07MA19`–`21`, `EF08MA18`) | Planejada | simetria |
| Probabilidade (`EF06MA30`, `EF07MA34`, `EF08MA22`, `EF09MA20`) | Planejada | probabilidade-simples |
| Média, mediana, moda (`EF07MA35`, `EF08MA25`) | Planejada | estatistica-basica (a Básica já ensina o básico) |
| Gráficos e pesquisas, amostragem (`EF06MA31`–`33`, `EF07MA36`–`37`, `EF08MA23`–`24`, `EF08MA26`–`27`, `EF09MA21`–`23`) | Planejada | graficos-e-pesquisas |
| Raízes (`EF08MA02`) | Planejada | raizes |
| Notação científica e unidades muito grandes ou pequenas (`EF08MA01`, `EF09MA04`, `EF09MA18`) | Planejada | notacao-cientifica |
| Produtos notáveis e fatoração (`EF09MA09`) | Planejada | produtos-notaveis |
| Sistemas de equações, equação linear e reta (`EF08MA07`–`08`) | Planejada | sistemas-de-equacoes |
| Áreas e perímetros (`EF06MA29`, `EF07MA31`–`32`, `EF08MA19`) | Planejada | areas-e-perimetros |
| Volume (`EF07MA30`, `EF08MA20`–`21`, `EF09MA19`) | Planejada | volume |
| Princípio multiplicativo da contagem (`EF08MA03`) | Planejada | contagem |
| Números reais, irracionais, potências fracionárias (`EF09MA01`–`03`) | Planejada | numeros-reais |
| Equação do 2º grau (`EF08MA09`) | Planejada | equacao-2-grau |
| Semelhança, Tales, triângulos semelhantes (`EF06MA21`, `EF09MA12`) | Planejada | semelhanca |
| Funções no 9º ano (`EF09MA06`) | Parcial | a cápsula funcoes existe, mas está na linha Médio; a BNCC pede a ideia no 9º ano |
| Algoritmos e fluxogramas (`EF06MA04`, `EF06MA23`, `EF06MA34`, `EF07MA05`–`07`, `EF07MA26`, `EF07MA28`, `EF08MA10`–`11`, `EF08MA16`, `EF09MA15`) | Sem plano | pensamento computacional; combina com a linha de Computação |
| Sequências recursivas e não recursivas (`EF07MA14`, `EF08MA10`–`11`) | Sem plano | |
| Dízimas periódicas e fração geratriz (`EF08MA05`) | Sem plano | pode entrar em numeros-reais |
| Congruência de triângulos (`EF08MA14`) | Sem plano | pode entrar em poligonos |
| Construções com régua e compasso (`EF06MA22`, `EF07MA22`, `EF08MA15`) | Sem plano | |
| Plantas baixas e vistas aéreas (`EF06MA28`); vistas ortogonais (`EF09MA17`) | Sem plano | |
| Arcos, ângulos centrais e inscritos (`EF09MA11`) | Sem plano | |

## Médio

A BNCC do Médio tem 43 habilidades, por competência. O app tem 19 cápsulas listadas; algumas (Matrizes, Polinômios, Números complexos, Geometria analítica) são conteúdo comum de vestibulares e **não são pedidas explicitamente** pelas habilidades da BNCC.

| Assunto (habilidades) | Situação | Cápsula |
|---|---|---|
| Funções afim e quadrática, gráficos, máximos e mínimos (`EM13MAT302`, `401`, `402`, `501`–`503`) | Pronta | funcao-afim, funcao-quadratica |
| Exponencial e logaritmo (`EM13MAT304`–`305`, `403`) | Pronta | exponencial, logaritmo |
| Variação de grandezas e leitura de gráficos (`EM13MAT101`) | Pronta | funcoes |
| PA e PG como funções (`EM13MAT507`–`508`) | Planejada | progressoes |
| Juros simples e compostos, taxas e índices (`EM13MAT303`, `104`) | Planejada | matematica-financeira |
| Fenômenos periódicos, leis do seno e do cosseno (`EM13MAT306`, `308`) | Planejada | trigonometria, ciclo trigonométrico |
| Áreas, volumes, Cavalieri (`EM13MAT307`, `309`, `504`) | Planejada | geometria-espacial |
| Contagem e probabilidade (`EM13MAT310`–`312`, `106`, `511`) | Planejada | analise-combinatoria, probabilidade (Monty Hall já existe) |
| Medidas de tendência central e dispersão, histogramas, box-plot, correlação (`EM13MAT316`, `406`–`407`, `510`, `102`) | Planejada | estatistica |
| Equações lineares simultâneas, matrizes (`EM13MAT301`) | Planejada | sistemas-lineares, matrizes |
| Algoritmos, fluxogramas e programação (`EM13MAT315`, `405`) | Sem plano | combina com a linha de Computação |
| Funções definidas por partes (`EM13MAT404`: tabela do Imposto de Renda, conta de luz) | Sem plano | |
| Transformações isométricas e homotéticas (`EM13MAT105`) | Sem plano | |
| Grandezas compostas: velocidade, densidade (`EM13MAT314`) | Sem plano no Médio | já é tratado em razao-e-proporcao |
| Notação científica e algarismos significativos (`EM13MAT313`), conversões de unidades (`EM13MAT103`) | Sem plano | |
| Ladrilhamento do plano (`EM13MAT505`), cartografia e projeções (`EM13MAT509`) | Sem plano | |
| Planejar e executar projetos e pesquisas amostrais (`EM13MAT201`–`203`) | Sem plano | |

## Computação (fora da BNCC de 2018)

A linha de Computação do app tem 15 cápsulas prontas. O plano original do `CLAUDE.md` tinha mais 8 assuntos que nunca entraram em `indice.ts`: arquivos, pastas e caminhos; rede local vs. internet; cliente e servidor; onde hospedar; variáveis de ambiente e segredos; firewall e segurança básica; logs, monitoramento e backup; custos. Veja também a nota sobre Computação no [README](README.md).
