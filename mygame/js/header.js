$(function(){
	// 导航下拉内容存储
	var navIndex = 0;
	var navArr = [[],[],[],[]];
	if($('.nav_header_box').parent().hasClass('index')){
		$('.nav_header_box').css('backgroundColor','transparent');
		$('.nav_list_ul li a').css('color','#fff');
		$('.nav_header .logo i').css('background','url(http://www1.djicdn.com/assets/images/v3/logo-white-b41f40998f5c6b07e90e184fb34ed4bc.svg)');
		$('.nav_header_right i').eq(0).css('background','url(img/secW.png) no-repeat');
		$('.nav_header_right i').eq(1).css('background','url(img/userW.png) 2px 2px/20px 20px no-repeat');
	}else{
		$('.nav_header_box').css('backgroundColor','#fff');
		$('.nav_list_ul li a').css('color','#303233');
		$('.nav_header .logo i').css('background','url(https://www2.djicdn.com/assets/images/v3/logo-black2-145dcb13c56f36a65d084180a42136fa.svg)');
		$('.nav_header_right i').eq(0).css('background','url(img/secB.png) no-repeat');
		$('.nav_header_right i').eq(1).css('background','url(img/userB.png) 2px 2px/20px 20px no-repeat');
	}
	navArr[0] = [['御 Mavic 系列','你口袋里的航拍摄影师','御 Mavic Air','御 Mavic Pro 铂金版','御 Mavic Pro'],
		['晓 Spark 系列','小身型，大身手，一键记录生活点滴','晓 Spark'],
		['精灵 Phantom 系列','准专业级航拍影像系统','精灵 Phantom 4 Pro','精灵 Phantom 4 Advanced','精灵 Phantom 3 SE'],
		['灵眸 Osmo 系列','拍摄从此得心应手','灵眸 Osmo 手机云台 2','灵眸 Osmo 手机云台','灵眸 Osmo+','灵眸 Osmo','灵眸 Osmo 配件'],
		['其他产品','全面提升拍摄乐趣','DJI 飞行眼镜 竞速版','DJI 飞行眼镜']];
	navArr[1] = [['集成系统','专业影视拍摄，便捷高效演译','悟 Inspire 2','灵眸 Osmo Pro/Raw'],
		['相机云台','专业级三轴增稳云台相机','禅思 Zenmuse X7','禅思 Zenmuse X5S','禅思 Zenmuse X4S','禅思 Zenmuse X5R','禅思 Zenmuse X5'],
		['摄像増稳系统','不同的场景和装配，相同的稳定影像','如影 Ronin 2','如影 Ronin-S','如影 Ronin-MX','如影 Ronin-M','如影 Ronin '],
		['专业配件','享受更专业的拍摄体验','DJI 大师摇轮','DJI 体感控制器专业版','CrystalSky','Cendence','DJI 电池管理站']];
	navArr[2] = [['解决方案','高效作业，智能管理，降低植保成本','MG-1P 系列','MG-1S Advanced','大疆农业智能解决方案','MG-1S'],
		['飞行平台','用灵活机动的视野实现更多创新','经纬 Matrice 200 系列','经纬 Matrice 600 Pro','经纬 Matrice 100','精灵 Phantom 4 RTK'],
		['负载系列','解决信息搜集的核心挑战','禅思 Zenmuse XT2','禅思 Zenmuse XT','禅思 Zenmuse Z30','禅思 Zenmuse X5S','禅思 Zenmuse X4S'],
		['软件服务','专业级航线规划，让飞行任务更简单','PC 地面站专业版','农业服务平台','大疆司空','地面站专业版'],
		['开发者技术','用强大的软件工具实现更多可能','Mobile SDK','Onboard SDK','Payload SDK']];
	navArr[3] = [['飞行控制器','集智可靠，精准控制','A3','N3'],
		['动力系统','飞行动力源泉','E7000','E5000','E2000','Snail'],
		['传输系统','看得远，看得清晰且操控精准','DJI Lightbridge 2','DJI Lightbridge','Datalink 3','Datalink Pro'],
		['开发者','为飞行开创更多可能','经纬 Matrice 100','妙算 Manifold','视觉传感导航系统'],
		['其他配件','激发应用潜力','D-RTK','iOSD MARK II','Cendence']];
	// 鼠标移入显示下拉菜单
	$('.nav_list_ul').eq(0).hover(ulShow,ulHide);
	$('.nav_bom_box').hover(function(){
		ulShow();
		$('.nav_list_ul li a').css('color','#919699');
		$('.nav_list_ul li a').eq(navIndex).css('color','#303233');
	},function(){
		ulHide();
		$('.nav_list_ul li a').css('color','#303233');
	});
	$('li.nav_list_ul_li3').hover(sortShow).siblings().hover(sortHide);
	function ulShow(){
		$('.nav_bom_box').stop().slideDown(300,function(){
			$('.nav_bom_box').css('height','auto');
		});
	}
	function ulHide(){
		$('.nav_bom_box').stop().slideUp(10);
	}
	function sortShow(){
		$('.sort').css('display','block');
		$('.nav_bom_box').css('height','auto');
	}
	function sortHide(){
		$('.sort').css('display','none');
	}
	// 鼠标移入文字变色
	$('.nav_list').mouseleave(function(){
		$('.nav_list_ul li').find('a').css('color','#303233');
	});
	$('.nav_header_box').mouseenter(function(event){
		$('.nav_header_box').css('backgroundColor','#fff');
		$('.nav_header .logo i').css('background','url(https://www2.djicdn.com/assets/images/v3/logo-black2-145dcb13c56f36a65d084180a42136fa.svg)');
		$('.nav_header_right i').eq(0).css('background','url(img/secB.png) no-repeat');
		$('.nav_header_right i').eq(1).css('background','url(img/userB.png) 2px 2px/20px 20px no-repeat');
		if(event.target.tagName != 'A'){
			$('.nav_list_ul li').find('a').css('color','#303233');
		}
	});
	$('.nav_header_box').mouseleave(function(){
		if($('.nav_header_box').parent().hasClass('index')){
			$('.nav_list_ul li').find('a').css('color','#fff');
			$('.nav_header_box').css('backgroundColor','transparent');
			$('.nav_header .logo i').css('background','url(http://www1.djicdn.com/assets/images/v3/logo-white-b41f40998f5c6b07e90e184fb34ed4bc.svg)');
			$('.nav_header_right i').eq(0).css('background','url(img/secW.png) no-repeat');
			$('.nav_header_right i').eq(1).css('background','url(img/userW.png) 2px 2px/20px 20px no-repeat');
		}
	});
	$('.nav_list_ul:eq(1) li').hover(function(){
		$('.nav_list_ul li').find('a').css('color','#919699');
		$(this).find('a').css('color','#303233');
	});
	$('.sort_list_ul li').hover(function(){
		$(this).children().css({
			'color' : '#303233',
			'borderColor' : '#303233'
		});
		$(this).siblings().children().css({
			'color' : '#919699',
			'borderColor' : '#919699'
		})
	},function(){
		$('.sort_list_ul li a,.sort_list_ul li span').css({
			'color' : '#303233',
			'borderColor' : '#919699'
		})
	})
	$('.columns_list_ul').on('mouseenter','p',function(){
		$(this).css('color','#303233').siblings('p').css('color','#919699');
	})
	$('.columns_list_ul').on('mouseleave','p',function(){
		$(this).siblings('p').css('color','#303233');
	});
	
	// 加载导航下拉内容
	$('.nav_list_ul:eq(0) li').hover(function(){
		var i = $('.nav_list_ul:eq(0) li').index(this);
		$('.nav_list_ul li').find('a').css('color','#919699');
		$('.nav_list_ul:eq(0) li').eq(i).find('a').css('color','#303233');
		$('.columns_list_li1').html('');
		switch(i){
			case 0:
				$('.nav_button').html('<button><span>消费级无人机对比</span></button>' + 
					'<button><span>灵眸 OSMO 系列对比</span></button>');
				break;
			case 1:
				$('.nav_button').html('<button><span>悟 Inspire 系列对比</span></button>' + 
					'<button><span>禅思 Zenmuse 系列对比</span></button>' + 
					'<button><span>如影 Ronin 系列对比</span></button>' + 
					'<button><span>配置如影 Ronin 套装</span></button>');
				break;
			case 2:
				$('.nav_button').html('<button><span>经纬 Matrice 200 系列对比</span></button>' + 
					'<button><span>禅思XT 系列航拍相机对比</span></button>');
				break;
			case 3:
				$('.nav_button').html('');
				break;
		}
		if($('.nav_button').text()){
			$('.nav_button').css('padding','24px 0 32px');
			$('.nav_button button').css('padding','15px 32px');
		}else{
			$('.nav_button').css('padding','0');
			$('.nav_button button').css('padding','0');
		}
		for (var j = 0; j < navArr[i].length; j++) {
			$('.columns_list_li1').eq(j).html('<h4>' + navArr[i][j][0] + '</h4>' +
				'<h5>' + navArr[i][j][1] + '</h5>' + 
				'<div class="li_img"><img src="img/nav_0' + (i + 1) + '_0' + (j + 1) + '.jpg"></div>');
			for (var k = 0; k < navArr[i][j].length; k++) {
				if(navArr[i][j][k + 2]){
					$('.columns_list_li1').eq(j).append('<p>' + navArr[i][j][k + 2] + '</p>')
				}
			}
		}
	},function(){
		navIndex = $('.nav_list_ul:eq(0) li').index(this);
	});
	$('.logo').click(function(){
		location.href='index.html';
	});
	$('.nav_list_down li').hover(function(){
		$('.nav_list_ul li').find('a').css('color','#919699');
		$(this).parent().prev().css('color','#303233');
	})
})