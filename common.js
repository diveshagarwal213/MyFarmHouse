//loader start
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

//mypack slider
var slideIndex = 0;
showSlides();
var slides, t;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mypack");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "flex";  
     t = window.setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "flex";
    window.clearTimeout(t); //clear old time out
    t = window.setTimeout(showSlides, 12000); //set new one
}
// fade scroll
$(window).on("load",function() {
   $(window).scroll(function() {
     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
     $(".fadeScroll").each(function() {
       /* Check the location of each desired element */
       var objectBottom = $(this).offset().top + $(this).outerHeight();
       
       /* If the element is completely within bounds of the window, fade it in */
       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
       } else { //object goes out of view (scrolling up)
         if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
       }
     });
   }).scroll(); //invoke scroll-handler on page-load
 });