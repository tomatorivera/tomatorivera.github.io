// Retocando el efecto scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });

// Efectos de elementos del portfolio
$('.thumbnail').click(function(){
  $(this).toggleClass('active');
});