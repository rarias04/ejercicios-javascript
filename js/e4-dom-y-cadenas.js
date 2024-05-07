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
let ejercicio1 = document.getElementById("longitud");
ejercicio1.innerText = "La frase Hola que tal, bienvenida a QA tiene  " + longitud + " " + "caracteres";

// La posición de la palabra QA
let palabraPosicion = frase.indexOf("QA")
let ejercicioDos = document.getElementById("posicion");
ejercicioDos.innerText = "La palabra QA está en la posición " + palabraPosicion;

// La primera letra de la frase
let letraPrimera = frase[0];
let subEjercicio3 = document.getElementById("letra");
subEjercicio3.innerText = "La primera letra es: " + letraPrimera;

// La última letra de la frase
let letraUltima = frase[longitud -1];
let subEjercicio4 = document.getElementById("ultima");
subEjercicio4.innerText = "La última letra de la frase es: " + letraUltima;

// Muestra la frase completa en mayúscula
let fraseMayuscula = frase.toUpperCase();
let subEjercicio5 = document.getElementById("mayuscula");
subEjercicio5.innerText = fraseMayuscula;

// Muestra la frase completa en minúscula
let fraseMinuscula = frase.toLowerCase();
let subEjercicio6 = document.getElementById("minuscula");
subEjercicio6.innerText = fraseMinuscula;

// Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre
let studentName = "Rebeca";
let welcomeMessage = frase.replace("que tal", studentName);
let subEjercicio7 = document.getElementById("nombre");
subEjercicio7.innerText = welcomeMessage;

// Crea una nueva palabra, con la misma frase quitando la palabra que tal
let palabra2 = "";
let welcomeMessage2 = frase.replace("que tal", palabra2);
let subEjercicio8 = document.getElementById("palabra");
subEjercicio8.innerText = welcomeMessage2;

// 2. Crea una variable con una frase en la que te presentes y muestrala junto con:
// su longitud
let divContenido1 = document.getElementById("contenidoEjercicios");
let frase3 = "Hola, me llamo Rebeca y me gusta leer";
let longitud2 = frase3.length;
let nuevoTitulo1 = document.createElement("p");
nuevoTitulo1.innerText = frase3 +"." + " " + "La longitud es de " + longitud2 + " " + "caracteres";
divContenido1.appendChild(nuevoTitulo1);

// La posición de tu nombre
let divContenido2 = document.getElementById("contenidoEjercicios");
let posicion = frase3.indexOf("Rebeca");
let nuevoTitulo2 = document.createElement("p");
nuevoTitulo2.innerText = "El nombre está en la posición" + " " + posicion;
divContenido2.appendChild(nuevoTitulo2);

// La primera letra de la frase
let divContenido3 = document.getElementById("contenidoEjercicios");
let primeraLetra2 = frase3[0];
let nuevoTitulo3 = document.createElement("p");
nuevoTitulo3.innerText = "La primera letra de la frase es " + " " + primeraLetra2;
divContenido3.appendChild(nuevoTitulo3);

// La última letra de la frase
let divContenido4 = document.getElementById("contenidoEjercicios");
let ultimaLetra2 = frase3[longitud2 -1];
let nuevoTitulo4 = document.createElement("p");
nuevoTitulo4.innerText = "La última letra de la frase es " + " " + ultimaLetra2;
divContenido4.appendChild(nuevoTitulo4);

// Crea una variable nueva extrayendo la palabra tu nombre de la cadena
let divContenido5 = document.getElementById("contenidoEjercicios");
let nombre = frase3.slice(15,21);
let nuevoTitulo5 = document.createElement("p");
nuevoTitulo5.innerText = nombre;
divContenido5.appendChild(nuevoTitulo5);

// Muestra la frase completa en mayúscula
let divContenido6 = document.getElementById("contenidoEjercicios");
let fraseMayuscula2 = frase3.toUpperCase();
let nuevoTitulo6 = document.createElement("p");
nuevoTitulo6.innerText = fraseMayuscula2;
divContenido6.appendChild(nuevoTitulo6);

// Muestra la frase completa en minúscula
let divContenido7 = document.getElementById("contenidoEjercicios");
let fraseMinuscula2 = frase3.toLowerCase();
let nuevoTitulo7 = document.createElement("p");
nuevoTitulo7.innerText = fraseMinuscula2;
divContenido7.appendChild(nuevoTitulo7);

// Cambia tu nombre por otro que elijas
let divContenido8 = document.getElementById("contenidoEjercicios");
let nuevoNombre = frase3.replace("Rebeca", "Emma");
let nuevoTitulo8 = document.createElement("p");
nuevoTitulo8.innerText = nuevoNombre;
divContenido8.appendChild(nuevoTitulo8);

// Crea una nueva palabra, con la misma frase quitando tu nombre
let divContenido9 = document.getElementById("contenidoEjercicios");
let frase4 = frase3.replace("Rebeca", "");
let nuevoTitulo9 = document.createElement("p");
nuevoTitulo9.innerText = frase4;
divContenido9.appendChild(nuevoTitulo9);

// 3. Crea una variable con tu nombre y apellido. Quita los espacios de la variable y muestralo por pantalla
let nombreApellido = " Rebeca Arias ";
let espacios = nombreApellido.split(" ");
let ejercicio3 = document.getElementById("espacio");
ejercicio3.innerText = espacios;

// 4. Crea una variable con una palabra en minuscula. Cambia la primera letra a mayuscula y muestrala por pantalla.
let palabra = "bristol";
let primeraLetra3 = palabra.charAt(0).toUpperCase();
let ejercicio4 = document.getElementById("camel");
ejercicio4.innerText = primeraLetra3 + palabra.slice(1);


// 5. Crea una cadena con el texto Hola Mundo. Reemplaza la palabra Hola por Adios y muestralo por pantalla
let holaMundo = "Hola mundo";
let despedida = holaMundo.replace("Hola", "Adios");
let ejercicio5 = document.getElementById ("hola");
ejercicio5.innerText = despedida;