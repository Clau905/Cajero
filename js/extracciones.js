let valores = window.location.search;

//Creamos la instancia
let urlParams = new URLSearchParams(valores);

//Accedemos a los valores de os parametros
let clave = urlParams.get('clave');

let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);
let miCliente=new Persona();
miCliente=arrayClientes.find(miCliente=>miCliente.pin === clave);
//let nodoPadre = document.getElementsByClassName("centro");
let parrafo = document.getElementById("elegido");
parrafo.innerHTML=miCliente.nombre;
let suSaldo = miCliente.saldo;


let btns = document.getElementsByClassName("btn");

for (let boton of btns){

    boton.addEventListener("click", (evento)=>{
    let monto=0;
    let opcion=evento.target.innerText;
    opcion=parseInt(opcion);
    switch (opcion){

        case 1:{
                monto = 5000; 
                break; 
        }
        case 2:{
            monto = 10000; 
            break; 
        }
        case 3:{
            monto = 15000; 
            break; 
        }
        case 4:{
            monto = 20000; 
            break; 
        }
        case 5:{
            location.href="otroimporte.html?clave="+clave;
            return;
            break; 
        }
        case 6:{
            location.href="operaciones.html?clave="+clave;
            return;
            break
        }


    }
   
    location.href="extraccionelegida.html?monto="+monto;

    })
        
        
        
        
      
}


