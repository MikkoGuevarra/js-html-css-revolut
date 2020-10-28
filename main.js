$(document).ready(function(){
    $('.drop-menu').mouseenter(function(){
        $('.dropdown').addClass('active');
    });
    $('.head-right>ul>li').mouseleave(function(){
        $('.dropdown').removeClass('active');
    });


});
