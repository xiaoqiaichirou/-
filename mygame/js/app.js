$(function(){
	//加载尾部
	$('.footer_wrap').load('footer.html');
	var i = 0;
	var appBannerTime = null;
	$('.banner_wrap .fa-angle-right').click(bannerRight)
	function bannerRight(){
		i++;
		if(i > $('.banner_img').length - 1){
			i = 0;
		}
		$('.banner_img').fadeOut();
		$('.banner_img').eq(i).fadeIn();
		appBanner();
		
	}
	setInterval(bannerRight,6000);
	$('.banner_wrap .fa-angle-left').click(function(){
		i--;
		if(i < 0){
			i = $('.banner_img').length - 1;
		}
		$('.banner_img').fadeOut();
		$('.banner_img').eq(i).fadeIn();
		appBanner();
	})
	$('.banner_bottom_btn span').click(function(){
		i = $('.banner_bottom_btn span').index(this);
		$('.banner_img').fadeOut();
		$('.banner_img').eq(i).fadeIn();
		// $(this).addClass('banner_bottom_dis').siblings().removeClass('banner_bottom_dis');
		appBanner();
	})
	appBanner()
	function appBanner(){
		$('.banner_bottom_btn span').eq(i).addClass('banner_bottom_dis').siblings().removeClass('banner_bottom_dis');
		$('.banner_img h3,.banner_img p,.banner_img button').css('display','none').removeClass('animated flipInX');
		setTimeout(function(){
			$('.banner_img').eq(i).find('h3').show().addClass('animated flipInX');
		},300);
		setTimeout(function(){
			$('.banner_img').eq(i).find('p').show().addClass('animated flipInX');
		},400);
		setTimeout(function(){
			$('.banner_img').eq(i).find('button').show().addClass('animated flipInX');
		},500);
	}

	// features
	var fre = 0;
	$('.features_left li').click(function(){
		var fIndex = $(this).index();
		if(fIndex != fre){
			$('.features_left span').css('top',fIndex * 76 + 30 + 'px' );
			$(this).addClass('features_left_show').siblings().removeClass('features_left_show');
			$('.features_show').fadeOut(); 
			$('.features_show').eq(fIndex).fadeIn();
			fre = fIndex;
		}
	})
	var appReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	$('.male_email button').click(function(){
		var footerBol = appReg.test($('.male_email input').val())
		if(footerBol){
			$('.male_tip').html('');
		}else{
			$('.male_tip').html('请输入正确的邮箱地址');
		}
	});
	$('.friend_img li').hover(function(){
		var i = $('.friend_img li').index(this);
		$(this).find('img').addClass('animated swing');
	},function(){
		var i = $('.friend_img li').index(this);
		$('.friend_img li').find('img').removeClass('animated swing');
	});
})