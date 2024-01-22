const btn = document.querySelector(".btn");
const colors = ["Red", "Yellow", "Green"];
let light = 0;

setInterval(() => {
    changeLight();
}, 10000);

btn.addEventListener("click", () => {
    changeLight();
});

function changeLight() {
    changeColor(light);
    if (light == 0) {
        ++light;
    } else if (light == 1) {
        ++light;
    } else {
        light = 0;
    }
}

function changeColor(light) {
    btn.style.backgroundColor = colors[light];
}
