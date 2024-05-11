//declarar la funcion.
//Funcion sin argumentos. No lleva nada entre los parentesis, significa que no recibe argumentos
//Declaramos la funcion
function decirHola () {
    let saludo = "Hola mundo";
    let parrafo = document.getElementById("funcionesEjemplo1");
    parrafo.innerText = saludo;
}
//Llamar a una funcion (la utilizamos)
decirHola();

//Funcion con argumentos. Recibe parametros, se ponen entre los parentesis
//declaramos la funcion
function suma (num1,num2){

    let resultado = num1 + num2;

    let divFunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = "La suma de " + num1 + " mas " + num2 + " es igual a " + resultado;
    divFunciones.appendChild(parrafoNuevo);
}
//Llama a la funcion suma, con los valores
suma(2,2);
suma(3,3);

//Funcion con argumentos ejemplo 2
//declaramos la funcion agregar nuevo parrafo
function agregarNuevoParrafo (mensaje) {
    let divFunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = mensaje;
    divFunciones.appendChild(parrafoNuevo);
}
//llamamos a la funcion con variables
let mensaje = "Hola que tal";
agregarNuevoParrafo(mensaje);
let nombre = "Reyes";
agregarNuevoParrafo("Hola que tal" + nombre);
agregarNuevoParrafo("Adios me voy");


//-------------PARTE PRINCIPAL -------------------------//
//Llamar a una funcion desde un boton de html con el evento onclick
//Creamos la funcion saludar
//EJEMPLO QUE PODEIS USAR DE REFERENCIA PARA HACER LA HISTORIA DE VER RESPUESTA
function saludar () {
    let parrafo = document.getElementById("funcionesEjemplo2");
    parrafo.innerText = "Hola que tal como estas";
}

//Obtener informacion de un formulario y ejecutar una funcion con el evento onclick
//EJEMPLO QUE PODEIS USAR DE REFERENCIA PARA HACER LA HISTORIA MENSAJE DE BIENVENIDA
//Creamos la funcion imprimir que podra ser usada en las otras funciones
function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function restar(){
    //1. Obtenemos los valores del formulario. Para ello ponemos el id del elemento del formulario y ponemos .value para obtener su valor y guardarlo en una variable
    let num1 = document.getElementById("e3numero1").value;
    let num2 = document.getElementById("e3numero2").value;
    let resta = num1 - num2;
    let mensaje = "La resta de los numeros " + num1 + " y " + num2 + " es igual a " + resta;
    //Usamos la funcion de imprimir que hemos declarado antse
    imprimir(mensaje,"funcionesEjemplo3");
}

//EJEMPLO OBTENER ELEMENTO DE UN SELECT
function mostrarUbicacion () {
    //1. Obtenemos la opcion seleccionada
    let ciudadSeleccionada = document.getElementById("e4ciudades").value;
    let mensaje = "Te encuentras en la ciudad " + ciudadSeleccionada;
    imprimir(mensaje,"e4solucion");
}

// Ejercicios 
// 1. Crea un formulario para introducir nombre, ciudad y fecha de nacimiento.
function bienvenida(){
    let nombre = document.getElementById("ex1texto").value;
    let ciudad = document.getElementById("ex2texto").value;
    let nacimiento = document.getElementById("ex1datetime").value;
    let mensaje = "Bienvenido " + nombre + " , nacido en " + ciudad + " , en el " + nacimiento;
    imprimir(mensaje,"ex1solucion");
}

// 2. Crea un formulario para introducir dos numeros.
function calculoMultiple(){
    let num1 = parseFloat(document.getElementById("ex2number1").value);
    let num2 = parseFloat(document.getElementById("ex2number2").value);
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    let mensaje = "La suma de los números " + num1 + " y " + num2 + " es " + suma + ". " + "La resta de los números "+ num1 + " y " + num2 + " es " + resta + ". " + "La multiplicacion de los números " + num1 + " y " + num2 + " es " + multiplicacion + ". " +  "La división de los números " + num1 + " y " + num2 + " es " + division + ".";
    imprimir(mensaje, "ex2solucion");
}

// 3. Crea un formulario para convertir monedas. El usuario debe introducir una catidad en euros.
function convertidorMonedas(){
    let moneda = parseFloat(document.getElementById("ex3number").value);
    let dolar = 1.8;
    let euro = 0.86;
    let multiplicar1 = moneda * dolar;
    let multiplicar2 = moneda * euro;
    let mensaje = "La conversión de " + moneda + " Euros " + "equivale a  " + multiplicar1 + " Dólares " + "y " +  multiplicar2 + " Libras. ";
    imprimir(mensaje, "ex3solucion");
}

//4. Crea un formulario para calcular precio total de un producto.
function precioTotal(){
    let nombreProducto = document.getElementById("ex4texto").value;
    let precio = parseFloat(document.getElementById("ex4text2").value);
    let cantidad = parseInt(document.getElementById("ex4number2").value);
    let calcular = precio * cantidad;
    let mensaje = " El producto " + nombreProducto + " tiene un precio total de " + calcular;
    imprimir(mensaje, "ex4solucion");
}

// 5. Crea un formulario para elegir la talla y el color de una camiseta. 
function eleccion(){
    let colorCamiseta = document.getElementById("ex5color").value;
    let talla = document.getElementById("ex5talla").value;
    let mensaje = " El color de la camiseta elegido es " + colorCamiseta + " y la talla seleccionada es " + talla;
    imprimir(mensaje, "ex5solucion");
}

// 6. Crea un formulario para introducir la edad del usuario.
function calcularEdad(){
    let edad = parseInt(document.getElementById("ex6number").value);
    let dias = edad * 365;
    let min = dias * 24 * 60;
    let sec = min * 60;
    let mensaje = " Si tienes " + edad + " años" + " habrás vivido " + dias + " días " + min + " minutos " + " y " + sec + " segundos. "
    imprimir(mensaje, "ex6resultado");
}

// 7. Crea un elemento textArea que reciba un texto de longitud entre 10 y 100 caracteres. Debe ser obligatorio. Agrega validación Boostrap.
function mostrarTexto(){
    let texto =  document.getElementById("miTextarea").value;
    let textoMayuculas = texto.toUpperCase();
    let longitudTexto = texto.length;
    let letraPrimera = texto[0];
    let ultimaLetra = texto[longitudTexto -1];
    let mensaje = "El texto en mayúscuas es " + textoMayuculas + " y su longitud es de " + longitudTexto + " caracteres. " + "La primera letra del texto es " + letraPrimera + "  y  últma es " + ultimaLetra;
    imprimir(mensaje, "ex7resultado");
    
}

// 8. Crea un formulario para calcular la nota media.
function notaMedia(){
    let nota1 = document.getElementById("ex8text1").value;
    let nota2 = document.getElementById("ex8text2").value;
    let nota3 = document.getElementById("ex8text3").value;
    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
    let mensaje = " La nota media es " + media.toString();
    imprimir(mensaje, "ex8resultado");
}

// 9. Crea un formulario para que el usuario pueda seleccionar una cantidad de camisetas, que puede ser vacio, 1,2 o 3, una cantidad de zapatos también entre vacio, 1,2 o 3 y una cantidad de sombreros, que puede ser vacio, 1,2, o 3.
function productoSeleccion(){
    let camisetas = document.getElementById("e9cantidad").value;
    let zapatos = document.getElementById("e9cantidad2").value;
    let sombreros = document.getElementById("e9cantidad3").value;
    mensaje = " El usuario ha seleccionado la cantidad de " + camisetas + " camisetas,  la cantidad de " + zapatos  + " zapatos y la cantidad de  " + sombreros + " sombreros.";
    imprimir(mensaje, "ex9resultado");

}

function mascota(){
    let nombreMascota = document.getElementById("ex10texto1").value;
    let tipoMascota = document.getElementById("e10mascota").value;
    let mensaje = "Su mascota se llama " + nombreMascota + " y el tipo  de seleccionado dentro de esta lista es: " + tipoMascota;
    imprimir(mensaje, "ex10resultados");
}