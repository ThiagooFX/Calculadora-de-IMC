function enviar() {
    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var altura_real = altura / 100;

    var a = altura_real * altura_real;
    var calc = peso / a;

    var imc = calc.toFixed(2);

    const resultado = document.getElementById("resultado");
    

    console.log(imc);

    if (imc <18.5) {
        resultado.innerHTML = `Seu IMC é ${imc}, o que indica que você está abaixo do peso normal`;
    } 
    else if (18.5 <= imc && imc <= 24.9) {
        resultado.innerHTML = `Seu IMC é ${imc}, o que indica que você está no peso normal`;
    } 
    else if (25 <= imc && imc <= 29.9 ) {
        resultado.innerHTML = `Seu IMC é ${imc}, o que indica que você está acima do peso`;
    } 
    else if (30 <= imc && imc <= 34.9) {
        resultado.innerHTML = `Seu IMC é ${imc}, o que indica que você está em obesidade classe I`;
    } 
    else if (35 <= imc && imc <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${imc}, o que indica que você está em obesidade classe II`;
    } 
    else if (imc > 40) {
        resultado.innerHTML = `Seu IMC é ${imc}, o que indica que você está em obesidade classe III`;
    }
    else {
        alert("Insira os dados solicitados para calcular o seu IMC");
    }

    
}

function limpar() {
    document.getElementById('form-imc').reset();
    resultado.innerHTML = "";
}