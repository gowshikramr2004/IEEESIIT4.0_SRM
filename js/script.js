const highlightPrograms = document.querySelector('.highlight-programs')
const slide = document.querySelectorAll('.slide')
const round = document.querySelectorAll('.round')
const projects = document.querySelector('.projects')
const programs = document.querySelector('.programs')
const highlightNumbers = document.querySelector('.highlight-numbers')
const latestNews = document.querySelector('.latest-news')
const campaign = document.querySelector('.campaign')
const voultary = document.querySelector('.voultary-positions')
let currentActive = 0

function update() {
    round.forEach((round, idx) => {
        if (idx <= currentActive) {
            round.classList.add('active');
        } else {
            round.classList.remove('active');
        }
    })
}

function removeactiveclasses() {
    round.forEach((round, idx) => {
        if (idx !== currentActive) {
            round.classList.remove('active');
        }
    })
}

function setBgToBody() {
    highlightPrograms.style.backgroundImage = slide[currentActive].style.backgroundImage
}

function setActiveSlide() {
    slide.forEach((slide) => slide.classList.remove('show'))

    slide[currentActive].classList.add('show')
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    var elements = document.getElementsByClassName('fade-in-up');
    for (var i = 0; i < elements.length; i++) {
        if (isElementInViewport(elements[i])) {
            elements[i].classList.add("animate-fade-in-up");
        }
    }
}

animateOnScroll();
window.addEventListener('scroll', animateOnScroll);

setInterval(function() {
    currentActive++;
    if (currentActive > slide.length - 1) {
        currentActive = 0;
    }
    var imgBlock = document.querySelector(".imgBlock");

    var dot1 = document.querySelector(".dot1");
    var dot2 = document.querySelector(".dot2");
    var dot3 = document.querySelector(".dot3");

    dot1.onclick = function() {
        imgBlock.src = "assests/plate1.png"
    }

    dot2.onclick = function() {
        imgBlock.src = "assests/plate2.png"
    }

    dot3.onclick = function() {
        imgBlock.src = "assests/plate3.png"
    }

    const menuIcon = document.querySelector(".toggle");

    const mobileMenu = document.querySelector(".navMenu");

    menuIcon.onclick = function() {
        if (mobileMenu.style.display != "block") {
            mobileMenu.style.display = "block"
        } else {
            mobileMenu.style.display = "none"
        }
    }
    const btn = document.querySelector('button.menu-button');
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    })

    setBgToBody()
    setActiveSlide()
    update()
    removeactiveclasses()
}, 5000);