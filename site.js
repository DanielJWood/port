  var map = mapbox.map('map');
    map.centerzoom({lat:37.389, lon: -57.949},5); 
    map.addLayer(mapbox.layer().id('dw2.map-gozz62j7'));
            //  map.ui.hash.add();

var data = [
  {
    "lat":-2.943,
    "long":-81.801,
    "zoom":8
  },
  {
    "lat":9.6664,
    "long":-71.5066,
    "zoom":11
  },
  {
    "lat":0.546,
    "long":21.456,
    "zoom":8
  },
  {
    "lat":29.1506,
    "long":-89.4243,
    "zoom":11
  },
  {
    "lat":48.444,
    "long":-129.595,
    "zoom":7
  },
  {
    "lat":-2.943,
    "long":-81.801,
    "zoom":5
  },
  {
    "lat":-2.943,
    "long":-82.801,
    "zoom":8
  }
  // {
  //   "lat":37.389,
  //   "long":-57.949,
  //   "zoom":5
  // }
]


$(document).ready(function() {

    var i = 1;

    function myLoop () {           
       setTimeout(function () {    
          // alert('hello');       
            moveit(i);
          i++;                     
          if (i < data.length) {            
            myLoop();             
          } else if (i === data.length) {
            i = 1;
            myLoop();
          }                        
       }, 300)
    }

    myLoop();       

    function moveit (i) {
        console.log(i)
        map.ease.location({ lat: data[i].lat, lon: data[i].long }).zoom(data[i].zoom).optimal();        
    }


// map.ease.location({ lat: -2.943, lon: -81.801 }).zoom(8).optimal();
// map.ease.location({ lat: 9.6664, lon: -71.5066 }).zoom(11).optimal();
// map.ease.location({ lat: 0.546 , lon: 21.456 }).zoom(8).optimal();
// map.ease.location({ lat: 29.1506, lon: -89.4243}).zoom(11).optimal();
// map.ease.location({ lat: 48.444, lon: -129.595}).zoom(7).optimal();
// map.ease.location({ lat: -2.943, lon: -81.801 }).zoom(5).optimal();
// map.ease.location({ lat: -2.943, lon: -82.801 }).zoom(8).optimal();
// map.ease.location({ lat:37.389, lon: -57.949}).zoom(5).optimal();    



  // $('.port-link').click(function (e) {
  //        e.preventDefault();
  //        $('.port-link').addClass('active');
  //        $('#portfolio').addClass('active');
  //        $('#home').addClass('active');

  //        $('.res-link').removeClass('active');
  //        $('.bio-link').removeClass('active');
  //        $('#landing').removeClass('active');
  //        $('#resume').removeClass('active');
  //        $('#bio').removeClass('active');
  //        map.ease.location({ lat: 48.669, lon: -146.239}).zoom(5).optimal();
  //    });

  // $('.res-link').click(function (e) {
  //        e.preventDefault();
  //        $('.res-link').addClass('active');
  //        $('#resume').addClass('active');
  //        $('#home').addClass('active');

  //        $('.port-link').removeClass('active');
  //        $('.bio-link').removeClass('active');
  //        $('#landing').removeClass('active');
  //        $('#portfolio').removeClass('active');
  //        $('#bio').removeClass('active');
  //       map.ease.location({ lat: -2.943, lon: -81.801 }).zoom(5).optimal();

  //    });

  // $('.bio-link').click(function (e) {
  //        e.preventDefault();
  //        $('.bio-link').addClass('active');
  //        $('#bio').addClass('active');
  //        $('#home').addClass('active');

  //        $('.port-link').removeClass('active');
  //        $('.res-link').removeClass('active');
  //        $('#landing').removeClass('active');
  //        $('#portfolio').removeClass('active');
  //        $('#resume').removeClass('active');
  //     //  map.ease.location({ lat: 0.546 , lon: 21.456 }).zoom(5).optimal();
  //       map.ease.location({ lat: -2.943, lon: -82.801 }).zoom(8).optimal();

  //    });

  // $('#home').click(function (e) {
  //        e.preventDefault();
  //        $('#landing').addClass('active');

  //        $('#home').removeClass('active');
  //        $('.port-link').removeClass('active');
  //        $('.bio-link').removeClass('active');
  //        $('.res-link').removeClass('active');
  //        $('#bio').removeClass('active');
  //        $('#portfolio').removeClass('active');
  //        $('#resume').removeClass('active');
  //                 map.ease.location({ lat:37.389, lon: -57.949}).zoom(5).optimal();

  //    });
});
        // map.ease.location({ lat: -2.943, lon: -81.801 }).zoom(8).optimal();
        //  map.ease.location({ lat: 9.6664, lon: -71.5066 }).zoom(11).optimal();
        // map.ease.location({ lat: 0.546 , lon: 21.456 }).zoom(8).optimal();
        //  map.ease.location({ lat: 29.1506, lon: -89.4243}).zoom(11).optimal();
        //  map.ease.location({ lat: 48.444, lon: -129.595}).zoom(7).optimal();
        // map.ease.location({ lat: -2.943, lon: -81.801 }).zoom(5).optimal();
        // map.ease.location({ lat: -2.943, lon: -82.801 }).zoom(8).optimal();
        // map.ease.location({ lat:37.389, lon: -57.949}).zoom(5).optimal();