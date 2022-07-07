"use strict";
//Desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};
const pessoa2 = {
    nome: 'roberto',
    idade: 99,
    profissao: Profissao.Padeiro
};
const pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};
const pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
