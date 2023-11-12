//Imprimir la tabla del 9

const tabla9 = () => {
    let numero=9; 
    let i=1;
    do {
        console.log('9 x ' + i + ' = ' + numero*i);
        i++;
    }while (i<=10);
}


//funcion fibonacci 

function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      const temp = a;
      a = b;
      b = temp + b;
    }
    return a;
  }
// imprimir los 10 primero dígitos de fibonacci

  const printFibonacci = () => {
    let max=10;

   for( let i=1; i <= max; i++){
    console.log(fibonacci(i));
   }
}   


//Funcion para comprobar si un numero es primo

function esPrimo() {
  const numero = Number(document.getElementById('numero').value);;
  let i=2;
  this.event.preventDefault();
  if (numero<1){
    console.log("Los numeros negativos no pueden ser primos")
    return false;  

  }
  //busca divisibilidad desde 2 hasta la raiz cuadrada del numero
  while ( i <= Math.sqrt(numero) ){
    if (numero % i === 0)  {
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
  const edad = prompt("introduzca su edad");
  let resultado="";

  if (edad<0 || edad==null) 
    alert("Idade inferior a 0, non é valida");
  else
    if (edad<=12)
      resultado="Neno"
    else
      if (edad<=18)
        resultado="Adolescente"
      else
        if (edad<=30)
          resultado= "Xoven"
        else  
          if (edad<=64)
            resultado= "Adulto"
          else  
            if (edad<=100)
              resultado= "Xubilado"
            else
              alert("Idade non válida");
              document.getElementById("resedadif").innerText=resultado 
}
  

function edadSwitch() {
  this.event.preventDefault();
  const edad = prompt("introduzca su edad");
  let resultado="";
    switch (true){
      case (edad < 0 || edad==null) :
        alert("Idade non válida");
        break;
      case (edad <= 12) :
        resultado= "Neno";
        break;
      case (edad<=18):
        resultado= "Adolescente";
        break;
      case (edad<=30):
        resultado= "Xoven";
        break;
      case (edad<=64):
        resultado= "Adulto";
        break;
      case (edad<=100):
        resultado= "Xubilado";
        break;
      default:
        alert("Idade non válida");
    };
    document.getElementById("resedadswitch").innerText=resultado 
}

//funcion que realice operaciones bit a bit pasandole el tipo de operacion y los dos operandos
function operaciones(t,o1,o2) {
  let resultado;
  let div;

  div=Math.log2(o2);
  if (t==0)//caso division
    resultado= o1>>div;
  else if(t==1)//caso multiplicacion
    resultado=o1<<div;
  else alert("Error, tipo de operacion no valido")
  return resultado;
}

const printoperaciones = () => {

  document.getElementById("operacion1").innerText=operaciones(0,125,8);
  document.getElementById("operacion2").innerText=operaciones(1,40,4);
  document.getElementById("operacion3").innerText=operaciones(0,25,2);
  document.getElementById("operacion4").innerText=operaciones(1,10,16);

}   