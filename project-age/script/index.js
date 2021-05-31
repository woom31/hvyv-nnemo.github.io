$(document).ready(function(){
    $('.genre-btn').click(function(){
        $('#login').css({'z-index':'1'}).stop().animate({'opacity':'1'}, 400);
    });
    $('.close-btn').click(function(){
        $('#login').stop().animate({'opacity':'0'}, 400, function(){
            $('#login').css({'z-index':'-1'});
        });
    });
});