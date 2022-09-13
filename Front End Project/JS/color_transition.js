(function($){
    $.fn.highlightMenu = function(options) {
        var defaults = $.extend({
            'bgColor' : 'transparent',
            'color' : '#800000',
            'hoverColor' : 'black',
            'hoverBgColor' : 'lightblue',
        }, options);
        console.log("kavu");
        return this.each(function(){
            var items = $("li a");
            var o = defaults;

            items.css("font-family", "cursive, fantasy, monospace")
                 .css("font-weight", "bold")
                 .css("background-color", o.bgColor)
                 .css("color", o.color)
                 .css("font-size", "18px");

            items.mouseover(function(){
                $(this).css("background-color", o.hoverBgColor)
                       .css("color", o.hoverColor);
            });

            items.mouseout(function(){
                $(this).css("background-color", o.bgColor)
                       .css("color", o.color);
            });
        });
    }
})(jQuery);