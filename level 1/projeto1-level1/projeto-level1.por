programa
{
	
	inteiro numero, resultado = 0, sair
	
	funcao inicio()
	{
		escreva("***************** Projeto Level 1 *****************\n")

		escreva("******************** Tabuada **********************\n")

		faca{
			escreva("Digite o numero que deseja mostrar a tabuada : ")
			leia(numero)

			tabuada()

			se( resultado % 2 == 0 ){
				escreva("Parabéns sua tabuada do " + numero + " está correta\n")
				escreva("Deseja continuar? (1)-Continuar | (2)-Sair ")
				leia(sair)
			}
		}enquanto(sair != 2)
		
	}

	funcao tabuada(){
		para(inteiro i=0; i <= 10; i++){
			resultado = i * numero
			escreva(numero + " x " + (i) + " = " + resultado + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 485; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */