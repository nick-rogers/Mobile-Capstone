$(document).ready(function(){





$('.prog').click(function(){

	$('.prog').css('width', '150px');


});








// Scroll function 
$(document).scroll(function() {
    console.log($(document).scrollTop());
    $('.p-bar').css('height', Math.round($(document).scrollTop()/27)+'px');
})
































});