$(document).ready(function () {
  console.log("RUN ON START")
  window.onload = function () {
    localStorage.getItem("cityInfo");
  }

  function citySearch() {

    var cityName = $("#city-name").val().trim();
    var apiKey = "e56db2c0cbedff8b95a7a0ec30f3b548";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="

    $.ajax({
      url: queryURL + cityName + "&appid=" + apiKey,
      method: "GET"
    })
      .then(function (response) {
        // here on out
        console.log(response);
      });
  }
  $("#button").on("click", function () {
    console.log("this is working")
    citySearch();
  });
});
