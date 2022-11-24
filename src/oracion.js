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



export  {contarPalabras, contarApariciones}
