let sayt = document.querySelector(".sayt");
let sun = document.querySelector(".sun");
sun.onclick = function () {
  sayt.classList.toggle("dark");
  sun.classList.toggle("moon");
};
let modal = document.querySelector(".modal");
function openModal() {
  modal.classList.toggle("modal_open");
}
let links = document.querySelector(".n-right");
let scroll1 = document.querySelector(".sayt");
function openNav() {
  links.classList.toggle("menu");
  scroll1.classList.toggle("hidden");
}
let inp = document.querySelector(".inp");
let h1 = document.querySelector(".h1");
function korsat() {
  console.log(inp.value);
  h1.innerHTML = inp.value;
  scroll1.style.background = inp.value;
}
