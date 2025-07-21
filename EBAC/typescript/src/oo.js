"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi.`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        // private saldo: number = 0; // private não deixa usar em outras classes
        this.saldo = 0; // protected deixa usar em outras classes filhas (extends)
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoFelipe = new ContaBancariaPessoaFisica(123456);
// contaDoFelipe.
ContaBancaria.retornaNumeroDoBanco();
