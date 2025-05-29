// carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,  
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive : {

    600: {
        items:3,
        startPosition:1,
    },

    850 : {
        startPosition: 1,
        items: 3,
    },    
    1200: {
        items:3,
        margin: 30,
    },
    

}

});


$('.slider-btn-prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Link
const anchors = document.querySelectorAll('.nav-list a')
anchors.forEach(anc => {
    anc.addEventListener('click', function (event){
        event.preventDefault();


        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top:elem.offsetTop - 80,
            behavior: 'smooth',
        });
    });
});


// Footer-arrow
const arrow = document.querySelectorAll('.footer-arrow')
arrow.forEach(anc => {
    anc.addEventListener('click', function (event){
        event.preventDefault();


        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top:elem.offsetTop - 80,
            behavior: 'smooth',
        });
    });
});


// adaptive-menu-mobile
const navBtn = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon')


navBtn.onclick = function() {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active')
    document.body.classList.toggle('no-scroll')
}
