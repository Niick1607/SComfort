const body = document.querySelector("body");
const sendBt = document.getElementById("sendInput");
const closeX = document.querySelector("h4");
const popUp = document.getElementById("centerPopUp");
let delay = 300;

window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

function loadProducts() {
    document.querySelectorAll(".cube").forEach(function (cube) {
        setInterval(function () {
            cube.style.opacity = '1';
        }, delay);
        delay += 250;
    });

}

function closePopUp(x) {
    body.style.overflow = 'auto';
    popUp.style.display = 'none';
    if (x === 'send') {
        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("emailInput").value;
        let data = { name, email };
        
        fetch('http://localhost:1600/api/store/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

loadProducts();
