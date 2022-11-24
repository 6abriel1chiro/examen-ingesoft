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
    const result = {};
  
    const arr = str.split(' ');
        for(let word of arr) {
      if(result[word]) {
        result[word]++;
      } else {
        result[word] = 1;
      }
    }
    const myJSON = JSON.stringify(result);

    return myJSON;
}
else{
return "no se puede generar reporte"
}
}

export  {contarPalabras, contarApariciones, generarReportePalabras}
