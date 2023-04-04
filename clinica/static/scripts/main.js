$(document).ready( function() {
// menu functions

$('.close-menu').click( () => {
    $('menu').animate({left: '100vw'}, 'slow');
})
$(".menuico").click( () => {
$('menu').animate({left: '0vw'}, 'slow');
$('nav').animate({cursor: 'auto'}, 'slow');
})

$("#loadingMask").fadeOut()
$('header').css('display', 'flex')
})