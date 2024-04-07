const body = document.querySelector("body");
const sendBt = document.getElementById("sendInput");
const closeX = document.querySelector("h4");
const popUp = document.getElementById("centerPopUp");
let delay = 300;

function loadProducts() {
    document.querySelectorAll(".cube").forEach(function(cube){
        setInterval(function() {
            cube.style.opacity = '1';
        }, delay);
        delay+=250;
    });
    
}

function closePopUp(x) {
    body.style.overflow = 'auto';
    popUp.style.display = 'none';
    if (x === 'send'){
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        console.log(`${name}, ${email}`);
    }
}

loadProducts();
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});