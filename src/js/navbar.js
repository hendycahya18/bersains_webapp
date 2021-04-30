$(window).scroll(function() {
    if ($(window).scrollTop() > 90) {
        $('#myHeader').addClass('floatingNav');
    } else {
        $('#myHeader').removeClass('floatingNav');
    }
});

