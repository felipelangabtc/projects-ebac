<script setup>
import { reactive } from 'vue';

const nome = "Felipe"
const meuObjeto = {
  nome: "Felipe",
  filmeFavorito: "Interestelar"
}

function dizOla(nome) {
  return `${nome} diz oi`
}

const enderecoDaImagem = "https://i.guim.co.uk/img/media/0d5555496583f2d44b226401e0bf82e28904eb39/0_217_5472_3283/master/5472.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e6acfa5c5d916c08579c7fd912df2904"
const imagemEth = "https://img.money.com/2022/01/Explainer-What-Is-Ethereum.jpg"

const botaoEstaDesabilitado = false

const gostaDeBitcoin = false
const gostaDeEth = false

const estaAutorizado = false

// let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['Felipe', 'Sara', 'Paulo', 'Luisa', 'Gian'],
  nomeAInserir: '',
}) 

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastrarNome() {
  if (estado.nomeAInserir.length >= 3) {
  estado.nomes.push(estado.nomeAInserir)
  } else {
    alert ("Digite mais caracteres")
  }
}

</script>

<template>
  <h1>{{ dizOla("Sara") }}</h1>
  <img v-if="gostaDeBitcoin" :src="enderecoDaImagem" alt="">
  <img v-else-if="gostaDeEth" :src="imagemEth" alt="">
  <h2 v-else>Não gosta de criptomoedas</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso.</h1>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>

  <br />
  <hr />

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br />
  <hr />

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostraSaldoFuturo() }} <br>
  <input :class="{ invalido: !validaTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir.">
  <button v-if="validaTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo.</span>

  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome.">
  <button @click="cadastrarNome()" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>

</template>

<style scoped>

img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}

</style>
