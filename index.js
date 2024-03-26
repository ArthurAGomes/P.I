let map, infoWindow;

import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.3.1";

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15, 
  });

  infoWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: -23.445269413991962,
          lng: -46.720587198447184,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Você está aqui");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });
    marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
      });
      return marker;
    });
    new MarkerClusterer({ markers, map });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
];
  
initMap();

// let map;

// async function initMap() {
//   The location of Uluru
//   const position = { lat: -23.436211545330348, lng: -46.71944628071065  };
//   Request needed libraries.
//   @ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });


//   const marcador = new AdvancedMarkerView({
    // position: { lat: -23.436211545330348, lng: -46.71944628071065 },
//     map: map,
//     position: position,
//     title: "Uluru",
//   });

// initMap();

// -23.436211545330348, -46.71944628071065

/* 

-23.440222219466328, -46.749272201600995
-23.449356620756024, -46.73176274150261
-23.45140389991784, -46.734680984852346
-23.451246418032003, -46.736912582708015
-23.451482640790346, -46.7379425509491
-23.454396020070924, -46.74669728099829
-23.451640122394526, -46.7474697571791
-23.449356620756024, -46.745667312757206
-23.44439577427191, -46.74343571490153
-23.443372084351505, -46.73545346103315
-23.444553264324913, -46.74386486833532
-23.443880170247883, -46.73534406115256
-23.435193587481365, -46.73819655980261
-23.435806121643406, -46.74038145238565
-23.436307283846435, -46.740320760924995

*/