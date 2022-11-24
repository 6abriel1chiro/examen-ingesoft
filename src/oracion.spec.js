import {contarPalabras, contarApariciones} from "./oracion"
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