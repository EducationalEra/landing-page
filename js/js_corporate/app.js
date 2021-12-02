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
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
                header.removeClass("fixed");
        }
    };
// Fixed header end

// Smoth scroll start
    $("[data-scroll]").on("click", function(event){
        const Top_Offset = 80;
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop:elementOffset - Top_Offset
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
let els = document.getElementsByClassName("ElementToIncrease")
document.addEventListener("scroll", elementPicker)
document.addEventListener("DOMContentLoaded", elementPicker)

function elementPicker(e){

  for (let i = 0; i < els.length; i++) {
    if ((els[i].getBoundingClientRect().top > 30) & (els[i].getBoundingClientRect().top < 300)) {
        els[i].classList.add("bigusElementus")
    } else els[i].classList.remove("bigusElementus")
  }
}
// Scroll for biigest element end

// Owl Carousel start
var owl = $(".owl-carousel");
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
    slideBy: "page",
    lazyLoad: true
});
// Owl Carousel end

function myFunction() {

       var btnAll= document.getElementById("btnAll");
       var btnBusines= document.getElementById("btnBusines");

       var wrapInfoForAll= document.getElementById("wrapInfoForAll");
       var wrapInfoForBusiness= document.getElementById("wrapInfoForBusiness");

       btnAll.onclick = function() {
         wrapInfoForAll.style.display = "block";
         wrapInfoForBusiness.style.display = "none";
       };

       btnBusines.onclick = function() {
         wrapInfoForAll.style.display = "none";
         wrapInfoForBusiness.style.display = "block";
       };
}

$(".button-all").click(function() {
      $(".products-box__busines").hide();
      $(".products-box__all").show();
      $(".button-all").css("background-color", "#F8A800");
      $(".button-busines").css("background-color", "#F8F8F8");
      $(".button-busines").css("border-bottom", "1px solid #212121");
      $(".button-all").css("border-bottom", "1px solid #F8A800");
});
$(".button-busines").click(function() {
      $(".products-box__all").hide();
      $(".products-box__busines").show();
      $(".button-busines").css("background-color", "#F8A800");
      $(".button-all").css("background-color", "#F8F8F8");
      $(".button-all").css("border-bottom", "1px solid #212121");
      $(".button-busines").css("border-bottom", "1px solid #F8A800");
});