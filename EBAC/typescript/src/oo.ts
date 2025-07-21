class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi.`
    }
}

class ContaBancaria {
    // private saldo: number = 0; // private não deixa usar em outras classes
    protected saldo: number = 0; // protected deixa usar em outras classes filhas (extends)
    public numeroConta: number; // public ou vazio é disponível em todas as classes

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() { // static disponível apenas no nível da classe
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria { // extends herda da classe mencionada
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoFelipe = new ContaBancariaPessoaFisica(123456)
// contaDoFelipe.
ContaBancaria.retornaNumeroDoBanco()
