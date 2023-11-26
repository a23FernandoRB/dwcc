
//la única forma que encontré para hacer este ejercicio es inicializar una variable global
let ventanaNueva;

function openWindow() {
    this.event.preventDefault();

    if (ventanaNueva && !ventanaNueva.closed) {
      alert("La ventana ya está abierta");
      ventanaNueva.focus();
      return;
    }
    //Pedir por pantalla si se quiere abrir la ventana
    const abrirventana = confirm("Quieres abrir la ventana?");

    if (abrirventana) 
      ventanaNueva = window.open("indexventana.html","_blank","toolbar=no, menubar=no, width=300, height=300, top=400, left=400") 
    else 
      alert("No ha sido posible abrir la ventana.");
  }


  
function closeWindow() {
  this.event.preventDefault();

  if (!ventanaNueva.closed) {
    ventanaNueva.close();
  } else {
    alert("La ventana está cerrada");
  }
}

function moveByWindow() {
  this.event.preventDefault();

  if (!ventanaNueva.closed) {
    ventanaNueva.focus();
    ventanaNueva.moveBy(50, 50);
  } else {
    alert("Debes abrir la ventana antes de moverla");
  }
}

function moveToWindow() {
  this.event.preventDefault();

  if (!ventanaNueva.closed) {
    ventanaNueva.focus();
    ventanaNueva.moveTo(400, 400);
  } else {
    alert("Debes abrir la ventana antes de moverla");
  }
}

function resizeByWindow() {
  this.event.preventDefault();

  if (!ventanaNueva.closed) {
    ventanaNueva.resizeBy(50, 50);
    ventanaNueva.focus();
  } else {
    alert("Debes abrir la ventana antes de cambiar su tamaño");
  }
}

function resizeToWindow() {
  this.event.preventDefault();

  if (!ventanaNueva.closed) {
    ventanaNueva.focus();
    ventanaNueva.resizeTo(400, 400);
  } else {
    alert("Debes abrir la ventana antes de cambiar su tamaño");
  }
}
