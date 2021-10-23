programa
{
	inclua biblioteca Matematica-->mat
	
	cadeia nome
	inteiro cargo
	real horas, result
	funcao inicio()
	{
		escreva("Calculadora de Salario / hora \n")

		escreva("Digite seu nome : ")
		leia(nome)

		escreva("Digite o seu cargo: ( 1 ) - Estagiário | ( 2 ) - Júnior | ( 3 ) - Pleno | ( 4 ) - Sênior \n")
		leia(cargo)

		escreva("Digite a quantidade de horas trabalhadas : ")
		leia(horas)


		se(cargo == 1){
			result = horas * 10
		}
		se(cargo == 2){
			result = horas * 15
		}
		se(cargo == 3){
			result = horas * 20
		}
		se(cargo == 4){
			result = horas * 25
		}
		
		escreva(nome + " o valor a receber pelas suas " + horas + " trabalhadas é R$ " + result + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 401; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */