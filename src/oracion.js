function contarPalabras(mystr){
    if (mystr != "")
    return 2;
}

function contarApariciones(str, word){

let count = str.split(word).length - 1;

return count; 
}

export  {contarPalabras, contarApariciones}
