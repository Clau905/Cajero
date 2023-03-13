
let clientes=localStorage.getItem("misClientes");
let arrayClientes = [];
arrayClientes=JSON.parse(clientes);

let misDatos=[];

let clientesJson =JSON.stringify(misDatos);
// LO GUARDO EN LOCLASTORAGE
localStorage.setItem("clienteElegido",clientesJson);



let xMensaje = document.querySelector(".mensaje");
    
let xCliente =document.querySelector(".formheader");
let clave ="";


let xSubtit = document.querySelector(".subtit");
let x = document.querySelectorAll(".teclado");

let xpin = document.querySelector(".btnClave");   
for ( let ni=0; ni<=9; ni++){
 
       let bx =x[ni];
     
       bx.addEventListener("click",e=>{
       e.preventDefault();
       if (clave.length<4){
       clave = clave + bx.value;

        xpin.value = clave;
        xpin.style.color= "blue";
       }
       }
    )
}
    let xTitulo = document.querySelector(".formtitulo");
    let btnLimpia = document.getElementById("rojo");

    btnLimpia.addEventListener("click",e=>{
    e.preventDefault();
    clave = "";
    xpin.value = clave;
    xMensaje.innerHTML = "";

    } )

    let btnAdmin = document.querySelector(".admin");
    btnAdmin.addEventListener("click",e=>{   
        
        location.href="admin.html";
        })
   

    let btnConfirma = document.getElementById("verde");


    btnConfirma.addEventListener("click",e=>{
        
        e.preventDefault();
        clave = xpin.value ;
        
        // valido que el PIN exista
        let miCliente=new Persona();
        
        miCliente=arrayClientes.find(miCliente=>miCliente.pin == clave);

        
        if (miCliente===undefined){
            e.preventDefault();
            
            clave = "";
            xpin.value =clave;
            xMensaje.innerHTML = "PIN INCORRECTO, INTENTE NUEVAMENTE";
        }
        else{

            location.href="operaciones.html?clave="+clave;
           
        }
    })
   






 