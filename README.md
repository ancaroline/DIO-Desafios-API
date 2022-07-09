# DIO-Desafios-API
Desafios propostos por: https://github.com/lira1705/mentoria-typescript/tree/main/src/desafios  

 :point_right: O Desafio 4 está na pasta src titulado como: index.ts. Também está na pasta dist, titulado como: desafio4.js. O index.html é referente ao Desafio 4.

Desafio 1:
  > Como podemos rodar isso em um arquivo .ts sem causar erros? 
```
let employee = {};
employee.code = 10;
employee.name = "John";
```
[Minha solução para o Desafio 1](https://github.com/ancaroline/DIO-Desafios-API/blob/main/src/desafios/desafio1.ts)

Desafio 2: 
  > Como podemos melhorar o esse código usando TS? 
```
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
```
[Minha solução para o Desafio 2](https://github.com/ancaroline/DIO-Desafios-API/blob/main/src/desafios/desafio2.ts)

Desafio 3:
  >  O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
```
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
```
[Minha solução para o Desafio 3 - TS](https://github.com/ancaroline/DIO-Desafios-API/blob/main/src/desafios/desafio3.ts)  

[Minha solução para o Desafio 3 - HTML](https://github.com/ancaroline/DIO-Desafios-API/blob/main/src/desafios/desafio3.html)

Desafio 4: 

 > Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
 pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

 > A ideia dessa atividade é criar um aplicativo que: 
    - Busca filmes
    - Apresenta uma lista com os resultados pesquisados
    - Permite a criação de listas de filmes e a posterior adição de filmes nela

 > Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
 Atenção para o listener do botão login-button que devolve o sessionID do usuário
 É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

[Minha solução para o Desafio 4 - Index.js](https://github.com/ancaroline/DIO-Desafios-API/blob/main/src/index.ts)  

[Minha solução para o Desafio 4 - Index.html](https://github.com/ancaroline/DIO-Desafios-API/blob/main/index.html)


