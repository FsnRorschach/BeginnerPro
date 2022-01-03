const numeros = [5, 6, 13, 0, 1, 18, 23];

numeros.forEach((number) => {
    let res = number % 2;
    if (res != 0) {
        console.log("Impar: " + number);
    }
});