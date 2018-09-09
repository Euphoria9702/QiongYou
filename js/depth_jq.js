/*
* @Author: admin
* @Date:   2018-06-12 15:27:55
* @Last Modified by:   Mo
* @Last Modified time: 2018-06-24 23:53:15
*/
$('.nav>li').hover(function(event) {
	$(this).children('a').children('span').css('color', '#10b041');
	$(this).children('div').show();
	$(this).siblings().children('div').hide();
},function(event) {
	$(this).children('a').children('span').css('color', 'silver');
	$('.nav>li span').eq(0).css('color', '#10b041');
	$(this).children('div').hide();
});
var inp=0;
$('.nav_search').hover(function(event) {
	inp=0;
	$('.nav_search input').stop().animate({'width': '150px'}, 200)
},function(event){
	if(inp==0){
		$('.nav_search input').stop().animate({'width': '0px'}, 200)
	}else{
		$('.nav_search input').css('width','150px');
	}
});
$('.nav_search input').click(function(event) {
	inp=1;
	return false;
});
$(document).click(function(event) {
	inp=0;
	$('.nav_search input').stop().animate({'width': '0px'}, 200)
});
/*-----------------------------nav-------------------------------*/

var timer,num=0;
function autogo(){
	clearInterval(timer);
	timer=setInterval(function(){
		if(num>2) num=0;
		$('.d_m_ul li').eq(num).fadeIn(1500);
		$('.d_m_ul li').eq(num).siblings('li').fadeOut(1500);
		num++;
	},2500)
}
autogo();
/*-----------------------图片切换--------------------------------*/

$('.d_t_con2>ul>li').hover(function(event) {
	$(this).children('.dt_c2_introduce').stop().slideToggle(500)
});

/*--------------------------------------------------------------*/

var num1=0;
$('.depth_left').click(function(event) {
	num1--;
	if(num1<0) num1=0;
	$(this).css('background', 'rgba(0,0,0,0.6)');
	$('.depth_right').css('background', 'rgba(0,0,0,0.6)');
	$('.dt3_ul>ul').animate({'left': -num1*367+'px'}, 500)
	if(num1==0) $(this).css('background', 'rgba(0,0,0,0.2)');
});
$('.depth_right').click(function(event) {
	num1++;
	if(num1>3) num1=3;
	$(this).css('background', 'rgba(0,0,0,0.6)');
	$('.depth_left').css('background', 'rgba(0,0,0,0.6)');
	$('.dt3_ul>ul').animate({'left': -num1*367+'px'}, 500)
	if(num1==3) $(this).css('background', 'rgba(0,0,0,0.2)');
});
/*--------------------------独家日游---------------------------*/

var num2=0;
$('.lleft').click(function(event) {
	num2--;
	if(num2<0) num2=0;
	$('.long_main').animate({'left': -num2*1000+'px'}, 500)
});
$('.lright').click(function(event) {
	num2++;
	if(num2>2) num2=2;
	$('.long_main').animate({'left': -num2*1000+'px'}, 500)
	$(this).css('background', 'rgba(0,0,0,1)');
});
$('.lleft').hover(function() {
	$('.lleft').css('background', 'rgba(0,0,0,1)');
}, function() {
	$('.lleft').css('background', 'rgba(0,0,0,0.5)');
});
$('.lright').hover(function() {
	$('.lright').css('background', 'rgba(0,0,0,1)');
}, function() {
	$('.lright').css('background', 'rgba(0,0,0,0.5)');
});
/*--------------------------长线------------------------*/

$('.tour_fixed ul li:nth-of-type(2)').hover(function() {
	$('.tour_app').css('display', 'block');
}, function() {
	$('.tour_app').css('display', 'none');
});
$(window).scroll(function(event) {
	if($(window).scrollTop()>=800){
		$('.tour_fixed').css('display', 'block');
	}else{
		$('.tour_fixed').css('display', 'none');
	}
});
$('.tour_fixed ul li:nth-of-type(1)').click(function(event) {
	$('html,body').animate({'scrollTop':'0'}, 500)
});
$('.tour_fixed li').hover(function() {
	$(this).css({'background': '#07AE72','color':'#fff'});
	$(this).children('i').addClass('tour_shake');
}, function() {
	$(this).css({'background': '#fff','color':'#b2b2b2'});
	$(this).children('i').removeClass('tour_shake');
});
/*-----------------------------fix滚轮显---------------------------------*/

$('.d_sup_con1 input').focus(function(event) {
	$('.sup_search').fadeIn();
});
$('.d_sup_con1 input').blur(function(event) {
	$('.sup_search').fadeOut();
});
/*---------------------------搜索------------------*/
$('.qhome_img').hover(function() {
	$(this).children('a').hide();
	$(this).children('.middle_price').stop().slideDown(300);
}, function() {
	$(this).children('a').show();
	$(this).children('.middle_price').stop().slideUp(300);
});
$('.qhome_list li').hover(function() {
	var index=$(this).index();
	$(this).addClass('list_thelist');
	$(this).siblings('li').removeClass('list_thelist');
	$('.depth_qhome>img').eq(index).stop().fadeIn(600);
	$('.depth_qhome>img').eq(index).siblings('img').stop().fadeOut(600);
	$('.dep_qhome_main').eq(index).stop().fadeIn(600);
	$('.dep_qhome_main').eq(index).siblings('.dep_qhome_main').stop().fadeOut(600);
});