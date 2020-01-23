import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as $ from "jquery";
declare var $: any;

addEventListener("load", function () { setTimeout(hideURLbar, 0); }, false);
function hideURLbar() { window.scrollTo(0, 1); }
//for-mobile-apps


// $(document).ready(function () {
//   $("#owl-demo").owlCarousel({
//     autoPlay: 3000, //Set AutoPlay to 3 seconds
//     items: 5,
//     itemsDesktop: [640, 4],
//     itemsDesktopSmall: [414, 3]
//   });
// }, 3000);
//banner - bottom - plugin


$(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });
});
//start - smooth - scrolling


$('.toggle').click(function () {
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  // Switches the forms  
  $('.form').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});
//bootstrap-pop-up

//đóng lại tạm thời
$("#slidey").slidey({
  interval: 8000,
  listCount: 5,
  autoplay: false,
  showList: true
});
$(".slidey-list-description").dotdotdot();
//banner

//đóng lại tạm thời
// $(document).ready(function () {
//   $('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
//     type: 'inline',
//     fixedContentPos: false,
//     fixedBgPos: true,
//     overflowY: 'auto',
//     closeBtnInside: true,
//     preloader: false,
//     midClick: true,
//     removalDelay: 300,
//     mainClass: 'my-mfp-zoom-in'
//   });
// });
//Latest-tv-series


$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).slideDown("fast");
      $(this).toggleClass('open');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).slideUp("fast");
      $(this).toggleClass('open');
    }
  );
});
//Bootstrap Core JavaScript


$(document).ready(function () {
  /*
    var defaults = {
    containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear' 
    };
  */
  $().UItoTop({ easingType: 'easeOutQuart' });
});
//here ends scrolling icon



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
