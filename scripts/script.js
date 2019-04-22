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



















var martop, marginDiff;
$('.mobile-section').click(function(){

	// Turns off the ability to scroll and hides nav
	toggleOverflow();
	//hideShowNav();

	$('.tri-con').css('display', 'block');


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
	$('.split2').css('margin-top', '0vh');
	$('.fill').css('height', '100%');
	$('.fill1').css('bottom', '0');
	$('.fill2').css('top', '0');

	setTimeout(function(){
		$('.mi').css('clip-path', 'none');
	}, 175);


});







// Function to shrink and return division to its default status 
$('#h-b').click(function(){

	// Toggle the navigation elements and enable scroll
	toggleOverflow();
	//hideShowNav();

	$('.tri-con').css('display', 'none');

	setTimeout(function(){
		$('.mi').css('clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)');
	}, 300);


	$('.split').css('height', '175px');
	$('.split1').css('margin-top', '-175px');
	$('.split2').css('margin-top', '75px');
	$('.fill').css('height', '0%');


	$(".mob-image").css({
		"position": "absolute", 
		"top": "0",
		"top": '0px'});

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





var navVis = true;
function hideShowNav (){
	if(navVis) {
		$('.nav-wrap').css('display', 'none');
		navVis = false;
	} else {
		$('.nav-wrap').css('display', 'block');
		navVis = true;
	}

}






























});