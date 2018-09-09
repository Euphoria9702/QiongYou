/*
* @Author: admin
* @Date:   2018-06-19 14:27:50
* @Last Modified by:   Mo
* @Last Modified time: 2018-06-25 00:04:22
*/
$('.nav>li').hover(function(event) {
	$(this).children('a').children('span').css('color', '#10b041');
	$(this).children('div').show();
	$(this).siblings().children('div').hide();
},function(event) {
	$(this).children('a').children('span').css('color', 'silver');
	$('.nav>li span').eq(2).css('color', '#10b041');
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

$('.hot_list li').hover(function() {
	$(this).addClass('list_main')
	$(this).siblings('li').removeClass('list_main')
});
$('.f_d_left').hover(function() {
	$(this).children('.a_txt').css({'top':'0px','margin-top':'0px','background':'rgba(0,0,0,0.5)'});
}, function() {
	$(this).children('.a_txt').css({'top':'100%','margin-top':'-58px','background':'rgba(0,0,0,0)'});
});
$('.f_d_r_con').hover(function() {
	$(this).children('.a_txt').css({'top':'0px','margin-top':'0px','background':'rgba(0,0,0,0.5)'});
}, function() {
	$(this).children('.a_txt').css({'top':'100%','margin-top':'-58px','background':'rgba(0,0,0,0)'});
});
$('.des_monthly li').hover(function() {
	$(this).children('span').addClass('monthly_main')
	$(this).siblings('li').children('span').removeClass('monthly_main')
});
$('.month_img_ul li').hover(function() {
	// $(this).children('div').animate({'top': '0px'},500)
	$(this).children('div').css({'background': 'rgba(0,0,0,0.5)', 'top': '0px'})
}, function() {
	// $(this).children('div').animate({'top': '245px'},500)
	$(this).children('div').css({'background': 'rgba(0,0,0,0)', 'top': '245px'})
});
/*---------------------------鼠标移入效果--------------------------------*/

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

// $('.theme_list li:nth-of-type(2),.theme_list li:nth-of-type(4),.theme_list li:nth-of-type(6)').hover(function() {
// 	$('.free_2').show(500);
// 	$('.free_1').hide(500);
// });
// $('.theme_list li:nth-of-type(1),.theme_list li:nth-of-type(3),.theme_list li:nth-of-type(5)').hover(function() {
// 	$('.free_1').show(500);
// 	$('.free_2').hide(500);
// });
$('.theme_list li').hover(function() {
	var index=$(this).index();
	$('.free_destination').eq(index).show();
	$('.free_destination').eq(index).siblings('.free_destination').hide();
});
/*----------------------------切图---------------------*/

$('.hot_ul li').hover(function() {
	var index=$(this).index();
	$('.hot_table').eq(index).show();
	$('.hot_table').eq(index).siblings('.hot_table').hide();
});