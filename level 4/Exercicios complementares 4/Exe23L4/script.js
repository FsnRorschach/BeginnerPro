const texto = "texto para printar cada caracter";
// tamanho do array, contando os espaços
console.log(texto.length);
// for tradicional
for (i = 0; i < texto.length; i++) {
    // if para tirar os espaços para mostrar apenas os caracteres
    if (texto[i] != " ") {
        console.log(texto[i]);
    }
}
// for of
for (const iterator of texto) {
    console.log(iterator);
}
// for in
for (const key in texto) {
    if (texto.hasOwnProperty(key)) {
        console.log(texto[key]);

    }
}