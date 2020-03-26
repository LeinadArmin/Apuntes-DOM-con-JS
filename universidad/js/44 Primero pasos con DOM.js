// Eliminar de Local Storage
localStorage.clear();

let elemento = document;
elemento = document.all;
elemento = document.all[1];
elemento = document.head;
elemento = document.body;
elemento = document.domain
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].className;
elemento = document.forms[0].id;
elemento = document.forms[0].classList;
elemento = document.images;
elemento = document.images[2]
elemento = document.images[2].src
elemento = document.images[2].getAttribute('src')
elemento = document.scripts;


//Conveetir HTMLCollection en Array
elemento = document.images;
let images = elemento;
let imagesArr = Array.from(images);
console.log(imagesArr);
