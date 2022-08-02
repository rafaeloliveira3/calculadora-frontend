'use strict'

const resultado = document.getElementById('resultado')

function somar (){
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value

    const soma = parseFloat(number1) + parseFloat(number2)
    const total = "A soma dos dois números é " +soma
    
    if(number1 == '' || number2 == ''){
        resultado.textContent = 'Os campos acima devem ser preenchidos'
    }
    else{
        resultado.textContent = total
    }
}

function subtrair (){
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    
    const subtracao = parseFloat(number1) - parseFloat(number2)
    const total = "A subtração dos dois números é " +subtracao
    
    if(number1 == '' || number2 == ''){
        resultado.textContent = 'Os campos acima devem ser preenchidos'
    }
    else{
        resultado.textContent = total
    }
}

function multiplicar (){
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    
    const multiplicacao = parseFloat(number1) * parseFloat(number2)
    const total = "A multiplicação dos dois números é " +multiplicacao
    
    if(number1 == '' || number2 == ''){
        resultado.textContent = 'Os campos acima devem ser preenchidos'
    }
    else{
        resultado.textContent = total
    }
}

function dividir (){
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    
    const divisao = parseFloat(number1) / parseFloat(number2)
    const total = "A divisão dos dois números é " +divisao
    
    if(number1 == '' || number2 == ''){
        resultado.textContent = 'Os campos acima devem ser preenchidos'
    }
    else{
        resultado.textContent = total
    }
}

document.getElementById('somar').addEventListener('click', somar)
document.getElementById('subtrair').addEventListener('click', subtrair)
document.getElementById('multiplicar').addEventListener('click', multiplicar)
document.getElementById('dividir').addEventListener('click', dividir)