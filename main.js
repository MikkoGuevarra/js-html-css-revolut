$(document).ready(function(){

    //uso la funzione each per selezionare uno alla volta i drop menu
    $('.drop-menu').each(function(){
        //entro col mouse su drop-menu
        $('.drop-menu').mouseenter(function(){
            $(this).addClass('active');
        });
        $('.head-right>ul>li').mouseleave(function(){
            $('.dropdown').removeClass('active');
        });
    });
});
