let valores = window.location.search;

//Creamos la instancia
let urlParams = new URLSearchParams(valores);

//Accedemos a los valores de os parametros
let clave = urlParams.get('clave');


const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);
    let nOficial = data[0].casa.nombre+ ": "+ data[0].casa.venta+"$";
    let  NodoOf = document.getElementById("ofVta");
    NodoOf.innerText=nOficial;

    NodoOf = document.getElementById("blue");
    nOficial= data[1].casa.nombre+ ": "+ data[1].casa.venta+"$";
    NodoOf.innerText=nOficial;
  
  })

  let nodoFecha=document.getElementById("r0");
  nodoFecha.innerText="  Cotizacion del Dolar en Argentina             "+devFecha();



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


  function mostrarHoraborrar(){
    let hora = luxon.DateTime;
    
    hora =DateTime.now().toFormat('MM-dd-yyyy');
   return  hora;
  }
  
    





