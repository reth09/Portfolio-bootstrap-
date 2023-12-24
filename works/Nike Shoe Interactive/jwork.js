$(document).ready(function () {

    $('.shoe-b').hide();
    $('.shoe-g').hide();

    $('.blue').click(function () {

        $('.shoe').hide();
        $('.shoe-g').hide();
        $('.shoe-b').show();

        $('.face-2').addClass('face-2-b').removeClass('face-2-g');
        $('.face-1').addClass('face-1-b').removeClass('face-1-g');

        $('#hex-grid .light').css("background", "#001aff");

        $('.shoe-b').addClass("shoni");
    });

    $('.green').click(function () {

        $('.shoe').hide();
        $('.shoe-b').hide();
        $('.shoe-g').show();

        $('.face-2').addClass('face-2-g');
        $('.face-1').addClass('face-1-g');

        $('#hex-grid .light').css("background", "#00ff0d");

        $('.shoe-g').addClass("shoni");
    });

    $('.red').click(function () {

        $('.shoe-g').hide();
        $('.shoe-b').hide();
        $('.shoe').show();

        $('.face-2').removeClass('face-2-g').removeClass('face-2-b');
        $('.face-1').removeClass('face-1-g').removeClass('face-1-b');

        $('#hex-grid .light').css("background", "#ff0000");

        $('.shoe').addClass("shoni");

    });

});
