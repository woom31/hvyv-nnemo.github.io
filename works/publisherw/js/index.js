$(document).ready(function(){
  $('.main-btn').on('click', function(){
    console.log('check');
    $('#head-l').stop().animate({'width': '300px'});
  });

});
