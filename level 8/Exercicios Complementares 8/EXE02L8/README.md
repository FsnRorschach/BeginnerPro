2 - Explique por que o código a seguir não segue os padrões assíncronos:

let myDate;

for(let i = 0; i < 10000000; i++){
    let date = new Date();
    myDate = date;
}

console.log(myDate)

Porque cada linha do codigo depende da execução da linha anterior