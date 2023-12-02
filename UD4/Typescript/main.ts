let paises = ["Belgica", "Austria", "Bharat", "Paraguay", "China", "Francia"];

//numero de elementos del array

function numeroelementos(){
    return paises.length
}


//funcion que imprima por pantalla el numero de elementos

function printnumero(){
    (document.getElementById("numeroelementos")as HTMLInputElement).innerText=numeroelementos().toString(); 
}
// enseñar elementos del array

function ensenarelementos(){

    (document.getElementById("arraypaises")as HTMLInputElement).innerText=""; //vacía los elementos que pueda haber de consultas anteriores
    for(let i=0;i<= numeroelementos()-1;i++){
        document.getElementById("arraypaises")!.innerText=document.getElementById("arraypaises")!.innerText+" "+paises[i];
    }
}

// enseñar elementos del array invertidos

function ensenarinverso(){
    (document.getElementById("inverso")as HTMLInputElement).innerText="";
    for(let i=(numeroelementos()-1); i>= 0; i--){
        document.getElementById("inverso")!.innerText=document.getElementById("inverso")!.innerText+" "+paises[i];
    }
}

//añadir elemento al principio del array

function anadirprincipio(){
    this.event.preventDefault();
    let elemento=(document.getElementById("elementoprincipio")as HTMLInputElement).value;
     paises.unshift(elemento);
}


//añadir elemento al final

function anadirfinal(){
    this.event.preventDefault();
    let elemento=(document.getElementById("elementofinal")as HTMLInputElement).value;
    paises.push(elemento);
}

//Eliminar elemento al principio y decir cual es

function eliminarprincipio(){
    alert("Se ha eliminado el elemento del principio: " + paises[0])
    paises.shift();
}

//eliminar el ultimo elemento y decir cual es

function eliminarfinal(){
    alert("Se ha eliminado el elemento del final: " + paises[(numeroelementos()-1)])
    paises.pop();
}

//enseñar el elemento que indica el usuario segun su posicion

function ensenarPosicion(){
    this.event.preventDefault();
    let posicion= Number((document.getElementById("pos")as HTMLInputElement).value);
    if (posicion>0 && posicion<=(numeroelementos())){
        //suponiendo que el usuario cuando quiera la primera posición envíe el numero 1 ( en lugar del 0)
        document.getElementById("elementoPos")!.innerText= paises[posicion-1];
    }else alert("posicion no válida");
}

// enseñar elementos que se encuentren entre dos posiciones indicadas por el usuario

function ensenarEntreElementos(){
    
    this.event.preventDefault();
    document.getElementById("elementoEntrePos")!.innerText="";//vacíar la lista al principio para borrar operaciones pasadas
    let posicion1= Number( (document.getElementById("posEl1")as HTMLInputElement).value);
    let posicion2= Number( (document.getElementById("posEl2")as HTMLInputElement).value);
    if(   (posicion1>0) && (posicion1<=posicion2) && (posicion2<=numeroelementos())  ){
        for(let i=posicion1;i<=posicion2;i++){

            document.getElementById("elementoEntrePos")!.innerText=document.getElementById("elementoEntrePos")!.innerText+" "+ paises[i-1];
        }
    }else alert("Posiciones no válidas")
    
}
