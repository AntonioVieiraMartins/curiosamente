# BNCC: registro para o app Curiosamente

Este registro guarda o que a **Base Nacional Comum Curricular** (BNCC) pede em **todas as áreas**, para a gente consultar quando for criar cápsulas novas e, no futuro, quando entrarem Biologia e outras matérias.

- **Fonte:** BNCC, versão final homologada com o Ensino Médio (MEC, dezembro de 2018), PDF oficial baixado em 19/11/2026 (`https://basenacionalcomum.mec.gov.br`). O site do MEC bloqueia leitores automáticos, então o texto veio do PDF na CDN do MEC.
- **Como foi feito:** as habilidades (as frases com código, como `EF06MA01`) foram extraídas do PDF por script e conferidas pela contagem oficial: 1.304 habilidades no Fundamental e 183 no Médio. Mesmo assim, **confira no documento oficial antes de citar** uma habilidade.
- **Não está neste registro:** a Educação Infantil em detalhe (só a lista dos campos de experiência, abaixo), os objetos de conhecimento em forma de tabela (o PDF mistura as colunas e o texto sai bagunçado) e o complemento de Computação de 2022 (ver o fim deste arquivo).

## Como a BNCC é organizada

| Etapa | Como se divide |
|---|---|
| Educação Infantil | 5 campos de experiência: O eu, o outro e o nós; Corpo, gestos e movimentos; Traços, sons, cores e formas; Escuta, fala, pensamento e imaginação; Espaços, tempos, quantidades, relações e transformações |
| Ensino Fundamental (1º ao 9º ano) | 5 áreas e 9 componentes (tabela abaixo) |
| Ensino Médio | 4 áreas, sem divisão por disciplina (tabela abaixo) |

Todas as etapas seguem as **10 competências gerais** da Educação Básica (conhecimento, pensamento científico e criativo, repertório cultural, comunicação, cultura digital, trabalho e projeto de vida, argumentação, autoconhecimento e autocuidado, empatia e cooperação, responsabilidade e cidadania).

### Códigos das habilidades

`EF06MA01` = Ensino Fundamental, 6º ano, Matemática, habilidade 01. Faixas: `EF12` (1º e 2º), `EF15` (1º ao 5º), `EF35` (3º ao 5º), `EF67` (6º e 7º), `EF69` (6º ao 9º), `EF89` (8º e 9º). Siglas: MA Matemática, CI Ciências, GE Geografia, HI História, LP Língua Portuguesa, AR Arte, EF Educação Física, LI Língua Inglesa, ER Ensino Religioso.
`EM13MAT101` = Ensino Médio, Matemática. O primeiro dígito do número é a competência específica (`MAT3xx` é da competência 3). O mesmo vale para `CNT`, `CHS` e `LGG`.

## Arquivos (um por área, para quando a matéria entrar no app)

| Arquivo | Área | Ensino Fundamental | Ensino Médio | Estado no app |
|---|---|---|---|---|
| [matematica.md](matematica.md) | Matemática | 247 habilidades (1º ao 9º) | 43 | **Em andamento**: ver [cobertura-matematica.md](cobertura-matematica.md) |
| [ciencias-da-natureza.md](ciencias-da-natureza.md) | Ciências da Natureza (Ciências, Biologia, Física, Química) | 111 (Ciências) | 26 | Não iniciada (Biologia é a próxima prevista) |
| [ciencias-humanas.md](ciencias-humanas.md) | Ciências Humanas (Geografia, História, Filosofia, Sociologia) | 274 (Geografia 123, História 151) | 32 | Não iniciada |
| [linguagens.md](linguagens.md) | Linguagens (Língua Portuguesa, Arte, Educação Física, Língua Inglesa) | 609 (LP 391, Arte 61, Ed. Física 69, Inglês 88) | 82 (28 de Linguagens + 54 de Língua Portuguesa) | Não iniciada |
| [ensino-religioso.md](ensino-religioso.md) | Ensino Religioso | 63 | não existe | Não iniciada |

Cada arquivo traz as competências específicas da área e todas as habilidades, na ordem da BNCC.

## Pontos de partida para as próximas matérias

- **Biologia:** a BNCC não tem "Biologia" no Fundamental: ela está dentro de **Ciências**, em três unidades temáticas (Matéria e energia, **Vida e evolução**, Terra e Universo). No Médio ela está em **Ciências da Natureza e suas Tecnologias**, sobretudo na competência específica 2 (Vida, Terra e Cosmos), habilidades `EM13CNT201` a `EM13CNT209`, e na competência 3, ligada a saúde e tecnologia (`EM13CNT301` a `EM13CNT310`). Comece por [ciencias-da-natureza.md](ciencias-da-natureza.md).
- **Física e Química:** mesma área. Matéria e energia (competência 1, `EM13CNT101` a `EM13CNT107`) é a base das duas.
- **História, Geografia, Filosofia e Sociologia:** no Médio a BNCC junta tudo em Ciências Humanas e Sociais Aplicadas, sem separar disciplinas. A divisão por assunto teria de ser escolha do app.
- **Língua Portuguesa, Arte, Educação Física e Inglês:** componentes do Fundamental. Só Língua Portuguesa tem habilidades próprias no Médio.

Ao criar uma matéria nova, o fluxo é o mesmo das cápsulas: escolher as habilidades do arquivo da área, listar as cápsulas em `src/conteudo/indice.ts` e anotar aqui a cobertura. O `CLAUDE.md` precisa ser atualizado com a decisão do dono (ele diz que só Matemática e Computação existem por enquanto).

## Sobre Computação

A BNCC de 2018 não tem Computação como componente. O **pensamento computacional** aparece dentro de Matemática, em habilidades de **algoritmos e fluxogramas** (`EF06MA04`, `EF06MA23`, `EF06MA34`, `EF07MA07`, `EF07MA26`, `EF07MA28`, `EF08MA10`, `EF08MA11`, `EF08MA16`, `EF09MA15`, `EM13MAT315`, `EM13MAT405`). A norma específica de Computação na Educação Básica é um parecer do Conselho Nacional de Educação de **2022**, que **não está neste PDF** e não foi conferido aqui. Segundo a Wikipédia (pt), o parecer é de 17 de fevereiro de 2022 e uma resolução de 4 de outubro de 2022 trata de Educação Digital. A linha de Computação do app (do computador ao sistema no ar) é complementar e não segue um currículo oficial.
