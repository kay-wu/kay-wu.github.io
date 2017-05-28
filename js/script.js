/*var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}*/

$(window).scroll(function() {
   if ($(this).scrollTop() > 280){  
       $(".nav").addClass("sticky");
   }
   else{
       $(".nav").removeClass("sticky");
   }
});


jQuery(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#return-to-top').fadeIn();
		} else {
			$('#return-to-top').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#return-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});