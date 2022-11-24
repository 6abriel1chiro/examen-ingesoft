
const text = document.querySelector("#post-txt");
const form = document.querySelector("#post-form");
const div = document.querySelector("#posts-div");
const error = document.querySelector("#error-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  const publicacion = text.value;

  div.innerHTML = "<p>" + publicacion + "</p>";

});
