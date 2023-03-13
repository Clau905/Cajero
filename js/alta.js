let btnRegistro1 =document.getElementById("btnRegistro1" );
btnRegistro1.addEventListener("click",Registrar);


let btnRegistro2 =document.getElementById("btnRegistro2" );
btnRegistro2.addEventListener("click",Limpiar);


let btnRegistro3 =document.getElementById("btnRegistro3" );
btnRegistro3.addEventListener("click", e=>{ location.href="index.html"});



let camposTexto =document.getElementsByTagName("input");
let ul = document.querySelector("ul");
for ( let _campo  of camposTexto){
    _campo.addEventListener("change",borroMensaje)
}



//CONVIERTO MI LOCALSTORAGE EN OBJETOS
let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);


if ( arrayClientes==null){
    arrayClientes=[];
}
MostrarClientes()
// ahora es un  arreglo de objetos

let mensaje="";
let apynom = "";
let pin ="";
let dni = "";
let saldo = "";
let cbu="";

////// FUNCIONES NECESARIAS ///////////////
function Registrar(){   
    apynom = document.getElementById("apynom").value;
    pin = document.getElementById("pin").value;
    dni = document.getElementById("dni").value;
    saldo = document.getElementById("saldo").value;
    cbu = document.getElementById("cbu").value;


    let dev = valido(apynom,pin,dni,saldo,cbu);
   
    borroMensaje();
    if (dev==true){
        // LA VALIDACION DIO TRUE, LO VOY A DAR DE ALTA
        //CONVIERTO MI LOCALSTORAGE EN OBJETOS
        let unCliente={nombre:apynom, pin:pin,dni:dni,saldo:saldo,cbu:cbu};
        //////// LO AGREGO A MI ARRAY
        arrayClientes.push(unCliente);
        cli=unCliente;
        //// AHORA, CON EL ARRAY COMPLETO, LO PASO A STRING JSON PARA PODER GUARDARLO
        let clientesJson =JSON.stringify(arrayClientes);
        // LO GUARDO EN LOCLASTORAGE
        localStorage.setItem("misClientes",clientesJson);
       
        agregarCliente();
        Limpiar();
   
    }else{

        let midiv= document.createElement("div")    ; 
        midiv.className="mensaje";
        let h = document.createElement("p") ;     
        let t = document.createTextNode(mensaje);     // Create a text node con el mensaje de error q corresponda
        h.appendChild(t);    
        midiv.appendChild(h);


        let minodo=document.getElementById("bloque");
        minodo.appendChild(midiv); 


    }

}

function valido( _apynom,  _pin,  _dni,  _saldo,_cbu){


    let dev =  true;   
    // VALIDO APELLIDO Y NOMBRE
    if (_apynom.length==0){
        dev = false;
        mensaje="Deben completarse Apellido y Nombre";
    } 



    //VALIDO DNI
    if (dev==true){

        // VALIDA QUE SE HAYA INGRESADO DNI
        // Y YE QUE SEA NUMERICO
       
        if(_dni.length==0){

            dev=false;
            mensaje="Deben completarse DNI";

        }
        else if(isNaN(_dni)){

            dev = false;
            mensaje="Error, el DNI debe ser numerico";

        }
    }

    //VALIDO PIN DE CAJERO -----------------------------------------
  
    if (dev==true){
        if ( _pin.length!=4 ){
            dev = false;
            mensaje="El PIN debe ser de cuatro digitos";
        }
    }

    if(dev==true){
        // VALIDO QUE EL PIN SEA NUMERICO
        if (isNaN(_pin)){
            mensaje="Error, el PIN debe contener solo numeros";
            dev = false;
        }
    }


 
    if (dev==true){
        // VALIDO QUE NO ESTE REPETIDO EL PIN
        if (arrayClientes != null){
            for(let cli of arrayClientes){
                if (_pin==cli.pin){
                    mensaje ="Error,el cliente ya existe (PIN)";
                    dev=false;
                    break;

                }
            }
           
        }
    }
      // valido cbu 
    if(dev==true){  
       
            if (_cbu.length!=22 || isNaN(_cbu)  || cbu<=0    ){
                dev= false;
                mensaje="El CBU es incorrecto";
            } 
            if(dev==true){
                    //validp que cbu no este repetido

                    let miCliente2=arrayClientes.find(miCliente2=>miCliente2.cbu === cbu);
                    if (miCliente2!==undefined) {
                 
                        mensaje ="Error,  CBU ya existe)";
                        dev=false;
                    }
                }
          
    }            
    
    //---------------------------------------------------------
    ///VALIDO SALDO
   
    if (dev==true){
        if (_saldo.length==0 || isNaN(_saldo)){
            dev= false;
            mensaje="El saldo debe ser Numerico";
        } 
    }   
    
    // VALIDO QUE EL SALDO SEA MAYOR O IGUAL A CERO
    if (dev==true){
        _saldo=parseFloat(_saldo);
        if ( _saldo<0){
            mensaje="El saldo no puede ser negativo";
            dev = false;

        }
    }
    
   
    return dev;
 
}

function borroMensaje(){
    let minodo=document.getElementById("bloque");
   
    if (minodo.childNodes.length > 7){
           
        let padre = document.getElementById("bloque");
        let hijo = document.querySelector(".mensaje")
        padre.removeChild(hijo);
            
    };
       
       
}

    
function Limpiar(){
    document.getElementById("apynom").value="";
    document.getElementById("pin").value="";
    document.getElementById("dni").value="";
    document.getElementById("saldo").value="";
    document.getElementById("cbu").value="";
    borroMensaje();
}
function MostrarClientes(){
    //  arrayClientes es mi array de clientes 
    // PRIMERO MUESTRO TODOS LOS QUE ESTABAN EN LOCALSTORAGE

   let text = "";
    for (let cli of  arrayClientes){
       

        text = cli.nombre+ "-  PIN: "+cli.pin+ " CBU: "+cli.cbu+"   Saldo: $"+cli.saldo;



        let li = document.createElement("li");
        let p = document.createElement("p");
        let inP = document.createElement("button");
        inP.innerText="X";
        inP.className="borrar";
        inP.id=cli.pin;
        inP.addEventListener("click",eliminarItem);
    
        p.textContent = text;
        li.appendChild(p);
        p.appendChild(inP);
        ul.appendChild(li);
       
       
    }  



}
function agregarCliente(){
    // AGREGA EL NUEVO CLIENTE AL LISTADO EN PANTALLA
   
    text = cli.nombre+ "-  PIN: "+cli.pin+ " CBU: "+ cli.cbu +"   Saldo: $"+cli.saldo;
   
    let li = document.createElement("li");
    let p = document.createElement("p");
    let inP = document.createElement("button");
    inP.innerText="X";
    inP.className="borrar";
    inP.id=pin;

    inP.addEventListener("click",eliminarItem);
    p.textContent = text;

    li.appendChild(p);
    p.appendChild(inP);
    ul.appendChild(li);


}
function eliminarItem(e){

    let id=e.target.id;
   
      
    ////FILTRO MIS CLIENTES  QUITANDO EL QUE SE DESEA BORRAR (EL PIN ES UNICO)
    arrayClientes = arrayClientes.filter(function(element){
    return element.pin !=id;
    });

    let clientesJson =JSON.stringify(arrayClientes);
    // LO GUARDO EN LOCLASTORAGE
    localStorage.setItem("misClientes",clientesJson);
    
    
    // borro todos los registros mostrados y actualizo
    let ul = document.querySelector("ul");
    let renglon = ul.firstChild;
    while( renglon ) {
        ul.removeChild( renglon );
        renglon = ul.firstChild;
    }
    MostrarClientes()           


}
