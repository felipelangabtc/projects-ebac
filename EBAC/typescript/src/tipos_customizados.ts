type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos = [
    {
        nome: "Felipe",
        cursos: ["Front-end", "UX/UI"],
        idade: 30,
    },
    {
        nome: "Sara",
        cursos: ["Front-end", "Python"],
        idade: 21,
    },
]

alunos.push({
        nome: "Julia",
        cursos: ["Arquitetura"],
        idade: 29,
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}