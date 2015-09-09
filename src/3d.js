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
    var cards = Array.prototype.slice.call($(".card"));
    var ay = window.pageYOffset;
    var innerHeight = window.innerHeight;
    var fullHeight = document.documentElement.scrollHeight;

    console.log("full: " + fullHeight);

    cards.forEach(function(card, idx) {
        if (idx === 1) {
            var scrollTop = card.scrollTop;
            console.log("scroll top: " + parseInt(document.body.scrollTop / fullHeight));
        }
        var cardMid = card.offsetTop + parseInt(card.offsetHeight / 2, 10);
        var cardPos = cardMid / innerHeight;
        //console.log("card" + idx + ": " + cardPos);
        card.setAttribute("style", "transform: translateZ(-"+ay+"px); -webkit-transform: translateZ(-"+ay+"px); -moz-transform: translateZ(-"+ay+"px)");
    });
    //var ay = ($(window).innerHeight()/2- window.pageYOffset)/10;

    //card.attr("style", "transform: rotateX("+ay+"deg); -webkit-transform: rotateX("+ay+"deg); -moz-transform: rotateX("+ay+"deg)");

    console.log(ay);
});