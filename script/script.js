


$(document).ready(function () {
    $("a.project").click(function(event){
        console.log("a project clicked")
        $("html").addClass("noScroll");
    });
    
    $("form.close").submit(function(event){
        $("html").removeClass("noScroll");
    })

     $("h1").fadeIn(2000);
     $('a.nav[href*="#"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
       // On-page links
       if (
         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
         && 
         location.hostname == this.hostname
       ) {
         // Figure out element to scroll to
         var target = $(this.hash);
        
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // Does a scroll target exist?
         if (target.length) {
           // Only prevent default if animation is actually gonna happen
           event.preventDefault();
           $('html, body').animate({
             scrollTop: target.offset().top
           }, 1500, function() {
             // Callback after animation
             // Must change focus!
             var $target = $(target);
             $target.focus();
             if ($target.is(":focus")) { // Checking if the target was focused
               return false;
             } else {
               $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
               $target.focus(); // Set focus again
             };
           });
         }
       }
     });             
    
});






function closeNav(){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      window.onscroll = function() {closeNav()};
      
    } else {
      x.className = "topnav";
    }
  }


//Scroll Effect


