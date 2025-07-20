"use strict";

var todosAlunos = [{
  nome: "Gustavo",
  nota: 5
}, {
  nome: "Julia",
  nota: 9
}, {
  nome: "Lucas",
  nota: 8
}, {
  nome: "Luana",
  nota: 6
}, {
  nome: "Felipe",
  nota: 8
}, {
  nome: "Sara",
  nota: 10
}, {
  nome: "Matheus",
  nota: 4
}];
function aprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
}
var alunosAprovados = aprovados(todosAlunos);
console.log(alunosAprovados);