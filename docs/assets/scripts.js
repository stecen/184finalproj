$(document).ready(function(){

   $('#fullpage').fullpage({
      scrollingSpeed: 1200,
      parralax: true,
      navigation: true,
      afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //using index
      if(index == 2 || index == 3 ){
         $('#framecon').fadeOut(); // jQuery Function Number 1
         
      }
      else{
          $("#framecon").fadeIn(); // jQuery Function Number 2
      }
      }

   });
});


