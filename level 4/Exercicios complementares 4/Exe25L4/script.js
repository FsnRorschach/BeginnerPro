const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(alfabeto);
var e = 1;
// loop para controlar repetições até 1000
do {
    // loop para fazer a iteração no array alfabeto
    for (let i = 0; i < alfabeto.length; i++) {
        console.log("Letra do alfabeto: " + alfabeto[i] + ", posição do array: " + i);
        console.log("De 0 a 1000, posição atual: " + e);
        e++;
        // controle para parar quando chegar no 1000
        if (e == 1001) {
            break;
        }
    }

} while (e < 1001);