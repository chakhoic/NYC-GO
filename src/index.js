import { myfunction } from "./scripts/pin";
import { typeFilter } from "./scripts/typefilter.js"
import { priceFilter } from "./scripts/pricefilter.js"
import { partyFilter } from "./scripts/partyfilter.js"
import { details } from "./scripts/details.js"
import { locations } from "./scripts/locations.js"


document.addEventListener('DOMContentLoaded', () => {

    const opts = document.querySelectorAll("select")

    console.log(opts)

    for (let i = 0; i < opts.length; i++) {
        opts[i].addEventListener('change', initMap)
    }

    let locationsWithDetails = [];

    for (let i = 0; i < locations.length; i++) {
    const locationName = locations[i][0];
    const locationDetails = details[locationName];
    const latitude = locations[i][1];
    const longitude = locations[i][2];

    const locationWithDetails = {
    name: locationName,
    type: locationDetails.type,
    price: locationDetails.price,
    party: locationDetails.party,
    lat: latitude,
    lng: longitude,
  };

  locationsWithDetails.push(locationWithDetails);
}


    
    // const touristtype = locations.map(ele => ele[0])


    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(40.776676, -73.971321),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        const party = document.getElementById("party")
        const party_size = party.options[party.selectedIndex].value
        const type = document.getElementById("type")
        const type_size = type.options[type.selectedIndex].value
        const price = document.getElementById("price")
        const price_size = price.options[price.selectedIndex].value
        
        let filtered1 = typeFilter(details, touristtype, type_size)
        let filtered2 = priceFilter(details, filtered1, price_size)
        let filtered3 = partyFilter(details, filtered2, party_size)
        let locations_filtered = locations.filter(ele => filtered3.includes(ele[0]))


        const f = document.getElementById('myForm');


        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations_filtered.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations_filtered[i][1], locations_filtered[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations_filtered[i][0]);
                    infowindow.open(map, marker);
                    myfunction()
                }
            })(marker, i));
        }
    }
    window.initMap = initMap;
}) 
