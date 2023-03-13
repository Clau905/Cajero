//Creamos la instancia
let valores = window.location.search;
let urlParams = new URLSearchParams(valores);

//Accedemos a los valores de os parametros
let monto = urlParams.get('monto');
localStorage.setItem("monto_a_extraer",monto);
//-----------------------------------------------------
let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);
let elegido=localStorage.getItem("clienteElegido");
elegido=JSON.parse(elegido);

let clave=elegido[0];
let nombre = elegido[1];
let saldo=elegido[2];


let _usuario =document.getElementById("r0");
let _extraer =document.getElementById("r2");
_usuario.innerText=nombre;
_extraer.innerText=" -------------------- NO HAY SALDO DISPONIBLE -------------------- ";




let btnConf = document.getElementById("verde"); 
let btnVolver = document.getElementById("rojo");
btnVolver.addEventListener("click", atras);


function atras(){
    location.href="index.html?clave="+clave;
}


btnConf.addEventListener("click" ,e=>{
    e.preventDefault();
    location.href="operaciones.html?clave="+clave;
})






