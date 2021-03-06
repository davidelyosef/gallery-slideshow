(() => {
  document.addEventListener("DOMContentLoaded", function (event) {
    let x = document.getElementById("demo");
    let getLocationButton = document.getElementById("getLocation");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
    }

    if (getLocationButton) {
      getLocationButton.addEventListener("click", () => {
        getLocation();
      });
    }
  });
})();
