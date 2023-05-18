import { typeFilter } from "./scripts/typefilter.js";
import { priceFilter } from "./scripts/pricefilter.js";
import { partyFilter } from "./scripts/partyfilter.js";
import { details } from "./scripts/details.js";

window.onload = () => {

function initMap() {
    // Map init
    window.map = new google.maps.Map(document.getElementById("map"), {
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
    displayMarkers(filtered3);

  
    // Dropdown update 
    const locationSelect = document.getElementById("location-select");
    locationSelect.addEventListener("change", () => {
      updateMarkersBasedOnSelectedLocation();
    });

    const selectedLocation = locationSelect.value;
    const locationDetails = details[selectedLocation];
    const isLocationSelectEvent = locationSelect === document.activeElement;

    function updateMarkersBasedOnSelectedLocation() {
      const locationSelect = document.getElementById("location-select");
      const selectedLocation = locationSelect.value;
    
      if (selectedLocation === "all") {
        // Show all markers for "----"
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
        displayMarkers(filtered3);
      } else {
        // Show only the marker of the selected location
        displayMarkers([selectedLocation]);
      }
    }
    
  
    if (!isLocationSelectEvent) {
      // clear dropdown
      locationSelect.innerHTML = '';
  
      // default option
      const allOption = document.createElement("option");
      allOption.value = "all";
      allOption.text = "----";
      locationSelect.add(allOption);
  
      // filtered locations
      filtered3.forEach((loc) => {
        const option = document.createElement("option");
        option.value = loc;
        option.text = loc;
        locationSelect.add(option);
      });
    } else {
      // set selected location in the dropdown
      locationSelect.value = selectedLocation;
    }
  
    const dee1 = document.getElementById("dee1");
    dee1.innerHTML = `${locationDetails.about}`
    
    const dee2 = document.getElementById("dee2");
    dee2.innerHTML = `${locationDetails.type}, ${locationDetails.price}, ${locationDetails.party};`
  
    
  }

  function displayMarkers(locations) {
    // clear existing markers before adding new ones
    if (window.markers) {
      for (let i = 0; i < window.markers.length; i++) {
        window.markers[i].setMap(null);
      }
    }

    window.markers = [];
    for (let i = 0; i < locations.length; i++) {
      const location = details[locations[i]];
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: window.map,
      });

      window.markers.push(marker);

      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(locations[i]);
            infowindow.open(window.map, marker);
          };
        })(marker, i)
      );
    }
  }
  initMap();

};  
