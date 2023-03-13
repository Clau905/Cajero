//Creamos la instancia
let valores = window.location.search;
let urlParams = new URLSearchParams(valores);

//Accedemos a los valores de os parametros

let cargo = 1;
// bandera que indica que campo estoy completando
let elegido=localStorage.getItem("clienteElegido");
elegido=JSON.parse(elegido);

let clave=elegido[0];
let nombre = elegido[1];
let saldo=elegido[2];



let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);
let miCliente=new Persona();
console.log(clave);
miCliente=arrayClientes.find(a=>a.pin==clave);
console.log(miCliente);
let parrafo = document.getElementById("nom");
parrafo.innerText=miCliente.nombre;
HabilitoTeclado("pin",4);
let Pin="";
let Pin1="";
let Pin2="";



let btns = document.getElementsByClassName("btnPeq");
for (let boton of btns){

    boton.addEventListener("click", (evento)=>{
    let op="";
    
   
    opcion=boton.id;
    switch (opcion){

        case "conf":{
            presionoConfClaves();
            break; 
        } 

        case "borra":{

            presionoModifClaves();
            break;
        } 
           
        case "sale":{
           
            location.href="operaciones.html?clave="+clave;
            break; 
        }
        
    }
    })
        
    
}   
function validoPIN(x1,x2) {
    let dev = true;

   

    if (x1!=x2){
        dev = false;
      
        nodoM=document.getElementById("mensaje");
        nodoM.innerText="EL PIN INGRESADO ES  INCORRECTO!!!!";
        cargo=1;
    }
    else{

        cargo =2;
    }


    return dev;

}


 
//========================================================================================       
      
function presionoConfClaves(){
    // hay que validar ue la cbu exista
    // y que el importe a  transferir sea <=saldo
                
    let dev = true;


    if ( cargo==1){
        dev=validoIngresoPin("pin",clave);

      
        if ( dev == true){
    
            //habilito pin1
            let nodoPin = document.getElementById("pin");
            Pin = nodoPin.innerText    ; 
          
            let nodoPin1 = document.getElementById("divpin1");    
            nodoPin1.removeAttribute("hidden");
            
            HabilitoTeclado("pin1",4);
            cargo = 2;    
        }
                   
    }   
   
    else{
    if (cargo==2){
        // cargo es 2
        // VALIDO PIN1
        //habilito pin1
        nodoPin = document.getElementById("pin1",4);
        Pin1 = nodoPin.innerText    ; 

    

        nodoPin = document.getElementById("pin1");
        Pin1 = nodoPin.innerText    ;  
        dev = Pin1.length==4;
        if ( dev == true){
    
            //habilito pin3
         
           
            HabilitoTeclado("pin2",4);
            cargo = 3;    
                    
        }
        else{
            // ingreso pin1 errorneo
            dev = false;
            nodoM=document.getElementById("mensaje");
            nodoM.innerText="EL PIN INGRESADO ES  INCORRECTO!!!!";
            cargo = 2;
        }

    }

    else{
        // cargo es 3
        nodoPin = document.getElementById("pin2");
        Pin2 = nodoPin.innerText    ;  
        dev = Pin1.length==4;
        if ( dev == true){
            dev = validoIngresoPin("pin2",Pin1);
            if (dev==true){
                cambioClave();
            } 
        }

        }

    }

}

//========================================================================================
function validoIngresoPin(xpin1,xPin2){
    let dev = true;
    nodoPin = document.getElementById(xpin1);
    Pin = nodoPin.innerText    ;
   
    if (Pin!=xPin2 || Pin.length!=4){
        dev = false;
        let nodoM=document.getElementById("mensaje");
        nodoM.innerText="SU PIN ES INCORRECTO";
    }        


    return dev;
}

//========================================================================================
function validoPin2(){
let dev = true;
if(document.getElementById("pin2").innerText.length!=4){
    let nodoM=document.getElementById("mensaje");
    nodoM.innerText="EL PIN DEBE CONTENER CUATRO DIGITOS";
    cargo=2;
    dev = false;
              
}

return dev;
}

//========================================================================================

function presionoModifClaves(){
    let campo ="";
    switch (cargo) {
        case 1:
            campo = "pin";
            break;
        case 2:
            campo = "pin1";
            break;
        case 3:
            campo = "pin2";
            break;
    
        default:
            break;
    }
         
    nodoP=document.getElementById(campo);
    nodoP.innerText="";
    nodoP.contentEditable=false;
    nodoM=document.getElementById("mensaje");
    nodoM.innerText="";
    
    HabilitoTeclado(campo,4);
                       
}

//========================================================================================    
function cambioClave(){
    console.log("aca");
    console.log(Pin1);
    let unCliente = new Persona;
    unCliente=  arrayClientes.find(a=>a.pin == Pin1);
    console.log(unCliente);
    if (unCliente==undefined  ){
        
        arrayClientes = arrayClientes.filter(function(element){
         return element.pin !=clave;
        });
        miCliente.pin=Pin1;
       
        arrayClientes.push(miCliente);
       
        let clientesJson =JSON.stringify(arrayClientes);
        // LO GUARDO EN LOCLASTORAGE
        localStorage.setItem("misClientes",clientesJson);
        clave=Pin1;

        let misDatos=[];
        clientesJson =JSON.stringify(misDatos);
        // LO GUARDO EN LOCLASTORAGE
        localStorage.setItem("clienteElegido",clientesJson);
        
        misDatos.push(clave,miCliente.nombre,miCliente.saldo,miCliente.cbu);
        clientesJson =JSON.stringify(misDatos);
        // LO GUARDO EN LOCLASTORAGE
        localStorage.setItem("clienteElegido",clientesJson);
        
        
        location.href="cartel.html?mensaje="+"CAMBIO DE PIN REALIZADO";
    }
    else{
        location.href="cartel.html?mensaje="+" PIN REPETIDO";
        
    }   
    return;
        
        
        
 }
    
   