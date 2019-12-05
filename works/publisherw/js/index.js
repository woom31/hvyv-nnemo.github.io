$(document).ready(function(){
  $('.main-btn').on('click', function(){
    console.log('check');
    $('header').stop().animate({'width': '300px'});
  });

});
