/*Operadores aritméticos:
+ soma 
- subtração
* multiplicação
/ divisão 
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)

Operadores de Atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*= multiplicação ou igual

Operadores de sequência: 
+ (serve para concatenar valores 
    (string ou variáveis))
- (serve para subtrair valores 
    (string ou variáveis))

Operadores de comparação: 
RETORNA TRUE (VERDADEIRO)  OU FALSE (FALSO)

== (comparar 2 valores)
===(comparar valores e tipo de dado)
!= (diferente) de valores apenas
!== (comparar a diferença de valores e tipo de dado)
|| ou 

< menor    > maior
<= menor ou igual    >= maior ou igual
*/

function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = resultado;

    //Alterar a cor do resultado caso for número negativo.
    const corResultado = document.getElementById("resultado");
    
    if(resultado < 0){
        corResultado.style.backgroundColor = "red";
    }

    else {
     rgb(32, 195, 250)
    }
}


function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerHTML = resultado;

    //Alterar a cor do resultado caso for número negativo.
    const corResultado = document.getElementById("resultado");
    
    if(resultado < 0){
        corResultado.style.backgroundColor = "red";
    }

    else {
     rgb(32, 195, 250)
    }
}

function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerHTML = resultado;

    //Alterar a cor do resultado caso for número negativo.
    const corResultado = document.getElementById("resultado");
    
    if(resultado < 0){
        corResultado.style.backgroundColor = "red";
    }

    else {
     rgb(32, 195, 250)
    }
}

function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0){
        document.getElementById("resultado").innerHTML = "Erro: divisão por 0."
        document.getElementById("resultado").style.backgroundColor = "red";
    }
    else{ let resultado = n1 / n2;
    document.getElementById("resultado").innerHTML = resultado;

    //Alterar a cor do resultado caso for número negativo.
    const corResultado = document.getElementById("resultado");
    
    if(resultado < 0){
        corResultado.style.backgroundColor = "red";
    }

    else {
     rgb(32, 195, 250)
    }

    }
}

function limpar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "---"
    document.getElementById("resultado").style.backgroundColor = "rgb(236, 39, 243)";
}
