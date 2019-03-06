
$(".trend").mouseover(function () {
    $(".submenu").show(500);
});





        // $(".men").mouseover(function () {
        //     $(".men-menu").show(500);
        // });
        //
        //
        // $(".men").mouseout(function () {
        //     $(".men-menu").hide(500);
        // });
        //
        //
        //



$(".trend").mouseout(function () {
    $(".submenu").hide(500);
});


$(function() {
    var backgrounds = new Array();
    backgrounds[0]= "url(assets/sl1.jpg)";
    backgrounds[1]= "url(assets/sl2.jpeg)";
    backgrounds[2]= "url(assets/sl3.jpg)";
    var current = 0;
    function nextBackground() {
        $(".banner").css(
            'background-image',
            backgrounds[current = ++current % backgrounds.length]
        );

        setTimeout(nextBackground, 2000);
    }
    setTimeout(nextBackground, 2000);
    $(".banner").css('background-image', backgrounds[0]);
});