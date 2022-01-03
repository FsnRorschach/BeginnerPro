9 - Como podemos resolver um Callback Hell?

Callback Hell podem ser resolvidas facilmente sendo substituidas por promises, que depois de feita a instancia da Promise, o Callback será substituido pelo .then() que automaticamente receberá o resultado da execução da sua promise e poderá ser tratada da maneira desejada, caso a promise gere erro existe o .cacth() que receberá o erro e o Desenvolvedor poderá trata-lo da maneira que achar melhor.
O uso de promise deixa o codigo limpo, mais facil de entender.