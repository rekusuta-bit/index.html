$(function() {
  //$('h1').fadeIn();
  //$('p').fadeIn();

  $('.oo').hover(
    function() {
      $('.gurahu-one').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-two').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-three').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-four').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-five').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-six').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-seven').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-eight').fadeIn();
    }
  );

  $('.oo').hover(
    function() {
      $('.gurahu-nine').fadeIn();
    }
  );

  $(window).scroll(function (){
    $("#sample").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sample1").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sample2").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sample3").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });



});
