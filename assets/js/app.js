var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


$('#wireframe').addClass('reminder__nav-tab--current');
$('#wireframe, #mockup, #tools').click(function() {
	$('#wireframe, #mockup, #tools').removeClass('reminder__nav-tab--current')
	$(this).addClass('reminder__nav-tab--current');
})

$('#wireframe').click(function() {
	$('#wireframe-slider, #mockup-slider, #tools-slider').hide()
	$('#wireframe-slider').show();
});

$('#mockup').click(function() {
	$('#wireframe-slider, #mockup-slider, #tools-slider').hide();
	$('#mockup-slider').show();
});

$('#tools').click(function() {
	$('#wireframe-slider, #mockup-slider, #tools-slider').hide();
	$('#tools-slider').show();
});