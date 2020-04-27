(function($) {
  'use strict';

  /*--------------------------------------
	Owl Carousel Active coad here
----------------------------------------*/
  $('.review-active').owlCarousel({
    loop: true,
    autoPlay: true,
    autoPlayTimeout: 9000,
    autoPlayHoverPause: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  //  animate plugin active
  new WOW().init();

  //  counter up plugin active
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // isotop

      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        getSortData: {
          name: function (element) {
            return $(element).text();
          }
        }
      });
      $('.filter button').on("click", function () {
        var value = $(this).attr('data-name');
          $grid.isotope({
            filter: value
          });
        $('.filter button').removeClass('filter-active');
        $(this).addClass('filter-active');
      })




  
})(jQuery);
