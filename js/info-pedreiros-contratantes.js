// let pedreiros = [
//     {
//         nome: "Joaquim Barbosa",
//         cpf: 46687990945,
//         senha: "senha", //https://emn178.github.io/online-tools/sha256.html
//         cep: "02856030",
//         pagamento: "Pix, Dinheiro",
//         dias: "Sabado e/ou Domingo",
//         telefone: 11958769028 
//     },
//     {
//         nome: "Matheus Oliveira",
//         cpf: 46687990945,
//         senha: 72485689,
//         cep: "02856030",
//         pagamento: "Pix, Crédito",
//         dias: "Todos os dias",
//         telefone: 11958769028 
//     },
//     {
//         nome: "Joaquim Barbosa",
//         cpf: 46687990945,
//         senha: 72485689,
//         cep: "02856030",
//         pagamento: "Pix, Dinheiro",
//         dias: "Sabado e/ou Domingo",
//         telefone: 11958769028 
//     },
//     {
//         nome: "Joaquim Barbosa",
//         cpf: 46687990945,
//         senha: 72485689,
//         cep: "02856030",
//         pagamento: "Pix, Dinheiro",
//         dias: "Sabado e/ou Domingo",
//         telefone: 11958769028 
//     },
//     {
//         nome: "Joaquim Barbosa",
//         cpf: 46687990945,
//         senha: 72485689,
//         cep: "02856030",
//         pagamento: "Pix, Dinheiro",
//         dias: "Sabado e/ou Domingo",
//         telefone: 11958769028 
//     },
//     {
//         nome: "Joaquim Barbosa",
//         cpf: 46687990945,
//         senha: 72485689,
//         cep: "02856030",
//         pagamento: "Pix, Dinheiro",
//         dias: "Sabado e/ou Domingo",
//         telefone: 11958769028 
//     },
// ]

let contratantes = [
  {
    nome: "Yago Aparecido B. S. Costa",
    cpf: "077.349.293-45",
    cel: "11957069027",
    genero: "Homem",
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
    genero: "Homem",
    cep: "02545876",
    lat: -23.440222219466328,
    lng: -46.749272201600995,
    fotoPerfil: "https://conteudo.imguol.com.br/c/entretenimento/17/2022/11/07/casimiro-miguel-faz-lives-que-duram-8-horas-1667815375225_v2_900x506.jpg",
    cel: 11957069027,
    diasDispo: "Sábado, e/ou Domingo",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Luva de Pedreiro",
    // senha: "123vascao@", 
    cpf: "07734929345",
    genero: "Homem",
    cep: "02545876",
    lat: -23.449356620756024,
    lng: -46.73176274150261,
    fotoPerfil: "https://s2.glbimg.com/Dphh0soP3oi1VEq1fQLv21GxO4M=/smart/e.glbimg.com/og/ed/f/original/2022/03/15/iran_ferreira.png",
    cel: 11957069027,
    diasDispo: "Todos",
    tiposTrab: "Pequenas reformas"
  },
  {
    nome: "Gaules",
    // senha: "123vascao@", 
    cpf: "07734929345",
    genero: "Homem",
    cep: "02545876",
    lat: -23.45140389991784,
    lng: -46.734680984852346,
    fotoPerfil: "https://s2-ge.glbimg.com/zyt4LdaXy_eH1c4DVKB7Yvgm3qM=/0x0:2570x1928/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/K/f/BSvir8QJaQnIUA5CzB5Q/gau.jpeg",
    cel: 11957069027,
    diasDispo: "Segund,a á Sexta",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Baiano",
    // senha: "123vascao@", 
    cpf: "07734929345",
    genero: "Homem",
    cep: "02545876",
    lat: -23.451246418032003,
    lng: -46.736912582708015,
    fotoPerfil: "https://s2-ge.glbimg.com/ivP3Ca2LCv6OAfvu-oXJXfVK_9c=/0x0:960x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/u/f/WCMxWrT4qZsAcBXqlFzg/baiano.jpeg",
    cel: 11957069027,
    diasDispo: "Todos",
    tiposTrab: "Reformas gerais"
  },
  {
    nome: "Elenilda Santos",
    // senha: "123vascao@", 
    cpf: "07734929345",
    genero: "Mulher",
    cep: "02545876",
    lat: -23.451482640790346,
    lng: -46.7379425509491,
    fotoPerfil: "https://sintricomb.com.br/wp-content/uploads/2020/08/Elenilda-4.jpg",
    cel: 11957069027,
    diasDispo: "Todos",
    tiposTrab: "Obras gerais"
  },
  {
    nome: "Eliete Vieira Barbosa",
    // senha: "123vascao@", 
    cpf: "07734929345",
    genero: "Mulher",
    cep: "02545876",
    lat: -23.454396020070924,
    lng: -46.74669728099829,
    fotoPerfil: "https://s2.glbimg.com/r1gj-G1q9dDvivLPwgkfTSD3nhI=/620x345/e.glbimg.com/og/ed/f/original/2019/02/19/liaaa.png",
    cel: 11957069027,
    diasDispo: "Segunda á Sexta",
    tiposTrab: "Pequenas reformas"
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

  // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = locations[i % locations.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });
    marker.addListener("click", () => {
      infoWindow.setContent(
        `<div id="card-mapa-perfil">
          <img src="${locations[i].fotoPerfil}" alt="${locations[i].nome}">
          <div>
            <h3>${locations[i].nome}</h3>
            <p>Dias diponíveis: ${locations[i].diasDispo}</p>
            <p>Tipos de trabalho: ${locations[i].tiposTrab}</p>
          </div>

          <a href="https://wa.me/${locations[i].cel}">
            <button>Entrar em contato</button>
          </a>
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

$.ajax({
  "url": "http://cep.republicavirtual.com.br/web_cep.php",

  "type": "GET",

  "dataType": "JSON",

  "data": "cep=" + contratantes[0].cep + "&formato=JSON",

  "beforeSend": () => { },

  "success": (resposta) => {

    document.getElementById("nome-contratante").value = contratantes[0].nome

    document.getElementById("cpf-contratante").value = contratantes[0].cpf

    document.getElementById("cel-contratante").value = contratantes[0].cel

    document.getElementById("cep-contratante").value = contratantes[0].cep

    document.getElementById("cidade-contratante").value = resposta.cidade

    document.getElementById("uf-contratante").value = resposta.uf

    document.getElementById("rua-contratante").value = resposta.logradouro

    document.getElementById("bairro-contratante").value = resposta.bairro

    document.getElementById("complemento-contratante").value = contratantes[0].complemento



  }
})