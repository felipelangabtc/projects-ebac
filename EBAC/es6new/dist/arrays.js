"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

//forEach só intera, não retorna nada
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});

//map intera, fazer modificações e retornar modificado
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  //    numeroAtual = numeroAtual * 2; ou
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
  //    return itemAtual;
});
console.log(alunos2);

//find encontrar um item dentro do array
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; // true or false
});
console.log(paula);

//findIndex retorna o indice do item no array
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; // true or false
});
console.log(indiceDaPaula);

//every todas os itens dentro do array satisfazem uma condição?
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosOsAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosOsAlunosSaoDeFrontend);

//some um item satisfaça a condição
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}

//filter filtra itens
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];

//reduce agrega valores
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);