 //dropdowns
 window.addEventListener('click', function(e){	
            if (document.getElementById('social-section-dropdowns-currency-button').contains(e.target)){
                document.getElementById('social-section-dropdowns-currency-items').classList.toggle("show");
            } else{
                document.getElementById('social-section-dropdowns-currency-items').classList.remove("show");
            }
        })    
window.addEventListener('click', function(e){	
            if (document.getElementById('social-section-dropdowns-leanguage-button').contains(e.target)){
                document.getElementById('social-section-dropdowns-leanguage-items').classList.toggle("show");
            } else{
                document.getElementById('social-section-dropdowns-leanguage-items').classList.remove("show");
            }
        })  

//scroll
window.addEventListener("scroll", myFunction);
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('menu').classList.add("fixed");
    } else {
        document.getElementById('menu').classList.remove("fixed");
    }
}

//causel
var carousel = document.getElementById('carousel');
var slides = 4;
var nextSlide = 0;
var speed = 7000; // 5 seconds
var slides = carousel.querySelectorAll('.carousel-item');
//var indicators = carousel.querySelectorAll('.indicator');
var indicators = slides;
var switcher = setInterval(function() {
        switchSlide();
    }, speed);

for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", setSlide(i));
}

function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity=0;
}

function carouselShow(num) {
    //ndicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity=1;
    clearInterval(switcher);
    switcher = setInterval(function() {
        switchSlide();
    }, speed);
}

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');
            
            carouselHide(i);
        }

        // Set defined slide as active
        //indicators[slide].setAttribute('data-state', 'active');
        slides[carousel-item].setAttribute('data-state', 'active');
        carouselShow(carousel-item);

        // Stop the auto-switcher
        clearInterval(switcher);
    };
}

function switchSlide() {
    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
         //If current slide is active & NOT equal to last slide then increment nextSlide
        if (indicators[i].getAttribute('data-state') == 'active'){
            if(i !== (indicators.length-1)) {
                nextSlide = i + 1;
            }
            else{
                nextSlide = 0;  
            }
            // Remove all active states & hide
            carouselHide(i);
        }        
    }

    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}