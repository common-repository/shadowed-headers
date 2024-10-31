jQuery(document).ready(function($){
tags = ['h1', 'h2'];
for (var i = tags.length; i >= 0; i-- )$(tags[i]).addClass('shadow');
if($.browser.msie ){
	$('.shadow').each(function (){
		colr=$(this).css('color');
		backCol=$(this).css('background-color');
		text=$(this).text();	
		a=$(this).html(); 
		$(this).css('white-space','nowrap')
		$(this).attr('title',text);
		$(this).html(a);
		$(this).prepend('<p class="before">'+a+'</p>');
		$(this).append('<p class="after" style="color:'+colr+';background-color:'+backCol+';" >'+a+'</p>');
		$(this).css('color','transparent');
		});}
else {
		$('.shadow').each(function(){
		sh = $(this).css('text-shadow');
		if(sh.length == 0 || sh =='none'){				
			shColor='#000000';	
			$(this).css({'text-shadow':'0px 1px 0 '+shColor});	
		};
		$(this).removeClass('shadow');
		})
	}
});