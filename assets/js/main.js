jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
});

function addOnClickToSpans() {
 // Find all span elements with href property
 var spansWithHref = document.querySelectorAll('span[href]');
    
 // Loop through each span element
 spansWithHref.forEach(function(span) {
     // Get the href property value
     var href = span.getAttribute('href');
     
     // Add onclick function
     span.onclick = function() {
         // Open a new blank page with the href URL
         window.open(href, '_blank');
     };
     
     // Add mouseover event to change cursor to hand
     span.addEventListener('mouseover', function() {
         this.style.cursor = 'pointer';
     });
     
     // Add mouseout event to revert cursor back to default
     span.addEventListener('mouseout', function() {
         this.style.cursor = 'auto';
     });
 });
}


// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    addOnClickToSpans();
});