# MUNCHKIN | HELPER

`Munchkin | Helper` é uma aplicação Web com responsividade mobile com um conteúdo que auxiliará com o desenvolvimento da partida!

<strong>Atenção: </strong>esta aplicação não tem como objetivo substituir o jogo original.

Esta aplicação `somente auxiliará` os jogadores de cartas `Munchkin` a gerenciar suas partidas. A aplicação irá permitir a `criação de fichas de personagens`, gerenciamentos de `níveis` de cada um dos jogadores e mais! Tudo isso para facilitar nos `cálculos de batalhas` contra os `monstros` e na `distribuição de níveis`.

<br>

## Introdução ao Munchkin

Jogo criado por Steve Jackson, <i>"Munchkin é uma paródia insípida que produz em essência a mesma experiência de se embrenhar nas masmorras... mas sem toda aquela confusão de RPG!"</i> - Trecho retirado do próprio manual do jogo (Regras Oficiais - Versão 1.04).

<br>

## Funcionalidades (<i>Aceito sugestões com melhorias</i>)

A aplicação Helper permitirá aos jogadores a criação de seus próprios personagens, seguindo as regras básicas do jogo. No menu do jogo é possível escolher entre a criação e o acompanhamento de uma ficha de personagem (para que possa acompanhar somente o seu próprio desempenho) ou a criação e acompanhamento de 3 à 6 fichas de personagens (recomendo aqui usar a aplicação Web e não abrir a aplicação em algum celular pois, vai ficar complicado...).

Para cada ficha haverá o contador de níveis e de força (o `kill-o-meter`) que facilitará nos cálculos de poder nas batalhas.

<br>

### Pontos de poder

Para jogadores que optarem pelo acompanhamento da ficha de personagem única, é possível modificar a ficha, aumentando de nível quando desejar (o ideal é que aguarde a sua vez na rodada...) e, para os jogadores que optarem pelo acompanhamento de todas as fichas, só é possível modificar manualmente seus níveis de poder nas suas respectivas rodadas.

<br>

### Ordem dos jogadores

A ordem dos jogadores pode ser efetuada de duas formas <i>(isso para quem optou pelo acompanhamento de todas as fichas de personagens)</i>, a primeira consiste em criar as fichas de personagens de acordo com uma ordem pré estabelecida <i>- exemplo: João quer jogar primeiro, Maria quer jogar em seguida e por último o Enzo quer jogar... Basta criar as fichas de personagem nestas ordens... -</i> e a segunda consiste em criar as fichas de personagens e clicar no botão `"Trocar Ordem"`, isso fará com que a ordem dos jogadores seja alterada de forma aleatória.

<br>

### Pedir ajuda

Para quem optou pelo acompanhamento de 3 à 6 fichas, haverá o botão de `"Pedir ajuda"` onde, um jogador poderá pedir ajuda aos outros <i>- Elfos ganham +1 level se ajudarem nas batalhas</i>.

<br>

### Kill-o-meter do(s) Monstro(s)

Para quem optou pelo acompanhamento de 3 à 6 fichas, durante o combate, se houverem mais monstros a se enfrentar basta clicar no botão `"+"` que a aplicação entenderá que há mais de um monstro a ser enfrentado. Ao final do turno, caso o jogador tenha vencido o(s) monstro(s), o jogador irá ganhar +1 level para cada monstro derrotado <i>- Elfos ganham +1 level para cada monstro derrotado enquanto ajuda outro jogador</i>.

<br>

### Itens temporários

Para quem optou pelo acompanhamento de 3 à 6 fichas, há a opção de itens temporários onde, é possível selecionar um número que será acrescido ao poder do personagem para que possa derrotar o monstro.

<br>

### Mudança de gênero

Para quem conhece o jogo, há a carta de mudança de gênero... Para a aplicação, o gênero dos personagens será alterado mudando também o avatar dos jogadores.

<br>

### Subir/Descer nível(is)

Na aplicação, há o comando de `subir de nível manualmente`, caso o jogador vença o(s) monstro(s) clicando em combate e o cálculo de combate o declará-lo `vencedor da batalha, o nível irá subir automaticamente`. Para a aplicação foi adicionado o comando de `diminuir de nível manualmente`, caso o jogador pegue uma carta de maldição.

Caso, com a derrota do monstro seja especificado que tem que subir dois níveis, suba o segundo nível manualmente <i>- a aplicação não sabe qual carta você pegou...</i>

<br>

### Fim de jogo

Conforme as regras, o primeiro jogador a chegar ao nível 10 é declarado o vencedor!

<br>

## A organização do repositório

Neste projeto utilizamos o seguinte agrupamento:
```
munchkin
├─ .github
│  └─ workflows
├─ assets
│  ├─ documents
│  └─ images
├─ cypress
└─ web
   └─ src ...
```

Onde:
- `.github` essa pasta juntamente com sua subpasta `workflows` é usada para armazenar arquivos de configuração para o GitHub, como arquivos de fluxo de trabalho do GitHub Actions, que ajudam a automatizar tarefas no repositório do GitHub.

- `assets` essa pasta é usada para armazenar recursos usados pelo projeto, como imagens, documentos, entre outros.

  - `documents` essa pasta contém alguns documentos `.md` para leitura como as `regras do jogo` e conhecimentos utilizados no projeto como por exemplo, a documentação do `cypress` e do desenvolvimento em `React + Vite`.

  - `images` essa pasta contém imagens que foram utilizadas durante o projeto assim como, o projeto de telas desenvolvidos anteriormente.

- `cypress` essa pasta contém testes automatizados de toda a aplicação usando a ferramenta de teste Cypress.

- `web` essa pasta contém a aplicação desenvolvida em `React + Vite` recomendo ler a documentação interna contida nesta pasta. Segue o link: [Documentação da aplicação desenvolvida em React + Vite](./web/README.md).