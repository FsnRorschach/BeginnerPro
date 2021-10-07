programa
{
	inclua biblioteca Texto --> text
	
	cadeia phrase
	inteiro lengthCaract
	
	funcao inicio()
	{
		escreva("Olá seja bem vindo \n")
		escreva("Digite o seu uma frase ou palavra: ")		
		leia(phrase)

		lengthCaract = text.numero_caracteres(phrase) 

		para (inteiro contador = 0; contador < lengthCaract; contador += 1) { 

			escreva(text.obter_caracter(phrase, contador) + "\n")
		
    		} 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 61; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */