$(function(){
	//加载头部尾部
	$('.header_wrap').load('header.html');
	$('.footer_wrap').load('footer.html');
	var arr = [[],[],[],[],[]];
	arr[0] = [['N3 飞行控制系统','最新控制导航算法，双IMU冗余，减震结构，可靠性高。'],
		['A3 飞行控制系统','安全可靠精准控制，丰富的扩展和外设支持开创更多可能。'],
		['Naza-M V2 飞行控制系统','一体化设计理念，配备独立电源模块并具有增强功能扩展。'],
		['Naza-M Lite 飞行控制系统','智能方向控制，姿态稳定算法，高性价比入门级控制平台。'],
		['Naza-H 飞行控制系统','集成暴力3D和脱控悬停，专为直升机模型爱好者打造。'],
		['Ace One 飞行控制系统','体积小重量轻，简单便捷的直升机飞行控制系统。']
		];
	arr[1] = [['E7000 多旋翼动力系统','配备M12电机，12100 FOC电调和R3390螺旋桨，防水防锈'],
		['E5000 多旋翼动力系统','配备M10电机、1280FOC电调和28吋螺旋桨，防水防锈。'],
		['E2000 多旋翼动力系统','配备6010电机、1240S/X电调和21吋螺旋桨，防水防锈防尘。'],
		['Snail 穿越机动力系统','DJI为专业竞速打造、系统化设计的穿越机动力系统。'],
		['E305 多旋翼动力系统','配备2312E电机、420LITE电调和9吋螺旋桨，效率大幅提升。'],
		['Takyon Z660 电子调速器','基于DJI定制芯片集成方案及模块化设计，电机控制更精准。'],
		['Takyon Z650 电子调速器','基于DJI定制的芯片集成方案及模块化设计，为无人机竞速打造。'],
		['Takyon Z14120 电子调速器','自带黑匣子数据记录及语音提示功能，防水防尘防腐蚀。'],
		['Takyon Z415-M 电子调速器','采用32位电机驱动芯片，最高100MHz主频，48kHz输出PWM频率。'],
		['Takyon Z318/Z420 电子调速器','基于DJI定制芯片集成方案及模块化设计，支持DJI Assistant 2调参。'],
		['风火轮系列','为航模爱好者开发的高强度、大空间的整体解决方案。'],
		];
	arr[2] = [['Cendence','CENDENCE遥控器拥有多个可自定义功能的按键及旋钮。'],
		['DataLink 3','地面端具备数传电台功能，搭配天空端可用作通用遥控器。'],
		['DataLink Pro 数传电台','采用全新频段规避干扰的数传电台，拥有多种接口和工作模式'],
		['DJI Lightbridge 2','DJI首款远距离、低延时、广播级一体化数字图传。'],
		['DJI Lightbridge','DJI首款2.4GHz远距离全高清数字图像传输系统。']
		];
	arr[3] = [['妙算 Manifold','手掌大小、出众的计算能力，可以大幅提升机器人的计算能力。'],
		['视觉传感导航系统','一款全新的视觉传感导航系统，可感知附近障碍物。'],
		['经纬 Matrice 100','一款功能强大、可灵活扩展的飞行平台，适用于众多领域。']
		];
	arr[4] = [['D-RTK','专为A3系列飞控开发的高精度导航定位系统，提升定位精度。'],
		['iOSD MARK II','可将飞行数据信息以数字加图形化的表现方式呈现。'],
		['iOSD Mini','DJI iOSD mini可与Phantom 2配合，用于航模领域的FPV飞行。']
		];	
	$('.con_nav_list li').click(function(){
		var i = $(this).index();
		$('.con_right_item').fadeOut(300);
		$(this).addClass('con_nav_li').siblings().removeClass('con_nav_li');
		$('.fa-angle-right').eq(0).css('top',i * 40 + 34 + 'px')
		if(i == 0){
			$('.fa-angle-right').eq(0).css('left',136 + 'px');
		}else if(i == 3){
			$('.fa-angle-right').eq(0).css('left',107 + 'px');
		}else{
			$('.fa-angle-right').eq(0).css('left',120 + 'px');
		}
		setTimeout(function(){
			$('.con_right').empty();
			var itemCon = '';
			for (var j = 0; j < arr[i].length; j++) {
				itemCon += '<div class="con_right_item" style="display:none;">' + 
					'<div class="item_img">' + 
						'<img src="img/s' + i +'' + j + '.jpg">' + 
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