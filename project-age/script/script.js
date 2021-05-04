$(document).ready(function(){
    
    $('.intro-btn').on('click',function(){
        $('#intro').css({'z-index':'0'}).addClass('hide');
        $('#genre').css({'z-index':'0'}).addClass('hide');
    })

    $('.next-btn').on('click', function(){
        $('#paint').css({'z-index':'0'}).addClass('hide');
    })

    $('.slide').on('click', function(){
        console.log('dd');
        $('#content').css({'z-index':'100'})
        $('.header-btn-area').children('.show').removeClass("show").addClass('hide');
        $('.header-btn-area').children('.hide').removeClass("hide").addClass('show');
    })
    $('.close-btn').on('click', function(){
        console.log('close');
        $('#content').css({'z-index':'0'});
        $('.header-btn-area').children('.show').removeClass("show").addClass('hide');
        $('.header-btn-area').children('.hide').removeClass("hide").addClass('show');
    })

});