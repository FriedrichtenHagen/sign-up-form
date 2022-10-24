const price = document.querySelector("#price");
const output = document.querySelector(".price-output");
const color = document.querySelector("#color")
const body  = document.querySelector("body")


output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
});


color.addEventListener("input", () => {
    body.style.backgroundColor = color.value;
})