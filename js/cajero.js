


// el usuario pide extraer x cajero automatico una suma de dinero
function Extraccion(){
let dev_salir = false;

while (dev_salir !=true)  {

    let cantidad_a_extraer = prompt("Ingrese el Monto a Extraer, para salir ingrese *");

   
    if (cantidad_a_extraer!="*") {
      
        if (validar_monto(cantidad_a_extraer)==true) {

            // todo ok, se procede a entregar el dinero
            // primero intento billetes de 1000
            // luego de 500
            // luego de 200
            // luego de 100

            let de_mil=0, de_500=0, de_200=0, de_100=0;
                    
            let resto = parseInt(cantidad_a_extraer);
            let cadena = "se entregron: "+cantidad_a_extraer+"$ de la siguiente manera:";
            while (resto>0){      
                if (resto>1000){
                    de_mil=Math.floor(resto / 1000);
                    resto = resto - (de_mil*1000);
                    cadena+=" "+de_mil+ " billetes de $1000";
                }else if(resto>=500)   {
                    de_500=Math.floor(resto/500);
                    resto=resto-(de_500*500);
                    cadena+=" "+de_500+ " billetes de $500";
                    }
                    else if(resto>=200){
                        de_200=Math.floor(resto/200);
                        resto=resto-(de_200*200);
                        cadena+=" "+de_200+ " billetes de $200";
                        }else {
                        de_100=resto/100;
                        resto=resto-(de_100*100);
                        cadena+=" "+de_100+ " billetes de $100";
                    }                 
                                  
            }
            alert(cadena);
            console.log("Operacion Exitosa!");
        }  
        
    } 
    else{
        dev_salir=true;
        alert("Gracias por su Visita" );
    }       
}
}
function validar_monto(cantidad) {
    // espera recibir un valor Numerico
    // valida que el valor ingresado sea >=100
    //<= 60.000
    // multiplo de 100
    
   
    let dev = true;     
    cantidad=parseInt(cantidad);
    if( isNaN(cantidad)==true){
        alert("Debe ingresarse un Nro.");       
        dev =false;
    }
   
    if (dev==true)
    {

        if (cantidad <100)
        {
                alert("Debe ingresarse un Monto superior a 100$");
                dev=false;
        }
        else if (cantidad >60000 ) 
            {
      
            alert("El Monto Supera el limite permitido ($60.000)");
            dev=false;
        
            } 
            else if (cantidad%100!=0) 
            {
            // no es multiplo de 100
            alert("La Cantidad debe ser multiplo de 100");
            dev=false;
            }           
            
    }
    return dev;
 }
    
class Persona
    {
        constructor(_dni,_pin,_apynom,_saldo){

            this.apynom=_apynom;
            this.pin=_pin;
            this.saldo=_saldo;
            this.dni =_dni;
            
        }
        setNombre(_nombre){
            this.apynom=_nombre;
        }
        setDni(_dni){
            this.dni=_dni;
        }
        setPin(_pin){
            this.pin=_pin;
        }
        setSaldo(_saldo){
            if (_saldo>0){
            this.apynom=_saldo;
            }
        }

        getNombre(_nombre){
            return this.apynom;
        }
        getDni(){
            return this.dni;
        }
        getPin(){
           return  this.pin;
        }
        getSaldo(){
            
            return this.saldo;
            
        }
        TraerCliente(pin){
            // traera el cliente que tetga el pin indicado
            let cliente = new Persona(0,0,"xxx",0);
            let dev =false;
            for (cliente of misClientes){
                if (cliente.pin == pin){
                    console.log("lo encontre "+cliente.pin);
                    return cliente;
                    dev= true;
                    break;
                }

            }
            if (dev == false){
                cliente = new Persona(0,0,"xxx",0);
            }
        return cliente;
        }
    } 

    //creo personas de prueba
    let persona1 = new Persona(16230459,1111,"Hernandez Jose",20000);
    let persona2 = new Persona(40600359,2222,"Villalva Luciana",123000);
    let persona3 = new Persona(25230666,6792,"Hernandez Jose",1220000);
    let persona4 = new Persona(34700359,1232,"Jimenez Sara",760000);



    let ape1= persona1.getNombre();
    let midni =persona1.getDni();
    let misClientes=[];
    misClientes.push(persona1,persona2,persona3,persona4);

    //console.log(`SOY ${ape1}  y mi DNI es ${midni} `);

    let xpin = document.querySelector(".btn");
    let xMensaje = document.querySelector(".mensaje");
    
    let xCliente =document.querySelector(".formheader");
    let clave ="";

    let x = document.querySelectorAll(".teclado");
    let xSubtit = document.querySelector(".subtit");
    xSubtit.removeAttribute("hidden");
    //console.log(x.length);
    //console.log(x[9].value) ;  
    for ( let ni=0; ni<=9; ni++){
       let bx =x[ni];
      
       bx.addEventListener("click",e=>{
       e.preventDefault();
       clave = clave + bx.value;

        xpin.value = clave;
        xpin.style.color= "blue";
        //xCliente.style.visibility=den"
       }
       )
    }
    let xTitulo = document.querySelector(".formtitulo");
    let btnLimpia = document.querySelector(".btnlimpia");

    btnLimpia.addEventListener("click",e=>{
    e.preventDefault();
    clave = "";
    xpin.value = clave;
    } )


    let btnConfirma = document.querySelector(".btnconfirma");
    btnConfirma.addEventListener("click",e=>{
        
        e.preventDefault();
        clave = xpin.value ;
        let  micli = new Persona(0,"ddd",0);
        micli =micli.TraerCliente(clave);
        console.log(micli.getDni());
        if (micli.dni==0){
            //alert("pin incorrecto");
            xTitulo.innerHTML = "BIENVENIDO";
            clave = "";
            xpin.value =clave;
            xMensaje.innerHTML = "PIN INCORRECTO, INTENTE NUEVAMENTE";
        }
        else{
            //alert("BIENVENIDO "+micli.apynom);
            xTitulo.innerHTML = "BIENVENIDO "+micli.apynom;
            xMensaje.innerHTML = " ";
            xSubtit.setAttribute("hidden","true");
        }
    })
   






 