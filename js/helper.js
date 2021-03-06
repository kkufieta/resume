/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="white-text">%data%</span>';

var HTMLcontactStart = '<ul id="topContacts" class="flex-box col-xs-12"></ul>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text"><i class="fa fa-mobile fa-2x"></i></span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text"><i class="fa fa-envelope fa-2x"></i></span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text"><i class="fa fa-twitter fa-2x"></i></span><a class="white-text flex-item" target="_blank" href="#">%data%</a></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text"><i class="fa fa-linkedin-square fa-2x"></i></span><a class="white-text flex-item" target="_blank" href="#">%data%</a></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text"><i class="fa fa-github fa-2x"></i></span><a class="white-text flex-item" target="_blank" href="#">%data%</a></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><a class="white-text flex-item" target="_blank" href="#">%data%</a></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text"><i class="fa fa-map-marker fa-2x"></i></span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic col-sm-4">';
var HTMLwelcomeMsg = '<span class="welcome-message col-xs-12">%data%</span>';

var HTMLskillsStart = '<div class="col-sm-8"><h3 id="skills-h3">%data%</h3><ul id="skills" class="skills_ flex-box"></ul></div>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="title-text" target="_blank" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLprojectYoutube = '<google-youtube video-id="%data%" height="270px" width="480px" rel="0" start="5" fluid="true" autoplay="0"> </google-youtube>';

var HTMLprojectStart = '<div class="project-entry col-sm-6"></div>';
var HTMLprojectTitle = '<a class="title-text" target="_blank" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
var HTMLprojectYoutube = '<google-youtube video-id="%data%" height="270px" width="480px" rel="0" start="5" fluid="true" autoplay="0"> </google-youtube>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="title-text" target="_blank" href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a class="title-text" target="_blank" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button id="button" class="col-lg-2">Internationalize</button>';
var googleMap = '<div id="map"></div>';

var HTMLurlIcon = ' - <i class="fa fa-external-link"> </i>';
var HTMLpdfIcon = ' - <i class="fa fa-file-pdf-o"></i>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      if (education.schools.hasOwnProperty(school)) {
        locations.push(education.schools[school].location);
      }
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      if (work.jobs.hasOwnProperty(job)) {
        locations.push(work.jobs[job].location);
      }
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      // creates an infoWindow objec that determines the properties
      // of the overlay
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {
      if (locations.hasOwnProperty(place)) {
        // the search request object
        var request = {
          query: locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
      }
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
