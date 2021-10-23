programa
{
	real radius, diameter, lengthDiam, circunference
	cadeia name
	
	funcao inicio()
	{
		escreva("Olá seja bem vindo \n")
		escreva("Digite o seu nome: ")		
		leia(name)

		escreva("Digite o raio: ")
		leia(radius)

		diameter = radius * 2
		lengthDiam = 2*3.14*radius
		circunference = 3.14*radius*radius

		escreva(name +" o resultado do diametro é: " + diameter + "\n ")
		escreva(name +" o resultado do comprimento é: " + lengthDiam + "\n ")
		escreva(name +" o resultado do área da circunferencia é: " + circunference + "\n ")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 543; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */