let contratantes = [
  {
    nome: "Yago Aparecido B. S. Costa",
    cpf: "43587624844",
    cel: "11957069027",
    sexo: "Masculino",
    cep: "02984050",
    lat: "-23.440222219466328",
    lng: "-46.749272201600995",
    fotoPerfil: "https://pbs.twimg.com/profile_images/1159853984963866626/50dRzHVk_400x400.jpg",
    uf: "SP",
    cidade: "São Paulo",
    complemento: 178
  },
  {
    nome: "Luva de Pedreiro",
    senha: "123vascao@",
    cpf: "07734929345",
    cel: "4002-8922",
    genero: "Homem",
    cep: "02545876",
    lat: "-23.449356620756024",
    lng: "-46.73176274150261",
    fotoPerfil: "perfil.img"
  },
  {
    nome: "Gaules",
    senha: "123vascao@",
    cpf: "07734929345",
    cel: "4002-8922",
    genero: "Homem",
    cep: "02545876",
    lat: "-23.45140389991784",
    lng: "-46.734680984852346",
    fotoPerfil: "perfil.img"
  },
  {
    nome: "Baiano",
    senha: "123vascao@",
    cpf: "07734929345",
    cel: "4002-8922",
    genero: "Homem",
    cep: "02545876",
    lat: "-23.451246418032003",
    lng: "-46.736912582708015",
    fotoPerfil: "perfil.img"
  },
  {
    nome: "Casimiro Miguel",
    senha: "123vascao@",
    cpf: "077.349.293-45",
    cel: "4002-8922",
    genero: "Homem",
    cep: "02545876",
    lat: "-23.451482640790346",
    lng: "-46.7379425509491",
    fotoPerfil: "perfil.img"
  },
  {
    nome: "Casimiro Miguel",
    senha: "123vascao@",
    cpf: "07734929345",
    cel: "4002-8922",
    genero: "Homem",
    cep: "02545876",
    lat: "-23.454396020070924",
    lng: "-46.74669728099829",
    fotoPerfil: "perfil.img"
  }
]

// ------------------- MAPA

let map, infoWindow;

const locations = [
  {
    nome: "Casimiro Miguel",
    // senha: "123vascao@",
    cpf: "07734929345",
    sexo: "Masculino",
    cep: "02545876",
    lat: -23.440222219466328,
    lng: -46.749272201600995,
    fotoPerfil: "https://www.meioemensagem.com.br/wp-content/uploads/2022/05/Casimiro_Miguel-cred-divulgacao_instagram.jpg",
    cel: 11957069027,
    diasDisp: "Sábado e/ou Domingo",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Luva de Pedreiro",
    // senha: "123vascao@",
    cpf: "07734929345",
    sexo: "Masculino",
    cep: "02545876",
    lat: -23.449356620756024,
    lng: -46.73176274150261,
    fotoPerfil: "https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2022/09/manchete-2022-09-13T215340.854.jpg?fit=680%2C454&ssl=1",
    cel: 11957069027,
    diasDisp: "Segunda à Sexta",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Gaules",
    // senha: "123vascao@",
    cpf: "07734929345",
    sexo: "Masculino",
    cep: "02545876",
    lat: -23.45140389991784,
    lng: -46.734680984852346,
    fotoPerfil: "https://assets.gamearena.gg/wp-content/uploads/2021/10/30015651/CSGO-Da-depressao-ao-topo-da-Twitch-Gaules-e-o-maior-nome-do-Counter-Strike-brasileiro.png",
    cel: 11957069027,
    diasDisp: "Segunda à Sexta",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Baiano",
    // senha: "123vascao@",
    cpf: "07734929345",
    sexo: "Masculino",
    cep: "02545876",
    lat: -23.451246418032003,
    lng: -46.736912582708015,
    fotoPerfil: "https://cdn.ome.lt/aRxxZAWuQOW-a7yT2jpfCjw1pTc=/770x0/smart/uploads/conteudo/fotos/baiano-2.jpeg",
    cel: 11957069027,
    diasDisp: "Todos",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Elenilda de Oliveira",
    // senha: "123vascao@",
    cpf: "07734929345",
    sexo: "Feminino",
    cep: "02545876",
    lat: -23.451482640790346,
    lng: -46.7379425509491,
    fotoPerfil: "https://sintricomb.com.br/wp-content/uploads/2020/08/Elenilda-4.jpg",
    cel: 11957069027,
    diasDisp: "Todos",
    tiposTrab: "Pequenas reformas"
  },
  {
    nome: "Eliete Vieira Barbosa",
    // senha: "123vascao@",
    cpf: "07734929345",
    sexo: "Feminino",
    cep: "02545876",
    lat: -23.454396020070924,
    lng: -46.74669728099829,
    fotoPerfil: "https://s2.glbimg.com/r1gj-G1q9dDvivLPwgkfTSD3nhI=/620x345/e.glbimg.com/og/ed/f/original/2019/02/19/liaaa.png",
    cel: 11957069027,
    diasDisp: "Todos",
    tiposTrab: "Obras gerais"
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

    
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
    const label = locations[i % locations.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });
    marker.addListener("click", () => {
      infoWindow.setContent(
        `<div id="card-mapa-contratante">
          <img src="${locations[i].fotoPerfil}" alt="${locations[i].nome}">
          <h3>${locations[i].nome}</h3>
          <p><strong>Dias Disponiveis:</strong> <br> ${locations[i].diasDisp}</p>
          <p><strong>Tipos de trabalho:</strong> <br> ${locations[i].tiposTrab}</p>
          
          <div>
            <a href="https://wa.me/${locations[i].cel}"><button>Enviar proposta</button></a>
            <a id="contatoZap href="https://wa.me/${locations[i].cel}"><button id="btn-zap"> <ion-icon name="logo-whatsapp"></ion-icon></button></a>
          </div>
            
        </div>
        `);
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

// Area contratante

    document.getElementById("nome-contratante").value = contratantes[0].nome

    document.getElementById("cpf-contratante").value = contratantes[0].cpf

    document.getElementById("cel-contratante").value = contratantes[0].cel

    document.getElementById("cep-contratante").value = contratantes[0].cep

    document.getElementById("cidade-contratante").value = resposta.cidade

    

    document.getElementById("complemento-contratante").value = contratantes[0].complemento
    
    

$.ajax({
  "url": "viacep.com.br/ws/01001000/json/",

  "type": "GET",

  "dataType": "JSON",

  "data": "cep=" + contratantes[0].cep + "&formato=JSON",

  "beforeSend": () => { },

  "success": (resposta) => {

    document.getElementById("uf-contratante").value = resposta.uf

    document.getElementById("rua-contratante").value = resposta.logradouro

    document.getElementById("bairro-contratante").value = resposta.bairro
  }
})