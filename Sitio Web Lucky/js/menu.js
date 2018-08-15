$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

		$('.button').click(function(){
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		});
	});
};

 $(document).on("click",function(e) {

 	var menu = $(".menu_bar"),
 		container = $("nav");

 	if ((!container.is(e.target) && container.has(e.target).length === 0) && 
 		(!menu.is(e.target) && menu.has(e.target).length === 0)  ){ 
 		contador = 1;
 		$('nav').animate({
			left: '-100%'
		});               
 	}
 });