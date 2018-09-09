/*
* @Author: Mo
* @Date:   2018-06-19 20:12:44
* @Last Modified by:   Mo
* @Last Modified time: 2018-06-24 23:50:07
*/
$('.nav>li').hover(function(event) {
	$(this).children('a').children('span').css('color', '#10b041');
	$(this).children('div').show();
	$(this).siblings().children('div').hide();
},function(event) {
	$(this).children('a').children('span').css('color', 'silver');
	$('.nav>li span').eq(6).css('color', '#10b041');
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
$('.city_ul li').click(function(event) {
	$(this).addClass('city_current');
	$(this).siblings('li').removeClass('city_current');
	var index=$(this).index();
	$('.city_city').eq(index).show();
	$('.city_city').eq(index).siblings('.city_city').hide();
});
$('.air_start input,.air_arrive input').click(function(event) {
	// $('.air_start_city').show();
	$(this).parent().children('.air_start_city').show();
	return false;
});
$('.air_start_city').click(function(event) {
	return false;
});
$(document).click(function(event) {
	$('.air_start_city').hide();
});
$('.city_city li').click(function(event) {
	var a=$(this).html();
	$(this).parent('ul').parent('.air_start_city').parent().children('input').val(a);
	$(this).parent('ul').parent('.air_start_city').hide();

});
$('.air_middle').click(function(event) {
	var a=$('.air_start input').val();
	var b=$('.air_arrive input').val();
	$('.air_start input').val(b);
	$('.air_arrive input').val(a);
});
var mydate=new Date();
var the_date=mydate.getFullYear()+"-";
the_date+=mydate.getMonth()+1+"-";
the_date+=mydate.getDate();
$('.air_date').val(the_date);