
# Projeto de uma lista de jogos

Esse desafio foi bastante legal e desafiador em algumas partes mas conseguir fazer todos os requesitos, os requesitos foram:

- O projeto deve ser feito usando React ou Next.JS
- Obter a lista de jogos em `/data`
- Apresentar um loader enquanto os dados são obtidos
- Apresentar os jogos em três colunas (no computador)
- Em cada card apresentar o título e imagem pelo ao menos
- Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular
- Quando a API retornar o `status code` 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário `O servidor fahou em responder, tente recarregar a página`
- Caso a API retorne outros erros, apresentar `O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`
- Ao realizar uma chamada, não esperar mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar apresentar `O servidor demorou para responder, tente mais tarde`
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader
- Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive
- Uma vez que tenha os dados em mãos, veja quais `genre` foram retornados e permita ao usuário selecionar um deles, e então filtre para exibir apenas jogos do gênero selecionado


## Stack utilizada

**Front-end:** React, NextJs, Tailwind, Axios e Mui

## Screenshots

### Pagina Normal

![image](https://github.com/wendesongomes/game-list/assets/82889172/77bfda70-5860-4adb-8032-dca9fcaebd08)

### Pagina filtrada por generos

![image](https://github.com/wendesongomes/game-list/assets/82889172/6af235dc-a71e-4422-9f39-f8dfb1782bfd)

### Pagina filtrada por generos e por nome

![image](https://github.com/wendesongomes/game-list/assets/82889172/afbe4f74-f1b9-4668-aa1e-8de5f5bf1495)

### Pagina responsiva

![image](https://github.com/wendesongomes/game-list/assets/82889172/11c704b8-7200-4487-86bd-dce912fc1834)


![image](https://github.com/wendesongomes/game-list/assets/82889172/ab1be546-14a3-4bc3-b407-ab49c3db592c)

### mensagem de error

![image](https://github.com/wendesongomes/game-list/assets/82889172/6ac96463-db0e-4bac-9ece-2e368b2e6bdd)

