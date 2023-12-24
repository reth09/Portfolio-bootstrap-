$('.pre-loader').delay(3000).fadeOut(500);
$('.pre-loader2').delay(2000).fadeOut();

$(document).ready(function(){

    $('.navbar-icon-cst').click(function(){
        
        $('.nav-line-1').toggleClass('nav-l-1');
        $('.nav-line-3').toggleClass('nav-l-2');
        $('.nav-line-2').toggleClass('nav-l-3');

        

    });

});