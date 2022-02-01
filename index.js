const Toggle = document.querySelector(".toggle");
const Links = document.querySelector(".links");
const card = document.querySelector(".card");
const add = document.querySelector(".add");
const buy = document.querySelector(".buy");

Toggle.addEventListener('click', () => {
   Links.classList.toggle("links_visible");
})

card.addEventListener('click', () => {
   add.classList.toggle("agrandado");
   if (add.matches('.agrandado') == true) {
      buy.classList.add("buy_display");
   } else {
      buy.classList.remove("buy_display");
   }
})