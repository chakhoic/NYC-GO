// import { typeFilter } from "./scripts/typefilter.js";
// import { priceFilter } from "./scripts/pricefilter.js";
// import { partyFilter } from "./scripts/partyfilter.js";

document.addEventListener("DOMContentLoaded", () => {
    const opts = document.querySelectorAll("select");
  
    for (let i = 0; i < opts.length; i++) {
      opts[i].addEventListener("change", initMap);
    }
  
    const details = {
        "Time Square": {
          lat: 40.758896,
          lng: -73.98513,
          type: "Tourist",
          price: "$",
          party: "Solo Advanture",
        },
        "The High Line": {
          lat: 40.747993,
          lng: -74.00489,
          type: "Tourist",
          price: "$",
          party: "Solo Advanture",
          seasonal: "no",
        },
        "Hudson River Park": {
          lat: 40.729563,
          lng: -74.012699,
          type: "Cultural",
          price: "$",
          party: "Solo Advanture",
        },
        "Empire State Building": {
          lat: 40.748817,
          lng: -73.985428,
          type: "Tourist",
          price: "$$",
          party: "Solo Advanture",
        },
        "Koreatown": {
          lat: 40.748817,
          lng: -73.9755,
          type: "Food/Drink",
          price: "$$",
          party: "Travel With Friends",
        },
        "Chinatown": {
          lat: 40.7177,
          lng: -74.0015,
          type: "Food/Drink",
          price: "$",
          party: "Solo Advanture",
        },
        "Central Park": {
          lat: 40.785091,
          lng: -73.968285,
          type: "Cultural",
          price: "$",
          party: "Solo Advanture",
        },
        "The Vessel": {
          lat: 40.753826,
          lng: -74.002228,
          type: "Tourist",
          price: "$$",
          party: "Solo Advanture",
        },
        "Metropolitan Museum of Art": {
          lat: 40.779434,
          lng: -73.963402,
          type: "Cultural",
          price: "$",
          party: "Solo Advanture",
        },
        "Museum of Modern Art": {
          lat: 40.761509,
          lng: -73.978271,
          type: "Cultural",
          price: "$",
          party: "Solo Advanture",
        },
        "Chelsea Market": {
          lat: 40.742352,
          lng: -74.00621,
          type: "Food/Drink",
          price: "$$",
          party: "Solo Advanture",
        },
        "St Marks Place": {
          lat: 40.7285,
          lng: -73.9882,
          type: "Food/Drink",
          price: "$$",
          party: "Travel With Friends",
        },
        "Madison Square Garden": {
          lat: 40.750298,
          lng: -73.993324,
          type: "Tourist",
          price: "$$$",
          party: "Travel With Friends",
        },
        "Rockefeller Center": {
          lat: 40.758678,
          lng: -73.978798,
          type: "Tourist",
          price: "$$",
          party: "Solo Advanture",
        },
        "Little Italy": {
          lat: 40.719141,
          lng: -73.997327,
          type: "Food/Drink",
          price: "$$",
          party: "Solo Advanture",
        },
        "Little Island": {
            lat: 40.7421,
            lng: -74.01,
            type: "Tourist",
            price: "$",
            party: "Solo Advanture",
          },
          "SOHO": {
            lat: 40.7246,
            lng: -74.0019,
            type: "Tourist",
            price: "$$",
            party: "Solo Advanture",
          }
        }          
      

  function partyFilter(obj, arr, value) {
    if (value === "Default Party") {
        return arr;
    }
    let filtered_array = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]["party"] === value) {
            filtered_array.push(arr[i])
        }
    }

    return filtered_array
}

function priceFilter(obj, arr, value) {
    if (value === "Default Price") {
        return arr;
    }
    let filtered_array = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]["price"] === value) {
            filtered_array.push(arr[i])
        }
    }

    return filtered_array
}

function typeFilter(obj, arr, value) {
    if (value === "Default Type") {
        return arr;
    }
    let filtered_array = []
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]["type"]===value) {
            filtered_array.push(arr[i])   
        }
    }
    return filtered_array
}


function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: new google.maps.LatLng(40.776676, -73.971321),
      mapTypeId: google.maps.MapTypeId.HYBRID,
    });

    const party = document.getElementById("party");
    const party_size = party.options[party.selectedIndex].value;
    const type = document.getElementById("type");
    const type_size = type.options[type.selectedIndex].value;
    const price = document.getElementById("price");
    const price_size = price.options[price.selectedIndex].value;

    const touristtype = Object.keys(details);
    let filtered1 = typeFilter(details, touristtype, type_size);
    let filtered2 = priceFilter(details, filtered1, price_size);
    let filtered3 = partyFilter(details, filtered2, party_size);

    const locationSelect = document.getElementById("location-select");

    // Clear the existing options
    locationSelect.innerHTML = '';

    // Add an 'All Locations' option
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.text = "All Locations";
    locationSelect.add(allOption);

    // Add the filtered locations
    filtered3.forEach((loc) => {
      const option = document.createElement("option");
      option.value = loc;
      option.text = loc;
      locationSelect.add(option);
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < filtered3.length; i++) {
      const location = details[filtered3[i]];
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: map,
      });

      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(filtered3[i]);
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
    }
  }

  window.initMap = initMap;
});
