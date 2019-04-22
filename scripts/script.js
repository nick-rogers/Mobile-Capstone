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
var scrolled = 0, percentage;
$(document).scroll(function() {
    console.log($(document).scrollTop());
    scrolled = $(document).scrollTop();
    percentage = Math.round(($(document).scrollTop()/48250)*100);
    console.log(percentage);
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







var martop, marginDiff;
$('.mobile-section').click(function(){

	// Turns off the ability to scroll
	toggleOverflow();

	// Collects the margin top distance for object image placement
	martop = $(this).css('margin-top');
	martop = parseInt(martop);
	marginDiff = martop-scrolled;


	// Mobile image is made fixed and placed correctly relative to the division
	$(".mob-image").css({
		"position": "fixed", 
		"top": "0",
		"top": marginDiff+'px'});
	

	// Makes division marks animate, separate 
	$('.split').css('height', '100vh');
	$('.split1').css('margin-top', '-100vh');
	$('.fill').css('height', '100%');


	setTimeout(function(){
		$('.mi').css('clip-path', 'none');
	}, 100);

	setTimeout(function(){
		$('.mobile-section').css('position', 'fixed');
		$('.mobile-section').css('height', '100vh');
		$('.mobile-section').css('top', '0');

	}, 300);



});







var objectOpen = false;

function toggleOverflow (){

	if(objectOpen){
		$('body').css('overflow-y', 'scroll');
		objectOpen = false;
	}else {
		$('body').css('overflow-y', 'hidden');
		objectOpen = true;
	}

};







$('#h-b').click(function(){

	toggleOverflow();


});



























});