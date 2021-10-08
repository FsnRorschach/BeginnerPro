programa
{
	inteiro  drinkR = 0, drinkA = 0, drinkS = 0, esc, total
	logico more = falso
	cadeia drink
	real result
	
	funcao inicio()
	{
		escreva("Escolha a bebida na vending machine \n")
		escreva("Refrigerante <==> R , Água <==> A , Suco <==> S \n")
		

		faca{

			escreva("Digite uma Letra referente a bebida: ")
			leia(drink)
			
			se(drink == "R" ou drink == "r")
			{
				drinkR += 1
				escreva("total de Refrigerantes: "+drinkR)
			}
			se(drink == "A" ou drink == "a")
			{
				drinkA += 1
				escreva("total de Refrigerantes: "+drinkA)
			}
			se(drink == "S" ou drink == "s")
			{
				drinkS += 1
				escreva("total de Refrigerantes: "+drinkS)
			}

			escreva("total de bebidas: " + (drinkR+drinkS+drinkA) +". \n" )

			
			escreva("Deseja escolher mais alguma bebida? digite 1 <==> Sim , 2 <==> Não \n")
			leia(esc)

			
			se(esc == 1)
			{
				more = verdadeiro
			}
			se(esc == 2)			
			{
				more = falso
			}
			
			
		}enquanto(more == verdadeiro )

		total = drinkR + drinkA + drinkS

		se (drinkR > 0)
		{
			result = (drinkR / total) * 100
			escreva("A quantidade percentual de Refrigerante é: " + result +"%. \n")
		}
		se (drinkA > 0)
		{
			result = (drinkA / total) * 100
			escreva("A quantidade percentual de Água é: " + result +"%. \n")
		}
		se (drinkS > 0)
		{
			result = (drinkS / total) * 100
			escreva("A quantidade percentual de Suco é: " + result +"%. \n")
		}
		

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 658; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */