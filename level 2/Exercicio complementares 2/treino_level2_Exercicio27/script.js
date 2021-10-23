let number = document.getElementById('p_soma');
let numberInput = document.getElementById('input_soma');
let bodyTag = document.querySelector('body');
let button = document.getElementById('somaBtn');


const number1 = 10;
const number2 = 5;

number.textContent = number1 + number2;
numberInput.value = number1 + number2;

button.addEventListener("click", () => {

    bodyTag.innerHTML = `
                        <label for="inp1">Digite um numero</label>
                        <input type="number" id="inp1">
                        <label for="inp2">Digite um numero para multiplicar o primeiro</label>
                        <input type="number" id="inp2">
                        <button id="result">Clique aqui</button>
                        <div id="resultDiv" style="display:none">
                            <p id="paragResult" >Esse resultado é a multiplicação.</p>
                            <label for="result" id="resultl" ">Multiplicação:</label>
                            <input type="text" id="resultF" ">
                        </div>
                        `;

    let inputMult = document.getElementById('result');

    inputMult.addEventListener("click", () => {

        let num1 = document.getElementById('inp1').value;
        let num2 = document.getElementById('inp2').value;

        const resultDiv = document.getElementById('resultDiv');
        const resultF = document.getElementById('resultF');

        verificaVazio(num1);
        verificaVazio(num2);

        resultF.value = num1 * num2;

        resultDiv.style.display = 'block';

    });
});



function verificaVazio(value) {
    if (isNaN(value)) {
        alert("Digite um numero");
        console.log("verificou se o valor não é um numero");
    } else {
        console.log("O valor é um numero!");
    }
}