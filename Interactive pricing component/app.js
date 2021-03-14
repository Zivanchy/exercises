const slider = document.querySelector("#slider");
const output = document.querySelector("#output");
const checkbox = document.querySelector("#checkbox");

let discount = false;

slider.addEventListener("input", (e) => {
  if (discount === true) {
    output.textContent = "$" + e.target.value * 0.75;
  } else {
    output.textContent = "$" + e.target.value;
  }
});

checkbox.addEventListener("click", () => {
  if (discount === false) {
    discount = true;
  } else if (discount === true) {
    discount = false;
  }
});
