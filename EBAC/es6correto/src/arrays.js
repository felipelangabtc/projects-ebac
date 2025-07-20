const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

//forEach só intera, não retorna nada
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

//map intera, fazer modificações e retornar modificado
const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
//    numeroAtual = numeroAtual * 2; ou
    return numeroAtual * 2;
})

console.log(dobroDosNumeros)

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
//    return itemAtual;
})

console.log(alunos2)

//find encontrar um item dentro do array
const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' // true or false
})

console.log(paula)

//findIndex retorna o indice do item no array
const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula' // true or false
})

console.log(indiceDaPaula)

//every todas os itens dentro do array satisfazem uma condição?
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosOsAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend';
})

console.log(todosOsAlunosSaoDeFrontend)

//some um item satisfaça a condição
const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

//filter filtra itens
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

//reduce agrega valores
const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador
}, 0)

console.log(soma)

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor)

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos)