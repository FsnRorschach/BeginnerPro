programa
{
	cadeia name
	real peso, altura, result
	funcao inicio()
	{
		escreva("Calculadora IMC \n")
		escreva("Qual o seu nome? \n")
		leia(name)

		escreva("Digite o seu peso \n")
		leia(peso)

		escreva("Digite a sua altura \n")
		leia(altura)

		result = peso / (altura * altura) 

		se(result < 18.5){
			escreva("O seu IMC é " + result + ", menor que 18.5, você está classificado como : Magro \n")
		}senao se(result >= 18.5 e result < 25){
			escreva("O seu IMC é " + result + ", a partir de 18.5 até 25, você está classificado como : Normal \n")
		}senao se(result >= 25 e result < 30){
			escreva("O seu IMC é " + result + ", a partir de 25 até 30, você está classificado como : Obeso \n")
		}senao se(result >= 30){
			escreva("O seu IMC é " + result + ", a partir de 30, você está classificado como : Obeso Morbido \n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 268; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */