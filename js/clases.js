function Extraccion(cantidad_a_extraer,saldo)
{
    let dev_salir = true;


    cantidad_a_extraer=parseFloat(cantidad_a_extraer);
    saldo=parseFloat(saldo);
    if (cantidad_a_extraer>saldo){

        dev_salir = false;
  
       
        location.href="noretirobilletes.html?lave="+clave;
   
        return false;
    }
   

    else{   
   
      
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
                }else if(resto>=500) 
                    {
                    de_500=Math.floor(resto/500);
                    resto=resto-(de_500*500);
                    cadena+=" "+de_500+ " billetes de $500";
                    }
                    else if(resto>=200){
                        de_200=Math.floor(resto/200);
                        resto=resto-(de_200*200);
                        cadena+=" "+de_200+ " billetes de $200";
                        }else 
                        {
                        de_100=resto/100;
                        resto=resto-(de_100*100);
                        cadena+=" "+de_100+ " billetes de $100";
                        }                 
                                  
            }
            //alert(cadena);
          
           
            location.href="retirobilletes.html?clave="+clave;
           
            
        }  
        
   
        else{
            dev_salir=false;

            let nodoMen=document.getElementById("r2");
            nodoMen.innerText=mensaje;
           
        }   
    }       
    return dev_salir;
}



let mesaje='';


function validar_monto(cantidad) {
    // espera recibir un valor Numerico
    // valida que el valor ingresado sea >=100
    //<= 60.000
    // multiplo de 100
    
    
    let dev = true;     
    cantidad=parseInt(cantidad);
    if( isNaN(cantidad)==true){
        mensaje="Debe ingresarse un Nro.";       
        dev =false;
    }
   
    if (dev==true)
    {

        if (cantidad <100)
        {
                mensaje="Debe ingresarse un Monto superior a 100$";
                dev=false;
        }
        else if (cantidad >60000 ) 
            {
      
            mensaje="El Monto Supera el limite permitido ($60.000)";
            dev=false;
        
            } 
            else if (cantidad%100!=0) 
            {
            // no es multiplo de 100
            mensaje="La Cantidad debe ser multiplo de 100";
            dev=false;
            }           
            
    }
    return dev;
 }
    
class Persona
    {
        constructor(dni,pin,apynom,saldo,cbu){

            this.apynom=apynom;
            this.pin=pin;
            this.saldo=saldo;
            this.dni =dni;
            this.cbu=cbu;
            
        }
        setNombre(nombre){
            this.apynom=apynom;
        }
        setDni(dni){
            this.dni=dni;
        }
        setPin(pin){
            this.pin=pin;
        }
        setSaldo(saldo){
            if (saldo>0){
            this.apynom=saldo;
            }
        }
        setCBU(cbu){
            if (saldo>0){
            this.cbu=cbu;
            }
        }
        getCBU(cbu){
            return this.cbu;
        }
        getNombre(nombre){
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
            let cliente = new Persona();
            let dev =false;
            for (cliente of arrayClientes){
                if (cliente.pin == pin){
                    
                    return cliente;
                    dev= true;
                    break;
                }

            }
            if (dev == false){
                cliente = null;
            }
        return cliente;
        }
    } 
    
function HabilitoTeclado(idCampo,longitud){
    x = document.querySelectorAll(".teclado");
    let valorIngresado="";

    xpin = document.getElementById(idCampo);   
;   xpin.style.backgroundColor ="lightblue";
    for ( let ni=0; ni<=9; ni++){
 
        let bx =x[ni];
     
        bx.addEventListener("click",e=>{
            e.preventDefault();
            if (valorIngresado.length<longitud){
            valorIngresado=valorIngresado + bx.value;

            xpin.innerText=valorIngresado;
            xpin.style.color= "blue";
            }
       })
    }

}
 
function devFecha(){

    const miFEcha=luxon.DateTime;
    let m = miFEcha.now();
    let fecha =m.day;
    fecha = fecha +"/"+m.month+"/"+m.year;
   
    return fecha;
   
  }
  function devHora(){
    let hora="";
    const miFEcha=luxon.DateTime;
    let m = miFEcha.now();
   
  
    hora =m.hour+":";
    hora = hora+m.minute;
   
    return hora;
   
  }