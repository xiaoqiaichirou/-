$(function(){
	//加载头部尾部
	$('.header_wrap').load('header.html',function(){return true});
	$('.footer_wrap').load('footer.html',function(){return true});
	//轮播左右按钮点击
	var bannerListBol = true;
	var bannerBtnBol = true;
	var bannerNum = 32;
	var bannerArr = ['linear-gradient(top,#272727,#555555)',
		'linear-gradient(top,#2a3034,#62686b)',
		'linear-gradient(top,#707c87,#98a6b3)',
		'linear-gradient(top,#000000,#000000)',
		'linear-gradient(top,#101013,#3b3d40)',
		'linear-gradient(top,#14141a,#505459)',
		'linear-gradient(top,#5d7385,#8da0b0)',
		'linear-gradient(top,#22282d,#636a70)']
	var bannerIndex = 0;
	$('.banner_left_btn').click(bannerLeft);
	$('.banner_right_btn').click(bannerRight);
	function bannerLeft(){
		if(bannerBtnBol){
			bannerBtnBol = false;
			bannerIndex--;
			if (bannerIndex < 0) {
				bannerIndex = $('.banner_box').length - 1;
			}
			bannerNum = -32;
			bannerGo();
			bannerList();
		}
	}
	function bannerRight(){
		if(bannerBtnBol){
			bannerBtnBol = false;
			bannerIndex++;
			if (bannerIndex > $('.banner_box').length - 1) {
				bannerIndex = 0;
			}
			bannerNum = 32;
			bannerGo();
			bannerList();
		}
	}
	function bannerGo(){
		$('.banner_box').eq(bannerIndex).fadeIn(200).siblings().fadeOut(200);
		$('.banner_box').eq(bannerIndex).find('img:eq(0),p').addClass('animated fadeInDown');
		$('.banner_box').eq(bannerIndex).find('img:eq(1)').addClass('animated fadeInUp');
		for (var i = 0; i < $('.banner_box').length; i++) {
			if(bannerIndex == i){
				$('.banner_wrap').css({
					'backgroundImage' : bannerArr[i],
					'backgroundImage' : '-webkit-' + bannerArr[i]
				})
			}
		}
		setTimeout(function(){
			bannerBtnBol = true;
		},400)
	}
	// 列轮播表点击
	for (var i = 0; i < $('.banner_list_box li').length; i++) {
		$('.banner_list_box li').eq(i).css({
			'top' : i * 32 + 21 + 'px'
		})
	}
	bannerPos();
	function bannerPos(){
		for (var i = 0; i < $('.banner_list_box li').length; i++) {
			if($('.banner_list_box li').eq(i).position().top < 0){
				var lis = $('.banner_list_box li').eq(i);
				$('.banner_list_box li').eq(i).remove();
				$('.banner_list_box ul').append(lis);
			}
		}
	}
	function bannerPosLeft(){
		for (var i = 0; i < $('.banner_list_box li').length; i++) {
			if($('.banner_list_box li').eq(i).position().top > 245){
				var lis = $('.banner_list_box li').eq(i);
				$('.banner_list_box li').eq(i).remove();
				$('.banner_list_box ul').prepend(lis);
			}
		}
	}
	$('.banner_list_box').on('click','li',function(){
		if(bannerListBol){
			bannerListBol = false;
			if($(this).position().top <= 85){
				bannerLeft();
			}else if($(this).position().top >= 117){
				bannerRight();
			}
		}
	})
	for (var i = 0; i < $('.banner_list_box li').length; i++) {
		$('.banner_list_box li').eq(i).css({
			'opacity' : (100-(Math.abs(117-$('.banner_list_box li').eq(i).position().top))*1.4)/100
		})
		if($('.banner_list_box li').eq(i).css('opacity') < 0){
			$('.banner_list_box li').eq(i).css('opacity') = 0;
		}
	}
	function bannerOpa(){
		if(bannerNum > 0){
			var iNum = 1;
		}else{
			var iNum = -1;
		}
		// setTimeout(function(){
		// 	$('.banner_list_box li').eq(3+iNum).css('fontWeight','500').siblings().css('fontWeight','100');
		// },300)
		
		for (var i = 0; i < $('.banner_list_box li').length; i++) {
			$('.banner_list_box li').eq(i+iNum).css({
				'opacity' : (100-(Math.abs(117-$('.banner_list_box li').eq(i).position().top))*1.4)/100
			});
		}
	}
	function bannerList(){
		for (var i = 0; i < $('.banner_list_box li').length; i++) {
			$('.banner_list_box li').eq(i).animate({
				'top' :  $('.banner_list_box li').eq(i).position().top - bannerNum + 'px'
			},400,'easeInOutCubic',function(){
				bannerPos();
				bannerPosLeft()
				for (var i = 0; i < $('.banner_list_box li').length; i++) {
					$('.banner_list_box li').eq(i).css({
						'top' : i * 32 + 21 + 'px'
					})
				}
				
			})
		}
		bannerOpa();
		setTimeout(function(){
			bannerListBol = true;
		},500)
	}

	// img--------------------------------------------
	
	function imgTran(){
		for (var i = 0; i < $('.img_top_left div').length; i++) {
			var imgNum = 0.85 + (i * 0.05);
			if(imgNum < 0.9){
				imgNum = 0.9;
			}
			$('.img_top_left div').eq(i).css({
				'transform' : 'scale(' + imgNum + ')'
			})
		}
		for (var i = 0; i < $('.img_top_left div').length; i++) {
			$('.img_top_left div').eq(i).css('zIndex',i);
			
		}
		$('.img_top_left div').eq(4).css('opacity','0').siblings().css('opacity','1')
	}
	$('.img_top_left').hover(imgTran,function(){
		$('.img_top_left div').css({
			'transform' : 'scale(1)'
		})
	})
	$('.fa-angle-right').eq(1).click(function(){
		var imgDiv = $('.img_top_left div').eq(4);
		$('.img_top_left div').eq(4).remove();
		$('.img_top_left').prepend(imgDiv);
		imgTran();
	})
	$('.fa-angle-left').eq(1).click(function(){
		var imgDiv = $('.img_top_left div').eq(0);
		$('.img_top_left div').eq(0).remove();
		$('.img_top_left div').eq(3).after(imgDiv);
		imgTran();
	})

	$('.service_list div').hover(function(){
		$(this).css('color','#303233').siblings().css('color','#999');
	},function(){
		$('.service_list div').css('color','#303233');
	})
	return false;
})