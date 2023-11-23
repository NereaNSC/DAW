// Mediante un bucle for recorremos uno a uno los números entre 1 y 100
for (let num = 1; num <= 100; num++) {
        // Comprobamos si el número es divisible entre 3
        if (num % 3 == 0) {
            console.log("Fizz");
        // Comprobamos si el número es divisible entre 5
        } if (num % 5 == 0) {  
            console.log("Buzz");
        // Comprobamos si el número es divisible entre 3 y 5 
        } if (num % 3 == 0 && num % 5 == 0) {
            console.log("FizzBuzz");
        // Mostramos los números que no son divisibles entre 3 y/o 5
        } else {        
        console.log(num);
        }
}
