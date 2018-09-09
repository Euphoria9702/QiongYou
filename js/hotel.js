/*
* @Author: Administrator
* @Date:   2018-06-18 15:19:08
* @Last Modified by:   admin
* @Last Modified time: 2018-06-21 10:13:02
*/
// nav栏鼠标经过
$('.nav>li span').mouseenter(function(event) {
	$(this).css('color', '#10b041');
	$(this).parent().parent().children('div').show();
	$(this).parent().parent().siblings().children('div').hide();
});
$('.nav>li span').mouseleave(function(event) {
	$(this).css('color', 'silver');
	$('.nav>li span').eq(7).css('color', '#10b041');
});
$('.nav>li').mouseleave(function(event) {
	$(this).children('div').hide();
});


// 鼠标点击切换酒店，民宿
$('.search .s_search>span').click(function(event) {
	/* Act on the event */
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var i=$(this).index();
	if(i==0){
		$('.search').removeClass('current_pink');
		$('.search').addClass('current_bule');
		$('.ss_btn').val('搜索酒店');
		$('.ss_btn').css('background', 'linear-gradient(to right,#ffb631 0,#ff9f0a 100%)');
		$('.ss_input .data span').css('color', '#1467B6');
	}
	else{
		$('.search').addClass('current_pink');
		$('.ss_btn').val('搜索民宿');
		$('.ss_btn').css('background', 'linear-gradient(to right,#fe9560 0,#fd7d77 100%)');
		$('.ss_input .data span').css('color', '#ff7656');	
	}
	
});


// 点击输入，弹出复选
$(document).click(function(){
    $('.ss_input .ss_ipt_choose').css('display', 'none');
});
$('.ss_input .where').click(function() {
	/* Act on the event */
	$('.ss_input .ss_ipt_choose').css('display', 'block');
	return false;
});



//鼠标经过显示服务

$('.ss_more .fuwu span') .hover(function() {
	$('.ss_more .fuwu ul').css('display', 'block');
}, function() {
	$('.ss_more .fuwu ul').css('display', 'none');
});


// 点击切换旅游城市
$('.container .con1>ul li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var i=$(this).index();
	// $('.container .con1 .con1_box1').eq(i).css('display', 'block');
	$('.container .con1 .con1_box1').eq(i).fadeIn(1000);
	$('.container .con1 .con1_box1').eq(i).siblings('div').css('display', 'none');
});

// 鼠标经过遮罩图片
$('.card_img').hover(function() {
	$(this).children('.card_current').fadeIn();
}, function() {
	$(this).children('.card_current').fadeOut();
});

$('.con4>div .img').hover(function() {
	$(this).children('.card_current').fadeIn();
}, function() {
	$(this).children('.card_current').fadeOut();
});


$('.tour_fixed ul li:nth-of-type(2)').hover(function() {
	$('.tour_app').css('display', 'block');
}, function() {
	$('.tour_app').css('display', 'none');
});
$(window).scroll(function(event) {
	if($(window).scrollTop()>=500){
		$('.tour_fixed').css('display', 'block');
	}else{
		$('.tour_fixed').css('display', 'none');
	}
});
$('.tour_fixed ul li:nth-of-type(1)').click(function(event) {
	$('html,body').animate({'scrollTop':'0'}, 500)
});
$('.tour_fixed li').hover(function() {
	$(this).css({'background': '#95d195','color':'#fff'});
}, function() {
	$(this).css({'background': '#fff','color':'#b2b2b2'});
});