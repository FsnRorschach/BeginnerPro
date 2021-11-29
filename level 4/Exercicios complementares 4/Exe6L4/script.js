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
// evento escutador de click no botão onde pega os dados inseridos no html e colocar me variaveis e depois é dados um push no array de objetos, 
// pega o id da div onde será inserido o template da tabela através do innerHTML,
// o array é iterado com um forEach setando os valores de cada posição do array na tabela criada, atravé do template 
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

    let divtable = document.getElementById('table');

    divtable.innerHTML = `  
                            <table>
                                <thead>
                                    <tr>
                                        <th>Carro</th>
                                        <th>Geladeira</th>
                                        <th>Tv</th>
                                        <th>Computador</th>
                                        <th>Guarda roupas</th>
                                        <th>Celular</th>
                                        <th>Cachorro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        `;
    console.log(divtable);

    casa1.forEach(function (el) {
        let tbody = document.querySelector('tbody');
        console.log(`A minha casa possui esses objetos, ${el.carro}, ${el.geladeira}, ${el.tv}, ${el.Pc}, ${el.guardaroupa}, ${el.celular}, e meu cachorro ${el.cachorro}`);
        tbody.innerHTML += `
                                <tr>
                                    <td>${el.carro}</td>
                                    <td>${el.geladeira}</td>
                                    <td>${el.tv}</td>
                                    <td>${el.Pc}</td>
                                    <td>${el.guardaroupa}</td>
                                    <td>${el.celular}</td>
                                    <td>${el.cachorro}</td>
                                </tr>
                            `;
    });
});