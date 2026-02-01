function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for(var i in uiBathrooms) {
    if(uiBathrooms[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for(var i in uiBHK) {
    if(uiBHK[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");

  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "http://127.0.0.1:5000/predict_home_price";

  $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
  }, function(data) {
      estPrice.innerHTML =
        "<h2>" + data.estimated_price + " Lakh</h2>";
  });
}

function onPageLoad() {
  console.log("document loaded");

  var url = "http://127.0.0.1:5000/get_location_names";

  $.get(url, function(data) {
      if (data) {
          var locations = data.locations;
          $('#uiLocations').empty();
          for (var i in locations) {
              $('#uiLocations').append(new Option(locations[i]));
          }
      }
  });
}

window.onload = onPageLoad;
