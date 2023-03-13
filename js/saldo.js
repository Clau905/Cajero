//Creamos la instancia
let valores = window.location.search;
let urlParams = new URLSearchParams(valores);

//Accedemos a los valores de os parametros
let pin = urlParams.get('clave');

//-----------------------------------------------------
let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);
let elegido=localStorage.getItem("clienteElegido");
elegido=JSON.parse(elegido);

let clave=elegido[0];
let nombre = elegido[1];
let saldo=elegido[2];
let cbu=elegido[3];


let nodoSaldo = document.getElementById("saldo");
let nodoCBU = document.getElementById("cbu");
nodoSaldo.innerText  ="$ "+saldo;
nodoCBU.innerText  =cbu;

let nodoNom = document.getElementById("nom");
nodoNom.innerText  =nombre;

let nodoFec = document.getElementById("fechaHoy");
nodoFec.innerText =devFecha();

nodoFec = document.getElementById("hora");
nodoFec.innerText =devHora();

let btnConf = document.getElementById("verde"); 
let btnVolver = document.getElementById("rojo");

btnVolver.addEventListener("click", salir);

function salir(){
    location.href="index.html";
}



btnConf.addEventListener("click", e => {
    e.preventDefault;
   
    
    location.href="operaciones.html?clave="+clave;
   
    
}) 








