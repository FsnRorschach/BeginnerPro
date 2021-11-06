document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('entrou');

    let anoNasc = ano.value;

    console.log(anoNasc);

    let datahoje = new Date();



    console.log(datahoje);
    console.log(datahoje.getTime);

});