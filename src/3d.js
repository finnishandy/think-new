/**
 * Created by sakariruoho on 9/8/15.
 */
// why it doesn't work on firefox?
var card = $(".card");

$(document).on("mousemove",function(e) {
    var ax = -($(window).innerWidth()/2- e.pageX)/20;
    var ay = ($(window).innerHeight()/2- e.pageY)/10;
    //card.attr("style", "transform: rotateY("+ax+"deg); -webkit-transform: rotateY("+ax+"deg); -moz-transform: rotateY("+ax+"deg)");
});

$( window ).scroll(function(e) {
    var ay = ($(window).innerHeight()/2- window.pageYOffset)/10;
    card.attr("style", "transform: rotateX("+ay+"deg); -webkit-transform: rotateX("+ay+"deg); -moz-transform: rotateX("+ay+"deg)");
    console.log(window.pageYOffset);
});