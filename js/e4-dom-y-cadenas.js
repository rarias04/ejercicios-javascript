//JAVASCRIPT DOM. OBTENER ELEMENTOS DE LA PAGINA POR SU ID
//Obtener el elemento html con id ejemplo
let parrafoEjemplo = document.getElementById("ejemplo");
//Modificar el texto del elemento html con id ejemplo
parrafoEjemplo.innerText = "Hola Bootcamp QA";

//Obtener el elemento html con id ejemploTitulo
let tituloEjemplo = document.getElementById("ejemploTitulo");
let miNombre = "Reyes";
let miEdad = 33;
tituloEjemplo.innerText = "Hola mi nombre es " + miNombre + " mi edad es " + miEdad;

//Obtener el elemento html con id ejemplo2 y agregar un texto con etiquetas html
let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.innerHTML = "<b>Ejemplo 2 en negrita</b>";

//Crear un nuevo parrafo dentro del div con id contenido
let divContenido = document.getElementById("contenido");
let nuevoTitulo = document.createElement("h3");
nuevoTitulo.innerText = "Ejemplo Crear Elementos desde Javascript";
divContenido.appendChild(nuevoTitulo);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Hola soy un nuevo parrafo creado";
divContenido.appendChild(nuevoParrafo);


//Obtener el atributo del elemento a con id ejemplo 3 y agregarle una url
let ejemplo3 = document.getElementById("ejemplo3");
let paginaWeb = "https://bootcampqa.com";
ejemplo3.href = paginaWeb;

//Obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

//CADENAS EN JAVASCRIPT
//Escapar caracteres especiales en una cadena se hace con \
let cadenaEjemplo = "Hola mi nombre es \"Juan\" que tal estas";
let ejemplo5 = document.getElementById("ejemplo5");
ejemplo5.innerText = cadenaEjemplo;

//Contar caracteres de una cadena
let ejemploContar = "Bienvenidos a Bootcamp QA";
let totalLetrasCadenaEjemplo = ejemploContar.length;

let ejemplo6 = document.getElementById("ejemplo6");
ejemplo6.innerText = "La cadena " + ejemploContar + " tiene un total de " + totalLetrasCadenaEjemplo + "caracteres";

//Obtener la letra en la posicion que elijas de la cadena
let primeraLetra = ejemploContar[0]; //la primera siempre empieza en 0
let ultimaLetra = ejemploContar[ejemploContar.length - 1]; //El total de letras de la cadena, menos uno porque empieza en 0
let ejemplo7 = document.getElementById("ejemplo7");
ejemplo7.innerText = "La primera letra de la palabra " + ejemploContar + " es " + primeraLetra + " y la ultima letra es " + ultimaLetra;

//Cambiar la cadena todo a mayusculas o minusculas
let cadenaMayusculas = ejemploContar.toUpperCase();
let cadenaMinusculas = ejemploContar.toLowerCase();

let ejemplo8 = document.getElementById("ejemplo8");
ejemplo8.innerText = "La cadena " + ejemploContar + " mayusculas " + cadenaMayusculas + " minusculas " + cadenaMinusculas;

//sustituir texto de una cadena
//Sustituir una palabra por otra
let nuevaCadena = ejemploContar.replace("Bootcamp QA","Mi web");
let ejemplo9 = document.getElementById("ejemplo9");
ejemplo9.innerText = "Antes de reemplazar " + ejemploContar + " despues de reemplazar " + nuevaCadena;
//Sustituir una palabra por una variable
let mensajeBienvenida = "Bienvenido estudiante";
let nombreEstudiante = "Juan";
let nuevoMensajeBienvenida = mensajeBienvenida.replace("estudiante", nombreEstudiante);
let ejemplo10 = document.getElementById("ejemplo10");
ejemplo10.innerText = "Antes de reemplazar " + mensajeBienvenida + " despues de reemplazar " + nuevoMensajeBienvenida;

// CADENAS (TEXTOS)
// 1. Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:
// su longitud
let frase = "Hola que tal, bienvenida a QA";
let longitud = frase.length;
document.write("Longitud es " + longitud + "<br>");
// La posición de la palabra QA
document.write(" La posición de la palabra QA está en la " + " " + frase.indexOf("QA") + "<br>");
// La primera letra de la frase
document.write(" La primera letra está en la posición " + " " + frase.indexOf("H") + "<br>");
// La última letra de la frase
document.write(" La última letra  de la frase está en la posición " + " " + frase.indexOf("A") + "<br>");
// Crea una variable nueva extrayendo la palabra Hola de la cadena
let hola = frase.slice(0,4);
document.write(hola);
document.write("<br>");
// Crea una variable nueva extrayendo la palabra QA de la cadena.
let qa = frase.slice(27,);
document.write(qa);
document.write("<br>");
// Crea una variable con la palabra bienvenida
let bienvenida = "bienvenida";
// Muestra la frase completa en mayúscula
document.write(frase.toUpperCase());
document.write("<br>");
// Muestra la frase completa en minúscula
document.write(frase.toLowerCase());
document.write("<br>");
// Cambia la palabra bienvenida, por bienvenido
document.write(frase.replace("bienvenida", "bienvenido"));
document.write("<br>");
document.write(bienvenida.replace("a", "o"));
document.write("<br>");
// Crea una nueva palabra, con la misma frase quitando la palabra que tal
let frase2 = frase.replace("que tal", "");
document.write(frase2);
document.write("<br>");
// 2. Crea una variable con una frase en la que te presentes y muestrala junto con:
// su longitud
let frase3 = "Hola, me llamo Rebeca y me gusta leer";
let longitud2 = frase3.length;
document.write("Longitud es " + longitud2 + "<br>");
document.write("<br>");
// La posición de tu nombre
document.write(" Mi nombre está en la posición " + " " + frase3.indexOf("Rebeca") + "<br>");
// La primera letra de la frase
document.write(" La primera letra está en la posición " + " " + frase3.indexOf("H") + "<br>");
// La última letra de la frase
document.write(" La última letra  de la frase está en la posición " + " " + frase3.indexOf("r") + "<br>");
// Crea una variable nueva extrayendo la palabra tu nombre de la cadena
let nombre = frase3.slice(15,21);
document.write(nombre);
document.write("<br>");
// Muestra la frase completa en mayúscula
document.write(frase3.toUpperCase());
document.write("<br>");
// Muestra la frase completa en minúscula
document.write(frase3.toLowerCase());
document.write("<br>");
// Cambia tu nombre por otro que elijas
document.write(frase3.replace("Rebeca", "Emma"));
document.write("<br>");
// Crea una nueva palabra, con la misma frase quitando tu nombre
let frase4 = frase3.replace("Rebeca", "");
document.write(frase4);
document.write("<br>");
// 3. Crea una variable con tu nombre y apellido. Quita los espacios de la variable y muestralo por pantalla
let nombreApellido = " Rebeca Arias ";
document.write(nombreApellido.split(" "));
document.write("<br>");
// 4. Crea una variable con una palabra en minuscula. Cambia la primera letra a mayuscula y muestrala por pantalla.
let palabra = "bristol";
document.write(palabra.charAt(0).toUpperCase() + palabra.slice(1));
document.write("<br>");
// 5. Crea una cadena con el texto Hola Mundo. Reemplaza la palabra Hola por Adios y muestralo por pantalla
let holaMundo = "Hola mundo";
document.write(holaMundo.replace("Hola", "Adios"));