

$(function(){

// Fixed header start
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this). scrollTop();

        checkScroll(scrollPos, introH)
    });

    function checkScroll(){
        if (scrollPos>introH) {
            header.addClass("fixed");
        } else {
                header.removeClass("fixed");
        }
    };
// Fixed header end



// Smoth scroll start
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop:elementOffset - 80
        }, 700);
    });
// Smoth scroll end



// Nav Toggle start
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");

    })
// Nav Toggle end


});

// Scroll for biigest element start
let els = document.getElementsByClassName('element')
document.addEventListener("scroll",elementPicker)
document.addEventListener("DOMContentLoaded",elementPicker)

function elementPicker(e){

  for (let i = 0; i<els.length; i++) {
    if ((els[i].getBoundingClientRect().top>30) & (els[i].getBoundingClientRect().top<300)) {
        els[i].classList.add('bigusElementus')
    } else els[i].classList.remove('bigusElementus')
  }
}
// Scroll for biigest element end


// Owl Carousel start
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav: true,
    mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    slideBy: 'page',
    lazyLoad: true
});
// Owl Carousel end

function myFunction() {

       var btn1= document.getElementById("btn1");
       var btn2= document.getElementById("btn2");

       var div1= document.getElementById("div1");
       var div2= document.getElementById("div2");

       btn1.onclick = function() {
         div1.style.display = "block";
         div2.style.display = "none";
       };

       btn2.onclick = function() {
         div1.style.display = "none";
         div2.style.display = "block";
       };
}


$('.button-1').click(function() {
      $('.div-2').hide();
      $('.div-1').show();
      $(".button-1").css("background-color", "#F8A800");
      $(".button-2").css("background-color", "#F8F8F8");
      $(".button-2").css("border-bottom", "1px solid #212121");
      $(".button-1").css("border-bottom", "1px solid #F8A800");
});
$('.button-2').click(function() {
      $('.div-1').hide();
      $('.div-2').show();
      $(".button-2").css("background-color", "#F8A800");
      $(".button-1").css("background-color", "#F8F8F8");
      $(".button-1").css("border-bottom", "1px solid #212121");
      $(".button-2").css("border-bottom", "1px solid #F8A800");
});
