$(document).ready(function () {
    $('img').slideDown(1000);
    $('figure').css('cursor', 'pointer');

    $('figure').eq(0).on('click', function () {

        $('#certificate1').show(500)

    })
    $('figure').eq(1).on('click', function () {

        $('#certificate2').show(500)
    })

    $('figure').eq(2).on('click', function () {

        $('#certificate3').show(500)
    })

});



 
