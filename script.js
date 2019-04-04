"use strict";

$(document).ready(function(){
    $(window).scroll(function(){
        $('.quote').css("opacity", 1 - 
            $(window).scrollTop()/500)
    });
});

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#Top-Button').fadeIn();
        } else {
            $('#Top-Button').fadeOut();
        }
    });

    $("#Top-Button").click(function(){
        $('html, body').animate({scrollTop: 0},600);
    });
});

/* === THE PLAYERS === */

function fadeOut() {

TweenMax.to(".button-players", 1, {
    y: -100,
    opacity: 0
});

TweenMax.to(".screen", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut, 
    delay: 1
});

TweenMax.from(".overlay", 2, {
    ease: Power2.easeInOut
});

TweenMax.to(".overlay", 2, {
    delay: 1.5,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.to(".overlay-2", 2, {
    delay: 2,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.from(".content-players", 2, {
    delay: 2.5,
    opacity: 0,
    ease: Power2.easeInOut
});

TweenMax.to(".content-players", 2, {
    opacity: 1,
    y: -300,
    delay: 3.2,
    ease: Power2.easeInOut
});

};