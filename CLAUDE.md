# CLAUDE.md — App de Estudo "Curiosamente"

> Nome provisório. Troque à vontade.

Este arquivo diz ao Claude Code o que é o projeto, como ele é organizado e quais regras seguir.
Leia tudo antes de qualquer tarefa.

## Sobre quem desenvolve

- O dono do projeto é **iniciante em programação** e usa **Windows** (PowerShell).
- Explique o que vai fazer antes de fazer, em português simples.
- Prefira soluções simples e legíveis a soluções "espertas".
- Ao terminar uma tarefa, diga como testar (qual comando rodar e o que ver na tela).
- Comandos de terminal devem funcionar no PowerShell do Windows.
- Nunca apague arquivos ou rode comandos destrutivos (ex.: `rm -rf`, `git reset --hard`, apagar tabelas) sem pedir confirmação.

## O que é o app

Um aplicativo web de estudo **lúdico, mas profundo**. Foge do formato "aula chata":
cada assunto é uma **cápsula de exploração** com curiosidades, história, simulações
interativas e aplicação prática. Fácil de entender, sem ser raso.

### Escopo atual (versão 1)

Só duas áreas por enquanto:

1. **Matemática**: básica (1º ao 5º ano, pedido do dono), ensino fundamental (anos finais) e ensino médio, usando a BNCC como referência de conteúdo.
   Há também a linha **Avançada** (`trilha: 'avancada'`: cálculo, álgebra linear, estatística inferencial), pedida pelo dono a partir do mapa da Khan Academy.
   O mapa completo de cada linha (com grupo por ano ou tema) fica em `src/conteudo/indice.ts`.
2. **Computação básica**: com foco em entender como sistemas web funcionam e são hospedados
   (internet, servidores, domínios, banco de dados, deploy).

**Ciência de Dados e Biologia ficam para depois.** Não crie pastas, rotas nem conteúdo delas
até o dono pedir. A estrutura do app precisa permitir adicionar áreas novas sem refazer nada.

### Inspirações (o que pegamos de cada uma)

| Referência | O que aproveitamos |
|---|---|
| Brilliant | Aprender fazendo; lições curtas; feedback imediato em cada resposta |
| Mathigon / Polypad | Texto que vira narrativa; a interação faz parte do texto, não fica num canto |
| Explorables de Nicky Case | "Portão cognitivo": perguntar antes de explicar; terminar com uma caixa de areia livre |
| Seeing Theory (Brown) | Visualizações de probabilidade e estatística com D3 |
| PhET (Univ. do Colorado) | Simulações com poucos controles e muito efeito visual |
| 3Blue1Brown | Animação que constrói a intuição antes da fórmula |
| Duolingo | Sequência de dias, XP, metas diárias leves |

## Princípios pedagógicos (seguir sempre)

1. **Prever antes de ver**: toda simulação pede um palpite antes de rodar.
2. **Intuição antes da fórmula**: a fórmula aparece só na camada "Aprofundar".
3. **Profundidade em 3 camadas**: Intuição → Mão na massa → Rigor. A terceira (Aprofundar) vive em **caixas escondidas** dentro da etapa Conteúdo, perto do tópico que elas aprofundam; só abrem com um clique (decisão do dono).
4. **Errar é parte do jogo**: resposta errada mostra o porquê, sem punir com perda de XP.
5. **Verdade acima de tudo**: datas, nomes e fatos históricos precisam de fonte. Mitos populares (ex.: proporção áurea em tudo) são apresentados como mitos.
6. **Textos curtos**: blocos de no máximo ~4 frases entre interações.
7. **Aprofundado, mas não complexo** (pedido do dono): cada cápsula ensina o assunto **inteiro**, não só uma passada por cima.
   Tudo o que for difícil é explicado **primeiro de forma lúdica** (história, desenho, brincadeira, simulação) e só depois com a conta ou a regra.
   - Cubra todos os subtópicos que a BNCC espera para o assunto (ex.: Frações = o que é, fração de quantidade, equivalentes, simplificar, comparar, mistas, somar, subtrair, multiplicar, dividir, decimais).
   - História contada como narrativa (personagens, problema, solução), não só tópicos na linha do tempo.
   - Para cada subtópico: explicação lúdica → exemplo resolvido (`<ExemploResolvido>`) → exercícios (`<Exercicio>`).
   - Várias simulações ao longo da cápsula, não só uma. Desafio final com 10 ou mais perguntas, do fácil ao difícil.
   - **Régua mínima** (medida em Porcentagem e Frações, a pedido do dono): cerca de 3.500 palavras no `capsula.mdx`, pelo menos 5 simulações, 12 ou mais exercícios `<Exercicio>`, 4 ou mais `<ExemploResolvido>` e desafio com 12 perguntas. Confira com `wc -w` e `grep -c` antes de dar a cápsula como pronta.
   - **Explicação lúdica** (pedido do dono: muita gente tem dificuldade com fórmulas e trechos complexos): em **todo assunto um pouco mais difícil de entender**, coloque uma caixa `<Brincando titulo="…">`. Regras:
     - Não há número fixo nem etapa fixa: vale na Intuição e no Conteúdo, onde o assunto pesar (fórmula, regra, símbolo, ideia abstrata).
     - Fica **logo abaixo do texto do assunto que explica**, antes do `<ExemploResolvido>` e dos `<Exercicio>`. Nunca depois de exercícios.
     - É um **acréscimo**: não tire a fórmula nem o texto técnico, nem o `<Aprofundar>`. A caixa conta a mesma ideia com uma brincadeira, história ou cena do dia a dia (ladrilhos, GPS, pizza, ponte, marceneiro...).
     - Título no formato "tema: a cena" (ex.: "Dois lados: dois escavadores num túnel"). Textos curtos, e a cena precisa ser **fiel à matemática** (confira a conta).
     - Sem XP, não é obrigatória. Todas as cápsulas novas devem ter; as antigas ganham aos poucos (já têm: Limites e Pitágoras).
   - **Sempre bastante conteúdo** (pedido do dono, repetido): nunca entregue uma cápsula "básica" ou "por cima". Se a contagem ficar abaixo da régua, complete antes de mostrar. Vale para toda cápsula nova, de qualquer linha (Básica, Fundamental, Médio e Computação).

## Estrutura de uma cápsula

Toda cápsula segue estas etapas, nesta ordem:

1. `gancho` — pergunta intrigante
2. `historia` — quem, quando, por quê (linha do tempo curta)
3. `intuicao` — explicação com analogia, sem fórmula
4. `simulacao` — interação com "prever antes de ver"
5. `pratica` — aparece na tela como **"Conteúdo"**: o assunto completo, com exemplos, exercícios, aplicações e as caixas `<Aprofundar>` (o id continua `pratica` por causa do XP já salvo)
6. `desafio` — 12 perguntas com explicação
7. `conexoes` — resumo ("Para levar", com uma mini-história do assunto) e links para outras cápsulas e áreas

Cada etapa concluída salva o progresso do usuário.

### Como escrever o `capsula.mdx`

Cada etapa fica dentro de um bloco `<Etapa id="...">` (só a etapa atual aparece na tela).
Componentes disponíveis sem precisar de `import` (ficam em `src/components/capsula/`):

| Componente | Para quê |
|---|---|
| `<Etapa id="gancho">…</Etapa>` | Um bloco por etapa |
| `<Termo cor="azul">trocar</Termo>` | Palavra-chave colorida (`azul`, `verde`, `coral`, `amarelo`) |
| `<LinhaDoTempo marcos={[{ ano, texto }]} />` | Linha do tempo da etapa História |
| `<Previsao pergunta opcoes correta explicacao>simulação</Previsao>` | Palpite antes de ver; a simulação só aparece depois |
| `<Quiz perguntas={[{ enunciado, opcoes, correta, explicacao }]} />` | Desafio com explicação em cada resposta |
| `<Conexoes />` | Fichas das cápsulas em `conexoes` + lista de `fontes` do meta.ts |
| `<Formula><Linha>…</Linha></Formula>` | Bloco de fórmula centralizado (quebra a linha no celular) |
| `<Fracao cima="1" baixo="1 + q" />` | Fração "de pé", dentro de uma `<Linha>` |
| `<Palpite chave="inicial" pergunta opcoes />` | Guarda o que a pessoa acha no começo (vai no Gancho) |
| `<LembrarPalpite chave="inicial" opcoes correta seAcertou seErrou />` | Mais adiante, lembra o palpite e compara |
| `<Resumo>…lista…</Resumo>` | Caixa "Para levar" com as ideias principais (vai em Conexões). Termina com um parágrafo **"Um pouco de história."** do assunto |
| `<Aprofundar titulo="…">…</Aprofundar>` | Caixa escondida (prova, fórmula, variações) dentro do Conteúdo, colocada logo depois do tópico que aprofunda. Abrir a primeira rende o XP de Aprofundar |
| `<Brincando titulo="…">…</Brincando>` | Caixa azul escondida "Explicação lúdica": a mesma ideia de uma fórmula ou regra difícil, contada com uma brincadeira ou cena do dia a dia. Sem XP. Vai logo abaixo do trecho que explica, antes de exemplos e exercícios (regras em "Explicação lúdica", nos princípios pedagógicos) |
| `<ExemploResolvido titulo="…"><Passo>…</Passo>…</ExemploResolvido>` | Conta resolvida, um passo revelado por vez |
| `<Exercicio enunciado="…" resposta="3/8" dica="…" resolucao="…" />` | Exercício com resposta digitada (aceita 3/8, 0,375 ou 1 1/2) |

A camada **Aprofundar** (as caixas `<Aprofundar>`) é o "Rigor": defina os termos, mostre a conta passo a passo,
explique onde a intuição falha, mostre variações do problema e generalize. Confira toda conta
com uma simulação ou cálculo antes de publicar.

**Narração:** o botão "Ouvir" lê parágrafos, listas, títulos e enunciados da etapa, frase por frase.
Toda simulação nova deve ter `data-sem-narracao` no elemento de fora, para a voz não ler botões e números.
Símbolos que a voz lê mal (⅔, ×, "1/3"...) são traduzidos em `prepararParaFala`, em `src/lib/narracao.ts`.

Simulações são importadas no topo do `.mdx` (ex.: `import PortasTeaser from '.../simulacoes/PortasTeaser'`).
A cápsula é encontrada sozinha (`src/conteudo/registro.ts`); só falta listá-la em `src/conteudo/indice.ts` para aparecer no mapa.
Modelo de referência: `src/conteudo/matematica/medio/monty-hall/`.

## Stack

- **React + Vite + TypeScript**
- **Tailwind CSS** para estilo
- **React Router** para as rotas
- **MDX** para o conteúdo das cápsulas (Markdown com componentes React dentro)
- **Simulações**: componentes React com SVG ou Canvas; **D3** só para gráficos
- **Animações**: Framer Motion (ou a biblioteca `motion`)
- **Usuários e banco**: **Supabase** (login, banco Postgres e regras de acesso)
- **Hospedagem**: Vercel ou Netlify

Não adicione bibliotecas novas sem explicar por que e pedir aprovação.

## Estrutura de pastas

```
/
├─ CLAUDE.md
├─ .env.local              # chaves do Supabase (NUNCA vai para o git)
├─ public/
│  └─ audio/               # narrações pré-geradas (fase 2)
├─ supabase/
│  └─ migrations/          # SQL das tabelas e regras de acesso
└─ src/
   ├─ app/                 # rotas e layout
   ├─ components/
   │  ├─ ui/               # botões, cartões, barra de XP...
   │  ├─ capsula/          # etapas da cápsula, Narrador, Quiz, Previsao
   │  └─ simulacoes/       # uma simulação por arquivo (MontyHall.tsx...)
   ├─ conteudo/
   │  ├─ matematica/
   │  │  ├─ fundamental/
   │  │  │  └─ porcentagem/
   │  │  │     ├─ meta.ts     # dados da cápsula
   │  │  │     └─ capsula.mdx # texto + componentes
   │  │  └─ medio/
   │  │     └─ monty-hall/
   │  └─ computacao/
   │     └─ como-a-internet-funciona/
   ├─ lib/
   │  ├─ supabase.ts       # cliente do Supabase
   │  ├─ xp.ts             # regras de XP e nível (único lugar com esses números)
   │  └─ narracao.ts       # leitura em voz alta
   └─ hooks/               # useUsuario, useProgresso...
```

### Formato do `meta.ts`

```ts
export default {
  id: "monty-hall",
  titulo: "O problema de Monty Hall",
  area: "matematica",       // "matematica" | "computacao"
  trilha: "medio",          // matemática: "fundamental" | "medio"; computação: nome do módulo
  serie: "2º ano EM",       // opcional, só para matemática
  resumo: "Trocar de porta dobra suas chances. Por quê?",
  duracaoMin: 12,
  xp: 100,
  prerequisitos: [],
  conexoes: ["probabilidade-condicional", "simulacao-monte-carlo"],
  videoUrl: null,          // opcional: link do YouTube
  fontes: [
    { titulo: "...", url: "https://..." },
  ],
};
```

**Para criar uma cápsula nova**: copie a pasta de uma cápsula existente, mude `meta.ts` e
`capsula.mdx`, e registre o `id` no índice da área. Não é preciso mexer em mais nada.

## Usuários, XP e histórico

### Contas
- Login com e-mail e senha e/ou Google, via Supabase Auth.
- **Modo visitante**: dá para explorar sem conta, com o progresso salvo no navegador.
  Ao criar a conta, o progresso do visitante é enviado para a conta.
- Perfil: nome de exibição, avatar (escolhido de uma lista), área favorita.

### Tabelas (Supabase / Postgres)

| Tabela | Para quê | Campos principais |
|---|---|---|
| `perfis` | Dados do usuário | `id` (= usuário do Auth), `nome`, `avatar`, `xp_total`, `nivel`, `sequencia_atual`, `maior_sequencia`, `ultimo_dia_estudo`, `criado_em` |
| `progresso_capsulas` | Onde parou em cada cápsula | `usuario_id`, `capsula_id`, `etapa_atual`, `concluida`, `camada_max` (1–3), `melhor_pontuacao`, `concluida_em` |
| `eventos_xp` | Histórico "o que ele já fez" | `id`, `usuario_id`, `tipo`, `capsula_id`, `xp`, `criado_em` |
| `conquistas_usuario` | Medalhas ganhas | `usuario_id`, `conquista_id`, `obtida_em` |
| `anotacoes` | Caderno pessoal | `id`, `usuario_id`, `capsula_id`, `texto`, `criado_em` |
| `revisoes` | Revisão espaçada | `usuario_id`, `cartao_id`, `proxima_revisao`, `intervalo_dias`, `facilidade` |

**Segurança (obrigatório):**
- Ativar **RLS** (Row Level Security) em todas as tabelas: cada usuário só lê e escreve as próprias linhas.
- O XP **não** é alterado direto pelo navegador. Ele é dado por uma função no banco
  (`conceder_xp`), que grava em `eventos_xp` e atualiza `perfis.xp_total`. Isso evita trapaça.
- A chave `service_role` do Supabase **nunca** vai para o código do navegador nem para o git.
  No front-end, só a chave pública (`anon`).

### Regras de XP (ficam só em `src/lib/xp.ts`)

| Ação | XP |
|---|---|
| Concluir uma etapa | 10 |
| Acertar a previsão de uma simulação | 15 |
| Errar a previsão e terminar a simulação | 5 |
| Concluir a cápsula | valor do `meta.ts` (ex.: 100) |
| Abrir uma caixa "Aprofundar" pela primeira vez na cápsula | 30 |
| Revisão do dia | 5 por cartão |
| Manter a sequência de dias | 20 |

- Nível: `nivel = floor(sqrt(xp_total / 100)) + 1` (sobe rápido no começo, devagar depois).
- **Exceção à regra "só em xp.ts"**: a função `conceder_xp` do banco tem uma cópia dos valores,
  porque é ela que decide o XP de quem tem conta (o navegador não é confiável). Mudou um, mude o outro.
- Cada evento rende XP uma vez só (coluna `referencia`, ex.: `monty-hall:gancho`). Previsão certa e
  errada contam como o mesmo evento. O XP da cápsula é limitado a 200 no banco.
- Todo XP passa por `ganharXp()` em `src/lib/sincronizacao.ts` (visitante e conta).
- Ao sair da conta, o progresso deste navegador é apagado (fica salvo na nuvem).
- `progresso_capsulas` também guarda `etapas_concluidas` e `palpites` (além dos campos da tabela acima).
- Repetir uma cápsula já concluída rende só XP de revisão, para não "farmar".

### Conquistas (medalhas)
- Lista em `src/conteudo/conquistas.ts`; regras em `src/lib/regrasConquistas.ts`. Não dão XP.
- Quem tem conta só ganha a medalha se a função `conceder_conquista` do banco concordar
  (ela confere em `eventos_xp` e `perfis`). Medalha nova = item na lista + regra + `when` na função SQL.
- Marcos que não passam pelo XP (ex.: 10 mil rodadas) chegam por um evento do navegador
  (`curiosamente:rodadas`), para a simulação continuar independente do resto do app.
- Datas e sequência de dias sempre no horário de Brasília (`src/lib/datas.ts`), igual ao banco.
- Avatares: desenhos SVG em `src/components/ui/Avatar.tsx` (sem emojis).

### Tela de perfil
- Nível, barra de XP, sequência de dias.
- Mapa com as cápsulas concluídas destacadas.
- Linha do tempo de atividades (lida de `eventos_xp`).
- Conquistas ganhas e bloqueadas.

## Narração e vídeo

O app deve continuar leve. Ordem de prioridade:

1. **Narração no navegador (fase 1)**: botão "Ouvir" em cada etapa, usando a Web Speech API
   (`speechSynthesis`) com voz `pt-BR`. É grátis e não pesa nada. Fica em `src/lib/narracao.ts`.
   - Controles: tocar/pausar, velocidade (0,8× a 1,5×) e destaque da frase sendo lida.
   - Se não houver voz em português no aparelho, esconda o botão e não quebre a página.
2. **Narração pré-gravada (fase 2)**: arquivos `.mp3` gerados por uma ferramenta de voz
   e guardados em `public/audio/<capsula-id>/<etapa>.mp3`. Se o arquivo existir, ele tem prioridade sobre a voz do navegador.
3. **"Vídeos" feitos em código**: animações curtas dentro do próprio app (Framer Motion, SVG),
   sincronizadas com a narração. Ficam leves porque não são arquivos de vídeo.
4. **Vídeo de verdade (opcional)**: hospedado fora (YouTube não listado) e embutido pelo
   campo `videoUrl` do `meta.ts`. Nunca colocar arquivos de vídeo dentro do projeto.

Regra: **nenhum áudio ou vídeo toca sozinho**. O usuário sempre aperta o play.

## Visual ("Estúdio")

Escolhido pelo dono depois de comparar opções inspiradas em Brilliant, Mathigon, Seeing Theory e outros.
Objetivo: bonito e **confortável para a vista**.

- Cores e fontes ficam só em `src/index.css` (`@theme`). Não use cores soltas no código.
- Fundo quase branco (`fundo`), cartões brancos (`superficie`) com sombra leve (`shadow-cartao`), cantos bem arredondados.
- Texto cinza-escuro (`texto`), nunca preto puro; texto secundário em `suave`.
- Títulos em serifa (`font-serif`, Source Serif 4), com uma palavra em itálico quando fizer sentido; resto em Figtree.
- A cor fica nas simulações e no mapa (amarelo, azul, uma cor por linha). A moldura do site é neutra.
- Botões em pílula: use `botaoPrimario` / `botaoSecundario` de `src/components/ui/estilos.ts`.
- Dentro das cápsulas, palavras-chave podem ter cor própria (cada conceito, uma cor).
- Evite: texturas de fundo, degradês, emojis como ícone, bordas pretas grossas.

### Responsivo (obrigatório)

O app precisa funcionar bem **no celular**, não só no computador. Toda tela nova segue:

- **Celular primeiro**: escreva o estilo para tela pequena e só depois adapte para telas maiores (`sm:`, `md:`, `lg:` do Tailwind).
- Testar sempre em **375px de largura** (celular) e em **1280px** (computador).
- **Nada de rolagem para o lado** na página. Margem lateral de 16px (`px-4`) no celular.
- Botões e áreas de toque com **pelo menos 44px** de altura.
- Texto do corpo com pelo menos **16px**; nada de letra miúda para conteúdo importante.
- No celular, o menu fica **embaixo** da tela; colunas viram uma lista só; o sumário da cápsula vira uma barra de progresso.
- Simulações funcionam com **toque** (sem depender de passar o mouse por cima) e cabem na largura da tela.

## Padrões de código

- Nomes de componentes em PascalCase (`BarraDeXp.tsx`); funções e variáveis em camelCase.
- Textos e nomes de domínio em **português** (`capsula`, `etapa`, `conquista`).
- Componentes pequenos: se passar de ~150 linhas, divida.
- Toda simulação recebe props simples e funciona sozinha (dá para testar isolada).
- Mobile primeiro: tudo precisa funcionar em tela de celular e com toque.
- Acessibilidade: contraste bom, botões com rótulo, simulações usáveis pelo teclado.
- Comente o "porquê", não o "o quê".

## Comandos

```powershell
npm install        # instala as dependências (primeira vez)
npm run dev        # abre o app em http://localhost:5180 (porta fixa; a 5173 é de outro programa)
npm run build      # gera a versão de produção
npm run lint       # verifica erros de código
```

**Site no ar:** https://curiosamente-seven.vercel.app (Vercel, ligado ao repositório privado
`AntonioVieiraMartins/curiosamente` no GitHub). Cada `git push` na `main` publica sozinho.
As variáveis do Supabase também estão cadastradas na Vercel (Settings → Environment Variables).
Se o endereço mudar, atualize Site URL e Redirect URLs no Supabase (Authentication → URL Configuration).

Variáveis de ambiente em `.env.local`:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Roteiro (marque conforme avançar)

- [x] 1. Esqueleto: Vite + React + Tailwind + rotas (Início, Mapa, Cápsula, Perfil)
- [x] 2. Modelo de cápsula com as 8 etapas e progresso salvo no navegador
- [x] 3. Primeira cápsula completa: **Monty Hall** (com simulação de milhares de rodadas)
- [x] 4. Narração com a voz do navegador (voz padrão: Francisca, natural, disponível no Edge)
- [x] 5. Supabase: login, perfis, progresso, XP e histórico (login com Google ainda não ativado)
- [x] 6. Perfil, conquistas e sequência de dias
- [x] 7. Matemática do fundamental (primeiras 5 cápsulas: Frações, Porcentagem, Números negativos, Razão e proporção, Potências)
- [x] 8. Computação, módulos 1 a 3 e início do 4 (Git e GitHub)
- [ ] 9. Matemática do médio
- [x] 10. Caderno pessoal e revisão espaçada (rodar as migrações 20261118000000 e 20261118010000 no Supabase para sincronizar com a conta)
- [ ] 11. Restante da computação, conexões entre as duas áreas, modo escuro, publicação
- [ ] Futuro (só quando o dono pedir): Ciência de Dados, Biologia

Faça **uma etapa por vez** e mostre o resultado antes de seguir.

## Ideias de cápsulas (lista viva)

Formato: **assunto** — gancho ou simulação.

### Matemática — Básica (1º ao 5º ano)

Sistema decimal, adição e subtração, multiplicação, divisão, expressões numéricas, decimais,
medidas, tempo e horas, dinheiro e troco, formas geométricas, tabelas e gráficos (lista completa em `indice.ts`).

### Matemática — Ensino Fundamental (anos finais)

- **Números inteiros e negativos** — termômetro e saldo bancário; história de quando o negativo era "absurdo"
- **Frações** — dividir pizza e barra de chocolate arrastando cortes
- **Decimais e porcentagem** — "50% de desconto + 20% = 70%?" (não é); simulador de promoção
- **Razão e proporção** — receita de bolo para 3 ou 30 pessoas; escala de mapa
- **Regra de três** — combustível, velocidade, câmbio
- **Potências e notação científica** — a lenda do xadrez e dos grãos de arroz; zoom do átomo à galáxia
- **Múltiplos, divisores, MMC e MDC** — semáforos que piscam juntos; cortar tábuas sem sobra
- **Números primos** — Crivo de Eratóstenes animado; primos protegendo o Pix
- **Expressões e equações do 1º grau** — balança que precisa ficar equilibrada
- **Sistemas de equações** — dois planos de celular: qual compensa?
- **Ângulos e polígonos** — por que as abelhas usam hexágonos
- **Teorema de Pitágoras** — prova arrastando quadrados; a corda de 12 nós do Egito
- **Áreas e perímetros** — cercar o maior terreno com a mesma cerca
- **Circunferência e Pi** — medir objetos reais; Pi com agulhas de Buffon
- **Estatística básica** — média, mediana e moda com salários ("a média engana")
- **Probabilidade simples** — dados e moedas com milhares de lançamentos

### Matemática — Ensino Médio

- **Funções (ideia geral)** — máquina que transforma números
- **Função afim** — corrida de táxi (bandeirada + km); arrastar a reta
- **Função quadrática** — arremesso de bola; ponte em arco; achar o lucro máximo
- **Exponencial** — juros compostos, epidemias, dobrar o papel 42 vezes até a Lua
- **Logaritmo** — escala Richter, decibéis, pH; "quantas vezes eu dobrei?"
- **Progressões (PA e PG)** — Gauss somando 1 a 100; xadrez e arroz de novo, agora com fórmula
- **Matemática financeira** — parcelado vs. à vista; cartão de crédito e rotativo
- **Trigonometria** — medir a altura de um prédio com a sombra; Eratóstenes medindo a Terra
- **Ciclo trigonométrico e ondas** — som, roda-gigante, gráfico de seno
- **Geometria espacial** — planificar caixas; por que latas são cilindros
- **Análise combinatória** — senhas, placas de carro, Mega-Sena
- **Probabilidade** — Monty Hall; paradoxo do aniversário; probabilidade condicional
- **Estatística** — gráficos enganosos; pesquisa eleitoral e margem de erro
- **Matrizes** — imagens digitais são matrizes; filtros de foto
- **Geometria analítica** — GPS e distância entre pontos no mapa

### Computação básica — trilha "do computador ao sistema no ar"

Objetivo: o dono entender o que acontece quando ele cria, hospeda e acessa um sistema.

**Módulo 1 — O computador**
- **Binário** — acender lâmpadas para escrever números; por que 0 e 1
- **Hardware** — CPU, memória RAM e disco como uma cozinha (cozinheiro, bancada, despensa)
- **Sistema operacional** — o "gerente" do computador; processos e programas
- **Arquivos, pastas e caminhos** — `C:\Users\...` vs. `/home/...`
- **Terminal** — comandos básicos sem medo (simulador de terminal no app)

**Módulo 2 — Redes e internet**
- **Como a internet funciona** — um pacote viajando pelo mapa, roteador por roteador
- **Endereço IP e portas** — prédio (IP) e apartamento (porta); `localhost:5173`
- **Rede local vs. internet** — por que um sistema no servidor da empresa só abre na rede dela
- **DNS e domínios** — a "lista telefônica" da internet; comprar e apontar um domínio
- **Cliente e servidor** — garçom e cozinha
- **HTTP e HTTPS** — pedido e resposta; o cadeado e os certificados

**Módulo 3 — Como um sistema web é feito**
- **Front-end e back-end** — o salão e a cozinha do restaurante
- **HTML, CSS e JavaScript** — esqueleto, roupa e movimento (editar ao vivo)
- **APIs e JSON** — o cardápio que um sistema oferece para outro
- **Banco de dados** — tabelas como planilhas que conversam; SQL básico
- **Usuários e login** — senhas, hash e por que nunca guardar senha "pura"

**Módulo 4 — Colocando no ar (hospedagem)**
- **Git e GitHub** — "salvar o jogo" do código; voltar no tempo
- **Onde hospedar** — servidor local, VPS, nuvem e plataformas (Vercel, Netlify): prós e contras
- **Deploy** — do seu computador para a internet, passo a passo
- **Variáveis de ambiente e segredos** — por que a senha do banco não vai para o código
- **Firewall, portas e segurança básica** — o que deixar aberto e o que fechar
- **Logs, monitoramento e backup** — descobrir o que quebrou e não perder dados
- **Custos** — quanto custa manter um sistema no ar

### Futuro (não criar ainda)

Ciência de Dados e Biologia: ideias guardadas para quando o dono pedir.

## Conteúdo gerado por IA

Textos, datas e fórmulas escritos com ajuda de IA **devem ser conferidos**.
Toda cápsula precisa de pelo menos uma fonte confiável em `fontes`. Na dúvida sobre um fato, não invente: deixe um `TODO: conferir` no texto.
