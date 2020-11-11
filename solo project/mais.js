  var index=0;
  $(document).ready(function(){
  	$('#subm').click(function(){
	console.log(document.querySelector(".input-control").value)
	alert('Hey!'+ document.querySelector(".input-control").value+ ' Your message Has been received' +'we will send response to your Email'+ document.querySelector(".input-control1").value)
})
 

  	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
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

$('#subm').click(function(){
	console.log(document.querySelector(".input-control").value)
	alert('Hey!'+ document.querySelector(".input-control").value+ ' Your message Has been received' +'we will send response to your Email'+ document.querySelector(".input-control1").value)
})
 
