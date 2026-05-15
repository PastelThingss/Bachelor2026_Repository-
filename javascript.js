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
    if (nav) {
        nav.classList.toggle('open');
    }
}

//KONTAKT SKJEMA
const kontaktForm = document.getElementById('kontakt-form');
if (kontaktForm) {
    kontaktForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const navn = document.getElementById('navn').value;
        const tlf = document.getElementById('tlf').value;
        const epost = document.getElementById('e-post').value;

        if (navn === '' || tlf === '' || epost === '') {
            alert('Fyll inn navn, telefon og e-post.');
            return;
        }

    });
}

//FUNCTION FOR DE KLIKKABRE SPØRMSÅLENEN PÅ KONTAKT SIDEN
function toggleFaq(btn) {
    const svar = btn.nextElementSibling;
    btn.classList.toggle('open');
    svar.classList.toggle('open');
}

//RESETTER SELECT TIL PLACEHOLDER VELG TJESNTE.. PÅ KONTAKT OSS SIDEN NÅR DNE LASTES INN
window.addEventListener('load', function() {
    const select = document.getElementById('ønsker');
    if (select) {
        select.value = '';
    }
});

//AUTOMATISK MARKERER DEN AKITVESIDEN/DEN DU ER PÅ OG GJØR LINK AKTIV
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});