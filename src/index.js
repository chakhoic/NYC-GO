import { typeFilter } from "./scripts/typefilter.js";
import { priceFilter } from "./scripts/pricefilter.js";
import { partyFilter } from "./scripts/partyfilter.js";

document.addEventListener("DOMContentLoaded", () => {
  const opts = document.querySelectorAll("select");

  for (let i = 0; i < opts.length; i++) {
    opts[i].addEventListener("change", initMap);
  }

  const details = {
    "Time Square": {
      type: "Tourist",
      price: "$",
      party: "Solo Advanture",
    },

    "The High Line": {
      type: "Tourist",
      price: "$",
      party: "Solo Advanture",
      seasonal: "no",
    },

    "Hudson River Park": {
      type: "Cultural",
      price: "$",
      party: "Solo Advanture",
    },

    "Empire State Building": {
      type: "Tourist",
      price: "$$",
      party: "Solo Advanture",
    },

    "Koreatown": {
      type: "Food/Drink",
      price: "$$",
      party: "Travel With Friends",
    },

    "Chinatown": {
      type: "Food/Drink",
      price: "$",
      party: "Solo Advanture",
    },

    "Central Park": {
      type: "Cultural",
      price: "$",
      party: "Solo Advanture",
    },

    "The Vessel": {
      type: "Tourist",
      price: "$$",
      party: "Solo Advanture",
    },

    "Metropolitan Museum of Art": {
      type: "Cultural",
      price: "$",
      party: "Solo Advanture",
    },

    "Museum of Modern Art": {
      type: "Cultural",
      price: "$",
      party: "Solo Advanture",
    },

    "Chelsea Market": {
      type: "Food/Drink",
      price: "$$",
      party: "Solo Advanture",
    },

    "St Marks Place": {
      type: "Food/Drink",
      price: "$$",
      party: "Travel With Friends",
    },

    "Madison Square Garden": {
      type: "Tourist",
      price: "$$$",
      party: "Travel With Friends",
    },

    "Rockefella Center": {
      type: "Tourist",
      price: "$$",
      party: "Solo Advanture",
    },

    "Little Italy": {
      type: "Food/Drink",
      price: "$$",
      party: "Solo Advanture",
    },

    "Little Island": {
      type: "Tourist",
      price: "$",
      party: "Solo Advanture",
    },

    "SOHO": {
      type: "Tourist",
      price: "$$",
      party: "Solo Advanture",
    },
  };

  let locations = [
    ["Time Square", 40.758896, -73.98513, 19, "Tourist", "$$", "Solo Advanture"],
    ["Empire State Building", 40.748817, -73.985428, 3],
    ["Koreatown", 40.748817, -73.9755, 1],
    ["Chinatown", 40.7177, -74.0015, 4],
    ["Central Park", 40.785091, -73.968285, 5],
    ["The Vessel", 40.753826, -74.002228, 2],
    ["Metropolitan Museum of Art", 40.979434, -73.933402, 6],
    ["Museum of Modern Art", 40.761509, -73.978271, 7],
    ["The High Line", 40.747993, -74.00489, 8],
    ["Chelsea Market", 40.742352, -74.00621, 9],
    ["Hudson River Park", 40.729563, -74.012699, 10],
    ["St Marks Place", 40.7235, -73.9852, 11],
    ["Madison Square Garden", 40.750298, -73.993324, 12],
    ["Rockefella Center", 40.758678, -73.978798, 13],
    ["Little Italy", 40.719141, -73.997327, 15],
    ["Little Island", 40.7421, -74.01, 16],
    ["SOHO", 40.7246, -74.0019, 17],
  ];

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

    const touristtype = locations.map((ele) => ele[0]);
    let filtered1 = typeFilter(details, touristtype, type_size);
    let filtered2 = priceFilter(details, filtered1, price_size);
    let filtered3 = partyFilter(details, filtered2, party_size);
    let locations_filtered = locations.filter((ele) =>
      filtered3.includes(ele[0])
    );
  
    const locationSelect = document.getElementById("location-select");
  
    // Clear the existing options
    locationSelect.innerHTML = '';
  
    // Add an 'All Locations' option
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.text = "All Locations";
    locationSelect.add(allOption);
  
    // Add the filtered locations
    locations_filtered.forEach((loc) => {
      const option = document.createElement("option");
      option.value = loc[0];
      option.text = loc[0];
      locationSelect.add(option);
    });
  
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations_filtered.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          locations_filtered[i][1],
          locations_filtered[i][2]
        ),
        map: map,
      });

      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(locations_filtered[i][0]);
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
    }
  }
  
  window.initMap = initMap;
});
