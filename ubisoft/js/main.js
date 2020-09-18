(function($){
  function throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }

  gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    smoothMobile: true,
  });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  locoScroll.on("scroll",
      throttled(100, (event) => {
        const persent = event.scroll.y*100/event.limit;
        $('.header-donload-bar__progress').css({'width': Math.ceil(persent)+'%'});
        $('.header-donload-bar__percents').text(Math.ceil(persent)+'%');
        $('.header-menu__progress').css({'top': persent+'%'});
      }));
  locoScroll.on('call', func => {
    const trigger = func.split('--');
    if(trigger[0] === 'courseImage') {
      setTimeout(() => {
        if($('.course-image--' + trigger[1]).hasClass('is-inview')) {
          $('.course-content__item').removeClass('course-content__item--active');
          $('.course-content__item--' + trigger[1]).addClass('course-content__item--active');
        }
      }, 50);
    }
    if(trigger[0] === 'structureImage') {
      setTimeout(() => {
        if($('.structure-image--' + trigger[1]).hasClass('is-inview')) {
          $('.structure-content__item').removeClass('structure-content__item--active');
          $('.structure-content__item--' + trigger[1]).addClass('structure-content__item--active');
        }
      }, 50);
    }
    if(trigger[0] === 'section') {
      setTimeout(() => {
        if($('.section-trigger--' + trigger[1]).hasClass('is-inview')) {
          $('.header-menu__item').removeClass('header-menu__item--active');
          $('.header-menu__item--' + trigger[1]).addClass('header-menu__item--active');
        }
      }, 50);
    }
  });
// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });

$('.header-menu__item').on('click', function () {
  $('.header__burger-menu').removeClass('header__burger-menu--open');
  $('.header-menu').removeClass('header-menu--open');
  $('.header-container').removeClass('header-container--open');
  const section = $(this).attr('data-section');
  locoScroll.scrollTo('.section-trigger--'+section);
});
////////////////////////////////////

// get pinned boxes and box width
  const windowWidth = $(window).innerWidth();
  if(windowWidth >= 1280) {
    const pinBoxes = $('.lecturer-box');
    const pinBoxWidth = $('.lecturer-box')[0].offsetWidth;
// screen width 100vw equivalent

    const containerWidth = $('.p-container')[0].offsetWidth;

// get pin box wrpper and calc width based on window width X number of boxes
    const pinWrap = $('.lecturers-wrap');
    const pinWrapWidth = (windowWidth >= 1366 ? 1440 : 1280) * (pinBoxes.length);

    let scrollCorrector = 0;
    if(windowWidth < 1440 && windowWidth >= 1366) {
      scrollCorrector = 75;
    }
    if(windowWidth < 1366 && windowWidth >= 1280) {
      scrollCorrector = 150;
    }
    const horizontalScrollLength = (pinBoxes.length * pinBoxWidth) - (990 - scrollCorrector);
// give pin wrap a set width
    $('.pin-wrap').width(pinWrapWidth);



// Pinning and horizontal scrolling
    gsap.to(".lecturers-wrap", {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: true,
        trigger: "#lecturersSection",
        pin: "#lecturersSection",
        start: "top top",
        end: pinWrapWidth
      },
      x: -horizontalScrollLength,
      ease: "none"
    });
  }


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

//

  /* burger-menu */
  $('.header__burger-menu').on('click', function () {
    if($(this).hasClass('header__burger-menu--open')) {
      $('.header__burger-menu').removeClass('header__burger-menu--open');
      $('.header-menu').removeClass('header-menu--open');
      $('.header-container').removeClass('header-container--open');
    } else {
      $('.header__burger-menu').addClass('header__burger-menu--open');
      $('.header-menu').addClass('header-menu--open');
      $('.header-container').addClass('header-container--open');
    }
  });
  $('.header-container').on('click', function (event) {
    if($(event.target).hasClass('header-container')) {
      $('.header__burger-menu').removeClass('header__burger-menu--open');
      $('.header-menu').removeClass('header-menu--open');
      $('.header-container').removeClass('header-container--open');
    }
  });
})(jQuery);

window.onload = function() {
  setTimeout(() => {
    $('body, html').removeClass('preload');
  }, 1000)
};
