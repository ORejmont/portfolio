// Menu-toggle button

$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });

    $("nav ul li").on("click", function() {
        $("nav ul").toggleClass("showing");
        $(".menu").toggleClass("close");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});

// HAMBURGER    

$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});
