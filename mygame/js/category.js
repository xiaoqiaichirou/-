$(function(){
	//加载头部尾部
	$('.header_wrap').load('header.html');
	$('.footer_wrap').load('footer.html');
	$('.item1,.item2,.item3').css('opacity','0');
	$(window).scroll(function(){
		for (var i = 0; i < $('.item1,.item2,.item3').length; i++) {
			if($('html,body').scrollTop() > $('.item1,.item2,.item3').eq(i).position().top - 500){
				$('.item1,.item2,.item3').eq(i).addClass('animated slideInUp').css('opacity','1');
			}
		}
	})
})