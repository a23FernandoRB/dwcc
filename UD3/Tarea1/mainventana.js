


function getURL() {
    let resultado= "URL: " + window.location.href;
    console.log("Pos a ver si funciona");
    document.getElementById("URL").innerText=resultado;
}


function getProtocol() {
    let resultado= "Protocolo: " + window.location.protocol;
    document.getElementById("protocolo").innerText=resultado;
}



function getNavegador() {
    let resultado= "Navegador: " + window.navigator.product;
    document.getElementById("navegador").innerText=resultado;
}


function getJava() {
    let resultado= "Java disponible: " + (window.navigator.javaEnabled() ? "Yes" : "No");
    document.getElementById("java").innerText=resultado;
}


function getdata() {
    getURL();
    getProtocol();
    getNavegador();
    getJava();
}
