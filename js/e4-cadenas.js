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