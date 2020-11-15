$(document).ready(function() {
  window.onload = function() {
    localStorage.getItem("cityInfo");
  }

  function citySearch() {

  var cityName = $("#city-name").val().trim();
  var apiKey = "e56db2c0cbedff8b95a7a0ec30f3b548";
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" 

  $.ajax({

    url: queryURL + cityName + "&appid=" + apiKey,
    method: "GET"
  })
    .then(function(response) {

    });
  }
$("#button").on("click", function(){

});
}
