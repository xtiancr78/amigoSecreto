// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if(nombre &&!amigos.includes(nombre)) {
    amigos.push(nombre);
    actualizarLista();
    input.value = '';
  } else {
    alert('Nombre vacío o ya agregado');
  }
}

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if(amigos.length < 2) {
    alert('Agrega al menos dos amigos para sortear');
    return;
  }

  let asignaciones = {};
  let receptores = [...amigos];

  do {
    shuffleArray(receptores);
  } while(amigos.some((amigo, i) => amigo === receptores[i]));

  amigos.forEach((amigo, i) => {
    asignaciones[amigo] = receptores[i];
  });

  mostrarResultado(asignaciones);
}

function mostrarResultado(asignaciones) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  for(let amigo in asignaciones) {
    const li = document.createElement('li');
    li.textContent = `${amigo} → ${asignaciones[amigo]}`;
    resultado.appendChild(li);
  }
}

function shuffleArray(array) {
  for(let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
