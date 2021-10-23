programa
{
	cadeia nome
	inteiro verif, cont = 0, generoM = 0, generoF = 0
	
	funcao inicio()
	{
		escreva("Calculadora de humanos \n")
		faca{
			escreva("Digite seu nome : ")
			leia(nome)

			escreva("Digite ( 1 ) Masculino - ( 2 ) Feminino \n")
			leia(verif)
			
			se(verif == 1){
				generoM += 1
				cont += 1
				escreva(nome + " o seu gênero é Masculino \n")
			}senao se(verif == 2){
				generoF += 1
				cont += 1
				escreva(nome + " o seu gênero é Feminino \n")
			}senao se(verif != 1 ou verif != 2 ){
				escreva("Digite ( 1 ) Masculino ou ( 2 ) Feminino \n")
			}
			
		}enquanto(cont < 5)
			escreva("A quantidade de pessoas do gênero masculino é :" + generoM + "\n")	
			escreva("A quantidade de pessoas do gênero feminino é :" + generoF + "\n")	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 368; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */