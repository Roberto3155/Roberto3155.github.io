$(document).ready(function() {

    /* for the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
    	if (direction == "down") {
           $('nav').addClass('sticky');
    	} else {
          $('nav').removeClass('sticky');
    	}

    } , {
    	offset: '60px;'
    });


    /* Scroll on buttons */

    $('.js--scroll-to-plans').click(function () {

        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

    });

                                   

      $('.js--scroll-to-start').click(function () {

        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });                             

   

  

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  /* Animations on scroll */
  
  $('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );

  /* mobile navigation */

 /* Mobile nav Animation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon= $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        
        if (icon.attr("name") === 'menu') {
                    icon.attr("name", 'close');
                } else {
                    icon.attr("name", 'menu');
                }
    /* Window resizing and nav display */
        $(window).resize(function(){
 
            if ($(window).width() > 767){
                nav.css("display", "block");
            } 
            else {
                nav.css("display", "none");
                icon.attr("name", 'menu')
            }
        });
    });
  
    // Scroll to specific values

// scrollTo is the same  

/*

window.scroll({

  top: 1000,

  left: 0,

  behavior: 'smooth'

});



// Scroll certain amounts from current position

window.scrollBy({

  top: 100, // could be negative value

  left: 0,

  behavior: 'smooth'

});
*/


// Scroll to a certain element

document.querySelector('.hello').scrollIntoView({

  behavior: 'smooth'

}); 



});