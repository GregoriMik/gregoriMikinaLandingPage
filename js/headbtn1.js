$("#headbtn1").click(function () {
    $('html,body').animate({
            scrollTop: $("main").offset().top
        },
        1200);
});