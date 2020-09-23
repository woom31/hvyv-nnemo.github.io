$(document).ready(function(){
    
    setTimeout(function() {
        console.log('WOW');
        $('.payload').stop().animate({'left':'-100%'}, 600);
        $('.qr_base').stop().animate({'left':'0'}, 300);
      }, 3000);

});
