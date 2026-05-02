function jawab(pilihan) {
    const respon = document.getElementById("respon");

    if (pilihan === "ya") {
        respon.innerText = "Ijuy: Wah, Timaacii Miaaaw";
    }
    else {
        respon.innerText = "Ijuy: Miaa Parah Ga mau Maafin ijuyy!!";
    }
}


const radios = document.querySelectorAll('input[name="cardV"]');
const videos = document.querySelectorAll('.cardV video');

radios.forEach((radio, i) => {
radio.addEventListener('change', () => {
videos.forEach(v => {
v.pause();
v.currentTime = 0;
});

videos[i].play();
});
});


