// EXTRACCION - OTRO IMPORTE -
let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);

let xpin = document.getElementById("pesos");
let elegido=localStorage.getItem("clienteElegido");
elegido=JSON.parse(elegido);

let clave=elegido[0];
let nombre = elegido[1];
let pin=elegido[3];
let saldo=elegido[2];
let monto="";

let btnLimpia = document.getElementById("rojo");
let btnConfirma = document.getElementById("verde");
let x = document.querySelectorAll(".teclado");   
let xApe = document.getElementById("name");
xApe.innerText=nombre;
HabilitoTeclado("pesos",6);



btnLimpia.addEventListener("click",e=>{
    e.preventDefault();
    location.href="operaciones.html?clave="+clave;
})





btnConfirma.addEventListener("click",e=>{
    let montoAExtraer = document.getElementById("pesos");
    montoAExtraer=parseFloat(montoAExtraer.innerText);
    montoAExtraer=parseFloat(montoAExtraer);
    // valido que tenga saldo
    let miCliente=new Persona();
       
    miCliente=arrayClientes.find(miCliente=>miCliente.pin == clave);
      console.log(miCliente);  
    if (miCliente.saldo < montoAExtraer){

         location.href="cartel.html?mensaje="+"NO HAY SALDO DISPONIBLE";
         

    }
    else{

       
        if (Extraccion(montoAExtraer,miCliente.saldo)==true){

            miCliente.saldo -=montoAExtraer;
        
            arrayClientes = arrayClientes.filter(function(element){
            return element.pin !=clave;
            });
            arrayClientes.push(miCliente);
            let clientesJson =JSON.stringify(arrayClientes);
            // LO GUARDO EN LOCLASTORAGE
            localStorage.setItem("misClientes",clientesJson);
       
        }
        
    }       
})
   






 