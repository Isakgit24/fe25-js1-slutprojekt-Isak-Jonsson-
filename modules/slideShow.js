
//slideshow from https://www.w3schools.com/howto/howto_js_slideshow.asp

function slideshow() {
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
window.plusSlides = function (n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
window.currentSlide = function (n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {


    let i;
    let slides = document.getElementsByClassName("mySlides fade");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    console.log(slides.length, slideIndex);
}


}

export {slideshow}