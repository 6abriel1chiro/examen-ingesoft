import {contarPalabras, contarApariciones, generarReportePalabras} from "./oracion"
describe("contar palabras", () => {
  it("deberia devolver cuantas palabras tiene mi string", () => {
    expect(contarPalabras("hello world")).toEqual(2);
  });
  it("deberia devolver empty si esta vacio", () => {
    expect(contarPalabras("")).toEqual("empty");
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
    expect(generarReportePalabras("El password de mi cuenta es PASSWORD Es un password de poco cuidado")).toEqual("{\"El\":1,\"password\":2,\"de\":2,\"mi\":1,\"cuenta\":1,\"es\":1,\"PASSWORD\":1,\"Es\":1,\"un\":1,\"poco\":1,\"cuidado\":1}");
  });

  it("deberia devolver el reporte de cuantas veces ocurre cada palabra", () => {
    expect(generarReportePalabras("The brown dog jumped over the lazy dog when the brown fox was sleeping")).toEqual("{\"The\":1,\"brown\":2,\"dog\":2,\"jumped\":1,\"over\":1,\"the\":2,\"lazy\":1,\"when\":1,\"fox\":1,\"was\":1,\"sleeping\":1}");
  });


  it("deberia devolver  [no se puede generar reporte] si la cadena es vacia", () => {
    expect(generarReportePalabras("")).toEqual("no se puede generar reporte" );
  });



});