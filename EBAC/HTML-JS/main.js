const form = document.getElementById('form');
let primeiroNumero = document.getElementById('numero1');
let segundoNumero = document.getElementById('numero2');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const msg = document.getElementById('msg');
    const msgBMaior = `Correto! O valor do <b>segundo número</b> é maior que o valor do <b>primeiro número</b>.`;
    const msgAMaior = `Erro! O valor do <b>primeiro número</b> é maior que o valor do <b>segundo número</b>. Tente novamente.`;
    const msgIgual = `Erro! O valor do <b>primeiro número</b> é igual ao valor do <b>segundo número</b>. Tente novamente.`;

    if(segundoNumero.value > primeiroNumero.value) {
        document.querySelector('.msg').innerHTML = msgBMaior;
        document.querySelector('.msg').style.display = "block";

        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else if (segundoNumero.value == primeiroNumero.value) {
        document.querySelector('.msg').innerHTML = msgIgual;
        document.querySelector('.msg').style.display = "block";

        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        document.querySelector('.msg').innerHTML = msgAMaior;
        document.querySelector('.msg').style.display = "block";

        primeiroNumero.value = '';
        segundoNumero.value = '';
    }
})
