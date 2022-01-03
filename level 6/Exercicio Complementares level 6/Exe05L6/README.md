5- Explique o "fluxo de trabalho comum com GitHub" com suas palavras. PS.: Utilize os códigos para te ajudar nesta tarefa.

 - o fluxo de trabalho consiste basicamente nas tarefas que podem ser executadas no manuseio da ferramenta, como:
 -  Clonar um repositorio, já existente em uma conta.
 git clone git@git.com.br
 - Enviar os arquivos adicionados no repositorio local para para a nuvem, nesse caso pode se escolher a melhor forma de trabalhar que se adeque melgor a realidade do seu projeto, como:
    - enviar arquivos para a Branch Main, ou seja para a principal, deverá verificar sempre em qual Branch está logado.
    git checkout -b <branch-name>

    - feita a verificação, sempre verifique o conteudo na nuvem comparando com o local, para evitar conflitos.
    git pull origin main

    -depois de adicionar no repositorio local e commitar, é momento de enviar o conteúdo para o repositório na nuvem.
    add no repositorio local:
    git add . ==> adiciona tudo o que estiver de novo ( modificado)
    git add <nome-do-arquivo> ==> caso queira adicionar para commit apenas um conteudo especifico

    commit no repositorio local:
    git commit -m <mensagem que aparecerá no seu commit>

    adiciona do repositorio local para o do GitHub na nuvem
    git push -u origin main
