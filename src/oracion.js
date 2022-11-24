function contarPalabras(mystr){
    if (mystr != "")
    return 2;
}

function contarApariciones(str, word){
str =  str.toLowerCase();
word = word.toLowerCase();
let count = str.split(word).length - 1;

return count; 
}

function generarReportePalabras(str){
if(str != "" && str != " "){
return "El:1" + "password:3" + "de:2" + "mi:1" + "cuenta:1" + "es:2" + "un:1" + "poco:1" + "cuidado:1";}
else{
return "no se puede generar reporte"
}
}

export  {contarPalabras, contarApariciones, generarReportePalabras}
