

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
	$('.carousel').carousel();
   
  $(document).ready(function () {

            $("a.scrollLink").click(function (event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop:$($(this).attr("href")).offset().top }, 1000);
			$('.sidenav').sidenav('close');
            });
        });

  }); // end of document ready
})(jQuery); // end of jQuery name space
