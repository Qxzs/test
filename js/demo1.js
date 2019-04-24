$(function(){
	var num = 0;
	var timer = setInterval(autoplay,1000);
	$("#show").mouseenter(function(){
		clearInterval(timer);
	})
	$("#show").mouseleave (function(){
		timer = setInterval(autoplay,1000);
	})
	$("#show ul li").mouseenter(function(){
		var num = $(this).index();
		$("#show img").eq(num).fadeIn(500).siblings('img').fadeOut(500);
		$("#show ul li").eq(num).css('background','red')
		.siblings('li').css('background','gray');
	})
	
	function autoplay(){
	   num ++;
		if(num == 5){
			num=0;
		}
		$("#show img").eq(num).fadeIn(100).siblings('img').fadeOut(100);
		$("#show ul li").eq(num).css('background','red')
		.siblings('li').css('background','gray');
}
}
)
