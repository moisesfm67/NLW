const map = L.map("mapid").setView([-27.5652343, -48.6195521], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;
  //remover icon size

  marker && map.removeLayer(marker);

  // add icon tileLayer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  //adiacionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

 if(fieldsContainer.length<=1){
    span.parentNode.children[0].value = ""
    return
 }

//deletar o campo
 span.parentNode.remove();
}

//selecionar do sim e nao 
function toggleSelect(event){
 //get o botao clicado

 //retirar a classe active dos botoes
document.querySelectorAll('.button-select button')
.forEach(function (button){
    button.classList.remove('active')
})

 //colocar a classe active nos botoes clicados

const button = event.currentTarget
button.classList.add('active')

//atualizar o meu input hidden com meu valor selecionado
const input = document.querySelector('[name="open_on_weekends"]')

 //verificar se é sim ou nao
 input.value = button.dataset.value
}
function validate(event){
//validar se lat e lng estao preenchidos 
const needsLatAndLng=true;
if(needsLatAndLng==false){
    event.preventDefault()
    alert(`Selecione um ponto no mapa`)
  }
 }

 

