## Desafio Pokémon

Para realização do desafio optei por usar Node, Typescript e Express para o backend, banco de dados Postgres e para o frontend utilizei React, Styled Components e Typescript.


## Execução da aplicação

Para executar a aplicação: 
Clone o repositório utilizando `git clone`;
Troque de branch com `git checkout JoaoPauloFagundeLima`;
Entre na pasta backend e instale as dependências com `yarn install` ou `npm install`;
Para configurar o acesso ao banco de dados, altere o arquivo `ormconfig.json`;
Na raiz do projeto, há um arquivo `database.json` para popular o banco de dados;
Execute a aplicação com `yarn dev:server` ou `npm dev:server`;
Acesse a pasta frontend e instale as dependências com `yarn install` ou `npm install`;
Execute o frontend com o comando `yarn start` ou `npm start`.


## Funcionalidades

* A tela inicial é apenas para boas vindas, o pokemon exibido é alterado sempre que a página for atualizada;
* A listagem de pokemons ocorre de acordo com o número do pokedex, indo do menor ao maior. As imagens são buscadas na [PokeApi](https://pokeapi.co/);
* É possível pesquisar pokemons por nome, número ou tipo;
* Ao clicar em um pokemon da listagem, é exibida a tela de detalhes. As barras de status, tipos do pokemon e imagem são definidas dinâmicamente de acordo com os atributos dos pokemons;
* É possível deletar pokemons a partir da tela de detalhes
* Para a criação de novos pokemons, foram adicionados apenas os campos que julguei necessários, todavia a rota de criação no backend aceita que o usuário envie todas as informções para criação do pokemon, sendo necessário apenas alterar o frontend;


## Melhorias futuras

* Adicionar uma mensagem de sucesso/fracasso ao deletar um pokemon;
* Adicionar a possibilidade de enviar imagens ao criar um pokemon (atualmente, pokemons criados mostram sempre a imagem do pokemon Unown);
* Permitir a edição de pokemons existentes (rota pronta no backend, só é necessária a implementação);
* Responsividade para utilização em aparelhos móveis
