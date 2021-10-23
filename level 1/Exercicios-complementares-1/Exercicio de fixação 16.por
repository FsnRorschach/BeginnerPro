programa
{
	inclua biblioteca Matematica --> num
	
	real numberA, numberB, numberC, numberD, numberF, result
	
	
	funcao inicio()
	{
		escreva("Resolva o Algoritmo - X = (D + F) / 2 \n")
		escreva("Onde D = (A + B)^2 e F = (B + C)^2 \n")
		escreva("Digite o valor de A: ")
		leia(numberA)
		escreva("Digite o valor de B: ")
		leia(numberB)
		escreva("Digite o valor de C: ")
		leia(numberC)

		potencia()
		msg()
	}

	funcao potencia(){
		numberD =  num.potencia((numberA + numberB), 2)
		numberF = num.potencia((numberB + numberC), 2)
		escreva("resultado da funcao potencia D = " + numberD + "\n")
		escreva("resultado da funcao potencia F = " + numberF + "\n")
		algoritmo()
	}

	funcao algoritmo(){
		result = num.potencia((numberD + numberF), 2)
		escreva("resultado da funcao algoritmo:  " + result + "\n")
	}

	funcao msg(){
		escreva("O resultado do Algoritmo é X = " + result)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 412; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */