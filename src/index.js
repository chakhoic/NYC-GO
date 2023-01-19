// import Map from './scripts/map.js';
import { myfunction } from "./scripts/pin";
import { typeFilter } from "./scripts/typefilter.js"
import { priceFilter } from "./scripts/pricefilter.js"
import { partyFilter } from "./scripts/partyfilter.js"

document.addEventListener('DOMContentLoaded', () => {
    // const root = document.querySelector('#')
    // console.log('hello world')


    const opts = document.querySelectorAll("select")

    console.log(opts)

    for (let i = 0; i < opts.length; i++) {
        opts[i].addEventListener('change', initMap)
    }

    // const map = new Map ();
    const details = {
        "Time Square": {
            "type": "Tourist",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "The High Line": {
            "type": "Tourist",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Hudson River Park": {
            "type": "Cultural",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Empire State Building": {
            "type": "Tourist",
            "price": "$$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Koreatown": {
            "type": "Food/Drink",
            "price": "$$",
            "party": "Travel With Friends",
            "seasonal": "no",
        },

        "Chinatown": {
            "type": "Food/Drink",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Central Park": {
            "type": "Cultural",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "The Vessel": {
            "type": "Tourist",
            "price": "$$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Metropolitan Museum of Art": {
            "type": "Cultural",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Museum of Modern Art": {
            "type": "Cultural",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Chelsea Market": {
            "type": "Food/Drink",
            "price": "$$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "St Marks Place": {
            "type": "Food/Drink",
            "price": "$$",
            "party": "Travel With Friends",
            "seasonal": "no",
        },

        "Madison Square Garden": {
            "type": "Tourist",
            "price": "$$$",
            "party": "Travel With Friends",
            "seasonal": "yes",
        },

        "Rockefella Center": {
            "type": "Tourist",
            "price": "$$",
            "party": "Solo Advanture",
            "seasonal": "yes",
        },

        "Little Italy": {
            "type": "Food/Drink",
            "price": "$$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "Little Island": {
            "type": "Tourist",
            "price": "$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },

        "SOHO": {
            "type": "Tourist",
            "price": "$$",
            "party": "Solo Advanture",
            "seasonal": "no",
        },


    }

    let locations = [
        ['Time Square', 40.758896, -73.985130, 19],
        ['Empire State Building', 40.748817, -73.985428, 3],
        ['Koreatown', 40.748817, -73.9755, 1],
        ['Chinatown', 40.7177, -74.0015, 4],
        ['Central Park', 40.785091, -73.968285, 5],
        ['The Vessel', 40.753826, -74.002228, 2],
        ['Metropolitan Museum of Art', 40.779434, -73.963402, 6],
        ['Museum of Modern Art', 40.761509, -73.978271, 7],
        ['The High Line', 40.747993, -74.004890, 8],
        ['Chelsea Market', 40.742352, -74.006210, 9],
        ['Hudson River Park', 40.729563, -74.012699, 10],
        ['St Marks Place', 40.7235, -73.9852, 11],
        ['Madison Square Garden', 40.750298, -73.993324, 12],
        ['Rockefella Center', 40.758678, -73.978798, 13],
        ['Little Italy', 40.719141, -73.997327, 15],
        ['Little Island', 40.7421, -74.0100, 16],
        ['SOHO', 40.7246, -74.0019, 17],

    ];

    const touristtype = locations.map(ele => ele[0])
    // f.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     locations.splice(0, 1);
    //     console.log(locations);
    //     // window.initMap = initMap;
    //     initMap()
    // });

    // locations.splice(0, 1);
    // window.initMap = initMap;
    // initMap()


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
    // initMap();
}) 
