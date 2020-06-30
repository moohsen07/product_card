$(document).ready(function(){

    $('.product-color span').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        $('body').css("background-color" , $(this).data("color"));

        $('.product-info span , .product-info a , span.shoes').css("color" , $(this).data("color"));

        $('img').attr( "src" , $(this).data("pic"))
    });

});