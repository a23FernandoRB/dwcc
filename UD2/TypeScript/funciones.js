//Imprimir la tabla del 9
var tabla9 = function () {
    var numero = 9;
    var i = 1;
    do {
        console.log('9 x ' + i + ' = ' + numero * i);
        i++;
    } while (i <= 10);
};
//funcion fibonacci 
function fibonacci(n) {
    var a = 0, b = 1;
    for (var i = 0; i < n; i++) {
        var temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}
// imprimir los 10 primero dígitos de fibonacci
var printFibonacci = function () {
    var max = 10;
    for (var i = 1; i <= max; i++) {
        console.log(fibonacci(i));
    }
};
//Funcion para comprobar si un numero es primo
function esPrimo() {
    var numero = Number(document.getElementById('numero').value);
    var i = 2;
    this.event.preventDefault();
    if (numero < 1) {
        console.log("Los numeros negativos no pueden ser primos.");
        return false;
    }
    //busca divisibilidad desde 2 hasta la raiz cuadrada del numero
    while (i <= Math.sqrt(numero)) {
        if (numero % i === 0) {
            console.log(numero + " no es primo.");
            return false;
        }
        i++;
    }
    console.log(numero + " es primo.");
    return true;
}
// Funcion que devuelve el rango de edad usando if
function edadIf() {
    this.event.preventDefault();
    var edadprompt = prompt("introduzca su edad");
    //cambiar la edad introducida por prompt (tipo string) a numero
    var edad = Number(edadprompt);
    var resultado = "Error";
    if (edad < 0)
        alert("Idade inferior a 0, non é valida");
    else if (edad <= 12)
        resultado = "Neno";
    else if (edad <= 18)
        resultado = "Adolescente";
    else if (edad <= 30)
        resultado = "Xoven";
    else if (edad <= 64)
        resultado = "Adulto";
    else if (edad <= 100)
        resultado = "Xubilado";
    else
        alert("Idade non válida");
    document.getElementById("resedadif").innerText = resultado.toString();
}
function edadSwitch() {
    this.event.preventDefault();
    var edadprompt = prompt("introduzca su edad");
    var edad = Number(edadprompt);
    var resultado = "Error";
    switch (true) {
        case (edad < 0):
            alert("Idade non válida");
            break;
        case (edad <= 12):
            resultado = "Neno";
            break;
        case (edad <= 18):
            resultado = "Adolescente";
            break;
        case (edad <= 30):
            resultado = "Xoven";
            break;
        case (edad <= 64):
            resultado = "Adulto";
            break;
        case (edad <= 100):
            resultado = "Xubilado";
            break;
        default:
            alert("Idade non válida");
    }
    ;
    document.getElementById("resedadswitch").innerText = resultado.toString();
}
//funcion que realice operaciones bit a bit pasandole el tipo de operacion y los dos operandos
function operaciones(t, o1, o2) {
    var resultado = 0;
    var div;
    // conseguir el logaritmo en base 2 del divisor
    div = Math.log(o2) / Math.log(2);
    if (t == 0) //caso division
        resultado = o1 >> div;
    else if (t == 1) //caso multiplicacion
        resultado = o1 << div;
    else
        alert("Error, tipo de operacion no valido");
    return resultado;
}
var printoperaciones = function () {
    document.getElementById("operacion1").innerText = operaciones(0, 125, 8).toString();
    document.getElementById("operacion2").innerText = operaciones(1, 40, 4).toString();
    document.getElementById("operacion3").innerText = operaciones(0, 25, 2).toString();
    document.getElementById("operacion4").innerText = operaciones(1, 10, 16).toString();
};
