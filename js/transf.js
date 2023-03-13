

let valores = window.location.search;
let cargo = 1;
// bandera que indica que lleno cbu;
//Creamos la instancia
let urlParams = new URLSearchParams(valores);

//Accedemos a los valores de os parametros
let clave = urlParams.get('clave');

let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);
let miCliente=new Persona();
let miCliente2=new Persona();
miCliente=arrayClientes.find(miCliente=>miCliente.pin === clave);
let cbu2 ="";
let parrafo = document.getElementById("nom");
parrafo.innerHTML=miCliente.nombre+"   CBU: "+miCliente.cbu;

HabilitoTeclado("cbu2",22);





let btns = document.getElementsByClassName("btnPeq");
for (let boton of btns){

    boton.addEventListener("click", (evento)=>{
    let op="";
    
   
    opcion=boton.id;
    switch (opcion){

        case "conf":{
            presionoConf();
            break; 
        } 

        case "borra":{

            presionoModif();
            break;
        } 
           
        case "sale":{
           
            location.href="operaciones.html?clave="+clave;
            break; 
            }
        

    }


    

    })
        
    
}   
function validoCBU(xcbu2) {
    let dev = true;

    let unCliente="";
    unCliente=arrayClientes.find(miCliente=>miCliente.cbu === xcbu2 );

    if (unCliente==undefined){
        dev = false;
        // el cbu2 es invalido
        //no exsite cbu
        nodoM=document.getElementById("mensaje");
        nodoM.innerText="LA CBU INGRESADA ES  INCORRECTA!!!!";
        cargo=1;
    }
    else{

        if (unCliente.pin===clave){
            cargo=1;
            dev=false;
            nodoM=document.getElementById("mensaje");
            nodoM.innerText="ERROR, NO SE PUEDE TRANSFERIR A LA MISMA CUENTA!!!!";
            
           
        }
    }


    return dev;

}


function Transferencia(monto,cbu2){
let dev =true;
   
        if (monto>60000){
            dev= false;
            location.href="cartel.html?mensaje="+"NO SE PUEDE TRANSFERIR MAS DE $60.000";
    
        }
        else{
            miCliente2=arrayClientes.find(a=>a.cbu === cbu2 );
            
            console.log(miCliente2);
            miCliente2.saldo=miCliente2.saldo+parseFloat(monto);
            miCliente.saldo=miCliente.saldo-monto;
    
       
            // actualizo saldo
       
            arrayClientes = arrayClientes.filter(function(element){
            return element.pin !=clave;
            });
    
        
            arrayClientes = arrayClientes.filter(function(element){
            return element.cbu !=cbu2;
        });
        arrayClientes.push(miCliente,miCliente2);
    
        let clientesJson =JSON.stringify(arrayClientes);
        // LO GUARDO EN LOCLASTORAGE
        localStorage.setItem("misClientes",clientesJson);
     
        location.href="cartel.html?mensaje="+"Transferencia Exitosa";
    
    
    
    
        }
        
        return dev;
    
    
    
}

        
      
function presionoConf(){
// hay que validar ue la cbu exista
// y que el importe a  transferir sea <=saldo
                
let dev = true;


if ( cargo==1){
    cbu2 = document.getElementById("cbu2");
                  
    cbu2=cbu2.innerText;
                   
    dev=  validoCBU(cbu2);
      
    if ( dev == true){
    
        //habilito importe
        cargo = 2;     
        parrafo = document.getElementById("importe");
        parrafo.innerHTML="Ingrese el importe:";
        parrafo = document.getElementById("ingresopesos");    
        nodoP=document.createElement("p");
        nodoP.id="pesos";
        nodoP.contentEditable=false;
        parrafo.appendChild(nodoP);
        HabilitoTeclado("pesos",6);
        
                    
    }
}
else{
    // cargo es 2
    // dio conf pero en importe

    dev = validoImporte();
   
    if (dev ==true)    { 
     
        
            //hago la transferencia
          
            let montoATransferir=0;
            let nodoMonto= document.getElementById("pesos");
            let nodoCbu2= document.getElementById("cbu2");                    
            montoATransferir=parseFloat(nodoMonto.innerText);
               
            cbu2=nodoCbu2.innerText;
           
            let transfer=Transferencia(montoATransferir,cbu2)    ;  
            
                        
        }
    }
}
function validoImporte(){
let dev = true;
if(document.getElementById("pesos").innerText.length==0){
    let nodoM=document.getElementById("mensaje");
    nodoM.innerText="INGRESE EL IMPORTE";
    cargo=2;
    dev = false;
  
               
}

return dev;
}




function presionoModif(){

   
    if ( cargo==1){
            
           
           
            //limpio cbu 
            nodoP=document.getElementById("cbu2");
            nodoP.innerText=""
            nodoP.contentEditable=false;
            nodoM=document.getElementById("mensaje");
            nodoM.innerText="";
            //habilito importe
            HabilitoTeclado("cbu2",22);
                   
          
        }
        else{
            // cargo es 2
           
            //hago la transferencia
            let montoATransferir=0;
            let nodoMonto= document.getElementById("pesos");
               
            nodoMonto.innerText="";
            
            HabilitoTeclado("pesos",6);
           
            return;
                
            
        }
    }