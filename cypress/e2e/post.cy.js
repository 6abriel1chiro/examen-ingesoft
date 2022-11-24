describe("twitter pirata", () => {
  it("muestra las publicaciones que ha hecho el usuario", () => {
    cy.visit("/");
    cy.get("#post-txt").type("hola mundo");
    cy.get("#post-button").click();
    cy.get("#posts-div").should("contain", "hola mundo");
  });
});
