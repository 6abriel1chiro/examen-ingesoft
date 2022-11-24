import {contarPalabras, contarApariciones, generarReportePalabras} from "./oracion"
describe("contar palabras", () => {
  it("deberia devolver cuantas palabras tiene mi string", () => {
    expect(contarPalabras("hello world")).toEqual(2);
  });
});

describe("ver apariciones de una palabra", () => {
  it("deberia devolver cuantas veces aparece una palabra en string", () => {
    expect(contarApariciones("mi password es password","password")).toEqual(2);
  });


  it("deberia no deberia diferenciar entre mayuscula y minuscula", () => {
    expect(contarApariciones("mi PASSWORD es passWord, que mala password","PassWord")).toEqual(3);
  })

});

describe("ver reporte ompleto de un string", () => {
  it("deberia devolver el reporte de cuantas veces ocurre cada palabra", () => {
    expect(generarReportePalabras("El password de mi cuenta es PASSWORD. Es un password de poco cuidado")).toEqual("El:1" + "password:3" + "de:2" + "mi:1" + "cuenta:1" + "es:2" + "un:1" + "poco:1" + "cuidado:1" );
  });

  it("deberia devolver  [no se puede generar reporte] si la cadena es vacia", () => {
    expect(generarReportePalabras("")).toEqual("no se puede generar reporte" );
  });



});