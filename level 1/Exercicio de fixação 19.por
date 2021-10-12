programa
{
	inclua biblioteca Matematica --> mat
	real salario, result
	
	funcao inicio()
	{
		escreva("Bem vindo ao calculador de Holerite \n")
		escreva("Digite o valor do seu salário: \n")
		leia(salario)

		aumento()
		desconto()
		
	}

	funcao aumento(){
		result = salario + (salario * 0.13)
		mat.arredondar(result, 2)
		escreva("O seu novo salario bruto com aumento de 13% é : R$ " + result + "\n")
	}

	funcao desconto(){
		result = result - (result * 0.07)
		mat.arredondar(result, 2)
		escreva("O seu novo salario liquido com desconto de 7% é : R$ " + result + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 233; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */