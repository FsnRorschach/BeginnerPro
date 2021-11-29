8- Como podemos declarar variáveis dentro do CSS? Dê exemplos de seu uso.

Variavéis no css ajuda no caso de elementos que se repetem muitas vezes no uso na folha de estilo e necessitam por exemplo serem mudadas.

Para utilizar  a variavel é utilizada  o :root{};

nele é declarada uma variavel  com "--" na frente 

Exemplo: :root{
    --variavel_css: 'Times New Roman';
}

Depois no seu estilo será chamada a variavel no lugar onde normalmente seria inserido o valor do elemento.

Exemplo: 
p{
    font-family: var(--variavel_css);
    text-align: center;
}

h3{
    font-family: var(--variavel_css);
}