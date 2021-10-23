programa
{
	inclua biblioteca Matematica --> mat
	real preco, mediaCarro, km, dias, result = 0
	funcao inicio()
	{
		escreva("Olá Bem Vindo a Calculadora de media de combustível \n")
		escreva("Digite o valor do combustivel : R$ ")
		leia(preco)

		escreva("Digite a média de consumo do carro  KM/L: ")
		leia(mediaCarro)

		escreva("Digite quantos KM anda por dia : ")
		leia(km)

		escreva("Digite quantos dias por semana anda com o carro : ")
		leia(dias)

		result = (km / mediaCarro) * preco
		escreva("O gasto diário com o carro é : R$ "  + mat.arredondar(result, 2) + "\n")

		result = result * dias
		escreva("O gasto semanal com o carro é : R$ " + mat.arredondar(result, 2) + "\n")

		result = result * 4
		escreva("O gasto mensal com o carro é : R$ " + mat.arredondar(result, 2) + "\n")

		result = result * 12
		escreva("O gasto anual com o carro é : R$ " + mat.arredondar(result, 2) + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 298; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */