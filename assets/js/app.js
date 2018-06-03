var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}


$('#wireframe').addClass('reminder__nav-tab--current');
$('#wireframe, #mockup, #tools').click(function() {
    $('#wireframe, #mockup, #tools').removeClass('reminder__nav-tab--current')
    $(this).addClass('reminder__nav-tab--current');
});


$('#wireframe').click(function(){
    $('#js-wireframe-slide').addClass('show').removeClass('hide')
    $('#js-mockup-slide').addClass('hide').removeClass('show')
    $('#js-tools-slide').addClass('hide').removeClass('show')
})

$('#mockup').click(function(){
    $('#js-mockup-slide').addClass('show').removeClass('hide')
    $('#js-wireframe-slide').addClass('hide').removeClass('show')
    $('#js-tools-slide').addClass('hide').removeClass('show')
})

$('#tools').click(function(){
    $('#js-tools-slide').addClass('show').removeClass('hide')
    $('#js-wireframe-slide').addClass('hide').removeClass('show')
    $('#js-mockup-slide').addClass('hide').removeClass('show')
})
