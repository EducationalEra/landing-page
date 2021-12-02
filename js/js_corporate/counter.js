(function($) {
    $.fn.countTo = function(options) {
        options = $.extend({}, $.fn.countTo.defaults, options || {});
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
        from: 0,
        to: 100,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
    };
})(jQuery);
jQuery(function($) {
        $('.timer').countTo({
            from: 100,
            to: 107,
            speed: 1000,
            refreshInterval: 50
        });
    });
jQuery(function($) {
        $('.timer_2').countTo({
            from: 999000,
            to: 1000000,
            speed: 1000,
            refreshInterval: 10
        });
    });
jQuery(function($) {
        $('.timer_3').countTo({
            from: 1,
            to: 7,
            speed: 1000,
            refreshInterval: 50
        });
    });
jQuery(function($) {
        $('.timer_4').countTo({
            from: 20,
            to: 40,
            speed: 1000,
            refreshInterval: 10
        });
    });
