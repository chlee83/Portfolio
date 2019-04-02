$(document).ready(function() {


    //mouse hover over main header reveals full name
    $(".headerButton").hover(function() {
        $('.name').animate({width: '100px'}, 500)
    }, function(){
        $('.name').animate({width: '0'}, 1000)
    });






//end of document ready
});

