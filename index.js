let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");

p.textContent = localStorage.getItem("ism");

button.addEventListener('click', (event) => {
    event.preventDefault();

    let input2 = input.value;

    localStorage.setItem("ism", input2);

    p.textContent = localStorage.getItem("ism");

    input.value = "";
});