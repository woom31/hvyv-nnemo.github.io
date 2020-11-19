$(document).ready(function(){

    // $('.scr1-next').on('click', function(){
    //     $('.content').stop().animate({'left':'-100%'});
    // })
  
    // $('.scr2-prev').on('click', function(){
    //     $('.content').stop().animate({'left':'0'});
    // })

    // $('.scr2-next').on('click', function(){
    //     $('.content').stop().animate({'left':'-200%'});
    // })

    // $('.scr3-prev').on('click', function(){
    //     $('.content').stop().animate({'left':'-100%'});
    // })


    $('.scr1btn').on('click', function(){
        $('.scr-main').stop().animate({'left':'0'});
    })
    $('.scr2btn').on('click', function(){
        $('.scr-main').stop().animate({'left':'-100%'});
    })
    $('.scr3btn').on('click', function(){
        $('.scr-main').stop().animate({'left':'-200%'});
    })

    $('.menu-btn').on('click', function(){
        $('.menu-btn').removeClass('btnsel');
        $(this).addClass('btnsel');
    })

}); 