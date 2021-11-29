// função construtora
function casa(marca_carro, marca_geladeira, marca_tv, marca_pc, marca_guardaroupa, marca_celular, raca_cachorro) {
    this.carro = marca_carro;
    this.geladeira = marca_geladeira;
    this.tv = marca_tv;
    this.Pc = marca_pc;
    this.guardaroupa = marca_guardaroupa;
    this.celular = marca_celular;
    this.cachorro = raca_cachorro;
}

let casa1 = [];

// evento escutador de click no botão onde pega os dados inseridos no html e colocar me variaveis e depois é dados um push no array de objetos
document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    let car = carro.value;
    let gel = geladeira.value;
    let tev = tv.value;
    let pc = Pc.value;
    let guard = guardaroupa.value;
    let cel = celular.value;
    let cao = cachorro.value;
    console.log(car);
    console.log(gel);
    console.log(tev);
    console.log(pc);
    console.log(guard);
    console.log(cel);
    console.log(cao);

    casa1.push(new casa(car, gel, tev, pc, guard, cel, cao));

    console.log(casa1);

    casa1.forEach(function (el) {
        console.log(`A minha casa possui esses objetos, ${el.carro}, ${el.geladeira}, ${el.tv}, ${el.Pc}, ${el.guardaroupa}, ${el.ccelular}, e meu cachorro ${el.cachorro}`);
    });
});