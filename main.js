document.getElementById('hamburger').onclick = function () {
    document.getElementById("hamburger").classList.toggle("fa-times")
    // document.getElementById('nav').classList.toggle("show")
}

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 500,
  wrap: false
})