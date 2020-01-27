var faveTrips = new TravelLog();

$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault()
    var location = $("#location").val();
    var date = $("#date").val();
    var days = $("#days").val();
    var newPlace = new Place(location, date, days);
    faveTrips.addPlace(newPlace);
    console.log(faveTrips.findPlace(1));
  });
  $("#showLogs").click(function(event) {
    event.preventDefault();
    displayTravelDetails(faveTrips);
  })
}); 


// Back-end logic
function Place(name, date, days) {
  this.name = name;
  this.date = date;
  this.days = days;
}

function TravelLog() {
  this.places = [];
  this.currentId = 0;
}

TravelLog.prototype.getCurrentId = function() {
  this.currentId++;
  return this.currentId;
}

TravelLog.prototype.addPlace = function(place) {
  place.id = this.getCurrentId();
  this.places.push(place);
}

TravelLog.prototype.findPlace = function(id) {
  for(var i = 0; i < this.places.length; i++) {
    if(this.places[i]) {
      if(this.places[i].id == id) {
        return this.places[i];
      }
    }
  }
  return false;
}

function displayTravelDetails(travelLogToDisplay) {
  var logList = $("ul#result");
  var htmlForPlaceInfo = "";
  travelLogToDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.name + " " + place.date + " " + place.days + "</li>";
  })
  logList.html(htmlForPlaceInfo);
}

