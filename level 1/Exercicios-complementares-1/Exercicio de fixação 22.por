programa
{
	inclua biblioteca Matematica-->mat
	real totalConta, amigo1_2, amigo3, amigo4_5
	
	funcao inicio()
	{
		escreva("Bem vindo ao Restaurante Mineiro \n")
		
		escreva("Digite o valor total da sua conta R$ ")
		leia(totalConta)

		amigo1_2 = totalConta * 0.25
		mat.arredondar(amigo1_2, 2)
		escreva("O valor a ser pago por Amigo 1 e Amigo 2 é de 25 % do total da conta R$ " + amigo1_2 + "\n")

		amigo3 = totalConta * 0.10
		mat.arredondar(amigo3, 2)
		escreva("O valor a ser pago por Amigo 3 é de 10 % do total da conta R$ " + amigo3 + "\n")

		amigo4_5 = totalConta * 0.65
		mat.arredondar(amigo4_5, 2)
		escreva("O valor a ser pago por Amigo 4 e Amigo 5 é de 65 % do total da conta R$ " + amigo4_5 + "\n")

		escreva("Amigo 1 pagará um valor de R$ " + mat.arredondar((amigo1_2 / 2), 2) + "\n")
		escreva("Amigo 2 pagará um valor de R$ " + mat.arredondar((amigo1_2 / 2), 2) + "\n")
		escreva("Amigo 3 pagará um valor de R$ " + mat.arredondar(amigo3, 2) + "\n")
		escreva("Amigo 4 pagará um valor de R$ " + mat.arredondar((amigo4_5 / 2), 2) + "\n")
		escreva("Amigo 5 pagará um valor de R$ " + mat.arredondar((amigo4_5 / 2), 2) + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1138; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = funcao;
 */