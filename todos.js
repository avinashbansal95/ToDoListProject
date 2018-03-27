$('ul').on("click","li",function(){
	$(this).toggleClass("completed");
	/*console.log($(this).css("color"));
	//if it is gray turn to black
	if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({color: "black",
	textDecoration: "none"
});
	}
	else{
	$(this).css({color: "gray",
	textDecoration: "line-through"
});
}*/
});
$('ul').on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})
$('input[type="text"]').keypress(function(e){
if(e.which===13)
{
	var text=$(this).val();
	$(this).val("");
	$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + text + "</li>")
	$('input').fadeOut();
}
});
$('.fa-plus').click(function(){
	$('input').fadeToggle(200);
});