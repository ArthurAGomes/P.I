let pedreiros = [
    {
        nome: "Joaquim Barbosa",
        cpf: 46687990945,
        senha: "senha", //https://emn178.github.io/online-tools/sha256.html
        cep: "02856030",
        pagamento: "Pix, Dinheiro",
        dias: "Sabado e/ou Domingo",
        telefone: 11958769028 
    },
    {
        nome: "Matheus Oliveira",
        cpf: 46687990945,
        senha: 72485689,
        cep: "02856030",
        pagamento: "Pix, Crédito",
        dias: "Todos os dias",
        telefone: 11958769028 
    },
    {
        nome: "Joaquim Barbosa",
        cpf: 46687990945,
        senha: 72485689,
        cep: "02856030",
        pagamento: "Pix, Dinheiro",
        dias: "Sabado e/ou Domingo",
        telefone: 11958769028 
    },
    {
        nome: "Joaquim Barbosa",
        cpf: 46687990945,
        senha: 72485689,
        cep: "02856030",
        pagamento: "Pix, Dinheiro",
        dias: "Sabado e/ou Domingo",
        telefone: 11958769028 
    },
    {
        nome: "Joaquim Barbosa",
        cpf: 46687990945,
        senha: 72485689,
        cep: "02856030",
        pagamento: "Pix, Dinheiro",
        dias: "Sabado e/ou Domingo",
        telefone: 11958769028 
    },
    {
        nome: "Joaquim Barbosa",
        cpf: 46687990945,
        senha: 72485689,
        cep: "02856030",
        pagamento: "Pix, Dinheiro",
        dias: "Sabado e/ou Domingo",
        telefone: 11958769028 
    },
]

// let contratantes = [
//     {
//         nome: "Casimiro Miguel",
//         senha: "123vascao@",
//         cpf: "07734929345",
//         genero: "Homem",
//         cep: "02545876",
//         lat: "-23.440222219466328",
//         lng: "-46.749272201600995",
//         fotoPerfil: "perfil.img"
//     },
//     {
//         nome: "Luva de Pedreiro",
//         senha: "123vascao@",
//         cpf: "07734929345",
//         genero: "Homem",
//         cep: "02545876", 
//         lat: "-23.449356620756024",
//         lng: "-46.73176274150261",
//         fotoPerfil: "perfil.img"
//     },
//     {
//         nome: "Gaules",
//         senha: "123vascao@",
//         cpf: "07734929345",
//         genero: "Homem",
//         cep: "02545876", 
//         lat: "-23.45140389991784",
//         lng: "-46.734680984852346",
//         fotoPerfil: "perfil.img"
//     },
//     {
//         nome: "Baiano",
//         senha: "123vascao@",
//         cpf: "07734929345",
//         genero: "Homem",
//         cep: "02545876",
//         lat: "-23.451246418032003",
//         lng: "-46.736912582708015", 
//         fotoPerfil: "perfil.img"
//     },
//     {
//         nome: "Casimiro Miguel",
//         senha: "123vascao@",
//         cpf: "07734929345",
//         genero: "Homem",
//         cep: "02545876",
//         lat: "-23.451482640790346",
//         lng: "-46.7379425509491", 
//         fotoPerfil: "perfil.img"
//     },
//     {
//         nome: "Casimiro Miguel",
//         senha: "123vascao@",
//         cpf: "07734929345",
//         genero: "Homem",
//         cep: "02545876", 
//         lat: "-23.454396020070924",
//         lng: "-46.74669728099829",
//         fotoPerfil: "perfil.img"
//     }
// ]

// ------------------- MAPA

let map, infoWindow;

const locations = [
  {
      nome: "Casimiro Miguel",
      senha: "123vascao@",
      cpf: "07734929345",
      genero: "Homem",
      cep: "02545876",
      lat: -23.440222219466328,
      lng: -46.749272201600995,
      fotoPerfil: "perfil.img"
  },
  {
      nome: "Luva de Pedreiro",
      senha: "123vascao@",
      cpf: "07734929345",
      genero: "Homem",
      cep: "02545876", 
      lat: -23.449356620756024,
      lng: -46.73176274150261,
      fotoPerfil: "perfil.img"
  },
  {
      nome: "Gaules",
      senha: "123vascao@",
      cpf: "07734929345",
      genero: "Homem",
      cep: "02545876", 
      lat: -23.45140389991784,
      lng: -46.734680984852346,
      fotoPerfil: "perfil.img"
  },
  {
      nome: "Baiano",
      senha: "123vascao@",
      cpf: "07734929345",
      genero: "Homem",
      cep: "02545876",
      lat: -23.451246418032003,
      lng: -46.736912582708015, 
      fotoPerfil: "perfil.img"
  },
  {
      nome: "Casimiro Miguel",
      senha: "123vascao@",
      cpf: "07734929345",
      genero: "Homem",
      cep: "02545876",
      lat: -23.451482640790346,
      lng: -46.7379425509491, 
      fotoPerfil: "perfil.img"
  },
  {
      nome: "Casimiro Miguel",
      senha: "123vascao@",
      cpf: "07734929345",
      genero: "Homem",
      cep: "02545876", 
      lat: -23.454396020070924,
      lng: -46.74669728099829,
      fotoPerfil: "perfil.img"
  }
];

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


  
initMap();