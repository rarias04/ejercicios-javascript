//AQUI HACEIS LOS EJERCICIOS DEL TEMA 3 OPERACIONES
let precioManzana = 2.5;
let precioPera = 1.5;
let precioPlatano = 1.8;
let kilosPeras = 2;
let kilosPlatanos = 3;
let kilosManzanas1 = 2;
let precioManzanayPera = precioManzana + precioPera;
let precioPlatanoyPera = precioPlatano + precioPera;
let precio2kilosPeras = precioPera * kilosPeras;
let precio3kilosPlatanos = precioPlatano * kilosPlatanos;
kilosPeras = 3;
let precio2kManzanasy2kPeras = (precioManzana * kilosManzanas1) + (precioPera * kilosPeras);
kilosPlatanos = 1.5;
kilosPeras = 2;
kilosManzanas1 = 3;
let precioPlatanosPerasyManzanas = (precioPlatano * kilosPlatanos) + (precioPera * kilosPeras) + (precioManzana * kilosManzanas1);
kilosPeras = 2.5;
kilosPlatanos = 3.5;
let precioPerasyPlatanos = (precioPera * kilosPeras) + (precioPlatano * kilosPlatanos);

document.write("EJERCICIO 0: <br/> ");
document.write("El precio del kilo de manzana es " + precioManzana + "<br/>");
document.write("El precio del kilo de pera es " + precioPera + "<br/>");
document.write("El precio del kilo de platano es " + precioPlatano + "<br/>");

document.write("Precio total de 1 kilo de manzana y 1 kilo de pera: " + precioManzanayPera + "<br/>");
document.write("Precio total de 1 kilo de platano y 1 kilo de pera:" + precioPlatanoyPera + "<br/>");
document.write("Precio total de 2 kilos de peras: " + precio2kilosPeras + "<br/>");
document.write("Precio total de 3 kilos de platanos: " + precio3kilosPlatanos + "<br/>");
document.write("Precio total de 2 kilos de manzana y 3 kilos de peras: " + precio2kManzanasy2kPeras + "<br/>");
document.write("Precio total de 1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana: " + precioPlatanosPerasyManzanas + "<br/>");
document.write("Precio total de 2,5 kilos de peras, 3,5 kilos de platano: " + precioPerasyPlatanos + "<br/>");

//EJERCICIO 1
document.write("EJERCICIO 1: <br/> ");
let notaDeexamen1 = 7.5;
let notaDeexamen2 = 10.5;
let notaDeexamen3 = 8;
let notaDeexamen4 = 9.5;
let notaDeexamen5 = 7;
let totalDeexamenes = 5;
let notaMediaexamen;

notaMediaexamen = (notaDeexamen1 + notaDeexamen2 + notaDeexamen3+ notaDeexamen4 + notaDeexamen5)/ totalDeexamenes;

document.write("Nota del examen 1: " + notaDeexamen1 +", " + "Nota del examen 2: " + notaDeexamen2 + ", " + "Nota del examen 3: " + notaDeexamen3 + ", " + "Nota del examen 4: " + notaDeexamen4 + ", " + "Nota del examen 5: " +  notaDeexamen5 + ", " + "Da una media de : " + notaMediaexamen + " </br>");

//EJERCICIO 2
// 2. Calcula el área de un cuadrado con lado de longitud 5 cm.
document.write("EJERCICIO 2: <br/> ");
let lado2 = 5;
let areaCuadrado1 = lado2 * lado2;
document.write("El área del cuadrado es " + areaCuadrado1 + "<br>");

//EJERCICIO 3
//Encuentra el área de un rectángulo con dimensiones de 8 cm de largo y 6 cm de ancho.
document.write("EJERCICIO 3: <br/> ");
let baserectangulo = 8;
let alturarectangulo =6;
let arearectangulo; 

arearectangulo = baserectangulo * alturarectangulo; 

document.write("Área del rectángulo es base por altura. La base es " + baserectangulo + " cm y la altura es " + alturarectangulo + " cm. Por lo que el área es " + arearectangulo + " cm" + "</br>");

//EJERCICIO 4
//Determina el área de un triángulo con base de 10 metros y altura de 8 metros.
document.write("EJERCICIO 4: <br/> ");
let base4 = 10;
let altura4 = 8;
let areaTriangulo2 = (base4 * altura4)/2;
document.write("El área del triángulo es " + areaTriangulo2 + "<br>");

//Calcula el área de un círculo con radio de 4 centímetros
document.write("EJERCICIO 5: <br/> ");
let radiocirculo = 4;
const pi = 3.14159;

let areacirculo = pi * (radiocirculo * radiocirculo);
let areacirculo2 = pi * Math.pow(radiocirculo, 2);
let areacirculo3 = pi * radiocirculo **2;
document.write("Área del círculo es pi por radio al cuadrado. El radio es " + radiocirculo +  " cm. Por lo que el área es " + areacirculo + " cm " + "</br>");
document.write("Área del círculo es pi por radio al cuadrado. El radio es " + radiocirculo +  " cm. Por lo que el área es " + areacirculo2 + " cm " + "</br>");
document.write("Área del círculo es pi por radio al cuadrado. El radio es " + radiocirculo +  " cm. Por lo que el área es " + areacirculo3 + " cm " + "</br>");

//EJERCICIO 6
//Encuentra el área de un trapecio con bases de longitudes 6 cm y 10 cm, y altura de 8 cm.
document.write("EJERCICIO 6: <br/> ");
let basetrapecio1 = 6;
let basetrapecio2= 10; 
let alturatrapecio = 8; 
let areatrapecio; 

areatrapecio = alturatrapecio * ((basetrapecio1 +  basetrapecio2) / 2); 

document.write("Área del trapecio es suma de las bases por su altura entre 2. La base1 es " + basetrapecio1+ " cm, la base2 es " + basetrapecio2 + " cm y la altura es " + alturatrapecio+ " cm. Por lo que el área es " + areatrapecio + " cm" + "</br>");

//EJERCICIO 7
//Determina el área de un rombo con diagonales de longitudes 12 cm y 16 cm.
let diagonal3 = 12;
let diagonal4 = 16;
let areaRombo1 = (diagonal3 * diagonal4)/2;
document.write("EJERCICIO 7: <br/> ");
document.write("El área del rombo es " + " " + areaRombo1 + "<br>");

//EJERCICIO 8
//Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros.
document.write("</br> EJERCICIO 8- Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros:</br>");
//VOY A USAR LAS VARIABLES DEL RECTÁNGULO PARA CALCULAR EL PARALELOGRAMO YA QUE ES LA MISMA FÓRMULA Y PARA ESO SE CREAN LAS VARIABLES
let baseParalelogramo = 7;
let alturaParalelogramo1 = 9;
let areaParalelogramo1 = baseParalelogramo * alturaParalelogramo1;

document.write('Para calcular el área de un paralelogramo en la base por la altura: ' + areaParalelogramo1 + ' centímetros' + '<br>');

//EJERCICIO 9
//Encuentra el área de un pentágono regular con lado de 6 centímetros.
//AREA PENTAGONO PERIMETRO POR APOTAMA ENTRE DOS. PREGUNTAMOS VALOR DE APOTEMA A CHATGPT. APOTEMA DE UN PENTAGONO DE LADO 6
let apotemapentagono = 4.13;
let ladopentagono = 6;
let areapentagono; 
let perimetroPetagono = (5 * ladopentagono);


areapentagono = (perimetroPetagono * apotemapentagono)/2;
document.write("EJERCICIO 9: <br/> ");
document.write("Área del pentágono es cinco veces la longitud de su lado multiplicado por su apotema dividido entre dos. Su lado es " + ladopentagono + " cm y la apotema es " + apotemapentagono + " cm. Por lo que el área es " + areapentagono + " cm" + "</br>");


//SOLUCION 2: CALCULAMOS LA APOTEMA CON JAVASCRIPT
const PI2 = 3.14; //Math.PI
apotemapentagono = ladopentagono / (2 * Math.tan(PI2/5));

perimetroPetagono = (5 * ladopentagono);

areapentagono = (perimetroPetagono * apotemapentagono)/2;

document.write("Área del pentágono es cinco veces la longitud de su lado multiplicado por su apotema dividido entre dos. Su lado es " + ladopentagono + " cm y la apotema es " + apotemapentagono + " cm. Por lo que el área es " + areapentagono + " cm" + "</br>");