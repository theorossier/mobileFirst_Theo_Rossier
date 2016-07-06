$(document).ready(function() {
  
//MENU

  $('.navIcon').click(function(){

		$('nav').toggleClass('mobileNav');
		$('body').toggleClass('overflow');
    if ($('nav').hasClass('mobileNav')){
    $('.navIcon--close').animate({'opacity':'1'}, 100 );
        $('.navIcon--open').animate({'opacity':'0'}, 100);
        $('.navIcon a').animate({'margin-left':"-57px"},300);
}else{
  $('.navIcon a').animate({'margin-left':"0"},300);
      $('.navIcon--open').animate({'opacity':'1'}, 100);
      $('.navIcon--close').animate({'opacity':'0'}, 100);
        
}

  });

//RESIZE MENU
$(window).resize(function(){

 if($(window).width()>1080){
  $('nav').removeClass('mobileNav').addClass('desktopNav');
  $('body').removeClass('overflow');
 }

});

});