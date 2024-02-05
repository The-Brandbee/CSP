function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(function($) {
  $(window).on('scroll', function() {
  if ($(this).scrollTop() >= 200) {
    $('.header').addClass('fixed');
  } else if ($(this).scrollTop() == 0) {
    $('.header').removeClass('fixed');
  }
});
});
$.fn.extend({
  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options) {
    // Set the default options
    var defaults = {
      color: "black",
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    };
    var options = $.extend(defaults, options);

    return this.each(function() {
      $(this)
        .empty()
        .css({
          width: options.width,
          height: options.height,
          background: "transparent"
        });
      $(this).addClass("tb-menu-toggle");
      $(this)
        .prepend("<i></i><i></i><i></i>")
        .on("click", function(event) {
          event.preventDefault();
          $(this).toggleClass("tb-active-toggle");
          if (options.animate) {
            $(this).toggleClass("tb-animate-toggle");
          }
          $(".tb-mobile-menu").slideToggle(options.speed);
        });
      $(this)
        .children()
        .css("background", options.color);
    });
  },

  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options) {
    // Set the default options
    var defaults = {
      speed: 400
    };
    var options = $.extend(defaults, options);

    return this.each(function() {
      $(this).addClass("tb-mobile-menu");
      var menuItems = $(this).children("li");
      menuItems
        .find(".sub-menu")
        .parent()
        .addClass("tb-parent");
      $(".tb-parent ul").hide();
      $(".tb-parent > a").on("click", function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this)
          .siblings()
          .slideToggle(options.speed);
      });
    });
  }
});

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$("#menu-toggle").threeBarToggle({ color: "#A0283A", width: 30, height: 25 });

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$("#menu").accordionMenu();

$("#Believers").owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots:true,
			autoplay:true,
    		autoplayTimeout:3000,
    		autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  768:{
					items:1
			  },
			  900:{
				items:1
		  } 
			}

});

$("#createxprience").owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			dots:true,
			autoplay:true,
			mouseDrag: true,
  		touchDrag: true,
    	autoplayTimeout:2000,
    	autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 3,
			responsive:{
			  0:{
					items:1
			  },
			  768:{
				items:2
		  },
		  900:{
			items:3
	  } 
			}

});

$("#createxprience1").owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      dots:true,
      autoplay:true,
      mouseDrag: true,
        touchDrag: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      items : 3,
      responsive:{
        0:{
          items:1
        },
        768:{
        items:2
      },
      900:{
      items:3
    },
    1024:{
      items:3
    },
    1180:{
      items:4
    }
      }

});

$("#expriencesmall").owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      dots:true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      items : 3,
      responsive:{
        0:{
          items:1
        },
        768:{
        items:2
      },
      900:{
      items:3
    } 
      }

});

$("#louverssliderone").owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      dots:true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      items : 3,
      responsive:{
        0:{
          items:1
        },
        768:{
        items:2
      },
      900:{
      items:3
    } 
      }

});

$("#louversslidertwo").owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      dots:true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      items : 3,
      responsive:{
        0:{
          items:1
        },
        768:{
        items:2
      },
      900:{
      items:3
    } 
      }

});

$("#louverssliderthree").owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      dots:true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      items : 3,
      responsive:{
        0:{
          items:1
        },
        768:{
        items:2
      },
      900:{
      items:3
    } 
      }

});


$("#slidersss0").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});
$("#trustedsliderdiv").owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  autoplay:true,
  mouseDrag: true,
  touchDrag: true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 2,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    768:{
      items:2
    }
  }

});

$("#slidersss1").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss2").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss3").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss4").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss5").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss6").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss7").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss8").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss9").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss10").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss11").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss12").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});$("#slidersss13").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers0").owlCarousel({
			loop:false,
			margin:20,
			nav:true,
			dots:true,
			autoplay:false,
			mouseDrag: true,
      touchDrag: true,
    		autoplayTimeout:2000,
    		autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 3,
			responsive:{
			  0:{
					items:1
			  },
			  768:{
				items:2
		  },
		  900:{
			items:2.8
	  	} 
	}

});
$("#Louvers1").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers2").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers3").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers4").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers5").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers7").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers8").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers9").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Louvers10").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:2.8
  } 
}

});

$("#Flutes​").owlCarousel({
			loop:false,
			margin:20,
			nav:true,
			dots:true,
			autoplay:false,
			mouseDrag: true,
      touchDrag: true,
    		autoplayTimeout:2000,
    		autoplayHoverPause:true,
			navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
			items : 3,
			responsive:{
			  0:{
					items:1
			  },
			  768:{
				items:2
		  },
		  900:{
			items:2.8
	  	} 
	}

});

$("#Builderslider").owlCarousel({
      loop:false,
      margin:20,
      nav:true,
      dots:true,
      autoplay:false,
      mouseDrag: true,
      touchDrag: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      items : 3,
      responsive:{
        0:{
          items:1
        },
        768:{
        items:2
      },
      900:{
      items:3
      } 
  }

});


$("#Builderslider0").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider1").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider2").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider3").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider4").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider5").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider6").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider7").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider8").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider9").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider10").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider11").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider12").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider13").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#Builderslider14").owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:false,
  mouseDrag: true,
  touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3
  } 
}

});

$("#testimonial").owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots:false,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
	items : 3,
	responsive:{
	  0:{
			items:1
	  },
	  600:{
			items:1
	  }
	}

});



    jQuery(document).ready(function(){
    jQuery('.imge1').hide();
  jQuery('.imge2').hide();
  jQuery('.imge3').show();
  jQuery('.imge4').hide();
  jQuery('.imge5').hide();
  jQuery('.imge6').hide();
    jQuery('#imgediv1').hover(function() {
        jQuery('.imge1').show();
        jQuery('.imge2').hide();
      jQuery('.imge3').hide();
      jQuery('.imge4').hide();
      jQuery('.imge5').hide();
  	jQuery('.imge6').hide();
    });
  jQuery('#imgediv2').hover(function() {
        jQuery('.imge1').hide();
        jQuery('.imge2').show();
      jQuery('.imge3').hide();
      jQuery('.imge4').hide();
      jQuery('.imge5').hide();
  jQuery('.imge6').hide();
    });
  jQuery('#imgediv3').hover(function() {
        jQuery('.imge1').hide();
        jQuery('.imge2').hide();
      jQuery('.imge3').show();
      jQuery('.imge4').hide();
      jQuery('.imge5').hide();
  jQuery('.imge6').hide();
    });
  jQuery('#imgediv4').hover(function() {
        jQuery('.imge1').hide();
        jQuery('.imge2').hide();
      jQuery('.imge3').hide();
      jQuery('.imge4').show();
      jQuery('.imge5').hide();
  jQuery('.imge6').hide();
    });
  jQuery('#imgediv5').hover(function() {
        jQuery('.imge1').hide();
        jQuery('.imge2').hide();
      jQuery('.imge3').hide();
      jQuery('.imge4').hide();
      jQuery('.imge5').show();
  jQuery('.imge6').hide();
    });
  jQuery('#imgediv6').hover(function() {
        jQuery('.imge1').hide();
        jQuery('.imge2').hide();
      jQuery('.imge3').hide();
      jQuery('.imge4').hide();
      jQuery('.imge5').hide();
  jQuery('.imge6').show();
    });
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
for(i=0 ; i<20 ; i++){
  $(`#artfirstslider${i}`).owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    dots:true,
    autoplay:true,
    mouseDrag: true,
      touchDrag: true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
    navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    items : 3,
    responsive:{
      0:{
        items:1
      },
      768:{
      items:2
    },
    900:{
    items:3.7
  } 
    }

});

} //end of loop

$('#artfirstslider').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:true,
  autoplay:true,
  mouseDrag: true,
    touchDrag: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    768:{
    items:2
  },
  900:{
  items:3.7
} 
  }

});

AOS.init({

  easing: 'ease-out-back',

  duration: 1000

});

$("#selectpatter").owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  autoplay:true,
  mouseDrag: true,
  touchDrag: true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:4
    }
  }

});

$("#selectfinish").owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  autoplay:true,
  mouseDrag: true,
  touchDrag: true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
  items : 3,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:4
    }
  }

});
		setTimeout(function() {
			$('.loader-main').addClass('hidden');
			}, 3000);