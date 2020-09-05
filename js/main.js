

// aos animation

AOS.init();


// preLoader 

let countingFinish = false;
const loader = document.getElementById('preloader');

$(window).scroll(function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(window).scroll(function () {
    $('.navbar-nav li').toggleClass('scrolled', $(this).scrollTop() > 100);
});

function preLoader() {
    loader.style.display = 'none';
}



//carousel
$('.dot-list').owlCarousel({
    loop: true,
    autoplayHoverPause: true,
    margin: 30,
    nav: false,
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        700: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

//scrollup

$.scrollUp({
    scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
    easingType: 'linear',
    scrollSpeed: 1000,
    animation: 'fade'
});

$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
        },
        1500

        );
    }
});