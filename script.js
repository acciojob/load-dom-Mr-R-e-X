//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let p = document.createElement("p");
  p.innerText = `DOM load success`;
  body.appendChild(p);
});
