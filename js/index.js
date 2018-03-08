$(function(){
	/*
	 * 下拉菜单效果
	 */
	$("#nav>li").hover(function(){
		 $('ul', this).slideDown(200);
	},function(){
		$("ul",this).slideUp(200);
	});
	/*
	 * banner hover消失效果
	 */
	$("#banner").hover(function(){
		$(this).slideUp(2500);
	});
});