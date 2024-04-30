// Ejercicio 3 Operaciones : Haz los siguientes ejercicios en el fichero javascript e3-guardar-informacion.js y muestralos en la pagina e3-guardar-informacion.html junto con los ejemplos vistos en clase.
let manzana = 2.5;
let pera = 1.5;
let platano = 1.8;

// Muestra por pantalla el precio total de:

// 1 kilo de manzana y 1 kilo de pera
let suma = manzana + pera;
document.write("El precio de 1 kg de manzanas y 1 kg de peras es " + " " + suma + " " + "euros"+ "<br>");
//  1 kilo de platano y 1 kilo de pera
let suma2 = platano + pera;
document.write("El precio de 1 kg de plátanos y 1 kg de peras es " + " " + suma2 + " " + "euros"+ "<br>");
// 2 kilos de peras
let multiplicacion = pera * 2;
document.write("El precio de dos kilos de peras es " + " " + multiplicacion + " " + "euros"+ "<br>");
// 3 kilos de platanos
let multiplicacion2 = platano * 3;
document.write("El precio de tres kilos de platanos es " + " " + multiplicacion2 + " " + "euros"+ "<br>");
// 2 kilos de manzana y 3 kilos de peras
let precioManzanasPeras = (pera * 3) + manzana;
document.write("El precio de tres kilos de peras y un kilo de manzanas es " + " " + precioManzanasPeras + " " + "euros"+ "<br>");
// 1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana
let suma3 = (platano/2) + platano + (pera * 2) + (manzana * 3);
document.write("El precio de un kilo y medio de plátanos, más un kilo de peras, más un kilo de manzanas, hace un total de " + " " + suma3 + " " + "euros"+ "<br>");
let suma4 = (pera/2) + (pera*2) + (platano/2) + (platano * 3);
document.write("El precio de dos kilos y medio de peras, más tres kilos y medio de plátanos, hace un total de " + " " + suma4 + " " + "euros"+ "<br>");
// 1. Crea variables para guardar las notas de un alumno: 7.5, 10.5, 8, 9.5, 7 y muestra su nota media.
let nota1 = 7.5;
let nota2 = 10.5;
let nota3 = 8;
let nota4 = 9.5;
let nota5 = 7;
let notaMedia = (nota1+nota2+nota3+nota4+nota5)/5;
document.write("La nota media del alumno es " + " " + notaMedia + "<br>");
// 2. Calcula el área de un cuadrado con lado de longitud 5 cm.
let lado = 5;
let areaCuadrado = lado * lado;
document.write("El área del cuadrado es " + " " + areaCuadrado + "<br>");
// 3. Encuentra el área de un rectángulo con dimensiones de 8 cm de largo y 6 cm de ancho.
let base = 8;
let altura = 6;
let areaRectangulo = base * altura;
document.write("El área del rectángulo es " + " " + areaRectangulo + "<br>");
// 4. Determina el área de un triángulo con base de 10 metros y altura de 8 metros.
let base2 = 10;
let altura2 = 8;
let areaTriangulo = (base2 * altura2)/2;
document.write("El área del triángulo es " + " " + areaTriangulo + "<br>");
// 5. Calcula el área de un círculo con radio de 4 centímetros
let radio = 4;
const pi = 3.14159;
let areaCirculo = pi * (radio * radio);
document.write("El área de un círculo es " + " " + areaCirculo + "<br>");
// 6. Encuentra el área de un trapecio con bases de longitudes 6 cm y 10 cm, y altura de 8 cm
let baseTrapecio1 = 6;
let baseTrapecio2 =10;
let altura1 = 8;
let areaTrapecio = ((baseTrapecio1 + baseTrapecio2) * altura1)/2;
document.write("El área de un trapecio es " + " " + areaTrapecio + "<br>");
// 7. Determina el área de un rombo con diagonales de longitudes 12 cm y 16 cm.
let diagonal1 = 12;
let diagonal2 = 16;
let areaRombo = (diagonal1 * diagonal2)/2;
document.write("El área del rombo es " + " " + areaRombo + "<br>");
// 8. Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros.
let base3 = 7;
let alturaParalelogramo = 9;
let areaParalelogramo = base3 * alturaParalelogramo;
document.write("El área del paralelogramo es " + " " + areaParalelogramo + "<br>");
// 9. Encuentra el área de un pentágono regular con lado de 6 centímetros.
let lado1 = 6;
let areaPentagono = (5/4) * Math.pow(6,2) * (1/Math.tan(Math.PI/5));
document.write("El área del pentágono es " + " " + areaPentagono + "<br>");
/* La función Math.pow() en JavaScript se utiliza para elevar un número a una potencia determinada. Toma dos argumentos: la base y el exponente.
Por ejemplo, si deseas calcular 
2 elevado a la 3 potencia, puedes hacerlo de la siguiente manera: Math.pow(2, 3)*/
// La función Math.tan() en JavaScript calcula la tangente de un ángulo dado en radianes.
