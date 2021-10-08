programa
{
	cadeia name
	inteiro age
	
	funcao inicio()
	{
		escreva("Classificador de faixa etária \n")
		escreva("Digite seu nome: ")
		leia(name)
		escreva("Digite a sua idade: ")
		leia(age)

		se(age >= 5 e age <= 7)
		{
			escreva("O atleta está na faixa Infantil I")
		}senao se(age >= 8 e age <= 11)
		{
			escreva("O atleta está na faixa Infantil II")
		}senao se(age >= 12 e age <= 14)
		{
			escreva("O atleta está na faixa Juvenil I")
		}senao se(age >= 15 e age <= 18)
		{
			escreva("O atleta está na faixa Juvenil II")
		}senao se(age >= 19 e age <= 30)
		{
			escreva("O atleta está na faixa Sênior")
		}senao se(age <5 ou age > 30)
		{
			escreva("O atleta está fora da faixa etária para esta classificação")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 709; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */