describe("twitter pirata", () => {
  it("muestra las publicaciones que ha hecho el usuario", () => {
    cy.visit("/");
    cy.get("#post-txt").type("hola mundo");
    cy.get("#post-button").click();
    cy.get("#posts-div").should("contain", "hola mundo");
  });


  it("muestra las publicaciones que ha hecho el usuario", () => {
    cy.visit("/");
    cy.get("#post-txt").type("");
    cy.get("#post-button").click();
    cy.get("#error-div").should("contain", "no se puede ingresar un post sin texto");
  });
});
