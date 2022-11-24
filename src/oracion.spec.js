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
});