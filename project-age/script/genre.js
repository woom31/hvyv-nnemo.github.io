$(document).ready(function(){
    $('.info-btn').click(function(){
        $('#info').css({'z-index':'9990'}).stop().animate({'opacity':'1'}, 400);
    });
    $('.info-back-btn').click(function(){
        $('#info').stop().animate({'opacity':'0'}, 200, function(){
            $('#info').css({'z-index':'-9990'});
        });
    });

    $('.drag-area').draggable();
    
    var clickVal = false;

    $('.genre').mouseenter(function(){
        if(clickVal == false){
            $('.genre').not(this).stop().animate({'opacity':'0.5'});
            $(this).removeClass('genreleave').addClass('genrehover').css({'margin-top':'-100px', 'margin-left':'-150px'});
            $(this).find('.genre-title').stop().animate({'font-size':'32px', 'height':'90px', 'line-height':'90px'});
            $(this).find('.cover-list').stop().animate({'width':'350px'});
            $(this).find('.cover-list img').stop().animate({'width':'150px', 'margin-top':'-25px', 'margin-left':'-25px'});
        }
    }).mouseleave(function(){
        if(clickVal == false){
            $('.genre').stop().animate({'opacity':'1'});
            $(this).removeClass('genrehover').addClass('genreleave').css({'margin-top':'0', 'margin-left':'0'});
            $(this).find('.genre-title').stop().animate({'font-size':'24px', 'height':'30px', 'line-height':'30px'});
            $(this).find('.cover-list').stop().animate({'width':'270px'});
            $(this).find('.cover-list img').stop().animate({'width':'100px', 'margin-top':'0', 'margin-left':'0'});
        }
    }).click(function(){
        clickVal = true;
        $('.drag-area').draggable({disabled: true});
        $('.cover-drag').draggable({ axis: 'x' });
        $('.genre').not(this).hide();
        $(this).removeClass('genrehover genreleave');
        $('.drag-area').stop().animate({'width':'100%','height':'100%','top':'0','left':'0'})
        $(this).stop().animate({'width':'100vw', 'height':'100vh', 'top':'0', 'left':'0', 'margin':'0'}).css({'cursor':'auto'})
        $(this).find('.genre-title').stop().animate({'font-size':'48px','bottom':'25%'});
        $('.back-btn').stop().animate({'opacity':'1', 'margin-left':'40px'}, 600);
        $('.header-btn-area').stop().animate({'margin-right':'4%'}, 400);
        $('.cover-list').stop().animate({'width':'100%', 'height':'150px', 'margin-top':'15%'});
        $('.cover-list img').stop().animate({'width':'150px', 'top':'0','left':'0','margin-top':'0','margin-left':'40px'}).css({'position':'relative', 'float':'left'});
    })


});