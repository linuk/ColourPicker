$(document).ready(function(){
	
	
	function toggleText(){
		$(this).html("ddd");
		alert("why it alerts now instead of when I click the button!? ");
	};

	$("btn").on("click",toggleText); //orginal way
	// $('btn').click(toggleText($(this))); //alternative way

	$(".changeColor").on("click",function(){
		$("body").css("background",$(this).html());
	});
});

