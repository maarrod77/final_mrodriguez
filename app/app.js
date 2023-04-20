$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

//fetch => función nativa de js, que nos permite realizar peticiones HTTP de forma asincrónica

//promesas
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    //de JSON a dato manipulable (objeto o array)
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="tarjet">
        <img class= "imagen" src="${personajes[i].image}">
        <h3>${personajes[i].name}</h3>
        <p>Gender: ${personajes[i].gender}</p>
        <p>Species: ${personajes[i].species}</p>
        <p>Status: ${personajes[i].status}</p>
      </div>
      `;
    }
  });