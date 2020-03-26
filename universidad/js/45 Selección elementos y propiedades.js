let elemento;
//Seleccionar elemento por ID
elemento = document.getElementById('hero')

//Acceder al texto con Text Content
elemento = document.getElementById('encabezado').textContent;
//Acceder al texto con Inner Text
elemento = document.getElementById('encabezado');

//Realizar cambios a las propiedades
elemento.style.color = 'red'
elemento.style.background = 'black'
elemento.style.padding = '20px'
elemento.textContent = 'Mejores Cursos!'
elemento.innerText = 'Catálogo de cursos'
console.log(elemento.innerText);
console.log(elemento.textContent);


