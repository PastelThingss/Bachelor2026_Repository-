function changeSlide(btn, direction) {
    //finn den bilde carouselen denne knappen er med/tilhører til
    const carousel = btn.closest('.carousel');
    //bilder som er i kortet og tellern hvor mange bilder er det
    const imgs = carousel.querySelectorAll(`.carousel-imgs img`);
    const counter = carousel.querySelector('.carousel-counter');

    //finn hvilket bilde som vises nå altså aktivt vises på skjeremn
    let current = 0;
    imgs.forEach((img, i) => {
        if (!img.classList.contains(`hidden`)) current = i;
    });

    //skul/gjem nåværende bilde og vis neste bilde
    imgs[current].classList.add(`hidden`);
    let next = (current + direction + imgs.length) % imgs.length;
    imgs[next].classList.remove(`hidden`);

    //oppdater teller tallet
    counter.textContent = (next + 1) + ` / ` + imgs.length;

}

function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
}

//JS FOR SEND EN FORESPØRSEL SKJEMA PÅ SIDEN KONTAKT OSS
const form = document.querySelector("form");
const para = document.querySelector("p");
const name = document.getElementById("navn");
const name = document.getElementById("tlf");
const name = document.getElementById("e-post");
const name = document.getElementById("ønsker");
const name = document.getElementById("hvor-er");
const name = document.getElementById("mld");

form.addEventListener("submit", function(event){
    event.preventDefault();

    if (navigation.value === '' || tlf.value === '' || epost-value === '') {
        alert("Fyll inn navn, telefon og e-post.");
    }
});