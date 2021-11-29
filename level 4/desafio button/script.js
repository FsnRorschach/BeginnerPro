let btn = document.querySelector("#resultado button");
let targ;

document.getElementById('background_color').addEventListener('input', (event) => {
    event.preventDefault();
    targ = event.target.value;
    console.log(targ);
    btn.style.background = targ;
});

btn.addEventListener('click', (event) => {

});