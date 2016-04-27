//debugger

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

//$('#myModal').modal(options)

$('#aboutMark').on('show.bs.modal', function (event) {
  //debugger
  console.log(event);
  var button = $(event.relatedTarget) // Button that triggered the modal
  console.log(button);
  var buttonClicked = button.data('whatever'); // Extract info from data-* attributes
  console.log(buttonClicked);

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)

  //var about = "<p>"

  switch ( buttonClicked ) {
    case "About Mark":
      modal.find('.modal-title').text('About Mark');
  
      modal.find('.modal-body h4').text("Born and raised in New York City. I recently graduated from Hunter College. I am now learning full stack ninja web development. I am learning HTML, CSS, Git, JavaScript, MySQL, Node, Express, and much more. Check back for more updates on my latest projects.");

      break;
    
    case "My Mission":
      modal.find('.modal-title').text('The Mission');
  
      modal.find('.modal-body h4').text("It is my intention to become a skilled full stack web developer. I want to grow and expand the skills I have, then apply them.  I want to help anyone in my network grow and succeed, especially the companies or groups I work with.");


      break;

    case "Education":
      modal.find('.modal-title').text('Education');
  
      modal.find('.modal-body h4').html("<ul><li>Rutgers Coding Bootcamp</li><li>CUNY Hunter College</li><li>Bronx High School of Science</li></ul>");
      break; 

    case "My Skills":
      modal.find('.modal-title').text('Skills');
  
      modal.find('.modal-body h4').html(" <ul><li>JavaScript</li><li>Node</li><li>MySQL</li><li>HTML</li><li>CSS</li><li>Financial Modelling and Analysis</li><li>Mathematics</li><li>Accounting</li></ul>");
      break;

    case "Experience":
      modal.find('.modal-title').text('Experience');
  
      modal.find('.modal-body h4').html("<ul><li>Citi Habitats</li><ul><li>Specialized in relocation to Manhattan</li><li>Rental and Sales</li><li>Provided excellent customer service</li></ul><li>Awai Real Estate Solutions</li><ul><li>Residential Real Estate Investments</li><li>Deal Analysis including Acquisition and Exit Strategy</li><li>Sales and Marketing</li></ul></ul>");
      break;

  }

  


})
