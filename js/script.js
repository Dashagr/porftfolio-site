// toggle menu
$('.mobile-tab').hide();

$('#burg').click(function (e) {
  e.preventDefault();
  $('.mobile-tab').slideToggle(500);
});

$('.scroll').click(function () {
  $('.mobile-tab').hide();
});

//easy scrolling effect
var headerHeight = $(".navigation").outerHeight();

$('.scroll').click(function (e) {
  var linkHref = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight,
    },
    1000
  );

  e.preventDefault();
});

//skills prevent events
$('.skills-block').click(function (e) {
  e.preventDefault();
});

//showing more portfolio works

$('.more-grid').hide();
$('.more').click(function () {
  $('.more-grid').slideToggle(500);
});