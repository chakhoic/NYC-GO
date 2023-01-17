// import Map from './scripts/map.js';

document.addEventListener('DOMContentLoaded', () => {
    // const root = document.querySelector('#')
    // console.log('hello world')

    // const map = new Map ();
    let locations = [
        ['Empire State Building', 40.748817, -73.985428, 1],
        ['The Vessel', 40.753826, -74.002228, 2],

    ];

    const f = document.getElementById('myForm');


    f.addEventListener("submit", function (event) {
        event.preventDefault();
        locations.splice(0, 1);
        console.log(locations);
        // window.initMap = initMap;
        initMap()
    });

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(40.776676, -73.971321),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }

    }

    // window.initMap = initMap;
}) 