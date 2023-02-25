const container = document.querySelectorAll('.Miclase'); //selecciono mi clase y la guardo en una constante

const titulo = document.createElement('h1'); //se crea una constante que almacena un elemento de tipo h1

container.appendChild(titulo); //le agrego a mi contenedor un hijo que es mi h1 o mi variable titulo

const texto = "Mi Titulo"; //creo un texto y lo almaceno

titulo.appendChild(texto); //agrego es texto a mi h1 o a mi titulo

container.append("Hola", document.createElement('div')); //siempre y cuando no tenga que dar soporte para explorer o edge

const referencia = document.querySelector('img'); // mi referencia para insertar

container.insertBefore(titulo, referencia); //damos la variable que queremos agregar y seguido de la referencia donde ira antes mi variable

const nodo = document.createElement('span');

referencia.insertAdjacentElement('beforebegin', nodo); //se agrega antes de mi nodo por fuera
referencia.insertAdjacentElement('afterbegin', nodo);  // se inserta dentro de mi nodo al inicio
referencia.insertAdjacentElement("beforeend", nodo); //se inserta dentro de mi nodo pero al final
referencia.insertAdjacentElement("afterend", nodo); // se inserta al final de mi nodo por fuera

var texto1 = document.querySelector('.clasesita');

texto1.outerHTML; //me devuelve en una cadena de caracter mi codigo '<h2 class= "clasesita">holi</h2>'
texto1.innerHTML; //me devuelve el valor de clase "holi"
texto1.innerHTML = "holas"; //cambio el valor de mi clase "holas"

var miHtml = text1.outerHTML.replace('holis', "Holas"); //guardo mi referencia con el codigo en mi variable html, y con el .replace puedo cambiar "holis" por "holas"
