$(document).ready(function(){

    //uso la funzione each per selezionare uno alla volta i drop menu
    // $('.drop-menu').each(function(){
    //     //entro col mouse su drop-menu
    //     $(this).mouseenter(function(){
    //         $(this).children('.dropdown').addClass('active');
    //     });
    //
    // });
    //
    // $('.head-right>ul>li').mouseleave(function(){
    //     $('.dropdown').removeClass('active');
    // });

    //second method
    //
    // $('.drop-menu').mouseenter(function(){
    //     $(this).find('.dropdown').addClass('active');
    // });
    //
    // $('.drop-menu').mouseleave(function(){
    //     $(this).find('.dropdown').removeClass('active');
    // });

    //third method without using each

    $('.drop-menu').mouseenter(function(){
        $(this).children('.dropdown').addClass('active');
    });

    $('.head-right>ul>li').mouseleave(function(){
        $('.dropdown').removeClass('active');
    });
});
