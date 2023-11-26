function diasRestantes() {
    let fechaHoy = new Date(); 
    const fechaFin = new Date("06/25/2024");
    //calcular la diferencia entre horas y despues pasarlo a días
    let diasRestantes = Math.ceil((fechaFin.getTime() - fechaHoy.getTime()) / (1000 * 60 * 60 * 24));
    alert("Faltan " + diasRestantes + " días para el 25 de junio");
  }

  function cumpleanos2100() {
   const fechaCumpleanos = new Date(document.getElementById("fechacumpleanos").value); 
   const anoActual = new Date().getFullYear(); 

   for (let ano = anoActual; ano <= 2100; ano++) {
        //ponemos en una variable la fecha a comprobar 
        let fechaAComprobar = new Date(ano, fechaCumpleanos.getMonth(), fechaCumpleanos.getDate());
        if (fechaAComprobar.getDay() == 0 || fechaAComprobar.getDay() == 6)
            console.log(ano);
    }
}
  
function selectorFormato() {
    this.event.preventDefault();
    const formatoFecha = document.getElementById("formato").value;
    console.log(formatoFecha);
    let result;
    const fechaHoy = new Date();
    //declaración de Arrays para almacenar los nombres de los  días de la semana y los meses 

    const diasEspanol=["Lunes","Martes", "Miercoles","Jueves","Viernes", "Sabado", "Domingo"];
    const mesesEspanol=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    const diasIngles=["Monday","Tuesday", "Wednesday","Thursday","Friday", "Saturday", "Sunday"];
    const mesesIngles=["January", "February", "March", "April", "May", "June" , "July", "August", "September", "October", "November", "December" ];

    
    switch (formatoFecha){
        case "1": result=fechaHoy.getDate() +"/" + (fechaHoy.getMonth()+1) + "/" + fechaHoy.getFullYear();
                break;
        case "2": result = diasEspanol[fechaHoy.getDay()] + ", " + fechaHoy.getDate() + " de "+ mesesEspanol[fechaHoy.getMonth()] + " del "+ fechaHoy.getFullYear();
            break;
        case "3":  result=  diasIngles[fechaHoy.getDay()] + ", " + mesesIngles[fechaHoy.getMonth()]+" "+ + fechaHoy.getDate()+ " , "+ fechaHoy.getFullYear();
            break;

    } 
    document.getElementById("fecha").innerText=result; 
}

function formatoHora(){
    this.event.preventDefault();
    const fHora= document.getElementById("formatHora").value;
    const fechaHoy = new Date();
    let horas = fechaHoy.getHours();
    let minutos = fechaHoy.getMinutes();
    let segundos = fechaHoy.getSeconds();
    let result;

    switch(fHora){
        case "1":result= horas + ":" + minutos + ":" + segundos;
                break;
        case "2": if (horas<=12)
                    result= horas+ ":" + minutos + " AM"
                   else 
                    result= horas-12 + ":" + minutos + " PM";
                break;
        }       
    document.getElementById("hora").innerText=result;
}