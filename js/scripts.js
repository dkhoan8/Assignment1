$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    //carousel interval
    $('#mycarousel').carousel({
        interval: 2000
    });
    
    //carousel button
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else
        {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    //LoginModal
    $('#LoginBtn').click(function(){
        $('#loginModal').modal('show');
    });
    //ReserveModal
    $('#ReserveBtn').click(function(){
        $('#ReserveModal').modal('show');
    });
});