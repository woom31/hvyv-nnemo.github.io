$(document).ready(function(){
    $('#btn1').on('click', function(){
        $('.search_base').css("z-index", "11");
        $('.search_top').css("top", "0");
        $('.search_list_div').stop().animate({'bottom':'0'}, 200);
    });

    $('#gotomain').on('click', function(){
        $('.search_top').css("top", "-10%");
        $('.search_list_div').stop().animate({'bottom':'-90%'}, 300).queue(function() {
            $('.search_base').css("z-index", "9");
        });
        
    });

    $('#btn2').on('click', function(){
        $('.result_base').css("z-index", "12");
    });
  
    $('#btn3').on('click', function(){
        $('.result_base').css("z-index", "12");
        $('.result_map_base').css("z-index", "13");
    });

    $('#btn4').on('click', function(){
        $('.result_map_base').css("z-index", "13");
    });

    $('#gotosearch').on('click', function(){
        $('.result_base').css("z-index", "8");
    });

    $('#gotoresult').on('click', function(){
        $('.result_map_base').css("z-index", "7");
    });

    $('#btn5').on('click', function(){
        $('.navi_base').css("z-index", "14");
        $('.navi_top').css("top", "0");
        $('.navi_list').stop().animate({'bottom':'0'}, 200);
    });

    $('#gotoresmap').on('click', function(){
        $('.navi_top').css("top", "33%");
        $('.navi_list').stop().animate({'bottom':'-67%'}, 300).queue(function() {
            $('.navi_base').css("z-index", "6");
        });
    });

    $('#btn6').on('click', function(){
        $('.detail_base').css("z-index", "15");
        $('.detail_list').stop().animate({'bottom':'0'}, 200);
    });

    var hidden = false;

    $('.detail_hide_btn').on('click', function(){
        if(hidden == false){
            $('.detail_list').stop().animate({'bottom':'-58%'}, 200);
            hidden = true;
        } else if(hidden == true){
            $('.detail_list').stop().animate({'bottom':'0'}, 200);
            hidden = false;
        };
    })

    $('#gotonavi').on('click', function(){
        $('.detail_base').css("z-index", "5");
        $('.detail_list').stop().animate({'bottom':'-58%'}, 200);
    });

});