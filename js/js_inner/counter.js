(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('.timer').countTo({
            from: 100,
            to: 107,
            speed: 1000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
jQuery(function($) {
        $('.timer_2').countTo({
            from: 999000,
            to: 1000000,
            speed: 1000,
            refreshInterval: 10,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
jQuery(function($) {
        $('.timer_3').countTo({
            from: 1,
            to: 7,
            speed: 1000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
jQuery(function($) {
        $('.timer_4').countTo({
            from: 20,
            to: 40,
            speed: 1000,
            refreshInterval: 10,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });



    // const time = 1000;
    // const step = 1;
    //
    // function outNum(num, elem) {
    //   let l = document.querySelector('#' + elem);
    //   n = 0;
    //   let t = Math.round(time / (num / step));
    //   let interval = setInterval(() => {
    //     n = n + step;
    //     if (n == num) {
    //       clearInterval(interval);
    //     }
    //     l.innerHTML = n;
    //   },
    //   t);
    // }
    // outNum(107, 'out-1');
