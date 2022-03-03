//divide el string en horas min y seg
function hoMinSec(h){
    let splited = h.split(":"); 
    return splited;
}

//verifica que sea válida la entrada
function invalidHour(time){
    if(time === "" || longitud !== 3) return false;
    //variables que contienen la  hora por partes
    let horas = Number(hoMinSec(time)[0],10); 
    let minutos = Number(hoMinSec(time)[1],10);  
    let segundos = Number(hoMinSec(time)[2].slice(0,2),10); 
    let longitud = hoMinSec(time).length; 
    
    //topdos los casos no válidos
    if(horas > 12) return false; 
    if(minutos > 59) return false;
    if(segundos > 59) return  false;
    
    
    
    //si no pasa ningun filtro entonces retorna true
    return true;
}

//especifica el tipo de conversion
function Greenwich(time){
    
    // variables que contienen las posibles copmbinaciones para transformar la hora    
    let am12 = hoMinSec(time)[2].slice(2); 
    let pm12 = hoMinSec(time)[2].slice(2); 
    let is12 = hoMinSec(time)[0];
    let AM = hoMinSec(time)[2].slice(2);
    let PM = hoMinSec(time)[2].slice(2);
    
    //todos los casos de conversion copntemplando el caso particular de las 12 y 00 hs
    if(am12 === "AM" &&  is12 === "12"){
        return "12am";
    }else if(pm12 === "PM" && is12 === "12"){
        return "12pm";
    }else if( AM === "AM"){
        return "antes";
    }else if(PM === "PM"){
        return "despues";
    }
  } 

// formatos segun el AM o PM
function returnAM(hoMinSec){
    return hoMinSec.join(":").slice(0,-2);
}
function returnPM(hoMinSec){
    hoMinSec[0] = parseInt(hoMinSec[0], 10) + 12;
    return hoMinSec.join(":").slice(0,-2);
}
function is12am(hoMinSec){
    hoMinSec[0] = (parseInt(hoMinSec[0], 10) - 12) + "0";
    return hoMinSec.join(":").slice(0,-2);
}
function is12pm(hoMinSec){
    return hoMinSec.join(":").slice(0,-2);
}

//console.log(returnPM(hoMinSec(aux2)));
function timeConversion(time){
    let valido = invalidHour(time); 
    if(!valido) return false;

    if(Greenwich(time) === "antes"){
        return returnAM(hoMinSec(time));
    }else if(Greenwich(time) === "despues"){
        return returnPM(hoMinSec(time));
    }else if(Greenwich(time) === "12am"){
        return is12am(hoMinSec(time));
    }else{
        return is12pm(hoMinSec(time))
    }
}

//testeando ando
var t = "";
console.log(timeConversion(t));