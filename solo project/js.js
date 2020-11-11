 var index=0;
  $(document).ready(function(){
  	//set lightbox img height
  	var wHeight= $(window).height()
  	$(".lightbox-img").css("max-height",wHeight+"px")

  	//lightbox
  	$(".work-item-inner").click(function(){
  		// index= $(this).parent(".work-item").index();
  		// $(".lightbox").addClass("open")
  		// lightboxSlideShow();
  			$(".lightbox").css("display","block")
  			$('.lightbox-img').css("margin-left", "500px")
  			$('.lightbox').css("justify-content", "center")
  
  	})
  })

function HideLightBox(){
	$(".lightbox").css("display","none")

}
  function lightboxSlideShow(){

  }