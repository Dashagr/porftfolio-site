$(".mobile-tab").hide();

$("#burg").on("click", function () {
  $(".mobile-tab").slideToggle(500);
});

var headerHeight = $(".navigation").outerHeight();

$(".scroll").click(function (e) {
  var linkHref = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkHref).offset().top - headerHeight,
    },
    1000
  );

  e.preventDefault();
});
