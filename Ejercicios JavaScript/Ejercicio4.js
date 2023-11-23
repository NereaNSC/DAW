/*Comparación de fechas:
Realiza un programa que pida por prompt el día, mes y año de tu cumpleaños.
Indica cuantos días han pasado desde tu cumpleaños hasta el día de hoy*/

//Pedir al usuario el día, mes y año de su cumpleaños
let dia = parseInt(prompt("Introduce el día de tu cumpleaños: "));
let mes = parseInt(prompt("Introduce el mes de tu cumpleaños: "));
let año = parseInt(prompt("Introduce el año de tu cumpleaños: ")); 

// Crear un objeto de fecha con la fecha de cumpleaños.
let fechaCumpleaños = new Date(año, mes -1, dia); // Nota: mes - 1 porque en JavaScript los meses van de 0 a 11

// Obtener la fecha actual 
let fechaActual = new Date();

// Calcular la diferencia en años, meses y días
let diferencia = fechaActual - fechaCumpleaños;
let edad = new Date (diferencia);

let años = edad.getUTCFullYear() - 1970;
let meses = edad.getUTCMonth();
let días = edad.getUTCDate() - 1;

// Mostrar el resultado
console.log(`Tu edad es: ${años} años, ${meses} meses y ${dia} días.`);
