let numFilas = 8;
let numColumnas = 8;
let elemento = "#";
let tablero = "";

for (let i = 0; i < numFilas; i++) {
    for (let j = 0; j < numColumnas; j++) {
        // Alterna entre "#" y " " dependiendo de si la suma de i y j es par o impar
        if ((i + j) % 2 == 0) {
            tablero += "#";
        } else {
            tablero += " ";
        }
    }
    //Agrega un salto de linea al final de cada fila. 
    tablero += "\n";
}

console.log(tablero);
