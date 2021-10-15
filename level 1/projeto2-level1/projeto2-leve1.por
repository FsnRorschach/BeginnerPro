programa{
  	cadeia 
  	primeira_pergunta = "Observe o array → numeros = [2, 4, 6, 8, 10], agora observe o loop → for (i = 0; i < numeros.length; i++) { imprima(numeros[i]); }, com esse trecho nós temos o seguinte: 2, 3, 4, 6, 8, 10, bacana, e se quisermos o resultado como: 1, 3, 5, 7, 9? Como seria o código?",
		correta_1 = "for (i = 0; i < numeros.length; i++) { imprima(numeros[i]-1); }",
		errada1_1 = "for (i = 0; i < numeros.length; i++) { imprima(1, 3, 5, 7, 9); }",
		errada2_1 = "for (i = 0; i < numeros.length; i++) { imprima(numeros[i] - - 1); }",
  	
  	segunda_pergunta = "O que é um algoritmo?",
		correta_2 = "Um conjunto de instruções ordenadas de forma lógica voltada a resolver um problema.",
		errada1_2 = "Uma função matemática",
		errada2_2 = "Um método JavaScript",
		errada3_2 = "Um método do Potugol",
  	
  	terceira_pergunta = "O que é programar?",
		correta_3 = "Unir o pensamento a uma linguagem de programação e resolver problemas.",
		errada1_3 = "Escreve códigos, letrinhas coloridas na tela",
		errada2_3 = "Criar programas legais",
		errada3_3 = "Se sentir mais inteligente que as outras pessoas",
  	
  	quarta_pergunta = "Observe esse array: ['maçã', 'limão', 'laranja', 'mamão'], em qual posição encontramos o limão?",
		correta_4 = "Posição 1",
		errada1_4 = "Posição 2",
		errada2_4 = "Posição 3",
  	
  	quinta_pergunta = "De forma sucinta, o que é uma variável?",
		correta_5 = "Uma variável é um espaço na memória do computador destinado a um dado que é alterado enquanto um programa é executado.",
		errada1_5 = "Uma variável é um espaço na tela do computador destinado a um dado que é alterado enquanto um programa é executado.",
		errada2_5 = "Uma variável é um espaço na memória do computador onde guardamos informações através da inserção manual, é preciso abrir o computador e inserir informações com ferramentas específicas.",
		errada3_5 = "É tudo o que o usuário nos informa afim de fazer sentido o uso do programa em questão.",
	
  	
  	sexta_pergunta = "Na programação, para que serve o sinal de =?",
		correta_6 = "Atribuir um valor",
		errada1_6 = "Fazer comparações",
		errada2_6 = "Criar variáveis",
		errada3_6 = "Criar funções",
  	
  	setima_pergunta = "Observe o seguinte trecho: 'Pegar o pão, pegar uma faca, cortar o pão ao meio, pegar a manteiga na geladeira, abrir o pote de manteiga, pegar um pouco de manteiga com a faca, passar a manteiga no pão', o que temos aqui é algo parecido com:",
		correta_7 = "Um algoritmo",
		errada1_7 = "Arrays",
		errada2_7 = "Variáveis",
		errada3_7 = "Um loop",
  	
  	oitava_pergunta = "Na programação, para que serve o sinal de ==?",
		correta_8 = "Fazer comparações de igualdade",
		errada1_8 = "Atribuir um valor",
		errada2_8 = "Criar variáveis",
		errada3_8 = "Criar funções",
  	
  	nona_pergunta = "O que é o Portugol?",
		correta_9 = "Uma linguagem usada de forma didática para que as pessoas aprendam a programar de forma mais amigável.",
		errada1_9 = "Uma linguagem de programação muito poderosa e muito usada em sistemas em produção.",
		errada2_9 = "Uma linguagem de programação voltada ao desenvolvimento web.",
	
  	decima_pergunta = "O que faz um sistema de arquivos?",
  	correta_10 = "Permite ao sistema operacional ter acesso e controlar os dados gravados no disco",
  	errada1_10 = "Arquivos",
  	errada2_10 = "Não faz nada de muito relevante para um sistema operacional",
  	errada3_10 = "É responsável por fazer o gerenciamento do hardware de forma com que o usuário final apenas interaja com uma tela bonita e insira comandos"

	inteiro questoesCorretas = 0, questoesRespondidas = 0, cont = 0
	logico  validOpcao = falso
	cadeia sair, opcao, jogar, fechar = "F"
  	funcao inicio(){
  		
  		escreva("*******************************************************\n")
  		escreva("************* QUIZ - PROJETO 2 - LEVEL 1 **************\n")
  		escreva("*******************************************************\n")

  		escreva("Deseja jogar o Quiz ? \n")
  		escreva("Digite: ( S ) - Sim | ( N ) - Não \n")
  		leia(jogar)

  		se(jogar == "S" ou jogar == "s"){
  			escreva("Leia o enunciado e responda as perguntas digitando o numero da resposta correta\n")
			escreva("Digite: ( A ) | ( B ) | ( C ) | ( D )\n")
		
  			faca{
  				
				iniciarQuiz()
			
			}enquanto(fechar == "V" e questoesRespondidas <= 10)
  		}senao se(jogar != "S" ou jogar != "s"){
  			escreva("Que pena, nos vemos na próxima!")
  		}
		
  	}

  	funcao iniciarQuiz(){
			
			se(questoesRespondidas == 0 e fechar == "F"){
				
				faca{
					
					escreva(primeira_pergunta + "\n")
					escreva("( A ) - " + correta_1 + "\n")
					escreva("( B ) - " + errada1_1 + "\n")
					escreva("( C ) - " + errada2_1 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")

				
					se(opcao == "A" ou opcao == "a"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "B" ou opcao == "b" ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 1 e fechar == "F"){

				faca{
					
					escreva(segunda_pergunta + "\n")
					escreva("( A ) - " + errada1_2 + "\n")
					escreva("( B ) - " + errada2_2 + "\n")
					escreva("( C ) - " + correta_2 + "\n")
					escreva("( D ) - " + errada3_2 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a" ou opcao == "B" ou opcao == "b"  ou opcao == "D" ou opcao == "d"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 2 e fechar == "F"){

				faca{
					
					escreva(terceira_pergunta + "\n")
					escreva("( A ) - " + errada1_3 + "\n")
					escreva("( B ) - " + errada2_3 + "\n")
					escreva("( C ) - " + errada3_3 + "\n")
					escreva("( D ) - " + correta_3 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "D" ou opcao == "d"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a" ou opcao == "B" ou opcao == "b"  ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 3 e fechar == "F"){

				faca{
					
					escreva(quarta_pergunta + "\n")
					escreva("( A ) - " + errada1_4 + "\n")
					escreva("( B ) - " + correta_4 + "\n")
					escreva("( C ) - " + errada2_4 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "B" ou opcao == "b"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a" ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 4 e fechar == "F"){

				faca{
					
					escreva(quinta_pergunta + "\n")
					escreva("( A ) - " + errada1_5 + "\n")
					escreva("( B ) - " + errada2_5 + "\n")
					escreva("( C ) - " + errada3_5 + "\n")
					escreva("( D ) - " + correta_5 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "D" ou opcao == "D"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a" ou opcao == "B" ou opcao == "b"  ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 5 e fechar == "F"){

				faca{
					
					escreva(sexta_pergunta + "\n")
					escreva("( A ) - " + correta_6 + "\n")
					escreva("( B ) - " + errada2_6 + "\n")
					escreva("( C ) - " + errada3_6 + "\n")
					escreva("( D ) - " + errada1_6 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "A" ou opcao == "a"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "D" ou opcao == "d" ou opcao == "B" ou opcao == "b"  ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 6 e fechar == "F"){

				faca{
					
					escreva(setima_pergunta + "\n")
					escreva("( A ) - " + errada1_7 + "\n")
					escreva("( B ) - " + errada2_7 + "\n")
					escreva("( C ) - " + errada3_7 + "\n")
					escreva("( D ) - " + correta_7 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "D" ou opcao == "d"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a" ou opcao == "B" ou opcao == "b"  ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 7 e fechar == "F"){

				faca{
					
					escreva(oitava_pergunta + "\n")
					escreva("( A ) - " + errada1_8 + "\n")
					escreva("( B ) - " + errada2_8 + "\n")
					escreva("( C ) - " + correta_8 + "\n")
					escreva("( D ) - " + errada3_8 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a" ou opcao == "B" ou opcao == "b"  ou opcao == "D" ou opcao == "d"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 8 e fechar == "F"){

				faca{
					
					escreva(nona_pergunta + "\n")
					escreva("( A ) - " + correta_9 + "\n")
					escreva("( B ) - " + errada1_9 + "\n")
					escreva("( C ) - " + errada2_9 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "A" ou opcao == "a"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "B" ou opcao == "b"  ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
			se(questoesRespondidas == 9 e fechar == "F"){

				faca{
					
					escreva(decima_pergunta + "\n")
					escreva("( A ) - " + errada3_10 + "\n")
					escreva("( B ) - " + errada1_10 + "\n")
					escreva("( C ) - " + errada2_10 + "\n")
					escreva("( D ) - " + correta_10 + "\n")
				
					leia(opcao)
				
					escreva("Você escolheu a alternativa " + opcao + "\n")
				
				
					se(opcao == "D" ou opcao == "d"){
						
						questoesRespondidas = questoesRespondidas + 1
						questoesCorretas = questoesCorretas + 1
						validOpcao = verdadeiro
						escreva("Alternativa Correta, parabéns! \n")
						
					}senao se(opcao == "A" ou opcao == "a"  ou opcao == "B" ou opcao == "b"  ou opcao == "C" ou opcao == "c"){
						
						questoesRespondidas = questoesRespondidas + 1
						validOpcao = verdadeiro
						escreva("Alternativa incorreta \n")
						
					}senao{
						escreva("Digite uma opção válida \n")
					}
				}enquanto(validOpcao == falso)
				
				sairQuiz()
				
			}
		
  	}

  	funcao sairQuiz(){

  		se(questoesRespondidas < 9){
  			escreva("Deseja continuar respondendo o Quiz ?")
  			escreva("( S ) - Sim | ( N ) - Não \n")
  			leia(sair)

  			se(sair == "N" ou sair =="n"){
  				fechar = "P"
  			}

			escreva("Quantidade de questoes respondidas  " + questoesRespondidas + " / " + 10 + "\n")
			escreva("Quantidade de certas respondidas  " + questoesCorretas + " / " + questoesRespondidas + "\n")
  			validOpcao = falso
  			
  			se(fechar == "P"){
  				se(questoesCorretas < 5){
  					escreva("Obrigado por participar, precisa melhorar, tente novamente!")
  				}senao se(questoesCorretas >= 5 e questoesCorretas <  7){
  					escreva("Obrigado por participar, você foi bem!")
  				}senao se(questoesCorretas >= 7 e questoesCorretas <  9){
  					escreva("Obrigado por participar, você foi muito bem!")
  				}senao se(questoesCorretas >= 9 e questoesCorretas < = 10){
  					escreva("Obrigado por participar, você foi Excelente!")
  				}
  			}
  		}senao{
  			escreva("Quantidade de questoes respondidas  " + questoesRespondidas + " / " + 10 + "\n")
			escreva("Quantidade de certas respondidas  " + questoesCorretas + " / " + questoesRespondidas + "\n")
  			se(questoesCorretas < 5){
  				escreva("Obrigado por participar, precisa melhorar, tente novamente!")
  			}senao se(questoesCorretas >= 5 e questoesCorretas <  7){
  				escreva("Obrigado por participar, você foi bem!")
  			}senao se(questoesCorretas >= 7 e questoesCorretas <  9){
  				escreva("Obrigado por participar, você foi muito bem!")
  			}senao se(questoesCorretas >= 9 e questoesCorretas < = 10){
  				escreva("Obrigado por participar, você foi Excelente!")
  			}
  		}
  		
  	}
    
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 13116; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */