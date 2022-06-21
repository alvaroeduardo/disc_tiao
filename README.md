# Discografia de Tião Carreiro e Pardinho - Supliu
Esta aplicação é uma aplicação MVP (mínimo viável produto).

### Como iniciar a aplicação?
1. Para primeira iniciação precisamos clonar o projeto:

    `git clone https://github.com/alvaroeduardo/disc_tiao.git`

2. Após a clonagem do projeto vamos instalar as dependências necessárias utilizando o NPM ou Yarn:

	`yarn`
	`npm install`

3. Após a instalação das dependências vamos iniciar o projeto na máquina local utilizando o comando:
	`npm run dev`
	`yarn dev`

## ![robot](https://github.githubassets.com/images/icons/emoji/unicode/1f916.png)  Tecnologias utilizadas

-   NodeJS v17.9.0
-   Yarn v1.22.18
-   ReactJS v18.0.0
-   Styled Components v5.3.5
-   Axios v0.27.2
-   Typescript v4.6.3
-   React Hook Form v7.31.1
-   React Modal v3.15.1
-   Vite v2.9.7

## ![crossed_swords](https://github.githubassets.com/images/icons/emoji/unicode/2694.png)  Desafios

1. Por pouca falta de concentração, no início do desenvolvimento da aplicação, tive alguns problemas para rendenizar a lista de álbuns, pois ele estava rendenizando um 'undefined', consegui corrigir utilizando o '?' para rendenizar o bloco de código assim que fosse retonar um valor válido;
2. Por motivos os quais ainda desconheço não consegui fazer a edição de dados via Modal direto da lista pelo qual na importação do ID ele persistia apenas um único valor, sendo assim resolvi criar uma página profile que puxa dados via parâmetros query.
3.  A barra de pesquisa, por motivos que também desconheço, o código não estava aceitando o método filter, que após algumas boas horas de insistência, batendo a cabeça contra a parede, foi possível fazer a barra de pesquisa funcionar perfeitamente.
4.  A componentização dos input's, como utilizei o React Hooks Forms, não consegui consegui criar uma solução para componentizar e retornar os dados do hook.

## Imagem do Projeto
<img src="https://imgur.com/i92lGOZ.png"/>
