$(function(){
	//加载头部尾部
	$('.header_wrap').load('header.html');
	$('.footer_wrap').load('footer.html');
	var arr = [[],[],[],[]];
	arr[0] = [['悟 Inspire 2','出色的成像质量、强悍的飞行能力，为专业影视制作而生。'],
		['灵眸 Osmo Pro/RAW','M4/3传感器、工业级云台，拍摄1600万像素照片和专业4K视频。'],
		['悟 Inspire 1 Pro/RAW','M4/3相机出色的影像性能，开启专业级航拍的全新时代。'],
		['悟 Inspire 1','DJI 的核心技术融合，简易的飞行平台，带给您难忘体验。']
		];
	arr[1] = [['禅思 Zenmuse X7','禅思X7是为电影拍摄推出的紧凑型S35云台相机，可搭配在Inspire 2上使用。 X7最高可录制6K '],
		['禅思 Zenmuse X5S','M4/3航拍相机，可录5.2K CinemaDNG和4k Apple ProRes视频，满足影视航拍需求。'],
		['禅思 Zenmuse X4S','配备工业级三轴增稳平台，支持录制RAW格式4K视频。'],
		['禅思 Zenmuse X5R','配备工业级三轴增稳平台，支持录制RAW格式4K视频。'],
		['禅思 Zenmuse X5','高画质M4/3影像传感器，可拍摄4K/30p视频。']
		];
	arr[2] = [['如影Ronin-S','针对单反和微单的专业手持云台，小巧轻便可单手操作。'],
		['如影 Ronin 2','动力强劲的三轴云台，能在任何场景和配备上稳定影像。'],
		['如影 Ronin-MX','同时满足航拍与地拍的专业三轴云台，拍摄效果稳定流畅。'],
		['如影 Ronin-M','轻量化的专业三轴云台，给影视摄影师带来自在体验。'],
		['如影 Ronin','专业级三轴云台，可满足日常拍摄和影视制作需求。']
		];
	arr[3] = [['DJI大师摇轮','Master Wheels 是大疆推出的一款专业级的摇轮控制器，采用高精度传感器配合全新的控制算法'],
		['DJI体感控制器专业版','DJI体感控制器专业版采用了先进的通信技术配合全新的控制算法，使云台系统能实时响应体感操作'],
		['DJI电池管理站','TB50智能电池适用'],
		['Cendence','CENDENCE遥控器拥有多个可自定义功能的按键及旋钮'],
		['CrystalSky','CrystalSky 高亮显示屏为航拍设计，在强光下能显示清晰的影像'],
		['Osmo配件','用全新的灵眸Osmo配件系列打开广阔的创意空间。每个拍摄场景都有与之匹配的套件'],
		['DJI 无线跟焦器','专业级无线镜头控制系统，精度高达 ±0.02°']
		];	
	$('.con_nav_list li').click(function(){
		var i = $(this).index();
		$('.con_right_item').fadeOut(300);
		$(this).addClass('con_nav_li').siblings().removeClass('con_nav_li');
		$('.fa-angle-right').eq(0).css('top',i * 40 + 34 + 'px');
		if(i == 2){
			$('.fa-angle-right').eq(0).css('left',153 + 'px');
		}else{
			$('.fa-angle-right').eq(0).css('left',120 + 'px');
		}
		setTimeout(function(){
			$('.con_right').empty();
			var itemCon = '';
			for (var j = 0; j < arr[i].length; j++) {
				itemCon += '<div class="con_right_item" style="display:none;">' + 
					'<div class="item_img">' + 
						'<img src="img/p' + i +'' + j + '.jpg">' + 
					'</div>' + 
					'<div class="item_txt">' + 
						'<h3>' + arr[i][j][0] + '</h3>' + 
						'<p>' + arr[i][j][1] + '</p>' +
						'<div class="item_txt_active">' + 
							'<button class="con_btn">立即购买</button> ' + 
							'<span class="con_sp">了解更多 &nbsp; <i class="fa fa-angle-right" aria-hidden="true"></i></span>' + 
						'</div>' + 
					'</div>' + 
				'</div>';
			}
			$('.con_right').html(itemCon);
			$('.con_right_item').fadeIn(300);
		},300)
		
	})
})