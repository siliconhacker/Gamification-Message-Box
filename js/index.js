$(document).ready(function() {
$(".open").click(function(e) {
$("#info").css("left", "0px");
blink();
texas2step();  
buzz();
bigBang();
e.preventDefault();
});
$(".close").click(function(e) {
$("#info").animate({left: "+=500px"})
.animate({left: "-5000px"});
e.preventDefault();
});
  
bigBang();
buzz();
blink();
texas2step();
  
});

function blink() {
$("#info").fadeOut(200).fadeIn(200).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400);
}

function buzz() {
$("#info").animate({left: "+=5px"}, 40).animate({top: "+=5px"}, 40)
.animate({top: "-=10px"}, 40)
.animate({left: "-=10px"}, 40)
.animate({top: "+=5px"}, 40)
.animate({left: "+=5px"}, 40)
.animate({left: "+=5px"}, 40)
.animate({top: "+=5px"}, 40)
.animate({top: "-=10px"}, 40)
.animate({left: "-=10px"}, 40)
.animate({top: "+=5px"}, 40)
.animate({left: "+=5px"}, 40);
}

function bigBang() {
$("#info").animate({padding:'150px 100px 150px 500px'},"slow")
.animate({padding:'15px 10px 15px 50px'},"fast");
}

function texas2step() {
$("#info").animate({padding:'+=200px'},"slow")
.animate({left:'-=10px'},"slow")
.animate({left:'+=1000px'},"slow")
.animate({left:'-=1000px'},"slow")
.animate({padding:'-=200px'},"fast")
.animate({left:'+=10px'},"slow");
}
