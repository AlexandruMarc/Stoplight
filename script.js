const btn = document.querySelector(".btn");
const colors = ["Red", "Yellow", "Green"];
let light = -1;

setInterval(changeLight, 10000);

btn.addEventListener("click", changeLight);

function changeLight() {
    light = (light + 1) % colors.length; // Makes the color cyclic
    changeColor(light);
}

function changeColor(light) {
    btn.style.backgroundColor = colors[light];
}
