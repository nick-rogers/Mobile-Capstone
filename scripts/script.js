$(document).ready(function(){



var open = false;

$('.prog').click(function(){

	if(open){
		$('.prog').css('width', '30px');
		open = false;
	}else {
		$('.prog').css('width', '150px');
		open = true;
	}

});








// Scroll function 
$(document).scroll(function() {
    console.log($(document).scrollTop());
    $('.p-bar').css('height', Math.round($(document).scrollTop()/27)+'px');
})











/*
$('.mobile-section').click(function(){

	$('.mobile-section').css('height', '100vh');
	$('.mobile-section').css('position', 'fixed');
	$('.mobile-section').css('top', '0');
	$('.mobile-section').css('margin-top', '0px');


});
*/





$('.mobile-section').click(function(){

	$('.split').css('height', '100vh');
	$('.split1').css('margin-top', '-100vh');
	$('.fill').css('height', '100%');

	$('.mi').css('clip-path', 'none');


});










































});