# MUNCHKIN | HELPER - /web

A pasta web na raíz do repositório é a pasta onde foi desenvolvida toda a aplicação e acompanhando este README mostrarei como está organizado o conteúdo aqui disponível.

<br>

## REACT + VITE

O React é uma biblioteca bastante famosa para a construção de interfaces de usuários e, o Vite é uma ferramenta de compilação frontend. Para este projeto foi decidido usar essas tecnologias para fins de aprendizado.

Segue o link do site oficial que contém a documentação do React: https://react.dev/

E, segue o link do site oficial que contém a documentação do Vite:
https://vitejs.dev/

<br>

### Criação do projeto React + Vite

Para a criação do projeto, <i>imaginando que o leitor já possua o NODE e o VSCode já instalado na sua máquina</i>, foi utilizado o comando:
```
$ npm create vite@latest web --template vue
```
Onde web é o nome da pasta que contém a aplicação e o `@latest` indica que vou criar a aplicação com a última versão disponível atualmente do vite.

Para este projeto foi decidido a utilização (para a aplicação React + Vite) do `TypeScript` para a escrita do código e para a estilização, foi decidido o uso da extensão `.scss`

<br>

### Implementação do React Router no projeto

Para este projeto, foi decidido utilizar o `React Router` para a criação e controle de Rotas entre os componentes. Segue o comando para a instalação das dependências do React Router:

```
$ npm install react-router-dom localforage match-sorter sort-by
```
Segue o link do site oficial que contém a documentação do React Router: https://reactrouter.com/en/main

<br>

### Execução do projeto

Para executar o projeto `localmente` basta realizar o `Fork` do projeto para tê-lo em seu repositório e realizar em seu terminal o clone, instalar todas as dependências do projeto e executar o comando que executará o código. Segue os comandos:

- clone do projeto <i>- Exemplo</i>:
```
$ git clone https://github.com/{{seuRepositorio}}/munchkin.git
```

- instalação das dependências:
```
$ npm install
```

- execução do código do projeto:
```
$ npm run dev
```

Pronto! Após isso, basta copiar e acessar o link gerado no seu terminal em um navegador de sua escolha.

<br>

### GitHub Pages

Para o projeto, foi também pensado na utilização do domínio do GitHub para a execução do projeto e, para isso utilizamos a documentação disponível em: https://pages.github.com/ .

Foi necessário então criar uma pasta na raíz do projeto denominada de `.github`, uma subpasta chamada `workflows` e um arquivo `.yml` com a execução de um script para o deploy da aplicação.

Foi necessário também realizar algumas configurações no repositório na página do git para apontar a branch `gh-pages`.

Além disso, segue o comando para a instalação das dependências do gh-pages:
```
$ npm install gh-pages
```

Para fazer o deploy da aplicação, é necessário executar dois comandos, estes comandos estão nos `scripts` do `package.json` e eles são:
```
$ npm run build
```

Este comando irá (em palavras leigas) "construir" o frontend e, logo em seguida é necessário realizar o comando:
```
$ npm run deploy
```

Este comando irá enviar para o GitHub actions o resultado do build e então, será possível acessar o gh-pages com a aplicação.

Link do gh-pages: https://vicjun22.github.io/munchkin/

(Caso não esteja funcionando, favor entrar em contato)

<br>

### Radix

Para este projeto foi utilizado também uma biblioteca de componentes chamada `Radix-ui` (embora só tenhamos utilizado os ícones...).

Segue o link do site oficial que contém a documentação do Radix-ui: https://www.radix-ui.com/

Abaixo segue o comando para a instalação das dependências (o comando abaixo serve somente para a instalação das dependências dos ícones fornecidos):
```
npm install @radix-ui/react-icons
```

<br>

## ORGANIZAÇÃO DAS PASTAS

Neste projeto utilizamos o seguinte agrupamento:
```
src
├─ assets
│  ├─ backgrounds
│  ├─ fonts
│  └─ images
├─ constants
├─ types
├─ ui
│  ├─ components
│  └─ screens
└─ utils
```

Onde:
- `assets` é a pasta que contém recursos gráficos e arquivos estáticos usados pela aplicação, como imagens, fontes e outros tipos de mídias.

    - `backgrounds` é a pasta que contém imagens de planos de fundo utilizados pela aplicação.

    - `fonts` é a pasta que contém fontes customizadas utilizadas no projeto. Estas fontes estão em formato `.ttf`.

    - `images` são imagens só que, ao contrário das imagens da pasta `backgrounds` que contém imagens para planos de fundo, esta pasta contém imagens menores utilizadas como customização de componentes.

- `constants` possui arquivos com valores constantes e imutáveis que são usados em vários lugares na aplicação.

- `types` possui arquivos com interfaces que são usadas em toda a aplicação como forma de reaproveitamento de código.

- `ui` pasta que contém o código responsável pela construção da interface do usuário.

    - `components` pasta que contém componentes reutilizáveis que compõem a interface do usuário, como botões e outros.

    - `screens` pasta que contém as diferentes telas que formam a interface do usuário.

- `utils` pasta que contém funções utilitárias e outros helpers que são usados em diferentes partes do projeto.