// toggle menu
$('.mobile-tab').hide();

$('#burg').on('click', function () {
  $('.mobile-tab').slideToggle(500);
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

//showing more portfolio works

$('.more-grid').hide();
$('.more').on('click', function () {
  $('.more-grid').slideToggle(500);
});