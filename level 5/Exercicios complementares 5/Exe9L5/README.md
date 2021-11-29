9- Como funcionam as pseudoclasses?

Pseudo classes funciona manipulando o elemento a um estado especial.

Exemplo: :hover

é utilizado na frente da declaração do elemento a ser usado:

esse é o estilo declarado no button:
.button{
    width: 150px;
    height: 70px;
    cursor: pointer;
    background-color: #8a2be2;
    color: white;
}

essa é uma pseudo classe :hover declarada, o hover é um efeito de passar o ponteiro em cima do elemento, então ele será ativado e mudará para o que estiver declarado, até que o ponteiro seja tirado de cima do elemento.

.button:hover {
    border-radius: 2px;
    transform: translate(-5px);
    box-shadow: 0 10px 0 -2px #C83967;
}