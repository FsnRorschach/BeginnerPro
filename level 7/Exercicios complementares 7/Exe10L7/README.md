10 - Por que a seguinte estrutura irá retornar "Chamado"?

const count = 3;

switch(count){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    console.log("Chamado");
    break;
}

Por que em nenhum dos case existe o break ou return para parar o fluxo, sendo assim, passará por todos os casos até o console.log('Chamado') e finalizará no break.