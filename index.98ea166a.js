const e=document.querySelector("#post-txt"),t=document.querySelector("#post-form"),o=document.querySelector("#posts-div"),r=document.querySelector("#error-div");t.addEventListener("submit",(t=>{t.preventDefault();const n=e.value;" "===n?r.innerHTML="<p>no se puede ingresar un post sin texto</p>":o.innerHTML="<p>"+n+"</p>"}));
//# sourceMappingURL=index.98ea166a.js.map
