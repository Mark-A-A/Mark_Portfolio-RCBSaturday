$('.carousel').carousel({
  interval: 2000,
  pause: "hover"
});

// Enable Carousel Indicators
$(".item").click(function(){
    $("#carousel-home").carousel(1);
});

// // Enable Carousel Controls
// $(".left").click(function(){
//     $("#carousel-home").carousel("prev");
// });

// $(".right").click(function(){
//         $("#carousel-home").carousel("next");
//     });


