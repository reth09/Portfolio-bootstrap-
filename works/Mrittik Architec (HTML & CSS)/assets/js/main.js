// faq
$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {

            $(this).removeClass("active");

            $(this).siblings(".contentf").slideUp(200);

            $(".set > a i").removeClass("fa-angle-right").addClass("fa-angle-down");

        } else {
            $(".set > a i").removeClass("fa-angle-right").addClass("fa-angle-down");

            $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right");

            $(".set > a").removeClass("active");

            $(this).addClass("active");

            $(".contentf").slideUp(200);

            $(this).siblings(".contentf").slideDown(200);
        }
    });


    // counter

    $('.home-fact').ready(function () {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];

        for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }

        var count = function (start, value, id) {
            var localStart = start;
            setInterval(function () {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart;
                }
            }, 80);
        }

        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
    });
});

