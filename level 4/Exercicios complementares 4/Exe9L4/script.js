const numeros = [1, 2, 3, 4, 5];
//pegando o elemento na DOM para manipular
let div = document.getElementById('divCard');
let span = document.querySelector("span");

// escutando o evento click no button
document.querySelector('button').addEventListener('click', (evt) => {
    //mostrando a div escondida
    div.style.display = "block";
    //setando texto na TAG 'span'
    span.innerText = numeros;
    //setando template na TAG "div"
    div.innerHTML += `<h3>Array iterado com for</h3>`;
    // for utilizando o iterador for
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        div.innerHTML += `
                                <p>Numero ${numeros[i]}, na posição ${i}.</p>
                            
                        `;
    }
    //setando template na TAG "div"
    div.innerHTML += `<h3>Array iterado com for in</h3>`;
    // for utilizando o iterador for in
    for (const key in numeros) {
        if (numeros.hasOwnProperty(key)) {
            console.log(numeros[key]);
            div.innerHTML += `
                                <p>Numero ${numeros[key]}, na posição ${key}.</p>
        
                            `;
        }
    }
    //setando template na TAG "div"
    div.innerHTML += `<h3>Array iterado com for of</h3>`;
    // for utilizando o iterador for of
    for (let iterator of numeros) {
        console.log(iterator);
        div.innerHTML += `
                                <p>Numero ${iterator}.</p>
        
                            `;
    }
    //setando template na TAG "div"
    div.innerHTML += `<h3>Array iterado com forEach</h3>`;
    // for utilizando o iterador forEach
    numeros.forEach((val, index) => {
        console.log(val);
        console.log(index);
        div.innerHTML += `
                                <p>Numero ${val}, na posição ${index}.</p>
        
                            `;
    });
});