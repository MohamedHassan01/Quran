// Animation Sections
let links = document.querySelectorAll('.nav-item .nav-link');
    sections = document.querySelectorAll('.section');

function animationSections() {
    links.forEach((link, e) => {
        e.preventDefault;
        link.addEventListener('click', () => {
            $('.nav-item .nav-link').removeClass('active');
            link.classList.add('active');
            let dataShow = `${link.dataset.scroll}`;
            sections.forEach(section => {
                if (section.getAttribute('id') === dataShow) {
                    $('.section').addClass('hide');
                    section.classList.add('show');
                    section.classList.remove('hide');
                }
            });
            
        });
    });
}

animationSections()





/*
// Play Quran
let sounds = ['sounds/112.mp3', 'sounds/113.mp3', 'sounds/114.mp3'],
    playSound = document.getElementById('play'),
    next = document.getElementById('next'),
    previous = document.getElementById('previous');


let first = new Audio();
first.src = sounds[1];

function playS() {
    first.play();
    console.log(true);
}

playSound.onclick = playS();
*/
