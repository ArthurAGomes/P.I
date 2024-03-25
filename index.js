// let map, infoWindow;

// import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.3.1";

// async function initMap() {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 15, 
//   });

//   infoWindow = new google.maps.InfoWindow();

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };

//         infoWindow.setPosition(pos);
//         infoWindow.setContent("Você está aqui");
//         infoWindow.open(map);
//         map.setCenter(pos);
//       },
//       () => {
//         handleLocationError(true, infoWindow, map.getCenter());
//       }
//     );
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }

//     const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     // Add some markers to the map.
//     const markers = locations.map((position, i) => {
//     const label = labels[i % labels.length];
//     const marker = new google.maps.Marker({
//       position,
//       label,
//     });
//     marker.addListener("click", () => {
//         infoWindow.setContent(label);
//         infoWindow.open(map, marker);
//       });
//       return marker;
//     });
//     new MarkerClusterer({ markers, map });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//       browserHasGeolocation
//         ? "Error: The Geolocation service failed."
//         : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }

// const locations = [
//     { lat: -31.56391, lng: 147.154312 },
//     { lat: -33.718234, lng: 150.363181 },
//     { lat: -33.727111, lng: 150.371124 },
//     { lat: -33.848588, lng: 151.209834 },
//     { lat: -33.851702, lng: 151.216968 },
//     { lat: -34.671264, lng: 150.863657 },
//     { lat: -35.304724, lng: 148.662905 },
//     { lat: -36.817685, lng: 175.699196 },
//     { lat: -36.828611, lng: 175.790222 },
//     { lat: -37.75, lng: 145.116667 },
//     { lat: -37.759859, lng: 145.128708 },
//     { lat: -37.765015, lng: 145.133858 },
//     { lat: -37.770104, lng: 145.143299 },
//     { lat: -37.7737, lng: 145.145187 },
//     { lat: -37.774785, lng: 145.137978 },
//     { lat: -37.819616, lng: 144.968119 },
//     { lat: -38.330766, lng: 144.695692 },
//     { lat: -39.927193, lng: 175.053218 },
//     { lat: -41.330162, lng: 174.865694 },
//     { lat: -42.734358, lng: 147.439506 },
//     { lat: -42.734358, lng: 147.501315 },
//     { lat: -42.735258, lng: 147.438 },
//     { lat: -43.999792, lng: 170.463352 },
// ];
  
// initMap();

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -23.436211545330348, lng: -46.71944628071065  };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

//   The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });


//   const marcador = new AdvancedMarkerView({
    // position: { lat: -23.436211545330348, lng: -46.71944628071065 },
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
}

initMap();

// -23.436211545330348, -46.71944628071065