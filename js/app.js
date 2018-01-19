
alert("hola");


var target = 0;

var loadPage = function () {

var $buttons = $(".control");
var $previous = $(".previous");
var $next = $(".next");

$buttons.click(changeImage);
$previous.click(previousImage);
$next.click(nextImage);
};

var changeImage = function () {
  target = parseInt($(this).data("target"));
  showImage(target);
};

$(document).ready(loadPage);

$("a").click(function(){
  target = target + 1;
  target = (target>4)? 0 : target;
  showImage(target);
  changeColorButton(target);
})

var showImage = function (target) {
  var $lastSlide = $("div.active");
  var $slide = $("div[data-slide='" + target + "']");
  $lastSlide.removeClass("active");
  $slide.addClass("active");
};
