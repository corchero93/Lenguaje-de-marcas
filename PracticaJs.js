window.onload=function(){
    document.getElementById("tengoCarnet").onclick=a;
    document.getElementById("noCarnet").onclick=b;
    document.getElementById("tengoCoche").onclick=c;
    document.getElementById("noCoche").onclick=d;
    document.getElementById("formulario").onsubmit=as;
    document.getElementById("boton").onclick=es;
    function a(){ // Empezamos a hacer que se oculte si no es un si//
        document.getElementById("bloqueCoche").classList.remove("oculto");
    }
    function b(){
        document.getElementById("bloqueCoche").classList.add("oculto");
        d();
        
        
    }
function c(){
    document.getElementById("bloqueMarca").classList.remove("oculto");
    document.getElementById("bloqueCoche").value="cocheNo";
}
function d(){
    document.getElementById("bloqueMarca").classList.add("oculto");
    document.getElementById("color").value= 000000;
    document.getElementById("marc").value="p";
    document.getElementById("bloqueCoche").checked=true;
}

//Hacemos que compruebe que las contras son iguales//
function as(){
    
    var contra = document.getElementById("contra").value;
    var contra2= document.getElementById("contra2").value;
    if(contra == contra2){
        alert("contraseña correctas")
        return true;

    }
    alert("Las contraseñas no son iguales");
    return false;
}

function comprobar(nombre2){ //COMPROBAR QUE LOS NOMBRES SON TODO LETRAS
    var nom="abcdefghijklmnñopqrstuvwxyz áéíóú";
    if(nombre2.length<1){
        alert("esta vacio")
        return false;
    }
    for(var i=0; i<nombre2.length; i++){ 
        if(nom.indexOf(nombre2[i].toLowerCase())<0){
           alert("no son correctos")
            return false;
        }
        
    }0
    alert("todo esta ok");
    return true;

}
function es(){  //COMPROBAR QUE TODOS LOS DATOS SON CORRECTOS
var nombr=document.getElementById("nombre").value;
var apellido=document.getElementById("apellido").value;
var apellido2=document.getElementById("apellido2").value;
if(comprobar(nombr)&&comprobar(apellido)&&comprobar(apellido2)){
    document.getElementById("texto").value= "Datos introducidos correctamente";
    alert("Tras comprobar los datos requeridos,el formulario se envia");

}

else {
alert("datos incorrectos"); 
document.getElementById("texto").value="";
}
}
}