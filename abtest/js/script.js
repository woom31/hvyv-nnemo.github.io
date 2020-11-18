$(document).ready(function(){

    $('.scr1-next').on('click', function(){
        $('.content').stop().animate({'left':'-100%'});
    })
  
    $('.scr2-prev').on('click', function(){
        $('.content').stop().animate({'left':'0'});
    })

    $('.scr2-next').on('click', function(){
        $('.content').stop().animate({'left':'-200%'});
    })

    $('.scr3-prev').on('click', function(){
        $('.content').stop().animate({'left':'-100%'});
    })

}); 