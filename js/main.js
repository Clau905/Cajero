
let btns = document.getElementsByClassName("btn");

const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var importe = urlParams.get('importe');


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
            monto = 150000; 
            break; 
        }
        case 4:{
            monto = 20000; 
            break; 
        }
        case 5:{
            monto = -1; 
            break; 
        }
        case 6:{
            monto = -2; 
            break; 
        }


    }




    })
        
        
        
        
      
}


