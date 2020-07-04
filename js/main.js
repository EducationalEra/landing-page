$(document).ready(function () {
	var readCookieAndSetButtons;
	//read courses.ed-era.com cookie and sets the login and register buttons to the corresponding states
	readCookieAndSetButtons = function () {
		var LOGGED_IN;
		LOGGED_IN = ($.cookie("edxloggedin") === "true");

		$(".sign_in_up.not_logged_in").toggleClass("hidden", LOGGED_IN);
		$(".sign_in_up.logged_in").toggleClass("hidden", !LOGGED_IN);
	};
	//opens video popup
	$(".button.play, .popup-youtube").magnificPopup({
		type: "iframe",
		iframe: {
			markup: "<div class=\"mfp-iframe-scaler\">"+
			"<div class=\"mfp-close\"></div>"+
			"<iframe class=\"mfp-iframe\" frameborder=\"0\" autoplay allowfullscreen width=\"560\" height=\"315\"></iframe>"+
			"</div>"
		}
	});
	//load and hide more videos
	$(".optional, .hide-videos").hide("50"); //init
	$(document).on("click", "#reading .video-block .more-videos", function() {
		$("#reading").find(".optional").fadeIn();
		$("#reading").find(".hide-videos").show();
		$(this).hide();
	});
	$(document).on("click", "#reading .video-block .hide-videos", function() {
		$("#reading").find(".optional").fadeOut();
		$("#reading").find(".more-videos").fadeIn();
		$(this).hide();
	});

	$(".optional, .hide-videos").hide("50"); //init
	$(document).on("click", "#ukr .video-block .more-videos", function() {
		$("#ukr").find(".optional").fadeIn();
		$("#ukr").find(".hide-videos").show();
		$(this).hide();
	});
	$(document).on("click", "#ukr .video-block .hide-videos", function() {
		$("#ukr").find(".optional").fadeOut();
		$("#ukr").find(".more-videos").fadeIn();
		$(this).hide();
	});

	$(document).on("click", "#english .video-block .more-videos", function() {
		$("#english").find(".optional").fadeIn();
		$("#english").find(".hide-videos").show();
		$(this).hide();
	});
	$(document).on("click", "#english .video-block .hide-videos", function() {
		$("#english").find(".optional").fadeOut();
		$("#english").find(".more-videos").fadeIn();
		$(this).hide();
	});

	$(document).on("click", "#math .video-block .more-videos", function() {
		$("#math").find(".optional").fadeIn();
		$("#math").find(".hide-videos").show();
		$(this).hide();
	});
	$(document).on("click", "#math .video-block .hide-videos", function() {
		$("#math").find(".optional").fadeOut();
		$("#math").find(".more-videos").fadeIn();
		$(this).hide();
	});

	$(document).on("click", "#informatics .video-block .more-videos", function() {
		$("#informatics").find(".optional").fadeIn();
		$("#informatics").find(".hide-videos").show();
		$(this).hide();
	});
	$(document).on("click", "#informatics .video-block .hide-videos", function() {
		$("#informatics").find(".optional").fadeOut();
		$("#informatics").find(".more-videos").fadeIn();
		$(this).hide();
	});
	//toggles the menu on mobile sites
	$(document).on("click", ".toggle_menu", function() {
		$("#main_navigation").toggle();
	});
	//performs a smooth scroll to the anchors
	$("a[href*=\"#\"]:not([href=\"#\"])").click(function() {
		if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
			if (target.length) {
				$("html, body").animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
  // slider
  $('.slider').on({
    beforeChange: function (event, slick, current_slide_index, next_slide_index) {
      $('.slider-nav li').removeClass('active');
      $('.slider-nav li.slide-' + next_slide_index).addClass('active');
    }
  }).slick({
    arrows: false,
    autoplay:true,
    autoplaySpeed:5000,
  });

  $('.slider-nav li').each(function(i) {
    $('.slider-nav li.slide-' + i + ' a').click(function(){
      $('.slider').slick('slickGoTo', i);
    })
  })

	readCookieAndSetButtons();
	setInterval(readCookieAndSetButtons, 1000);
});

// Photo-gallery-anticorr
$(document).ready(function() {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $(".mfp-counter").text($('.mfp-counter').text().replace("of", "з"));
});

/* Infographic */

jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});

