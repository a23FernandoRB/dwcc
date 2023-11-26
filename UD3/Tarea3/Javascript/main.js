
function getName() {
    this.event.preventDefault();
    const nombre = document.getElementById("nombreCompleto").value;

    // Largo nombre
    document.getElementById("largoNom").innerText=nombre.length;
    // Sin espacios
    const sinEspacios = nombre.split(" ").join("");
    document.getElementById("largoNomSin").innerText=sinEspacios.length;
    // Minúsculas
    document.getElementById("nombreMinus").innerText=nombre.toLowerCase();
    // Mayúsculas
    document.getElementById("nombreMayus").innerText=nombre.toUpperCase();
    // Separar Nombre de apellidos
    const separado = nombre.split(" ");
    //solo nombre
    document.getElementById("soloNombre").innerText=separado[0];
    //solo apellido 1
    document.getElementById("soloApellido1").innerText=separado[1];
    //solo apellido 2
    document.getElementById("soloApellido2").innerText=separado[2];
    //propuesta username
    const usuario = separado[0]+separado[1].charAt(0).toUpperCase()+separado[2].charAt(0).toUpperCase();
    document.getElementById("usernamePropuesto").innerText=usuario;
  }


  function controlContrasena(){
    this.event.preventDefault();
    const contrasena = document.getElementById("contrasenaPropuesta").value;

    //Expresion regular de contrasena de stackoverflow
    const validacion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (validacion.test(contrasena))
        document.getElementById("contrasenaValidada").innerText=contrasena+"es válida";
    else
        document.getElementById("contrasenaValidada").innerText=contrasena+" No es válida. Debe incluir 8 caracteres, numeros, mayusculas, minusculas y algun caracter especial";


  }