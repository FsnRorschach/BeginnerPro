programa
{
	inteiro lado1, lado2, lado3
	funcao inicio()
	{
		escreva("Calculadora de triangulos \n")
		
		escreva("Digite o valor do 1º lado do triangulo : ")
		leia(lado1)

		escreva("Digite o valor do 2º lado do triangulo : ")
		leia(lado2)

		escreva("Digite o valor do 3º lado do triangulo : ")
		leia(lado3)

		se(lado1 == lado2 e lado2 == lado3){
			escreva("O triangulo formado é um Equilátero")
		}senao se(lado1 == lado2 ou lado2 == lado3 ou lado3 == lado1){
			escreva("O triangulo formado é um Isóceles")
		}senao se(lado1 != lado2 e lado2 != lado3){
			escreva("O triangulo formado é um Escaleno")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 560; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */