programa
{
	cadeia name
	inteiro grade1, grade2, grade3, result
	
	funcao inicio()
	{
		escreva("Olá seja bem vindo \n")
		escreva("Digite o seu nome: ")
		leia(name)

		escreva("Digite a primeira nota: ")
		leia(grade1)

		escreva("Digite a segunda nota: ")
		leia(grade2)

		escreva("Digite a terceira notas: ")
		leia(grade3)

		result = (grade1 + grade2 + grade3)/3
		
		se(result < 6)
		{
			escreva("Resultado da media é: " + result + ", "+ name + " você foi reprovado, até o proxima tentativa.")
		}senao
		{
			escreva("Resultado da media é: " + result + ", "+ name + " parabéns você foi aprovado.")
		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 578; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */