  var map = mapbox.map('map');
    map.centerzoom({lat:37.389, lon: -57.949},5); 
    map.addLayer(mapbox.layer().id('dw2.map-gozz62j7'));
            //  map.ui.hash.add();

$(document).ready(function() {
  $('.port-link').click(function (e) {
         e.preventDefault();
         $('.port-link').addClass('active');
         $('#portfolio').addClass('active');
         $('#home').addClass('active');

         $('.res-link').removeClass('active');
         $('.bio-link').removeClass('active');
         $('#landing').removeClass('active');
         $('#resume').removeClass('active');
         $('#bio').removeClass('active');
     });

  $('.res-link').click(function (e) {
         e.preventDefault();
         $('.res-link').addClass('active');
         $('#resume').addClass('active');
         $('#home').addClass('active');

         $('.port-link').removeClass('active');
         $('.bio-link').removeClass('active');
         $('#landing').removeClass('active');
         $('#portfolio').removeClass('active');
         $('#bio').removeClass('active');
     });

  $('.bio-link').click(function (e) {
         e.preventDefault();
         $('.bio-link').addClass('active');
         $('#bio').addClass('active');
         $('#home').addClass('active');

         $('.port-link').removeClass('active');
         $('.res-link').removeClass('active');
         $('#landing').removeClass('active');
         $('#portfolio').removeClass('active');
         $('#resume').removeClass('active');

     });

  $('#home').click(function (e) {
         e.preventDefault();
         $('#landing').addClass('active');

         $('#home').removeClass('active');
         $('.port-link').removeClass('active');
         $('.bio-link').removeClass('active');
         $('.res-link').removeClass('active');
         $('#bio').removeClass('active');
         $('#portfolio').removeClass('active');
         $('#resume').removeClass('active');
     });
});
