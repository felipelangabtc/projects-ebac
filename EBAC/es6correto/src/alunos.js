const todosAlunos = [{nome: "Gustavo", nota: 5}, {nome: "Julio", nota: 9}, {nome: "Lucas", nota: 8}, {nome: "Luana", nota: 6}, {nome: "Felipe", nota: 8}, {nome: "Sara", nota: 10}, {nome: "Matheus", nota: 4}]

function aprovados(listaDeAlunos) {
    return listaDeAlunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = aprovados(todosAlunos)
console.log(alunosAprovados)