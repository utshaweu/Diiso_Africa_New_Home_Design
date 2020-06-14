$(function(){
  'use strict'


  //Preloader js
  $(window).on('load',function(){
    $(".preloader").delay(1000).fadeOut(1000);
  });

  //Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     
     if(scrolling > 50){
         $(".navbar").addClass("menu-bg");
     }
     else{
         $(".navbar").removeClass("menu-bg");
     }
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
 });

  // Closes responsive menu when a scroll link is clicked
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  //Back to top js
  var back2top = $(".back-to-top");
  var html_body = $('html,body');
  back2top.click(function(){
    html_body.animate({scrollTop:0},1000);
  });
  

  //Filter Js
  var containerEl = document.querySelector('.project-main');
  var mixer = mixitup(containerEl);

  // Venobox
  $('.venobox').venobox(); 

});