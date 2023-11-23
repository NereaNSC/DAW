//Solicitar por consola un número entero
let valor1 = prompt("Introduce un número entero: ");

// Convertir el valor introducido a un número entero
let numFilas = Number(valor1);

//Verificar si el valor es un número válido 
if (Number(numFilas) && numFilas < 0) {
    console.log("El número introducido no es correcto, por favor, introduzca un número entero igual o mayor que 0.");
} else {
    // Crear la figura con el número de filas especificado
    for (let i = 1; i <= numFilas; i++) {
        // Generar la cadena de "+" repetidos según el valor de i
        let fila = '+'.repeat(i);
        // Imprimir en pantalla la fila
        console.log(fila);
    }
}
