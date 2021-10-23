programa
{
	real refrigerante = 0.00 , bombom = 0.00 , hamburguer = 0.00, resultado =0.00
	inteiro quant, prod
	logico sair = falso
	cadeia sair1
	
	funcao inicio()
	{
		faca{
			escreva("Digite os produtos que deseja comprar\n")
			escreva("Digite: 1 - Refrigerante / 2 - Hamburguer / 3 - Bombom \n")
			leia(prod)
			escreva("Digite a quantidade do produto escolhido: ")
			leia(quant)

			escolha(prod){

			caso 1: 
				resultado += 4.00 * quant						
				pare
			caso 2:
				resultado += 5.50 * quant
				pare
			caso 3:
				resultado += 2.50 *quant
				pare
			caso contrario:
				escreva("Digite um valor produto cadastrado ou ( S ) para sair  ou qualquer tecla para continuar \n")
				leia(sair1)
			pare
			}

			se(sair1 == "S" ou sair1 == "s"){
				sair = verdadeiro
			}
			
		}enquanto(sair == falso)
		
		escreva("O valor total da conta é: " + resultado)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 684; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */