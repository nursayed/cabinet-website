// show hide navigation menu
var lastscrollTop = 0;
navbars = document.getElementById('show-hide-nav');
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYoffest || document.documentElement.scrollTop;
  if (scrollTop > lastscrollTop) {
    navbars.style.top = '-160px';
  } else {
    navbars.style.top = '0';
  }
  lastscrollTop = scrollTop;
});



// custom menu amiation

function myFunction(x) {
  x.classList.toggle("change");
}

// show hide nav

$(document).ready(function(){
  $(".custom-menu-icon").click(function(){
    $(".toggle-menu").toggleClass("nav-show");
    // $(".menu").toggleClass("menuicon");
  });
});


// scroll to top
$(document).ready(function(){
	// show hide button on scroll
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('.scrooltotop').fadeIn();
		} else {
			$('.scrooltotop').fadeOut();
		}
	});
});

// menu
$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active');
    $('.overly').toggleClass('active');
    $('.menu').toggleClass('active');
  });
});