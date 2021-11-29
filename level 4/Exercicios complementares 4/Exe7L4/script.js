const array_frutas = ["pera", "uva", "maçã", "banana", "laranja", "mamão"];
const spn = document.querySelector('span');
const divtable = document.getElementById('table');
divtable.innerHTML = `<table><tbody></tbody></table>`;
const tbody = document.querySelector('tbody');
let array = [];
spn.textContent = `${array_frutas[0]} , ${array_frutas[1]} , ${array_frutas[2]} , ${array_frutas[3]} , ${array_frutas[4]} , ${array_frutas[5]}`;


document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    let loop;

    // loop for in
    for (const key in array_frutas) {
        if (array_frutas.hasOwnProperty(key)) {
            console.log(key);
            console.log(array_frutas[key]);
            array.push(array_frutas[key]);
        }
    }
    loop = "For in";
    template(loop, array);

    //loop for of
    for (let iterator of array_frutas) {
        console.log(iterator);
        array.push(iterator);
    }
    loop = "For of";
    template(loop, array);

    // loop for
    for (i = 0; i < array_frutas.length; i++) {
        console.log(array_frutas[i]);
        array.push(array_frutas[i]);
    }
    loop = "For";
    template(loop, array);

    // loop forEach
    array_frutas.forEach((value, index) => {
        console.log(value);
        console.log(index);
        array.push(value);
    });
    loop = "forEach";
    template(loop, array);
});

let template = (type, fields) => {
    console.log(type);
    console.log(fields);
    console.log(tbody);
    tbody.innerHTML += `
                            <tr>
                                <td>Loop tipo: ${type} ,  Array :</td>
                                <td>${fields[0]} ,</td>
                                <td>${fields[1]} ,</td>
                                <td>${fields[2]} ,</td>
                                <td>${fields[3]} ,</td>
                                <td>${fields[4]} ,</td>
                                <td>${fields[5]}.</td>
                            </tr>
                        `;
    array = [];
};