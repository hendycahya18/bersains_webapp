$(window).scroll(function() {
    if ($(window).scrollTop() > 90) {
        $('#myNav').addClass('floatingNav');
    } else {
        $('#myNav').removeClass('floatingNav');
    }
});

