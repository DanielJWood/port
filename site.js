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
         map.ease.location({ lat: 48.669, lon: -146.239}).zoom(5).optimal();
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
        map.ease.location({ lat: -2.943, lon: -81.801 }).zoom(5).optimal();

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
      //  map.ease.location({ lat: 0.546 , lon: 21.456 }).zoom(5).optimal();
        map.ease.location({ lat: -2.943, lon: -82.801 }).zoom(8).optimal();

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
                  map.ease.location({ lat:37.389, lon: -57.949}).zoom(5).optimal();

     });
});
