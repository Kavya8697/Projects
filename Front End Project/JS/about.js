"use strict";
$(document).ready(function(){
    $("#types h1").click(function(evt){
        $(this).toggleClass("minus");
		if ($(this).attr("class") == "minus") {
			$(this).next().show();
		} else {
			$(this).next().hide();
		}
		evt.preventDefault();
    });
    $("#reasons h1").click(function(evt){
        $(this).toggleClass("minus");
		if ($(this).attr("class") == "minus") {
			$(this).next().show();
		} else {
			$(this).next().hide();
		}
		evt.preventDefault();
    });
});
    