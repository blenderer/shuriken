/**
 * Shuriken v0.4 - Minimal Left-right content slider
 * Copyright 2013, Eric Harrison - twitter.com/Blenderer
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

(function ($) {
    $.fn.shuriken = function(options) {
        settings = $.extend({
            speed: 1000
        }, options);

        var previous = null;
        var container_width = this.width();
        var kiddies = this.children();

        this.css('position', 'relative').css('overflow', 'hidden');
        kiddies.css('width', '100%').css('height', '100%').css('position', 'absolute').css('left', '0');

        var leftside = null;
        var currentside = kiddies.slice(0, 1);
        var rightside = kiddies.slice(1);

        rightside.css('left', container_width + 'px');

        updatePositions = function() {
            kiddies.hide();
            currentside.show();
            previous.show();

            rePositionKids();
            
            kiddies.promise().done(function() {
                kiddies.hide();
                currentside.show();
            });
        };

        rePositionKids = function() {
            if (leftside) {
                leftside.stop().animate({'left': '-' + container_width + 'px'}, settings.speed);
            }
            if (currentside) {
                currentside.stop().animate({'left': '0px'}, settings.speed);
            }
            if (rightside) {
                rightside.stop().animate({'left': '' + container_width + 'px'}, settings.speed);
            }
        }

        this.ninjaStarSlice = function(at) {    
            if (!kiddies.is(":animated")) {
                container_width = this.width();

                previous = currentside; 

                leftside = null;
                rightside = null;
                currentside = null;

                currentside = kiddies.slice(at, at + 1);

                //if we're greater than 0
                if (at > 0) {
                    leftside = kiddies.slice(0, at);
                }
                //if we're not going larger than the list
                if (at <= kiddies.length) {
                    rightside = kiddies.slice(at + 1);
                }

                updatePositions();
            }
        };

        return this;
    };
})(jQuery);
