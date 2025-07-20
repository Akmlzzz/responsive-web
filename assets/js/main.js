
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

let x = "hello world";
console.log(x);

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


var swiperPojects = new Swiper (".project__container", {
        loop: true,
        spaceBetween: 24,
        navigation: {
         nextEl:".swiper-button-next",
         prevEl: ".swiper-button-prev",
        },
         pagination: {
        },
         el: ".swiper-pagination",
         mousewheel: true,
         keyboard: true,
    });

    document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    if (video) {
        var playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log('Video background playing.');
            })
            .catch(error => {
                console.error('Autoplay prevented or failed:', error);
                video.muted = true; 
                video.play().catch(e => console.error("Still couldn't play video:", e));
            });
        }
    }
});
