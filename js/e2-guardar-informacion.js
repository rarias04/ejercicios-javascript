//1. DECLARAR UNA VARIABLE
//Nombre de variable recomendado en minuscula
let variable;
//Nombre de variable si tiene espacio, usar camelCase, que es la primera palabra minuscula y la siguiente mayuscula sin espacios
let miVariable;
//Podeis usar guiones para separar los espacios pero es mas recomendable camelCase.
let mi_variable;
//Los nombres de las variables no pueden comenzar por un numero 2Nombre
//Los nombres de las variables pueden tener un numero siempre y cuando no empiece por el
let variable2;

//2.INICIAR UNA VARIABLE
//Primero declarar la variable y luego iniciarla.
document.write("EJEMPLO 1: INICIAR UNA VARIABLE CIUDAD </br>");

let ciudad;
ciudad = "Madrid";
document.write("La variable ciudad tiene el valor: " + ciudad);

//Declarar la variable e iniciarla a la vez
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad = 33;
//cambiamos el valor de la variable edad
edad = 34;
document.write("La variable edad tiene el valor: " + edad);


//TIPOS DE VARIABLES
//NUMERO ENTERO O CON DECIMALES. LOS DECIMALES VAN CON PUNTO. Y SIEMPRE SIN COMILLAS LOS NUMEROS.
document.write("</br> EJEMPLO 3: CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es:" + numero);
document.write("</br>");
document.write("El numero con decimales es "+ numeroDecimales);
//CADENAS. Pueden usarse comillas simples o dobles. No las mezcles, usa solo una de ellas. Cuidado con caracteres especiales, no pueden ir comillas del mismo tipo dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARIABLE DE TIPO TEXTO - STRING </br>");
let saludo = "Hola que tal?";
let despedida = 'Adios me voy';
let numeroEnTexto = "33";
document.write("La variable de texto saludo es: "+ saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
//BOOLEANOS. true o false. En minuscula y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARIABLE DE TIPO BOOLEANO </br>");
let estaSoleado = true;
let esDeDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es de dia es:" + esDeDia);
document.write("</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");

// Ejercicio 1: Declara variables del tipo que necesites para guardar la siguiente información sobre una persona. Asignarle como valor información sobre ti y muestralo en tu página.. A continuación cambia los valores con información de alguien que conozcas y muestralo en tu página..
let nombre = "Rebeca";
nombre = "Rodrigo";
document.write(nombre + "</br>");
let apellidos = "Arias Antolin";
apellidos = "Mañas Barceló";
document.write(apellidos);
document.write("</br>");
let edad2 = 46;
edad2 = 42;
document.write(edad2 + "</br>");
let altura = "1 metro y 60 centimos";
altura ="1 metro y 75 centimetros"
document.write(altura + "</br>");
let ciudad2 = "Madrid";
ciudad2 = "Pamplona";
document.write(ciudad2 + "</br>");
let teGustaLaPlaya = true;
teGustaLaPlaya = false;
document.write("¿Te gusta la playa? " + "La respuesta es: " + teGustaLaPlaya + "</br>");
let teGustaElPico = true;
document.write("¿Te gusta la montaña? " + "La respuesta es: " + teGustaElPico + "</br>");
let teGustaElChocolate = true;
document.write("¿Te gusta el chocolate? " + "La respuesta es: " + teGustaElChocolate + "</br>");
let mascota = false;
document.write("¿Tienes mascota? " + "La respuesta es: " + mascota + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

// Ejercicio 2: Declara variables para guardar la siguiente información sobre una película, asígnale los valores de tu película favorita y muéstrala en tu página. A continuación cambia el valor de título y género de la película a inglés y muestralo en tu página.
let tituloPelicula = "Memorias de Africa";
tituloPelicula = "Out of Africa";
document.write("El título de la película es " + tituloPelicula + "</br>");
let director = "Syney Pollack";
document.write("El director de la pelicula es " + director + "</br>");
let lanzamiento = 1985;
document.write("El año de lanzamiento de la película es " + lanzamiento + "</br>");
let genero = "Drama, Aventuras, Romance";
genero = "Drama, Adventure, Romance";
document.write("El género de la película es " + genero + "</br>");
let duracion = 160;
document.write("La duracion de la pelicula es "+ duracion + "min." + "</br>");
let premio = true;
document.write("¿La pelicula recibío algún premio? "+ premio + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

//Ejercicio 3: Declara variables para guardar la siguiente información sobre una canción. Asigna los valores de tu canción favorita y muéstrala en tu página. A continuación cambia todos los valores por el de la canción favorita de alguien que conozcas y muestrala en tu página.
let cancion = "Somebody that I used to know";
cancion = "Enter Sandman"
document.write("El título de la canción es " + cancion + "</br>");
let artista = "Gotye";
artista = "Metallica";
document.write("El artista es " + artista + "</br>");
let album = "Making Mirrors";
album = "Metallica";
document.write("El nombre del album es " + album + "</br>");
let lanzamiento2 = 2011;
lanzamiento2 = 1991;
document.write("El año de lanzamiento de la cación es " + lanzamiento2 + "</br>");
let duracion2 = 4;
duracion2 = 5;
document.write("La duracion de la cación es "+ duracion2 + "min." + "</br>");
let videoclip = true;
document.write("¿La canción tiene videoclip? "+ videoclip + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

// Ejercicio 4: Declara variables para guardar la siguiente información sobre un libro. Asigna los valores de tu libro favorito y muéstrala en tu página. A continuación cambia los valores de las variables por el del libro favorito de alguien que conozcas.
let libro = "El corazón helado";
libro = "El Conde de Montecristo";
document.write("El título del libro es " + libro + "</br>");
let autor = "Almudena Grandes";
autor = "Alexandre Dumas";
document.write("El nombre de la autora es " + autor + "</br>");
let genero2 = "Novela histórica, ficción";
genero2 = "Novela histórica, aventuras";
document.write("El género del libro es " + genero2 + "</br>");
let publicacion = 2007;
publicacion = 1846;
document.write("El libro se publicó en " + publicacion + "</br>");
let numeroPaginas = 800;
numeroPaginas = 1000;
document.write("El libro tiene "  + numeroPaginas +" " + "páginas " + "</br>");
let tienePelicula = false;
tienePelicula = true;
document.write("¿El libro tiene película? "+ tienePelicula + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

// Ejercicio 5: Declara variables para guardar la siguiente información sobre un deporte. Dale los valores de tu deporte favorito y muéstrala en tu página. A continuación cambia los valores de las variables para mostrar del deporte Natación.
let deporte = "Rugby";
deporte = "Natación";
document.write("El nombre del deporte es " + deporte + "</br>");
let origen = "Inglaterra";
origen = "Gran Brtetaña";
document.write("El origen del " + " "+ deporte + " " +  "es" + " " + origen + "</br>");
let popularidad = 5;
popularidad = 8;
document.write("La popularidad de la" + " " + deporte + " " + "del 1 al 10 es " + popularidad + "</br>");
let equipamiento = "balón de rugby, tacos para los zapatos, camiseta, pantalones cortos, medias";
equipamiento = "Traje de baño, gafas de natación,  gorro de natación "
document.write("El equipamiento necesario para practicar " + deporte +  " es " + equipamiento + "</br>");
let deporteEquipo = true;
deporteEquipo = false;
document.write("¿Es un deporte de equipo? "+ deporteEquipo + "</br>");
let practicaExteriores = true;
document.write("¿Se practica en exteriores? "+ practicaExteriores + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");

// Ejercicio 6: Declara variables para guardar la siguiente información sobre viajes. Asigna la información de tu destino de viaje favorito y muéstrala en tu página. A continuación cambia los valores de las variables para mostrar sobre el destino Málaga.
let destino = "Bristol";
destino = "Málaga";
document.write("Nombre del destino " + destino + "</br>");
let pais = "Reino Unido";
pais = "España";
document.write("Nombre del país " + pais + "</br>");
let clima = "clima templado marítimo";
clima = "clima subtropical mediterráneo";
document.write("Tipo de clima " + clima + "</br>");
let poblacion = 467.099;
poblacion = 578.460;
document.write("El número de habitantes es " + poblacion + "</br>");
let atraccionTuristica = "el Puente Suspensión de Clifton, el SS Great Britain, el M Shed , el Zoo Gardens, el Aquarium, el Museo y Galería de Arte de Bristol, la Catedral, y el pintoresco puerto flotante.";
atraccionTuristica = "la Alcazaba, el Castillo de Gibralfaro, la Catedral, el Museo Picasso, el Museo Carmen Thyssen, el Centro Pompidou, el Parque de Málaga, la Calle Larios, las playas de la Costa del Sol."
document.write("Las principales atracciones turisticas son " + atraccionTuristica + "</br>");
let destinoCostero = false;
destinoCostero = true;
document.write("¿Es un destino costero? "+ destinoCostero + "</br>");
let destinoUrbano = true;
document.write("¿Es un destino urbano? "+ destinoUrbano + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");
// CONSTANTES
// Ejercicio 7: Declara las siguientes variables o constantes según corresponda:
const numeroMeses = 12;
document.write("El número de meses es  " + numeroMeses + "</br>");
const numeroSemana = 7;
document.write("El número de días en una semana es  " + numeroSemana + "</br>");
const numeroHabitantes = 3.3;
document.write("El número de habitantes en Madrid es de  " + numeroHabitantes + " " + "millones"+"</br>");
const edadCantante = 68;
document.write("La edad de mi cantante favorito es  " + edadCantante +" " + "años " + "</br>");
const numeroEstaciones = 4;
document.write("Las estaciones del año son   " + numeroEstaciones + "</br>");
const nombreCiudad = "Madrid"
document.write("El nombre de la ciudad donde vivo es  " + nombreCiudad + "</br>");
const numeroHoras = 24;
document.write("El número de horas en un día son  " + numeroHoras + " " + "horas" + "</br>");
const precioGasolina = 1.5;
document.write("El precio de la gasolina está a   " + precioGasolina + " " + "por litro" + "</br>");
const numeroLibros = "He perdido la cuenta"
document.write(numeroLibros + "</br>");
document.write("------------------------------------------------------------------------------------------" + "</br>");