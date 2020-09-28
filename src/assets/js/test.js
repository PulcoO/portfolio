window.alert('fuck');
    
var $owl = jQuery(".owl-carousel");
$owl.children().each(function (index) {
    jQuery(this).attr("data-position", index);
});
console.log($owl)

  
    $owl.owlCarousel({
      center: true,
      nav: true,
      loop: true,
      items: 5,
      margin: 10,
      navText: [
        "<i class='fa arrow-circle-left'><</i>",
        "<i class='fa arrow-right'>></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
    jQuery(document).on("click", ".item", function () {
      $owl.trigger("to.owl.carousel", $(this).data("position"));
    });
  